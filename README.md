This Next.js mini project implements the Holy Grail layout with pure CSS: a 60px full-width header, three equal-height columns with 100px fixed sidebars and a fluid center, and a 100px full-width footer anchored via a flex column layout (min-height: 100vh). Features include semantic landmarks, no JavaScript, minimal markup, and compatibility with both App and Pages Router. The center column uses min-width: 0 to prevent overflow; styling is organized via class hooks; widths/heights are easily adjustable, with optional media queries for responsiveness.

## Getting Started

Run the development server:

```bash
pnpm dev
```