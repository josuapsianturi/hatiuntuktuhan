# Hati untuk Tuhan - Replit Development Guide

## Overview

This is a spiritual web application called "Hati untuk Tuhan" (Heart for God) - a digital ministry platform that shares short videos about the Gospel and Jesus Christ through TikTok & Instagram. The application is built as a full-stack React/Express app with a modern tech stack designed for spiritual outreach and community building.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Animation**: Framer Motion for smooth animations
- **Build Tool**: Vite for fast development and building

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: tsx for TypeScript execution in development

### UI Component System
- **Component Library**: Radix UI primitives with custom styling
- **Design System**: shadcn/ui components (New York style)
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Color Scheme**: Spiritual theme with blues, purples, and gold accents

## Key Components

### Core Pages
1. **Home Page** (`/`) - Main landing page with:
   - Hero section with spiritual messaging
   - Social media integration (TikTok, Instagram)
   - Daily scripture display
   - Prayer request form
   - About section
   - Footer with contact information

2. **Admin Page** (`/admin`) - Prayer request management dashboard with:
   - List of all submitted prayer requests
   - Details including name, email, message, and timestamp
   - Responsive card-based layout
   - Real-time data refresh functionality
   - Navigation back to main website

3. **404 Page** - Simple error page for undefined routes

### Major Features
1. **Daily Scripture Display** - Rotating Bible verses with smooth transitions
2. **Prayer Request System** - Form for users to submit prayer requests
3. **Social Media Integration** - Links and embeds for TikTok and Instagram content
4. **Responsive Navigation** - Mobile-friendly header with smooth scrolling
5. **Toast Notifications** - User feedback system for form submissions

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Prayer Requests Table**: Stores prayer submissions (id, name, email, message, created_at)

## Data Flow

### Client-Side Data Management
1. **TanStack Query** manages all server state and API calls
2. **React Hook Form** handles form state and validation
3. **Zod** provides runtime type validation for forms and API responses
4. **Framer Motion** handles UI animations and transitions

### API Endpoints
- `GET /api/scripture/daily` - Fetches daily Bible verse
- `GET /api/scripture/collection` - Fetches multiple scripture verses for slider
- `POST /api/prayer-requests` - Submits prayer request
- `GET /api/prayer-requests` - Retrieves all prayer requests (admin)
- Integration with external Bible API for scripture content

### External Integrations
- **Bible API** - For fetching daily scripture verses
- **Notion API** - For managing prayer requests and content
- **Social Media** - TikTok and Instagram integration for content display

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless** - PostgreSQL database connection
- **@notionhq/client** - Notion API integration
- **@tanstack/react-query** - Server state management
- **drizzle-orm** - Database ORM
- **framer-motion** - Animation library
- **react-hook-form** - Form management
- **wouter** - Lightweight routing
- **zod** - Schema validation

### UI Dependencies
- **@radix-ui/react-*** - UI primitive components
- **class-variance-authority** - Component variant management
- **tailwindcss** - Utility-first CSS framework
- **lucide-react** - Icon library

## Deployment Strategy

### Development Environment
- **Local Development**: Uses Vite dev server with HMR
- **Database**: PostgreSQL with Drizzle migrations
- **Environment Variables**: 
  - `DATABASE_URL` - PostgreSQL connection string
  - `NOTION_INTEGRATION_SECRET` - Notion API key
  - `NOTION_PAGE_URL` - Notion page for content management

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle handles schema migrations

### Production Considerations
- Static asset serving through Express
- Session management with PostgreSQL store
- Error handling middleware for API routes
- CORS and security headers configuration

### Replit-Specific Features
- **Cartographer Plugin** - For development environment visualization
- **Runtime Error Overlay** - Enhanced error reporting in development
- **Development Banner** - Replit branding for external access

## Key Design Decisions

### Technology Choices
1. **Drizzle ORM over Prisma** - Chosen for its TypeScript-first approach and performance
2. **Wouter over React Router** - Lightweight routing solution for simple navigation needs
3. **TanStack Query** - Robust server state management with caching and synchronization
4. **Framer Motion** - Smooth animations that enhance the spiritual user experience

### Architecture Patterns
1. **Monorepo Structure** - Client, server, and shared code in single repository
2. **Type Safety** - End-to-end TypeScript with shared schemas
3. **Component Composition** - Modular UI components with consistent styling
4. **Mobile-First Design** - Responsive design prioritizing mobile users

### Performance Optimizations
1. **Code Splitting** - Vite handles automatic code splitting
2. **Image Optimization** - Tailwind CSS for responsive images
3. **Caching Strategy** - TanStack Query manages API response caching
4. **Bundle Optimization** - esbuild for efficient server bundling

This application serves as a digital ministry platform, focusing on spreading the Gospel through modern web technologies while maintaining a peaceful, spiritual user experience.