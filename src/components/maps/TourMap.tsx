import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define the location type to match the existing data structure
interface TourLocation {
  id: string;
  name: string;
  coords: {
    lat: number;
    lng: number;
  };
  description: string;
}

interface TourMapProps {
  locations: TourLocation[];
  selectedLocation: string | null;
  onLocationSelect: (locationId: string) => void;
}

const TourMap: React.FC<TourMapProps> = ({ 
  locations, 
  selectedLocation, 
  onLocationSelect 
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});

  // Initialize map when component mounts
  useEffect(() => {
    // Guard against server-side rendering
    if (typeof window === 'undefined') return;
    
    // Fix the Leaflet icon paths (common issue with bundlers)
    fixLeafletIconPaths();
    
    // Only initialize the map once
    if (mapContainerRef.current && !mapInstanceRef.current) {
      // Find center point from all locations
      const centerLat = locations.reduce((sum, loc) => sum + loc.coords.lat, 0) / locations.length;
      const centerLng = locations.reduce((sum, loc) => sum + loc.coords.lng, 0) / locations.length;
      
      // Create map
      const map = L.map(mapContainerRef.current, {
        center: [centerLat, centerLng],
        zoom: 13,
        layers: [
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          })
        ]
      });
      
      // Create a polyline connecting all locations in order
      const points = locations.map(loc => [loc.coords.lat, loc.coords.lng] as [number, number]);
      const routeLine = L.polyline(points, { 
        color: '#7D5A3C', 
        weight: 4, 
        opacity: 0.7,
        dashArray: '10, 5',
      }).addTo(map);
      
      // Add markers for each location
      locations.forEach((location, index) => {
        const markerColor = location.id === selectedLocation ? '#C4956A' : '#7D5A3C';
        
        // Create custom icon with number
        const numberIcon = L.divIcon({
          className: 'custom-number-icon',
          html: `<div style="
            background-color: ${markerColor};
            color: white;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 14px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
            border: 2px solid white;
          ">${index + 1}</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });
        
        // Create and add marker
        const marker = L.marker([location.coords.lat, location.coords.lng], {
          icon: numberIcon,
          title: location.name,
          riseOnHover: true,
        }).addTo(map);
        
        // Add popup with location info
        marker.bindPopup(`
          <div style="min-width: 200px;">
            <h4 style="margin: 0 0 5px; font-weight: bold;">${location.name}</h4>
            <p style="margin: 0;">${location.description}</p>
          </div>
        `);
        
        // Add click handler
        marker.on('click', () => {
          onLocationSelect(location.id);
        });
        
        // Store marker reference for later use
        markersRef.current[location.id] = marker;
      });
      
      // Save map instance
      mapInstanceRef.current = map;
      
      // Auto-fit bounds to show all markers
      const bounds = L.latLngBounds(locations.map(loc => [loc.coords.lat, loc.coords.lng]));
      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 14
      });
    }
    
    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markersRef.current = {};
      }
    };
  }, [locations, selectedLocation, onLocationSelect]);
  
  // Handle selected location changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;
    
    // Update all markers to reflect selection state
    Object.entries(markersRef.current).forEach(([locId, marker]) => {
      const isSelected = locId === selectedLocation;
      
      // Get the index of this marker
      const index = locations.findIndex(loc => loc.id === locId);
      
      // Update marker appearance based on selection
      const markerColor = isSelected ? '#C4956A' : '#7D5A3C';
      
      // Create updated icon
      const updatedIcon = L.divIcon({
        className: 'custom-number-icon',
        html: `<div style="
          background-color: ${markerColor};
          color: white;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.3);
          border: 2px solid white;
          transition: all 0.3s ease;
          transform: ${isSelected ? 'scale(1.2)' : 'scale(1)'}
        ">${index + 1}</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });
      
      // Update the marker
      marker.setIcon(updatedIcon);
      
      // If selected, open popup and pan to it
      if (isSelected) {
        marker.openPopup();
        map.panTo(marker.getLatLng());
      } else {
        marker.closePopup();
      }
    });
  }, [selectedLocation, locations]);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-[400px] rounded-lg overflow-hidden shadow-md relative"
      style={{ zIndex: 0 }}
    />
  );
};

// Helper function to fix Leaflet icon path issues
function fixLeafletIconPaths() {
  // Use type assertion to avoid TypeScript errors
  const DefaultIcon = L.Icon.Default as any;
  
  // Reset the default icon paths
  DefaultIcon.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  });
}

export default TourMap; 