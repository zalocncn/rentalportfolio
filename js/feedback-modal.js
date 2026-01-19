// Feedback Modal Functions
function openFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

// Star rating functionality
function setRating(rating) {
    const stars = document.querySelectorAll('.star-rating');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('text-yellow-400');
            star.classList.remove('text-zinc-300');
        } else {
            star.classList.remove('text-yellow-400');
            star.classList.add('text-zinc-300');
        }
    });
    const ratingInput = document.getElementById('rating');
    if (ratingInput) {
        ratingInput.value = rating;
    }
}

function submitFeedback() {
    // Collect form data
    const formData = {
        rating: document.getElementById('rating')?.value || 0,
        feedback: document.querySelector('textarea[name="feedback"]')?.value || '',
        topics: Array.from(document.querySelectorAll('input[name="topics"]:checked')).map(cb => cb.value),
        role: document.querySelector('input[name="role"]:checked')?.value || '',
        name: document.querySelector('input[name="name"]')?.value || '',
        email: document.querySelector('input[name="email"]')?.value || ''
    };

    // Here you would typically send the data to a server
    console.log('Feedback submitted:', formData);
    
    // Show success message and close modal
    alert('Thank you for your feedback!');
    closeFeedbackModal();
}

// Initialize feedback modal when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('fileInput');
    const fileDropZone = document.getElementById('fileDropZone');
    const fileList = document.getElementById('fileList');

    if (fileDropZone && fileInput) {
        fileDropZone.addEventListener('click', () => fileInput.click());
        
        fileDropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            fileDropZone.classList.add('border-emerald-500', 'bg-emerald-50');
        });
        
        fileDropZone.addEventListener('dragleave', () => {
            fileDropZone.classList.remove('border-emerald-500', 'bg-emerald-50');
        });
        
        fileDropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            fileDropZone.classList.remove('border-emerald-500', 'bg-emerald-50');
            handleFiles(e.dataTransfer.files);
        });

        fileInput.addEventListener('change', (e) => {
            handleFiles(e.target.files);
        });
    }

    function handleFiles(files) {
        if (!fileList) return;
        Array.from(files).forEach(file => {
            if (fileList.children.length < 5) {
                const fileItem = document.createElement('div');
                fileItem.className = 'flex items-center justify-between p-2 bg-zinc-50 rounded text-sm';
                fileItem.innerHTML = `
                    <span class="text-zinc-700">${file.name}</span>
                    <button onclick="this.parentElement.remove()" class="text-red-600 hover:text-red-700">
                        <iconify-icon icon="lucide:x" width="16"></iconify-icon>
                    </button>
                `;
                fileList.appendChild(fileItem);
            }
        });
    }

    // Show/hide "Other" text inputs
    const topicOther = document.getElementById('topicOther');
    const topicOtherText = document.getElementById('topicOtherText');
    const roleOther = document.getElementById('roleOther');
    const roleOtherText = document.getElementById('roleOtherText');

    if (topicOther && topicOtherText) {
        topicOther.addEventListener('change', function() {
            topicOtherText.classList.toggle('hidden', !this.checked);
        });
    }

    if (roleOther && roleOtherText) {
        roleOther.addEventListener('change', function() {
            roleOtherText.classList.toggle('hidden', !this.checked);
        });
    }

    // Close modal when clicking outside
    const feedbackModal = document.getElementById('feedbackModal');
    if (feedbackModal) {
        feedbackModal.addEventListener('click', (e) => {
            if (e.target.id === 'feedbackModal') {
                closeFeedbackModal();
            }
        });
    }
});
