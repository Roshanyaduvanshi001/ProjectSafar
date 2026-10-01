# SAFAR — Smart Travel Companion

## Overview

**SAFAR** (*"Set My Safar"*) is a smart mobile travel companion designed to guide travelers through complete journeys across Indian travel scenarios. SAFAR combines trip discovery, purpose-driven customization, multi-step booking, secure payment simulation, live stage-by-stage journey tracking, stay and schedule management, an encrypted document vault, an interactive emergency SOS trigger, AI travel assistance, and categorized expense tracking across 24 cohesive screens.

---

## Project Structure

The project is structured as a full-stack monorepo separating the frontend, planned backend, and architectural documentation:

```
ProjectSafar/
│
├── frontend/                     # Client application (React 18 + Vite 6 + Tailwind CSS)
│   ├── src/                      # Source code (components, context, pages, types, etc.)
│   ├── public/                   # Static assets & icons
│   ├── package.json              # Frontend package manifest & scripts
│   ├── vite.config.ts            # Vite bundler configuration
│   ├── tsconfig.json             # TypeScript compiler configuration
│   ├── tailwind.config.js        # Design system & color tokens
│   └── ...
│
├── backend/                      # Server application (Planned for Phase 11)
│   └── README.md                 # Backend roadmap & architecture overview
│
├── docs/                         # Project specifications & architecture blueprints
│   ├── SAFAR_SPEC.md             # Functional product specification (24 screens)
│   ├── SAFAR_ARCHITECTURE.md     # Frontend architecture & UI design system
│   └── SAFAR_BACKEND_ARCHITECTURE.md # Backend architecture & monorepo migration plan
│
├── .gitignore                    # Monorepo gitignore rules
├── package.json                  # Root npm scripts
└── README.md                     # Project overview & running instructions
```

---

## Current Status

- **Frontend**: Prototype completed through Phase 8 (all 24 screens fully interactive and integrated with React Context state).
- **Monorepo Migration**: Phase 10.5 completed (frontend moved to `frontend/`, documentation consolidated in `docs/`).
- **Backend**: Phase 10 architecture and data modeling finalized in [docs/SAFAR_BACKEND_ARCHITECTURE.md](file:///e:/Safar/docs/SAFAR_BACKEND_ARCHITECTURE.md). Implementation will begin in Phase 11.

---

## Technology Stack

### Frontend (Current)

- **Framework**: React 18
- **Language**: TypeScript 5.7
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS & Custom Design Tokens
- **Routing**: React Router v6 (24 screens + layouts)
- **Icons**: Lucide React
- **State Management**: React Context API (`BookingContext`, `JourneyContext`, `AuthContext`, `ExpenseContext`)

### Backend (Planned — Phase 11)

- **Runtime**: Node.js (ES Modules)
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MongoDB via Mongoose
- **Authentication**: JWT access & refresh token rotation, bcrypt password hashing
- **Security**: Helmet, CORS, rate limiting, and encrypted storage keys

---

## How to Run the Frontend

The frontend is completely self-contained within the `frontend/` directory.

### Option 1: Direct from `frontend/` (Recommended)

```bash
cd frontend
npm install
npm run dev
```

The application will be accessible at `http://localhost:3000` (or `http://localhost:5173`).

### Option 2: From the Repository Root

```bash
npm run dev
```

### Production Build & Type Checking

To verify TypeScript and generate the production bundle:

```bash
cd frontend
npm run build
```

To preview the built production bundle:

```bash
cd frontend
npm run preview
```

---

## Future Backend Roadmap

1. **Phase 11**: Backend project initialization (Node.js, Express, TypeScript scaffold, MongoDB connection, core Mongoose schemas).
2. **Phase 12**: Authentication (JWT & session tokens) & "Set My Safar" booking API endpoints.
3. **Phase 13**: Live Journey state machine, stay details, schedule, and encrypted document vault APIs.
4. **Phase 14**: Safar AI proxy (Google Gemini) and emergency SOS multi-channel dispatch service.
5. **Phase 15**: Full-Stack integration, replacing frontend mock adapters with live REST APIs.

---

## Documentation Index

- [SAFAR_SPEC.md](file:///e:/Safar/docs/SAFAR_SPEC.md) — Complete 24-Screen Functional Specification
- [SAFAR_ARCHITECTURE.md](file:///e:/Safar/docs/SAFAR_ARCHITECTURE.md) — Frontend Architecture & Component Guidelines
- [SAFAR_BACKEND_ARCHITECTURE.md](file:///e:/Safar/docs/SAFAR_BACKEND_ARCHITECTURE.md) — Backend Architecture, Schemas, & API Contracts
