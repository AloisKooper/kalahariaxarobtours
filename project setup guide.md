Updated Project Setup Guide
Overview
This guide provides exact steps to set up Mr. Rooi’s tour guide website using Vite with TypeScript. The AI must follow these instructions verbatim and stop if anything is unclear. No assumptions or deviations are allowed.

Prerequisites
PowerShell: Must be installed and used exclusively.
PNPM: Must be installed globally (npm install -g pnpm).
MCP Server: Must be pre-installed and functional.
Node.js: Version 18.x or higher.
Step-by-Step Setup
Initialize the Vite Project with TypeScript
Open PowerShell.
Navigate to a user-specified directory (e.g., cd C:\Users\YourUsername\Projects). Ask for the exact path if not provided.
Run:
text

Collapse

Wrap

Copy
pnpm create vite mr-rooi-tour --template vanilla-ts
Navigate into the project:
text

Collapse

Wrap

Copy
cd mr-rooi-tour
Install dependencies:
text

Collapse

Wrap

Copy
pnpm install
Do not proceed unless instructed.
Install Additional Dependencies
Install Framer Motion only if explicitly told: "Install Framer Motion." Use:
text

Collapse

Wrap

Copy
pnpm add framer-motion
Do not install anything else without written permission.
Set Up Fonts Globally
Add to index.html only when instructed:
html

Collapse

Wrap

Copy
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@600&family=Plus+Jakarta+Sans:wght@300;400&display=swap">
Add to src/style.css only when instructed:
css

Collapse

Wrap

Copy
:root {
  --heading-font: "Source Serif 4", serif;
  --body-font: "Plus Jakarta Sans", sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--heading-font);
  color: #000000;
  font-weight: 600;
}

body {
  font-family: var(--body-font);
  color: #000000;
  font-weight: 300;
}
Integrate MCP Server Output
Extract code from the MCP server only when directed.
Place extracted code in the src folder only when instructed.
Handling Script Files:
If MCP outputs JavaScript files (.js), rename them to .ts and ensure they are valid TypeScript.
If MCP outputs HTML files with inline JavaScript, extract the JavaScript into separate .ts files and import them in the HTML with <script type="module" src="/path/to/file.ts"></script>.
HTML files remain .html, as they are not renamed to .ts. Only script content is converted to TypeScript.
Do not modify code unless explicitly instructed.
Configure Breakpoints
Add responsive styles only when directed, using:
Mobile: 0px - 767px.
Tablet: 768px - 1023px.
Desktop: 1024px and above.
Add Framer Animations
Use Framer Motion only when explicitly instructed (e.g., "Add a fade-in animation to the title").
Run the Project
Start the server only when told:
text

Collapse

Wrap

Copy
pnpm run dev
Verify at http://localhost:5173 only after confirmation.
Strict Notes
No Assumptions: The AI must not assume project structure beyond MCP output and user instructions.
Pause and Ask: If unclear, say: "I need clarification on [specific step]. Please provide exact instructions."
Stick to the Script: Do not proceed beyond current instructions. Wait for "next" or further guidance.
MCP Output Handling: Ensure all script files are TypeScript (.ts). Convert JavaScript to TypeScript as needed, but keep HTML files as .html.