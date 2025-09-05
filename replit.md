# Overview

AgroMonit is an agricultural monitoring application that combines satellite data visualization with modern web technologies. The system is designed to provide real-time satellite monitoring capabilities for precision agriculture, featuring a clean interface that displays agricultural imagery and monitoring data. The application uses a full-stack architecture with React frontend, Express backend, and PostgreSQL database integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing with minimal bundle impact
- **State Management**: TanStack Query for server state management and data fetching
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript with ESM modules for modern JavaScript features
- **Database ORM**: Drizzle ORM for type-safe database operations and migrations
- **Storage Pattern**: Repository pattern with in-memory storage for development and PostgreSQL for production
- **API Design**: RESTful endpoints with /api prefix and JSON request/response format

## Database Design
- **Primary Database**: PostgreSQL with Neon serverless integration
- **Schema Management**: Drizzle Kit for schema definitions and database migrations
- **User Management**: Basic user table with username/password authentication structure
- **Development Storage**: In-memory storage implementation for rapid prototyping

## Development Environment
- **Monorepo Structure**: Shared schema and types between client and server
- **Path Aliases**: TypeScript path mapping for clean imports (@/, @shared/, @assets/)
- **Hot Reload**: Vite HMR for frontend and tsx for backend development
- **Build Process**: Separate client (Vite) and server (esbuild) build pipelines

## UI/UX Design
- **Design System**: shadcn/ui components with neutral color scheme and green primary accent
- **Typography**: Inter font family with multiple weight variants
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Theme Support**: CSS custom properties for light/dark mode capability
- **Accessibility**: Radix UI primitives ensure ARIA compliance and keyboard navigation

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Connection Management**: Environment-based DATABASE_URL configuration

## UI Component Libraries
- **Radix UI**: Headless component primitives for accessible interactions
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for component variant management
- **clsx & tailwind-merge**: Conditional CSS class composition

## Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Error Handling**: Runtime error overlay for development debugging
- **Font Loading**: Google Fonts integration for Inter, DM Sans, and Fira Code

## Build Dependencies
- **esbuild**: Fast JavaScript bundler for server-side code
- **PostCSS**: CSS processing with Tailwind and autoprefixer plugins
- **TypeScript**: Static type checking and compilation

## Asset Management
- **Static Assets**: Vite asset pipeline with attached_assets directory
- **Image Optimization**: Built-in Vite asset optimization for production builds