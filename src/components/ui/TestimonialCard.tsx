import React from "react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: string;
  testimonial: string;
  type?: 'google' | 'trustpilot';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  rating,
  testimonial,
  type = 'google'
}) => {
  // Get consistent random profile image based on name and type
  const getProfileImageUrl = (name: string, type: string) => {
    // Create a simple hash from the name to get a consistent but semi-random number
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = ((hash << 5) - hash) + name.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
    }
    
    // Use absolute value and modulo to get a number between 1 and 99
    const imageId = Math.abs(hash % 99) + 1;
    
    // Alternate between male and female based on the hash
    const gender = imageId % 2 === 0 ? 'men' : 'women';
    
    // Return a random user image
    return `https://randomuser.me/api/portraits/${gender}/${imageId}.jpg`;
  };

  // Convert rating from string to number and handle non-numeric inputs
  const numericRating = parseFloat(rating) || 0;
  
  // Create an array of 5 slots for stars
  // 2 = full star, 1 = half star, 0 = empty star
  const stars = Array(5).fill(0).map((_, index) => {
    if (index < Math.floor(numericRating)) {
      return 2; // Full star
    } else if (index === Math.floor(numericRating) && numericRating % 1 >= 0.5) {
      return 1; // Half star
    } else {
      return 0; // Empty star
    }
  });

  // Get star colors based on review type
  const starColor = type === 'google' ? '#FBBC05' : '#00B67A';
  const avatarBgColor = type === 'google' ? 'bg-blue-100' : 'bg-[#E6F7F1]';

  // Get the user's initial (first letter of their name)
  const initial = name.charAt(0).toUpperCase();

  // Generate profile image URL based on name and type
  const profileImageUrl = getProfileImageUrl(name, type);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 h-full flex flex-col border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-3 md:gap-4">
        {/* Profile picture */}
        <div className={`relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-sm ${avatarBgColor} flex items-center justify-center text-lg font-medium flex-shrink-0 border border-white/80`}>
          <img 
            src={profileImageUrl}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // If image fails to load, show the initial instead
              const target = e.currentTarget;
              target.style.display = 'none';
              if (target.nextElementSibling) {
                target.nextElementSibling.classList.remove('hidden');
              }
            }}
          />
          <span className="hidden absolute inset-0 flex items-center justify-center">{initial}</span>
        </div>

        {/* Name and location */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-kalahari-charcoal text-sm md:text-base truncate">{name}</h3>
          <p className="text-xs md:text-sm text-gray-500 truncate">{location}</p>
        </div>

        {/* Platform logo */}
        <div className="flex-shrink-0">
          {type === 'google' ? (
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#00B67A"/>
            </svg>
          )}
        </div>
      </div>
      
      {/* Star Rating */}
      <div className="mt-2 md:mt-3 flex items-center">
        {stars.map((starType, i) => {
          // Generate a unique ID for each star's gradient
          const gradientId = `star-gradient-${name.replace(/\s+/g, '-').toLowerCase()}-${i}`;
          
          return (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              {starType === 1 && (
                <defs>
                  <linearGradient id={gradientId} x1="0" y1="0" x2="100%" y2="0">
                    <stop offset="50%" stopColor={starColor} />
                    <stop offset="50%" stopColor="#D1D5DB" />
                  </linearGradient>
                </defs>
              )}
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill={
                  starType === 2 
                    ? starColor 
                    : starType === 1 
                      ? `url(#${gradientId})` 
                      : "#D1D5DB"
                }
              />
            </svg>
          );
        })}
        <span className="ml-1 text-xs md:text-sm font-medium text-gray-700">{rating}</span>
      </div>

      {/* Testimonial - Fixed clipping issues */}
      <div className="mt-3 md:mt-4 flex-1 overflow-hidden">
        <p className="text-kalahari-charcoal italic text-xs md:text-sm">
          {testimonial}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
