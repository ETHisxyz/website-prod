## Project Summary
This project is a high-fidelity web template for an event website, originally based on the GitHub Universe 2025 landing page and now reworked into a Neo-Brutalist aesthetic. It features thick black borders, high-contrast colors, and hard shadows.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS 4
- Components: Lucide React (icons)
- Animations: CSS animations, custom floating effects

## Architecture
- `src/app`: Application routes and layout
- `src/components/sections`: Reusable sections (Hero, Recap, Sessions, Speakers, etc.)
- `src/lib`: Utility functions

## User Preferences
- Use functional components.
- No comments unless requested.
- **Style Preference**: Neo-Brutalist (thick borders, vibrant backgrounds, neo-shadows).

## Project Guidelines
- Keep sections as individual components in `src/components/sections`.
- Use `"use client"` for components requiring interactivity or `styled-jsx`.
- **Styling Guidelines**:
  - Border width: 4px (or 2px for smaller elements).
  - Border color: #000000.
  - Shadows: Hard black shadows (e.g., `box-shadow: 4px 4px 0px 0px #000000`).
    - Typography: Heavy weights (Black/900), uppercase for headers.
    - Colors: Primary (#ffde03), Muted (#f3f4f6), White (#ffffff). Simplified palette focused on high-contrast Yellow/Black/White.

## Common Patterns
- Thick black borders separating all major sections and components.
- Large, bold uppercase typography with high contrast.
- Buttons with "neo-shadow" hover and active states.
- Grid-based layouts with visible border separators.
