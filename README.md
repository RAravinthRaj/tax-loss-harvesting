# Tax Loss Harvesting

A responsive React + TypeScript tax loss harvesting interface built to match the provided KoinX-style UI and interaction flow, now enhanced with a light/dark mode theme system.

## Features

- Pre-harvesting and after-harvesting capital gains cards
- Holdings table with row selection, sorting, and select-all support
- Real-time post-harvesting calculations based on selected holdings
- Light mode and Dark mode toggling via ThemeProvider
- Redux-managed API/data state
- Context API for page UI state like disclaimer expansion and `View all`
- Mock API layer backed by local JSON data (promises simulating network calls)
- Loader, error state, tooltips, and mobile-friendly layout

## Tech Stack

- React
- TypeScript
- Redux Toolkit
- Context API
- Styled-components
- Vite

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd tax-loss-harvesting
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open in browser:**
   Navigate to `http://localhost:5173` to view the application.

## Screenshots

*Note: Add screenshots of the interface here.*
- **Dark Mode View:** `![Dark Mode](./public/screenshot-dark.png)`
- **Light Mode View:** `![Light Mode](./public/screenshot-light.png)`

## Assumptions

- **Mock API Data:** The mock APIs respond with local JSON structure and simulate network delays using Promises rather than running a fully separate local mock server process.
- **Capital Gains Formula:** When a selected asset has a negative gain, processing it adds strictly to the *losses* pool, increasing total losses. If it has a positive gain, it strictly adds to the *profits* pool. Net is calculated strictly by `Profits - Losses`.
- **Amount To Sell Formats:** As per the assignment logic, when a holding is selected, its "Amount to Sell" gets populated entirely with the `totalHolding` value to simulate a simple full liquidation on select.
- **Theming:** The application utilizes styled-components natively with a dual Light/Dark fallback to maintain aesthetics beyond standard assignment requirements.
