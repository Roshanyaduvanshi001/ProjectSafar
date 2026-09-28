# SAFAR — Smart Travel Companion

## Overview

SAFAR is a smart mobile travel companion prototype designed to help users plan, manage, and track their complete journey from one place. Designed specifically for Indian travel scenarios, SAFAR guides travelers through trip planning, customization, package selection, payment simulation, live journey tracking, AI assistance, emergency SOS, budget tracking, and post-trip review.

## Current Status

Frontend prototype completed through Phase 8.

## Features

The application includes the following fully integrated interactive features:

- **Set My Safar Workflow**:
  - **Destination Selection**: Pick origin, destination, date, and preferred time.
  - **Purpose Selection**: Customize options based on travel goals (Interview, Business, Vacation, Family, Medical).
  - **Journey Details**: Transport mode, train/flight booking status, and company/meeting location.
  - **Traveller Details**: Personal identification, Aadhaar upload simulation, and emergency contact details.
  - **Personalization**: Budget preferences, stay type, local transit, and special requirements.
  - **Package Selection**: Choose from Basic, Standard, and Premium Safar companion packages.
  - **Booking Review**: Itemized price breakdown with promo code (`SAFAR100`) support.
  - **Prototype Payment Flow**: UPI, Card, Net Banking, and Wallet payment options.
  - **Payment Success**: Verified receipt generation with PNR and booking reference numbers.
  - **Agent Assignment**: Meet your assigned 24x7 Safar travel companion (Arjun Sharma).

- **My Safar Journey Management Hub**:
  - **Dashboard Summary**: Real-time journey overview (Kolkata → Delhi, 20 May 2026, 10:30 AM, PNR: 2458901234, Status: LIVE) and 6-stage journey timeline.
  - **Live Journey**: Real-time progress timeline tracking and stage status updates.
  - **Stay Details**: Hotel XYZ reservation info, check-in/out timings, inclusions, and desk support hotline.
  - **Schedule**: Hour-by-hour interactive day itinerary with activity completion toggles.
  - **Documents Vault**: Encrypted storage simulation for train tickets, hotel vouchers, and identity proofs.
  - **Emergency SOS**: One-touch hold SOS trigger with simulated emergency alerts to agent and family contacts.
  - **Safar AI**: Prototype AI travel assistant with preset queries and smart trip recommendations.
  - **Expenses Tracker**: Categorized budget manager (Food, Transport, Hotel, Shopping) with remaining balance indicator.
  - **Explore Nearby**: Filterable map guide for nearby food, cafes, ATMs, hospitals, and attractions in Connaught Place, Delhi.

- **Account & System**:
  - **Profile**: Personal information, travel stats, and account shortcuts.
  - **Alerts**: Real-time travel notifications and safety updates.

## Technology Stack

Built with modern web technologies:

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS & Vanilla CSS
- **Routing**: React Router v6
- **Icons**: Lucide React
- **State Management**: React Context API (`BookingContext`, `JourneyContext`, `AuthContext`, `ExpenseContext`)

## Run Locally

Clone the repository and install dependencies:

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

## Production Build

To build the production bundle and verify type checking:

```bash
npm run build
```

To preview the built production app:

```bash
npm run preview
```
