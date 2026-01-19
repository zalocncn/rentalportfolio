// Listing Data Storage and Management
// Uses localStorage to persist listing data across pages

const ListingStorage = {
    // Get current listing data from localStorage
    getCurrentListing() {
        const data = localStorage.getItem('currentListing');
        return data ? JSON.parse(data) : null;
    },

    // Save current listing data
    saveCurrentListing(listingData) {
        localStorage.setItem('currentListing', JSON.stringify(listingData));
    },

    // Get all published listings
    getAllListings() {
        const data = localStorage.getItem('publishedListings');
        return data ? JSON.parse(data) : [];
    },

    // Get a specific listing by ID
    getListingById(id) {
        const listings = this.getAllListings();
        return listings.find(listing => listing.id === id) || null;
    },

    // Update an existing listing
    updateListing(listingId, updatedData) {
        const listings = this.getAllListings();
        const index = listings.findIndex(listing => listing.id === listingId);
        if (index !== -1) {
            const originalListing = listings[index];
            listings[index] = {
                ...originalListing,
                ...updatedData,
                id: listingId, // Preserve the original ID
                publishedAt: originalListing.publishedAt || updatedData.publishedAt, // Preserve original publish date
                status: originalListing.status || updatedData.status || 'active', // Preserve original status
                updatedAt: new Date().toISOString() // Add update timestamp
            };
            localStorage.setItem('publishedListings', JSON.stringify(listings));
            return listings[index];
        }
        return null;
    },

    // Save a published listing
    saveListing(listing) {
        const listings = this.getAllListings();
        const listingId = listing.id || Date.now().toString();
        
        // Check if a listing with this ID already exists
        const existingIndex = listings.findIndex(l => l.id === listingId);
        
        const listingWithId = {
            ...listing,
            id: listingId,
            publishedAt: listing.publishedAt || new Date().toISOString(),
            status: listing.status || 'active'
        };
        
        if (existingIndex !== -1) {
            // Update existing listing instead of creating duplicate
            const originalListing = listings[existingIndex];
            listings[existingIndex] = {
                ...originalListing,
                ...listingWithId,
                id: listingId, // Preserve the original ID
                publishedAt: originalListing.publishedAt || listingWithId.publishedAt, // Preserve original publish date
                updatedAt: new Date().toISOString() // Add update timestamp
            };
        } else {
            // Create new listing
            listings.push(listingWithId);
        }
        
        localStorage.setItem('publishedListings', JSON.stringify(listings));
        return listingWithId;
    },

    // Clear current listing (after publishing)
    clearCurrentListing() {
        localStorage.removeItem('currentListing');
    },

    // Collect data from Step 1 form
    collectStep1Data() {
        const form = document.querySelector('form') || document;
        const data = {
            address: '214 VIA ROBINA, SAN CLEMENTE, CA 92672', // From header
            unit: {
                name: form.querySelector('input[type="text"]')?.value || '',
                beds: form.querySelector('select')?.value || '',
                baths: Array.from(form.querySelectorAll('select'))[1]?.value || '',
                size: Array.from(form.querySelectorAll('input[type="number"]'))[0]?.value || '',
                monthlyRent: Array.from(form.querySelectorAll('input[type="number"]'))[1]?.value || '',
                deposit: Array.from(form.querySelectorAll('input[type="number"]'))[2]?.value || '',
                leaseLength: Array.from(form.querySelectorAll('input[type="number"]'))[3]?.value || '12',
                photos: [],
                amenities: [],
                description: ''
            },
            building: {
                yearBuilt: Array.from(form.querySelectorAll('input[type="number"]'))[4]?.value || ''
            }
        };
        return data;
    },

    // Collect data from Step 2 form
    collectStep2Data() {
        const form = document.querySelector('form') || document;
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        const selectedAmenities = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => {
                const label = cb.closest('label');
                return label ? label.textContent.trim() : '';
            })
            .filter(text => text);

        const parkingSelect = Array.from(form.querySelectorAll('select')).find(s => 
            s.previousElementSibling?.textContent?.includes('parking')
        );
        const parkingFeeInput = Array.from(form.querySelectorAll('input[type="number"]')).find(input => 
            input.previousElementSibling?.textContent?.includes('Parking Fee')
        );

        return {
            propertyAmenities: selectedAmenities.filter(a => 
                !['Washer/Dryer', 'Laundry', 'Gas', 'Water', 'Electricity', 'Heat', 'Trash', 'Sewer', 'Cable', 'Air Conditioning'].some(term => a.includes(term))
            ),
            laundry: selectedAmenities.filter(a => a.includes('Washer') || a.includes('Laundry')),
            utilities: selectedAmenities.filter(a => 
                ['Gas', 'Water', 'Electricity', 'Heat', 'Trash Removal', 'Sewer', 'Cable', 'Air Conditioning'].some(term => a.includes(term))
            ),
            parking: {
                type: parkingSelect?.value || '',
                fee: parkingFeeInput?.value || ''
            },
            pets: {
                allowed: form.querySelector('input[name="pets"]')?.checked || false,
                type: form.querySelector('select')?.value || ''
            }
        };
    },

    // Collect data from Step 3 form
    collectStep3Data() {
        return {
            photos: [], // Would need file handling for actual photos
            virtualTours: [],
            videos: []
        };
    },

    // Collect data from Step 4 form
    collectStep4Data() {
        const form = document.querySelector('form') || document;
        const textarea = form.querySelector('textarea');
        return {
            description: textarea?.value || ''
        };
    },

    // Collect data from Step 5 form
    collectStep5Data() {
        const form = document.querySelector('form') || document;
        const inputs = form.querySelectorAll('input');
        const radios = form.querySelectorAll('input[type="radio"]:checked');

        return {
            contact: {
                firstName: inputs[0]?.value || 'Rita',
                lastName: inputs[1]?.value || 'Noriega',
                hideName: inputs[2]?.checked || false,
                role: radios[0]?.value || 'owner',
                email: inputs[3]?.value || 'zalocn@gmail.com',
                phone: inputs[4]?.value || ''
            }
        };
    },

    // Collect data from Step 6 form
    collectStep6Data() {
        const form = document.querySelector('form') || document;
        const checkboxes = form.querySelectorAll('input[type="checkbox"]');
        return {
            applications: {
                enabled: checkboxes[0]?.checked || false,
                agreementAccepted: checkboxes[1]?.checked || false
            }
        };
    },

    // Merge all step data into complete listing
    mergeListingData() {
        const step1 = this.collectStep1Data();
        const step2 = this.collectStep2Data();
        const step3 = this.collectStep3Data();
        const step4 = this.collectStep4Data();
        const step5 = this.collectStep5Data();
        const step6 = this.collectStep6Data();

        return {
            ...step1,
            ...step2,
            ...step3,
            ...step4,
            ...step5,
            ...step6
        };
    },

    // Publish listing (save and clear current)
    publishListing() {
        const listing = this.mergeListingData();
        const published = this.saveListing(listing);
        this.clearCurrentListing();
        return published;
    }
};

// Auto-save functionality for each step
function autoSaveStepData(stepNumber) {
    const current = ListingStorage.getCurrentListing() || {};
    let stepData = {};

    switch(stepNumber) {
        case 1:
            stepData = ListingStorage.collectStep1Data();
            break;
        case 2:
            stepData = ListingStorage.collectStep2Data();
            break;
        case 3:
            stepData = ListingStorage.collectStep3Data();
            break;
        case 4:
            stepData = ListingStorage.collectStep4Data();
            break;
        case 5:
            stepData = ListingStorage.collectStep5Data();
            break;
        case 6:
            stepData = ListingStorage.collectStep6Data();
            break;
    }

    const updated = { ...current, ...stepData };
    ListingStorage.saveCurrentListing(updated);
}

// Load saved data into form fields
function loadSavedData(stepNumber) {
    const saved = ListingStorage.getCurrentListing();
    if (!saved) return;

    // Load data based on step number
    // This would need to be customized per step
}
