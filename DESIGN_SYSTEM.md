# Rental Manager Design System

This document outlines the visual identity and design patterns to ensure consistency across all pages.

## Color Palette

### Primary Colors
- **Emerald 600**: `#10b981` - Primary actions, accents, highlights
- **Emerald 700**: `#15803d` - Hover states for primary buttons
- **Emerald 50**: `#ecfdf5` - Backgrounds, subtle highlights
- **Emerald 100**: `#d1fae5` - Selection backgrounds, badges

### Neutral Colors (Zinc)
- **Zinc 50**: `#fafafa` - Subtle backgrounds
- **Zinc 100**: `#f4f4f5` - Borders, dividers
- **Zinc 200**: `#e4e4e7` - Borders, subtle elements
- **Zinc 400**: `#a1a1aa` - Secondary text, icons
- **Zinc 500**: `#71717a` - Body text, links
- **Zinc 600**: `#52525b` - Hover states
- **Zinc 900**: `#18181b` - Primary text, dark buttons
- **White**: `#ffffff` - Backgrounds, cards

### Accent Colors
- **Blue 50/100/600/700**: Status indicators, info badges
- **Red**: Error states (use sparingly)

## Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold)

### Type Scale
- **Heading 1**: `text-5xl sm:text-6xl` (48px/60px) - Hero titles
- **Heading 2**: `text-3xl` (30px) - Section titles
- **Heading 3**: `text-xl` (20px) - Subsection titles
- **Body Large**: `text-lg` (18px) - Hero descriptions
- **Body**: `text-sm` (14px) - Standard text
- **Small**: `text-xs` (12px) - Labels, captions
- **Tiny**: `text-[10px]` (10px) - Fine print

### Text Colors
- **Primary Text**: `text-zinc-900`
- **Secondary Text**: `text-zinc-500`
- **Muted Text**: `text-zinc-400`
- **Light Text**: `text-zinc-300` (on dark backgrounds)

## Spacing & Layout

### Container Widths
- **Full Width**: `max-w-6xl` (1152px) - Main content areas
- **Narrow**: `max-w-4xl` (896px) - Hero sections, forms
- **Wide**: `max-w-7xl` (1280px) - Dashboard layouts

### Padding
- **Page Padding**: `px-6` (24px) - Horizontal page padding
- **Section Padding**: `py-24` (96px) - Vertical section spacing
- **Card Padding**: `p-4` to `p-8` - Card internal spacing

### Grid System
- Use Tailwind's grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Gap: `gap-4` (16px) to `gap-8` (32px)

## Components

### Navigation
- **Height**: `h-14` (56px)
- **Background**: `bg-white/80 backdrop-blur-md`
- **Border**: `border-b border-zinc-100`
- **Fixed**: `fixed top-0 w-full z-50`
- **Logo**: Emerald square (6x6) with building icon
- **Links**: `text-sm text-zinc-500 font-medium hover:text-zinc-900`

### Buttons

#### Primary Button
```html
<button class="h-10 px-6 rounded-md bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-700 transition-colors shadow-sm shadow-emerald-200">
    Button Text
</button>
```

#### Secondary Button
```html
<button class="h-10 px-6 rounded-md bg-white border border-zinc-200 text-zinc-700 font-medium text-sm hover:bg-zinc-50 transition-colors">
    Button Text
</button>
```

#### Dark Button (CTA)
```html
<a href="#" class="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 hover:shadow-lg transition-all">
    Button Text
</button>
```

### Cards

#### Standard Card
```html
<div class="rounded-lg border border-zinc-100 bg-white p-4 hover:shadow-md transition-all">
    <!-- Content -->
</div>
```

#### Subtle Card
```html
<div class="rounded-lg border border-zinc-100 bg-zinc-50/50 p-4">
    <!-- Content -->
</div>
```

#### Large Feature Card
```html
<div class="rounded-2xl bg-zinc-50 border border-zinc-200 p-8 hover:border-zinc-300 transition-all duration-300">
    <!-- Content -->
</div>
```

### Forms

#### Input Fields
```html
<input type="text" class="w-full px-4 py-2 rounded-md border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
```

#### Labels
```html
<label class="block text-sm font-medium text-zinc-900 mb-2">
    Label Text
</label>
```

### Badges & Tags
```html
<!-- Status Badge -->
<span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium border border-emerald-100">
    Approved
</span>

<!-- Info Badge -->
<span class="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-medium border border-blue-100">
    Review
</span>
```

## Effects & Animations

### Transitions
- **Standard**: `transition-colors` - Color changes
- **All**: `transition-all` - Multiple properties
- **Duration**: `duration-300` (300ms) - Standard timing

### Hover Effects
- **Cards**: `hover:shadow-md` or `hover:shadow-lg`
- **Buttons**: Darken background color
- **Links**: `hover:text-zinc-900` (from zinc-500)

### Shadows
- **Subtle**: `shadow-sm` - Cards, buttons
- **Medium**: `shadow-md` - Hover states
- **Large**: `shadow-lg` - Modals, important cards
- **Colored**: `shadow-emerald-200` - Primary button glow

## Icons

- **Library**: Iconify (Lucide icon set)
- **Size**: Typically `width="16"` or `width="20"`
- **Stroke**: `stroke-width="1.5"` for consistency
- **Color**: Inherit from parent or use `text-zinc-500`

## Responsive Breakpoints

- **sm**: 640px - Small tablets
- **md**: 768px - Tablets
- **lg**: 1024px - Desktops
- **xl**: 1280px - Large desktops

### Mobile-First Approach
- Base styles for mobile
- Use `sm:`, `md:`, `lg:` prefixes for larger screens
- Hide/show elements: `hidden md:flex`, `block md:hidden`

## Special Patterns

### Glassmorphism
```html
<div class="bg-white/80 backdrop-blur-md border border-zinc-100">
    <!-- Content -->
</div>
```

### Gradient Backgrounds
```html
<div class="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-50/50 via-zinc-50/0 to-transparent">
    <!-- Content -->
</div>
```

### Grid Background
```html
<div class="bg-grid">
    <!-- Content -->
</div>
```

## Accessibility

- **Contrast**: Ensure WCAG AA compliance (4.5:1 for text)
- **Focus States**: Always include visible focus indicators
- **Semantic HTML**: Use proper heading hierarchy, landmarks
- **Alt Text**: Include for all images and icons
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible

## Page Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <!-- Tailwind CSS -->
    <!-- Iconify -->
    <!-- Google Fonts -->
    <!-- base.css -->
</head>
<body class="bg-white text-zinc-900 antialiased selection:bg-emerald-100 selection:text-emerald-900 flex flex-col min-h-screen">
    <!-- Navigation -->
    <nav>...</nav>
    
    <!-- Main Content -->
    <main class="flex-grow pt-32 pb-20 px-6">
        <div class="max-w-6xl mx-auto">
            <!-- Page content -->
        </div>
    </main>
    
    <!-- Footer -->
    <footer>...</footer>
</body>
</html>
```

## Notes

- Always maintain consistent spacing and alignment
- Use the same border radius values throughout
- Keep shadows subtle and consistent
- Maintain the same navigation and footer on all pages
- Use the same color palette - don't introduce new colors
- Follow the same typography scale
- Ensure all pages are fully responsive
