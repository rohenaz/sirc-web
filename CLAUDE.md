# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

SIRC (pronounced "search") is a modern IRC client landing page and waitlist system built with Next.js 16. The project showcases a desktop IRC client with XDCC support, featuring a dark-mode design and community-funded roadmap. The web application handles waitlist signups via Resend and displays funding progress for multiple community-funded features.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: Bun (preferred over npm)
- **React**: Version 19 with React Server Components
- **TypeScript**: 5.9+ with strict mode
- **Styling**: TailwindCSS v4 with PostCSS
- **UI Components**: Radix UI primitives (Accordion, Dialog, Progress, etc.)
- **Linting/Formatting**: Biome (replacing ESLint + Prettier)
- **Email**: Resend API for waitlist management

## Development Commands

```bash
# Development
bun dev              # Start Next.js dev server (localhost:3000)

# Production
bun run build        # Build for production
bun start            # Start production server

# Code Quality
bun lint             # Run Biome linter
bun lint:fix         # Fix linting issues automatically
bun format           # Format code with Biome
```

## Architecture

### Application Structure

```
app/
├── api/
│   └── subscribe/route.ts    # POST endpoint for waitlist signup
├── page.tsx                  # Landing page (hero, features, roadmap, FAQ)
├── layout.tsx                # Root layout with metadata
├── privacy/page.tsx          # Privacy policy page
├── terms/page.tsx            # Terms of service page
└── license/page.tsx          # License page

components/
├── ui/                       # Shadcn/ui components (excluded from Biome)
│   ├── button.tsx
│   ├── input.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   ├── progress.tsx
│   ├── accordion.tsx
│   └── ...
├── waitlist-signup.tsx       # Waitlist form component (hero & inline variants)
└── deposit-modal.tsx         # Bitcoin address QR code modal
```

### Key Features

1. **Waitlist Mode**: Toggle via `NEXT_PUBLIC_WAITLIST_MODE` environment variable
   - When enabled: Shows waitlist signup instead of download buttons
   - When disabled: Shows direct download CTAs

2. **Email Collection**: Resend API integration
   - Adds contacts to Resend audience
   - Sends branded welcome email
   - Handles errors gracefully with fallback when API key missing

3. **Community Funding**: Four roadmap items with progress tracking
   - BSV Logging (blockchain integration for immutable chat history)
   - XDCC Indexing Suite (indexing and search service for XDCC messages)
   - BRC-100 Wallet Integration (crypto payments in IRC)
   - Open Source P2P Overlay (open sourcing the p2p infrastructure for on-chain data)
   - Each feature has a Bitcoin address for donations
   - Modal dialogs display QR codes for easy contribution

### Component Patterns

**WaitlistSignup Component**:
- Two variants: `hero` (large form) and `inline` (compact)
- Manages form state: idle, loading, success, error
- POSTs to `/api/subscribe` endpoint
- Shows success message with checkmark on completion

**DepositModal Component**:
- Displays QR code using `qrcode.react`
- Copy-to-clipboard functionality with confirmation
- Radix Dialog for accessibility
- Bitcoin address passed as prop

**OS Detection for Downloads**:
- Client-side detection using `navigator.platform` or `navigator.userAgent`
- Automatically selects appropriate binary (Windows .exe vs macOS .dmg)
- Header download button intelligently chooses based on detected OS
- Fallback to both options if detection fails

### Styling Conventions

- **Dark Mode**: Zinc color palette (zinc-950, zinc-900, zinc-800)
- **Accent**: Emerald green (#10b981) for primary actions
- **Typography**: Font-mono for branding, system fonts for body
- **Grid Background**: CSS gradients for subtle texture
- **Animations**: Subtle hover effects and transitions

### API Routes

**POST /api/subscribe**:
- Validates email format
- Creates Resend contact if `RESEND_AUDIENCE_ID` provided
- Sends welcome email
- Returns 503 if `RESEND_API_KEY` not configured
- Returns 400 for invalid email
- Returns 500 for server errors

### Environment Variables

Required for full functionality:
```
RESEND_API_KEY=re_...           # Resend API key for email
RESEND_AUDIENCE_ID=...          # Resend audience/list ID
NEXT_PUBLIC_WAITLIST_MODE=true  # Enable/disable waitlist mode
```

## Configuration

### Biome Settings

- Excludes `components/ui` from linting (shadcn/ui generated code)
- Uses single quotes, semicolons as needed
- 2-space indentation
- Auto-organizes imports
- Strict TypeScript rules (no explicit any)

### TypeScript Configuration

- Strict mode enabled
- Path alias: `@/*` maps to project root
- React JSX transform
- ES2017 target for broad compatibility
- Bundler module resolution

### Next.js Configuration

- Minimal config (uses Next.js 16 defaults)
- App Router architecture
- React 19 server components
- PostCSS for TailwindCSS v4 processing

## Important Notes

1. **TailwindCSS v4**: Do not downgrade to v3 (security vulnerability per global CLAUDE.md)
2. **Biome over ESLint**: Use Biome commands, not ESLint directly
3. **Bun Runtime**: Prefer `bun` over `npm` for all commands
4. **No Emojis**: Avoid emojis in code/commits unless explicitly requested
5. **Dark Mode Only**: App uses `className="dark"` on html element - no light mode toggle
6. **Bitcoin Addresses**: Currently placeholder addresses - replace with real addresses before production
7. **Resend Integration**: Gracefully handles missing API key with 503 error (allows development without email)
8. **Layout Consistency**: All pages (privacy, terms, license) should use consistent layout with navbar and footer from main page
9. **GitHub Repository**: Official repo is https://github.com/rohenaz/sirc
10. **Copyright Year**: Keep updated to current year (2025)

## Testing Considerations

- Test waitlist signup flow with and without `NEXT_PUBLIC_WAITLIST_MODE`
- Verify email validation and error handling
- Test deposit modal QR code generation and clipboard functionality
- Ensure responsive design across mobile/tablet/desktop
- Verify all internal links work (privacy, terms, license pages)

## Deployment Notes

- Set environment variables in hosting platform (Vercel recommended)
- Replace placeholder Bitcoin addresses in `BOUNTY_ADDRESSES`
- Configure Resend domain for email sending
- Verify build completes without errors: `bun run build`
- Test production build locally: `bun start`
