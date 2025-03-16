Updated Project Rules
Overview
This document outlines the non-negotiable rules for developing Mr. Rooi’s tour guide website, a simple, frontend-only static site built with Vite and TypeScript. The AI will use code extracted from Figma via an MCP server and must follow these rules precisely. Any deviation is strictly forbidden.

Frameworks and Tools
Vite: The only permitted build tool and development server. Do not use Next.js, React frameworks, or any alternatives.
TypeScript: Use TypeScript exclusively for all script files. All script files must use the .ts extension. JavaScript (.js) files are not allowed.
Package Manager: Use PNPM exclusively. Do not install packages unless explicitly instructed in writing.
Terminal: Use PowerShell for all commands. No other terminals are allowed.
MCP Server: Use the pre-installed MCP server to extract Figma designs into code. The extracted code must:
Be 100% identical to the Figma designs in appearance and structure.
Have any JavaScript code converted to TypeScript (e.g., rename .js to .ts and ensure it’s valid TypeScript).
Be used as-is unless explicitly directed to modify it.
Cursor AI: Use as the development environment to integrate MCP-extracted code, but only as instructed.
Animations: Use Framer Motion for animations, and no other libraries. Do not add animations unless explicitly directed.
Fonts
Headings: Use "Source Serif 4".
Color: Black (#000000).
Weight: 600.
Apply globally via CSS.
Body Text: Use "Plus Jakarta Sans".
Color: Black (#000000).
Weight: 300 or 400 (lighter than headings).
Apply globally via CSS.
Mobile Responsiveness
Implement exactly three breakpoints:
Mobile: 0px - 767px.
Tablet: 768px - 1023px.
Desktop: 1024px and above.
Use CSS media queries or Vite-compatible CSS-in-JS, but only when instructed.
Ensure the design matches the Figma output exactly at each breakpoint. Do not adjust layouts unless directed.
Code Standards
This is a static, frontend-only site. No backend code is permitted.
Organize code into reusable components only if explicitly instructed. Otherwise, leave MCP-extracted code unchanged.
Use clean, modular CSS (e.g., CSS Modules or Tailwind) only when directed.
Do not create files, directories, or components without explicit, written permission.
Handling MCP Server Output
If the MCP server outputs JavaScript files (.js), rename them to .ts and ensure they are valid TypeScript.
If the MCP server outputs HTML files with inline JavaScript, extract the JavaScript into separate .ts files and import them in the HTML using <script type="module" src="/path/to/file.ts"></script>.
HTML files themselves remain .html, as they are markup files and cannot be renamed to .ts. Only script content is converted to TypeScript.
Permissions and Deviations (Strict Enforcement)
The AI must not deviate from these rules or take any action not explicitly stated in writing.
Forbidden Actions (Unless Explicitly Instructed):
Installing packages.
Creating components, files, or directories.
Modifying project structure.
Refactoring or optimizing code.
Adding features, styles, or animations.
Mandatory Confirmation Process:
Before performing any action not clearly outlined, the AI must:
Pause execution.
Ask: "I am about to [describe action]. This is not explicitly stated in the rules or prior instructions. Please confirm if I should proceed or provide further guidance."
Wait for a "yes" or "no" response.
If Unsure:
Stop and say: "I am unsure how to proceed with [specific task]. Please provide explicit instructions."
Do not guess or improvise.
Consequences of Non-Compliance
Any unauthorized action violates these rules and undermines the project. These rules are absolute.