# Quick Reference Guide

Copy-paste snippets for common UI patterns.

## Page Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title | Rental Manager</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/base.css">
</head>
<body class="bg-white text-zinc-900 antialiased selection:bg-emerald-100 selection:text-emerald-900 flex flex-col min-h-screen">
    <!-- Copy nav and footer from template.html -->
</body>
</html>
```

## Common Patterns

### Page Header
```html
<div class="mb-8">
    <h1 class="text-3xl font-medium tracking-tight text-zinc-900 mb-2">Page Title</h1>
    <p class="text-zinc-500">Page description or subtitle</p>
</div>
```

### Section Header
```html
<div class="mb-6">
    <h2 class="text-xl font-medium tracking-tight text-zinc-900 mb-1">Section Title</h2>
    <p class="text-sm text-zinc-500">Section description</p>
</div>
```

### Stat Card
```html
<div class="p-4 rounded-lg border border-zinc-100 bg-zinc-50/50">
    <div class="flex items-center justify-between mb-2">
        <span class="text-xs font-medium text-zinc-500">Label</span>
        <iconify-icon icon="lucide:icon-name" class="text-emerald-500"></iconify-icon>
    </div>
    <div class="text-2xl font-medium tracking-tight">Value</div>
    <div class="text-xs text-zinc-400 mt-1">Subtext</div>
</div>
```

### Table Row
```html
<div class="px-4 py-3 flex items-center justify-between hover:bg-zinc-50 transition-colors cursor-pointer border-b border-zinc-100">
    <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-medium">JD</div>
        <div>
            <div class="text-sm font-medium text-zinc-900">Name</div>
            <div class="text-xs text-zinc-500">Details</div>
        </div>
    </div>
    <span class="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-medium border border-emerald-100">Status</span>
</div>
```

### Form Group
```html
<div class="mb-4">
    <label class="block text-sm font-medium text-zinc-900 mb-2">Label</label>
    <input type="text" class="w-full px-4 py-2 rounded-md border border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
</div>
```

### Empty State
```html
<div class="text-center py-12">
    <iconify-icon icon="lucide:inbox" width="48" class="text-zinc-300 mx-auto mb-4"></iconify-icon>
    <h3 class="text-sm font-medium text-zinc-900 mb-1">No items</h3>
    <p class="text-sm text-zinc-500 mb-4">Description of empty state</p>
    <button class="btn-primary">Action Button</button>
</div>
```

### Alert/Notice
```html
<div class="p-4 rounded-lg bg-emerald-50 border border-emerald-100 flex items-start gap-3">
    <iconify-icon icon="lucide:info" class="text-emerald-600 mt-0.5"></iconify-icon>
    <div class="flex-1">
        <p class="text-sm text-emerald-900">Alert message</p>
    </div>
</div>
```

### Loading State
```html
<div class="flex items-center justify-center py-12">
    <div class="animate-spin rounded-full h-8 w-8 border-2 border-zinc-200 border-t-emerald-600"></div>
</div>
```

## Color Classes Quick Reference

- `bg-emerald-600` - Primary background
- `text-emerald-600` - Primary text
- `border-zinc-100` - Standard border
- `text-zinc-900` - Primary text
- `text-zinc-500` - Secondary text
- `text-zinc-400` - Muted text
- `bg-zinc-50` - Subtle background
- `bg-zinc-900` - Dark background

## Spacing Quick Reference

- `p-4` - Card padding
- `p-6` - Section padding
- `px-6` - Page horizontal padding
- `py-24` - Section vertical spacing
- `gap-4` - Grid gap
- `mb-8` - Standard margin bottom
- `pt-32` - Main content top padding (accounts for fixed nav)

## Icon Usage

```html
<iconify-icon icon="lucide:icon-name" width="16" stroke-width="1.5"></iconify-icon>
```

Common icons:
- `lucide:building-2` - Logo
- `lucide:arrow-right` - CTA arrows
- `lucide:check` - Success/complete
- `lucide:plus` - Add/create
- `lucide:edit` - Edit
- `lucide:trash` - Delete
- `lucide:search` - Search
- `lucide:filter` - Filter
- `lucide:more-horizontal` - Menu

## Responsive Patterns

```html
<!-- Hide on mobile, show on desktop -->
<div class="hidden md:block">Desktop only</div>

<!-- Show on mobile, hide on desktop -->
<div class="block md:hidden">Mobile only</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- Items -->
</div>

<!-- Responsive text -->
<h1 class="text-3xl sm:text-4xl md:text-5xl">Responsive heading</h1>
```
