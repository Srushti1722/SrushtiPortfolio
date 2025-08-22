# Overview

This is a full-stack web application built with a React frontend and Express.js backend, showcasing a modern portfolio website with a cottage-core aesthetic design. The application demonstrates a clean separation between client and server code, with shared TypeScript schemas for type safety across the stack. The portfolio features sections for personal information, skills, projects, and contact details, all styled with a warm, nature-inspired design system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with custom cottage-core color palette and design system
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query for server state and API data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation integration

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Storage Interface**: Abstract storage interface with both in-memory and database implementations
- **Development Setup**: Hot module replacement with Vite integration in development mode
- **Build Process**: ESBuild for server bundling and Vite for client bundling

## Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon Database serverless connection
- **ORM**: Drizzle ORM with automatic type inference and migration support
- **Schema Management**: Centralized schema definitions in shared directory for type consistency
- **Session Storage**: PostgreSQL-backed session storage using connect-pg-simple

## Authentication and Authorization
- **Session Management**: Express session middleware with PostgreSQL store
- **User Schema**: Basic user model with username/password authentication ready for implementation
- **Type Safety**: Zod schemas for input validation and type inference

## External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL
- **UI Framework**: Radix UI components for accessible, unstyled UI primitives
- **Styling**: Tailwind CSS with custom design system and Google Fonts integration
- **Development Tools**: Replit-specific plugins for development environment integration
- **Build Tools**: Vite for frontend bundling, ESBuild for backend bundling
- **Type Safety**: TypeScript with strict configuration and path mapping
- **Database Management**: Drizzle Kit for schema migrations and database management