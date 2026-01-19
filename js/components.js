// Reusable components for consistent UI across pages

// Navigation Component
function createNavigation(currentPage = 'home') {
    const navItems = [
        { href: '#features', text: 'Features' },
        { href: '#pricing', text: 'Pricing' },
        { href: '#resources', text: 'Resources' }
    ];
    
    const activeClass = 'text-zinc-900';
    const inactiveClass = 'text-zinc-500 hover:text-zinc-900 transition-colors';
    
    return `
        <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
            <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                <div class="flex items-center gap-8">
                    <a href="index.html" class="flex items-center gap-2 group">
                        <div class="w-6 h-6 bg-emerald-600 rounded-md flex items-center justify-center text-white">
                            <iconify-icon icon="lucide:building-2" width="16" stroke-width="1.5"></iconify-icon>
                        </div>
                        <span class="text-sm font-semibold tracking-tight group-hover:text-zinc-600 transition-colors">RENTAL MANAGER</span>
                    </a>
                    <div class="hidden md:flex items-center gap-6 text-sm font-medium">
                        ${navItems.map(item => 
                            `<a href="${item.href}" class="${inactiveClass}">${item.text}</a>`
                        ).join('')}
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <a href="signin.html" class="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">Sign In</a>
                    <a href="add-property.html" class="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 hover:shadow-lg transition-all flex items-center gap-2">
                        Add a Property
                        <iconify-icon icon="lucide:arrow-right" width="14" stroke-width="1.5"></iconify-icon>
                    </a>
                </div>
            </div>
        </nav>
    `;
}

// Footer Component
function createFooter() {
    return `
        <footer class="bg-white pt-16 pb-8 border-t border-zinc-100">
            <div class="max-w-6xl mx-auto px-6">
                <div class="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                    <div class="col-span-2">
                        <div class="flex items-center gap-2 mb-4">
                            <div class="w-5 h-5 bg-zinc-900 rounded flex items-center justify-center text-white">
                                <iconify-icon icon="lucide:building-2" width="12"></iconify-icon>
                            </div>
                            <span class="text-xs font-bold tracking-tight text-zinc-900">RENTAL MANAGER</span>
                        </div>
                        <p class="text-xs text-zinc-500 max-w-xs leading-relaxed">
                            The most trusted platform for independent landlords. Simplifying property management one lease at a time.
                        </p>
                    </div>
                    <div>
                        <h4 class="text-xs font-semibold text-zinc-900 mb-4">Product</h4>
                        <ul class="space-y-2 text-xs text-zinc-500">
                            <li><a href="listings.html" class="hover:text-zinc-900">Listings</a></li>
                            <li><a href="screening.html" class="hover:text-zinc-900">Screening</a></li>
                            <li><a href="leases.html" class="hover:text-zinc-900">Leases</a></li>
                            <li><a href="payments.html" class="hover:text-zinc-900">Payments</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-xs font-semibold text-zinc-900 mb-4">Support</h4>
                        <ul class="space-y-2 text-xs text-zinc-500">
                            <li><a href="help.html" class="hover:text-zinc-900">Help Center</a></li>
                            <li><a href="resources.html" class="hover:text-zinc-900">Landlord Resources</a></li>
                            <li><a href="contact.html" class="hover:text-zinc-900">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="text-xs font-semibold text-zinc-900 mb-4">Legal</h4>
                        <ul class="space-y-2 text-xs text-zinc-500">
                            <li><a href="privacy.html" class="hover:text-zinc-900">Privacy Policy</a></li>
                            <li><a href="terms.html" class="hover:text-zinc-900">Terms of Service</a></li>
                            <li><a href="equal-housing.html" class="hover:text-zinc-900">Equal Housing</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p class="text-[10px] text-zinc-400">© 2023 CoStar Group. All rights reserved.</p>
                    <div class="flex gap-4 text-zinc-400">
                        <iconify-icon icon="lucide:twitter" width="16" class="hover:text-zinc-900 cursor-pointer"></iconify-icon>
                        <iconify-icon icon="lucide:facebook" width="16" class="hover:text-zinc-900 cursor-pointer"></iconify-icon>
                        <iconify-icon icon="lucide:linkedin" width="16" class="hover:text-zinc-900 cursor-pointer"></iconify-icon>
                    </div>
                </div>
            </div>
        </footer>
    `;
}

// Page Layout Wrapper
function createPageLayout(content, options = {}) {
    const {
        title = 'Rental Manager',
        showNav = true,
        showFooter = true,
        mainClass = 'flex-grow pt-14 px-6 pb-20',
        containerClass = 'max-w-6xl mx-auto'
    } = options;
    
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title} | Rental Manager</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="css/base.css">
        </head>
        <body class="bg-white text-zinc-900 antialiased selection:bg-emerald-100 selection:text-emerald-900 flex flex-col min-h-screen">
            ${showNav ? createNavigation() : ''}
            <main class="${mainClass}">
                <div class="${containerClass}">
                    ${content}
                </div>
            </main>
            ${showFooter ? createFooter() : ''}
        </body>
        </html>
    `;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createNavigation, createFooter, createPageLayout };
}
