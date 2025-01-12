const products = [
    // Page 1
    {
        id: 1,
        name: "Jordan 4 Black Cats",
        brand: "Nike",
        price: 79.99,
        image: "https://i.ibb.co/v3yvbn4/1-removebg-preview.png",
        sizes: [7, 8, 9, 10, 11],
        reviews: [
            { rating: 5, comment: "Best sneakers ever!" },
            { rating: 4, comment: "Stylish and comfortable." }
        ]
    },
    {
        id: 2,
        name: "Balenciaga Track Runners LED",
        brand: "Balenciaga",
        price: 85.00,
        image: "https://i.ibb.co/vLMhxSz/OIP-3-removebg-preview.png",
        sizes: [6, 7, 8, 9, 10, 11],
        reviews: [
            { rating: 4, comment: "Great quality!" },
            { rating: 5, comment: "I love these!" }
        ]
    },
    {
        id: 3,
        name: "Off-White's out of office red",
        brand: "Off White",
        price: 50.00,
        image: "https://i.ibb.co/19c3hx8/OIP-4-removebg-preview.png",
        sizes: [7, 8, 9, 10, 11],
        reviews: [
            { rating: 5, comment: "My favorite shoes!" },
            { rating: 4, comment: "Highly recommend these." }
        ]
    },
    {
        id: 4,
        name: "Dior 1's",
        brand: "Dior",
        price: 65.00,
        image: "https://i.ibb.co/L6Hz0fR/OIP-5-removebg-preview.png",
        sizes: [7, 8, 9, 10, 11],
        reviews: []
    },
    {
        id: 5,
        name: "Dior CD B30 - Low ",
        brand: "Dior",
        price: 90.00,
        image: "https://i.ibb.co/JqfyDzR/download-1-removebg-preview.png",
        sizes: [6, 7, 8, 9, 10, 11],
        reviews: [
            { rating: 5, comment: "Classic style!" }
        ]
    },
    {
        id: 6,
        name: "Balenciaga Runners - Black",
        brand: "Balenciaga",
        price: 60.00,
        image: "https://i.ibb.co/Jnr246W/th-removebg-preview.png",
        sizes: [6, 7, 8, 9, 10, 11],
        reviews: [
            { rating: 4, comment: "Good for winter." }
        ]
    },
    {
        id: 7,
        name: "Lanvins Curb Black",
        brand: "Lanvins",
        price: 65.00,
        image: "https://i.ibb.co/QFtV1vm/OIP-7-removebg-preview.png",
        sizes: [6, 7, 8, 9, 10, 11],
        reviews: []
    },
    {
        id: 8,
        name: "Amiri's Skeleton",
        brand: "Amiri",
        price: 60.00,
        image: "https://i.ibb.co/rmrpYK3/OPHS-removebg-preview.png",
        sizes: [6, 7, 8, 9, 10, 11],
        reviews: []
    },
    {
        id: 9,
        name: "Dior B30 - Black",
        brand: "Dior",
        price: 90.00,
        image: "https://i.ibb.co/R4kHP6j/IMG-0068.png",
        sizes: [7, 8, 9, 10, 11],
        reviews: [
            { rating: 5, comment: "Best running shoes!" },
            { rating: 4, comment: "Very supportive." }
        ]
    },
    {
        id: 10,
        name: "Travis Scott Black Phanthom",
        brand: "Nike",
        price: 40.00,
        image: "https://i.ibb.co/n7cRTyw/th-1-removebg-preview.png",
        sizes: [6, 7, 8, 9, 10, 11],
        reviews: []
    },
    // Page 2
    {
        id: 11,
        name: "Jordan 4 Off-White",
        brand: "Off White x Jordan",
        price: 60.00,
        image: "https://i.ibb.co/XXBQT0D/OIP-8-removebg-preview.png",
        sizes: [7, 8, 9, 10, 11],
        reviews: []
    },
    {
        id: 12,
        name: "LV Trainers",
        brand: "Louis Vuitton",
        price: 75.00,
        image: "https://i.ibb.co/Tvh6BDK/IMG-0072.jpg",
        sizes: [7, 8, 9, 10, 11],
        reviews: []
    },
    {
        id: 13,
        name: "Jordan 4 Thunders",
        brand: "Jordans",
        price: 50.00,
        image: "https://i.ibb.co/tLN7YR5/IMG-0076.png",
        sizes: [6, 7, 8, 9, 10, 11],
        reviews: []
    },
    {
        id: 14,
        name: "Rick Owens DRKSHDW - Lows",
        brand: "Rick Owens",
        price: 60.00,
        image: "https://i.ibb.co/XZthFwt/OIP-9-removebg-preview.png",
        sizes: [6, 7, 8, 9, 10],
        reviews: []
    },
    {
        id: 15,
        name: "Balenciaga Track 2021",
        brand: "Balenciaga",
        price: 80.00,
        image: "https://i.ibb.co/v499HtQ/OIP-10-removebg-preview.png",
        sizes: [7, 8, 9, 10, 11],
        reviews: []
    },
    {
        id: 16,
        name: "Jordan 4 Military Black",
        brand: "Jordans",
        price: 55.00,
        image: "https://i.ibb.co/Jtg38vg/OIP-11-removebg-preview.png",
        sizes: [6, 7, 8, 9],
        reviews: []
    },
    {
        id: 17,
        name: "Jordan 4 Pure Money's",
        brand: "Jordans",
        price: 65.00,
        image: "https://i.ibb.co/MgzPN2f/download-2-removebg-preview.png",
        sizes: [7, 8, 9, 10, 11],
        reviews: []
    },
];

// Global State
let currentPage = 1;
const itemsPerPage = 12;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedCategory = 'All';
let selectedSizes = {};

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartItemsDisplay = document.getElementById('cartItems');
const closeCartBtn = document.querySelector('.close-cart');
const checkoutBtn = document.getElementById('checkoutBtn');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageNumbers = document.getElementById('pageNumbers');
const cartTotalDisplay = document.getElementById('cartTotal'); // Display total

// Function to initialize products
function initializeProducts() {
    if (products.length === 0) {
        products.push({
            id: 1,
            name: "Sample Sneakers",
            brand: "Goated",
            price: 99.99,
            image: "https://via.placeholder.com/150",
            sizes: [6, 7, 8, 9, 10, 11, 12, 13],
            reviews: []
        });
    }
}

// Cart Functions
function openCart() {
    cartSidebar.classList.add('open');
    updateCartDisplay();
}

function closeCart() {
    cartSidebar.classList.remove('open');
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.length;
}

function addToCart(productId, size) {
    if (!size) {
        showToast('Please select a size');
        return;
    }

    const product = products.find(p => p.id === productId);
    cart.push({ ...product, size });
    
    // Calculate and store only the total price
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    localStorage.setItem('cartTotal', total.toFixed(2));
    
    updateCartCount();
    updateCartDisplay();
    showToast(`${product.name} (Size US ${size}) added to cart`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    
    // Update total price in localStorage
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    localStorage.setItem('cartTotal', total.toFixed(2));
    
    updateCartCount();
    updateCartDisplay();
}

function updateCartDisplay() {
    cartItemsDisplay.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div>
                <p>${item.name}</p>
                <p class="text-sm text-gray-400">Size: US ${item.size}</p>
                <p class="text-sm">$${item.price.toFixed(2)}</p>
            </div>
            <button onclick="removeFromCart(${index})" class="remove-btn">Remove</button>
        </div>
    `).join('');

    updateCartTotal();
}

function updateCartTotal() {
    if (!cartTotalDisplay) return;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalDisplay.innerText = `Total: $${total.toFixed(2)}`;
    localStorage.setItem('cartTotal', total.toFixed(2));
}
// Function to display products
function displayProducts(products) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    productsGrid.innerHTML = currentProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <p class="product-brand">${product.brand}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <div class="star-rating">
                    ${getStarRating(product.reviews)}
                </div>
                <p class="product-reviews" onclick="showReviews(${product.id})">
                    ${product.reviews.length} review${product.reviews.length === 1 ? '' : 's'}
                </p>
                <div class="size-grid">
                    ${(product.sizes || []).map(size => `
                        <button class="size-btn" 
                                onclick="selectSize(${product.id}, ${size})"
                                data-product="${product.id}"
                                data-size="${size}">
                            US ${size}
                        </button>
                    `).join('')}
                </div>
                <button class="add-to-cart-btn" 
                        onclick="addToCart(${product.id}, selectedSizes[${product.id}])">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    updatePagination(products.length);
}

// Function to generate star ratings
function getStarRating(reviews) {
    if (reviews.length === 0) return '';

    const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    const stars = Math.round(averageRating);
    return Array.from({ length: 5 }, (_, i) => `
        <i class="fas fa-star ${i < stars ? 'filled' : ''}"></i>
    `).join('');
}

function selectSize(productId, size) {
    selectedSizes[productId] = size;
    
    document.querySelectorAll(`[data-product="${productId}"]`).forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelector(`[data-product="${productId}"][data-size="${size}"]`)
        .classList.add('selected');
}

// Show Reviews Functionality
function showReviews(productId) {
    const product = products.find(p => p.id === productId);
    const reviewsText = product.reviews.length > 0 ?
        product.reviews.map(review => `Rating: ${review.rating} - Comment: ${review.comment}`).join('<br>') :
        'No reviews yet.';
    
    alert(`Reviews for ${product.name}:\n${reviewsText}`);
}

// Filter and Search Functions
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    let filtered = products;

    if (selectedCategory !== 'All') {
        filtered = filtered.filter(product => product.brand === selectedCategory);
    }

    if (searchTerm) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm)
        );
    }

    return filtered;
}

// Pagination Functions
function updatePagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    pageNumbers.innerHTML = Array.from({ length: totalPages }, (_, i) => i + 1)
        .map(num => `
            <button class="page-number ${num === currentPage ? 'active' : ''}"
                    onclick="goToPage(${num})">
                ${num}
            </button>
        `).join('');

    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

function goToPage(page) {
    currentPage = page;
    displayProducts(filterProducts());
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Event Listeners
cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
checkoutBtn.addEventListener('click', () => {
    window.location.href = 'xd.html';
});

searchInput.addEventListener('input', () => {
    currentPage = 1;
    displayProducts(filterProducts());
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedCategory = btn.dataset.category;
        currentPage = 1;
        displayProducts(filterProducts());
    });
});

prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
});

nextPageBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(filterProducts().length / itemsPerPage);
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
    displayProducts(products);
    updateCartTotal(); // Ensure this is called after the DOM is ready
});
