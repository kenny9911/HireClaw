# HireClaw

AI employee platform — hire AI agents that answer emails, write code, close deals, and handle support 24/7.

## Tech Stack

- **Frontend**: React 18 + Vite + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: Custom JWT + bcrypt
- **Monorepo**: npm workspaces (client, server, shared)

## Project Structure

```
client/     — React frontend (Vite)
server/     — Express API server
shared/     — Shared types, constants, validation (zod)
```

## Development

```bash
npm install              # Install all workspaces
npm run dev:server       # Start server on :3001
npm run dev:client       # Start client on :5173
npm run lint             # ESLint all workspaces
npm test                 # Run all tests
npm run build            # Build all workspaces
```

## Database

```bash
cd server
npx prisma generate      # Generate Prisma client
npx prisma db push       # Push schema to DB
npx prisma migrate dev   # Create migration
```

## Conventions

- No semicolons, single quotes, trailing commas (Prettier)
- Named exports (no default exports for components)
- Zod for validation (shared schemas in shared/src/validation.ts)
- API errors use ApiError class (server/src/utils/apiError.ts)
- All API routes prefixed with /api
