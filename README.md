# Rental Manager - Property Management Platform

A modern, responsive property management platform for independent landlords.

## Design System

### Visual Identity
- **Primary Color**: Emerald (#10b981)
- **Neutral Colors**: Zinc palette (50-900)
- **Typography**: Inter font family (weights: 300, 400, 500, 600)
- **Border Radius**: Consistent rounded corners (md, lg, xl, 2xl)
- **Spacing**: Tailwind's default spacing scale

### Key Design Principles
1. **Clean & Minimal**: Subtle borders, soft shadows, ample whitespace
2. **Responsive**: Mobile-first approach with breakpoints at sm, md, lg
3. **Consistent**: Same navigation, footer, and component styles across all pages
4. **Accessible**: Proper contrast ratios, semantic HTML, keyboard navigation

### Component Library
- Navigation: Fixed top nav with backdrop blur
- Footer: Multi-column layout with links
- Cards: Subtle borders with hover effects
- Buttons: Primary (emerald), Secondary (outlined), Dark (zinc-900)
- Forms: Consistent input styling with borders

## File Structure

```
/
├── index.html          # Landing page
├── css/
│   └── base.css       # Shared styles and utilities
├── js/
│   └── components.js  # Reusable component functions
└── README.md          # This file
```

## Usage

When creating new pages:
1. Use the same HTML structure and classes
2. Include the same head section (Tailwind, Iconify, Inter font)
3. Use the navigation and footer components from `js/components.js`
4. Follow the same spacing and layout patterns
5. Maintain consistent color scheme and typography

## Pages to Create

- Dashboard (authenticated)
- Sign In / Sign Up
- Add Property
- Listings Management
- Applicant Screening
- Lease Management
- Payments
- Settings
- Help Center
- Resources
- Contact
- Legal pages (Privacy, Terms, Equal Housing)
