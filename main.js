// ===== DATA =====
const destinations = [
    { id: 1, name: 'Paris', country: 'France', continent: 'europe', price: '₹99,600', rating: 4.9, reviews: 2841, description: 'The City of Light dazzles with iconic landmarks, world-class cuisine, and breathtaking art at every corner.', tags: ['Romance', 'Culture', 'Food'], image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'Santorini', country: 'Greece', continent: 'europe', price: '₹124,500', rating: 4.8, reviews: 1923, description: 'Iconic white-washed buildings perched over crystal-clear waters with the most stunning sunsets on earth.', tags: ['Romance', 'Beach', 'Views'], image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'Bali', country: 'Indonesia', continent: 'asia', price: '₹74,617', rating: 4.7, reviews: 3102, description: 'Tropical paradise with lush rice terraces, ancient temples, vibrant culture, and pristine beaches.', tags: ['Culture', 'Beach', 'Nature'], image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf4?auto=format&fit=crop&w=800&q=80' },
    { id: 4, name: 'Maldives', country: 'Maldives', continent: 'asia', price: '₹207,500', rating: 4.9, reviews: 1456, description: 'Ultimate luxury overwater villas surrounded by pristine beaches and the most stunning coral reefs.', tags: ['Luxury', 'Beach', 'Romance'], image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80' },
    { id: 5, name: 'Tokyo', country: 'Japan', continent: 'asia', price: '₹149,400', rating: 4.8, reviews: 2534, description: 'A perfect blend of ultra-modern technology and ancient traditions in Asia\'s most extraordinary city.', tags: ['Culture', 'Food', 'Technology'], image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80' },
    { id: 6, name: 'New York', country: 'USA', continent: 'america', price: '₹132,800', rating: 4.7, reviews: 4521, description: 'The city that never sleeps — iconic skyline, world-famous landmarks, shopping, and endless energy.', tags: ['City', 'Shopping', 'Entertainment'], image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80' },
    { id: 7, name: 'Machu Picchu', country: 'Peru', continent: 'america', price: '₹91,300', rating: 4.9, reviews: 1876, description: 'Ancient Inca citadel set high in the Andes Mountains offering breathtaking and mystical views.', tags: ['History', 'Adventure', 'Nature'], image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=800&q=80' },
    { id: 8, name: 'Kenya Safari', country: 'Kenya', continent: 'africa', price: '₹182,600', rating: 4.8, reviews: 1203, description: 'Experience the raw beauty of Africa on an unforgettable safari through the Maasai Mara plains.', tags: ['Wildlife', 'Adventure', 'Nature'], image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80' },
    { id: 9, name: 'Sydney', country: 'Australia', continent: 'oceania', price: '₹157,700', rating: 4.7, reviews: 2198, description: 'Vibrant harbour city with iconic Opera House, stunning beaches, and world-class dining and culture.', tags: ['City', 'Beach', 'Culture'], image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80' },
    { id: 10, name: 'Barcelona', country: 'Spain', continent: 'europe', price: '₹91,300', rating: 4.8, reviews: 2876, description: 'Gaudí\'s masterpieces, vibrant nightlife, sun-soaked beaches, and incredible tapas await.', tags: ['Culture', 'Food', 'Beach'], image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80' },
    { id: 11, name: 'Dubai', country: 'UAE', continent: 'asia', price: '₹166,000', rating: 4.8, reviews: 3201, description: 'Ultra-modern skyline, luxury shopping, desert adventures, and record-breaking attractions.', tags: ['Luxury', 'City', 'Adventure'], image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80' },
    { id: 12, name: 'Patagonia', country: 'Argentina', continent: 'america', price: '₹141,100', rating: 4.9, reviews: 987, description: 'Dramatic glaciers, majestic mountains, and untouched wilderness at the end of the world.', tags: ['Nature', 'Adventure', 'Trekking'], image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=800&q=80' }
];

const testimonials = [
    { name: 'Sarah Johnson', country: 'United States', rating: 5, text: 'Absolutely incredible experience! Our trip to Bali was perfectly planned. Every single detail was taken care of and we had the most magical time of our lives. Will definitely book again!', avatar: 'https://i.pravatar.cc/100?img=1' },
    { name: 'James Wilson', country: 'United Kingdom', rating: 5, text: 'The Santorini package exceeded all our expectations. The hotel views were absolutely stunning, tours were amazing, and the local guides were so knowledgeable. Best vacation of our lives!', avatar: 'https://i.pravatar.cc/100?img=3' },
    { name: 'Priya Sharma', country: 'India', rating: 5, text: 'Outstanding service from start to finish! The team helped us plan our Tokyo trip flawlessly. 24/7 support made us feel so secure throughout the entire journey. Highly recommended!', avatar: 'https://i.pravatar.cc/100?img=5' },
    { name: 'Carlos Rodriguez', country: 'Spain', rating: 5, text: 'The Maldives luxury package was worth every single penny. The overwater villa, crystal clear water, amazing food — pure paradise! I\'ve never felt so relaxed in my life.', avatar: 'https://i.pravatar.cc/100?img=8' },
    { name: 'Emma Thompson', country: 'Australia', rating: 5, text: 'From Paris to Rome, our European adventure was seamlessly organized. Every hotel, tour, and transfer was perfect. The personal concierge service was absolutely outstanding!', avatar: 'https://i.pravatar.cc/100?img=9' }
];

const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80', title: 'Paris at Night' },
    { url: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf4?auto=format&fit=crop&w=600&q=80', title: 'Bali Temple' },
    { url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80', title: 'Maldives Paradise' },
    { url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80', title: 'Great Wall of China' },
    { url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80', title: 'Santorini Sunset' },
    { url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80', title: 'Tokyo at Night' },
    { url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80', title: 'African Safari' },
    { url: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=600&q=80', title: 'Machu Picchu' },
    { url: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=600&q=80', title: 'Patagonia' },
    { url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80', title: 'Dubai Skyline' },
    { url: 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&w=600&q=80', title: 'Northern Lights' },
    { url: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=600&q=80', title: 'Barcelona Architecture' }
];

const blogPosts = [
    { title: '10 Hidden Gems in Southeast Asia', excerpt: 'Discover stunning landscapes and rich cultures of Southeast Asia\'s lesser-known destinations that will leave you absolutely breathless.', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=80', date: 'Feb 20, 2026', category: 'Asia', readTime: '5 min read' },
    { title: 'The Ultimate European Rail Travel Guide', excerpt: 'Everything you need to know about exploring Europe by train — passes, scenic routes, tips, and the most beautiful railway journeys.', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80', date: 'Feb 15, 2026', category: 'Europe', readTime: '8 min read' },
    { title: 'Budget Travel: Explore the Americas on ₹8,300/Day', excerpt: 'Discover how to experience the very best of the Americas without breaking the bank with our comprehensive budget travel guide.', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80', date: 'Feb 10, 2026', category: 'Americas', readTime: '6 min read' }
];

const chatbotResponses = {
    'summer': 'For summer travel, I highly recommend 🌅 Santorini (Greece), 🏝️ Bali (Indonesia), and 🏖️ the Maldives! These destinations offer perfect weather, stunning beaches, and incredible experiences from June to August.',
    'budget': '💰 Great budget tips: 1) Book flights 3-6 months ahead, 2) Travel shoulder season (Apr-May, Sep-Oct), 3) Stay in boutique guesthouses, 4) Use local transport, 5) Eat where locals eat! Check our Basic Explorer package starting at just ₹66,317!',
    'visa': '📋 Visa requirements vary by country. Generally, US/EU/UK passport holders can visit most destinations visa-free or with visa-on-arrival. I recommend checking official embassy websites or contact our team for specific guidance for your nationality.',
    'honeymoon': '💑 Perfect honeymoon destinations: 🌺 Maldives (overwater villas!), 🌄 Santorini (sunsets!), 🏯 Bali (romantic temples!), and 🗼 Paris (city of love!). We have special honeymoon packages — check our Luxury Escape!',
    'default': 'That\'s a great question! Our travel experts would love to give you personalized advice. You can also browse our destinations section, check our packages, or contact us through the Contact form. Is there anything specific I can help you with?',
    'paris': '🗼 Paris is magical! Best time to visit: April-June and September-October. Must-sees: Eiffel Tower, Louvre, Notre-Dame, Montmartre. We recommend 5-7 days minimum. Check our Europe packages!',
    'bali': '🌺 Bali is paradise! Best time: April-October (dry season). Don\'t miss: Ubud rice terraces, Tanah Lot temple, Seminyak beach, and Tegallalang. Our Basic Explorer package is perfect for Bali!',
    'maldives': '🏝️ The Maldives is pure luxury! Best time: November-April. Stay in an overwater bungalow for a once-in-a-lifetime experience. Snorkeling and diving are world-class. Check our Luxury Escape package!',
    'hello': '👋 Hello! Welcome to Explore the World! I\'m here to help you plan the perfect trip. Where would you like to travel?',
    'hi': '👋 Hi there! Ready to explore the world? Tell me your dream destination and I\'ll help you plan the perfect adventure!',
    'thank': '😊 You\'re welcome! Have a wonderful journey ahead. Feel free to ask me anything anytime. Happy travels! ✈️'
};

// ===== STATE =====
let currentSlide = 0, slides = [], slideInterval;
let currentTestimonial = 0;
let currentLightbox = 0;
let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
let currentTheme = localStorage.getItem('theme') || 'light';
let currentLang = 'en';
let selectedPackage = '';
let chatOpen = false;

const langTexts = {
    en: { heroTag: 'Welcome to Adventure', heroTitle: 'Discover Your<br><span class="hero-highlight">Next Adventure</span>', heroDesc: 'Explore breathtaking destinations, create unforgettable memories, and experience the world with expert guidance.', exploreBtn: 'Explore Now', bookBtn: 'Book a Trip' },
    fr: { heroTag: 'Bienvenue à l\'Aventure', heroTitle: 'Découvrez Votre<br><span class="hero-highlight">Prochaine Aventure</span>', heroDesc: 'Explorez des destinations époustouflantes et créez des souvenirs inoubliables.', exploreBtn: 'Explorer', bookBtn: 'Réserver' },
    es: { heroTag: 'Bienvenido a la Aventura', heroTitle: 'Descubre Tu<br><span class="hero-highlight">Próxima Aventura</span>', heroDesc: 'Explora destinos impresionantes y crea recuerdos inolvidables por el mundo.', exploreBtn: 'Explorar Ahora', bookBtn: 'Reservar Viaje' },
    de: { heroTag: 'Willkommen zum Abenteuer', heroTitle: 'Entdecke Dein<br><span class="hero-highlight">Nächstes Abenteuer</span>', heroDesc: 'Erkunde atemberaubende Ziele und schaffe unvergessliche Erinnerungen.', exploreBtn: 'Jetzt Erkunden', bookBtn: 'Reise Buchen' },
    hi: { heroTag: 'रोमांच में आपका स्वागत है', heroTitle: 'खोजें अपना<br><span class="hero-highlight">अगला साहसिक सफर</span>', heroDesc: 'दुनिया के शानदार स्थानों की खोज करें और अविस्मरणीय यादें बनाएं।', exploreBtn: 'अभी देखें', bookBtn: 'यात्रा बुक करें' }
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    initPreloader();
    initSlideshow();
    renderDestinations('all');
    renderTestimonials();
    renderGallery();
    renderBlog();
    initNavbar();
    initCounters();
    updateWishlistCount();
    convertCurrency();
    AOS.init({ duration: 800, once: true, offset: 60, easing: 'ease-out-cubic' });
});

// ===== PRELOADER =====
function initPreloader() {
    setTimeout(() => {
        const pre = document.getElementById('preloader');
        if (pre) pre.classList.add('hide');
    }, 2600);
}

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        const scrollBtn = document.getElementById('scrollTopBtn');
        if (scrollBtn) scrollBtn.classList.toggle('visible', window.scrollY > 400);
        // Active nav link
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    });
}

function toggleNav() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('open');
}

// ===== HERO SLIDESHOW =====
function initSlideshow() {
    slides = document.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('heroDots');
    if (!dotsContainer || !slides.length) return;
    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
        dot.onclick = () => goToSlide(i);
        dotsContainer.appendChild(dot);
    });
    startSlideshow();
}

function startSlideshow() {
    slideInterval = setInterval(() => nextSlide(), 5000);
}

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    document.querySelectorAll('.hero-dot')[currentSlide]?.classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.hero-dot')[currentSlide]?.classList.add('active');
}

function nextSlide() { clearInterval(slideInterval); goToSlide(currentSlide + 1); startSlideshow(); }
function prevSlide() { clearInterval(slideInterval); goToSlide(currentSlide - 1); startSlideshow(); }

// ===== THEME =====
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = document.getElementById('themeIcon');
    if (icon) { icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'; }
}

// ===== LANGUAGE =====
function changeLanguage(lang) {
    currentLang = lang;
    const t = langTexts[lang] || langTexts.en;
    const setHTML = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
    setHTML('heroTag', t.heroTag);
    setHTML('heroTitle', t.heroTitle);
    setHTML('heroDesc', t.heroDesc);
    setHTML('exploreBtn', `<span>${t.exploreBtn}</span><i class="fas fa-compass"></i>`);
    setHTML('bookBtn', `<span>${t.bookBtn}</span><i class="fas fa-plane"></i>`);
    showToast('Language changed', 'info', 'fas fa-globe');
}

// ===== SEARCH =====
function searchDestination() {
    const dest = document.getElementById('searchDest').value.trim();
    if (!dest) { showToast('Please enter a destination!', 'error', 'fas fa-exclamation-circle'); return; }
    const found = destinations.find(d => d.name.toLowerCase().includes(dest.toLowerCase()) || d.country.toLowerCase().includes(dest.toLowerCase()));
    if (found) {
        document.querySelector('#destinations').scrollIntoView({ behavior: 'smooth' });
        showToast(`Found: ${found.name}, ${found.country}!`, 'success', 'fas fa-map-marker-alt');
    } else {
        showToast('No destinations found. Try another search!', 'error', 'fas fa-search');
    }
}

// ===== DESTINATIONS =====
function renderDestinations(filter) {
    const grid = document.getElementById('destGrid');
    if (!grid) return;
    const filtered = filter === 'all' ? destinations : destinations.filter(d => d.continent === filter);
    grid.innerHTML = '';
    filtered.forEach((dest, i) => {
        const wished = wishlist.some(w => w.id === dest.id);
        const card = document.createElement('div');
        card.className = 'dest-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', String((i % 3) * 100));
        card.innerHTML = `
      <div class="dest-img-wrap">
        <img src="${dest.image}" alt="${dest.name}" loading="lazy">
        <div class="dest-overlay"></div>
        <div class="dest-badge">${dest.continent.charAt(0).toUpperCase() + dest.continent.slice(1)}</div>
        <button class="dest-wish-btn ${wished ? 'wished' : ''}" onclick="toggleWishlist(${dest.id}, event)" aria-label="Add to wishlist">
          <i class="${wished ? 'fas' : 'far'} fa-heart"></i>
        </button>
        <div class="dest-rating"><i class="fas fa-star"></i> ${dest.rating} (${Number(dest.reviews).toLocaleString()})</div>
      </div>
      <div class="dest-body">
        <div class="dest-location"><i class="fas fa-map-marker-alt"></i> ${dest.country}</div>
        <h3 class="dest-name">${dest.name}</h3>
        <div class="dest-tags">${dest.tags.map(t => `<span class="dest-tag">${t}</span>`).join('')}</div>
        <p class="dest-desc">${dest.description}</p>
        <div class="dest-footer">
          <div class="dest-price">${dest.price} <span>from</span></div>
          <button class="dest-btn" onclick="openBookingForDest('${dest.name}', '${dest.price}')">View Details</button>
        </div>
      </div>`;
        grid.appendChild(card);
    });
    AOS.refresh();
}

function filterDest(filter, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderDestinations(filter);
}

// ===== WISHLIST =====
function toggleWishlist(id, e) {
    e.stopPropagation();
    const dest = destinations.find(d => d.id === id);
    const idx = wishlist.findIndex(w => w.id === id);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast(`${dest.name} removed from wishlist`, 'info', 'fas fa-heart-broken');
    } else {
        wishlist.push(dest);
        showToast(`${dest.name} added to wishlist! ❤️`, 'success', 'fas fa-heart');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistCount();
    renderDestinations(document.querySelector('.filter-btn.active')?.textContent.toLowerCase() === 'all' ? 'all' : document.querySelector('.filter-btn.active')?.id.replace('filter-', ''));
}

function updateWishlistCount() {
    const el = document.getElementById('wishlistCount');
    if (el) el.textContent = wishlist.length;
}

function renderWishlist() {
    const container = document.getElementById('wishlistContent');
    if (!container) return;
    if (!wishlist.length) {
        container.innerHTML = `<div class="empty-wishlist"><i class="fas fa-heart-broken"></i><p>Your wishlist is empty.<br>Add destinations you love!</p></div>`;
        return;
    }
    container.innerHTML = wishlist.map(d => `
    <div class="wishlist-item">
      <img src="${d.image}" alt="${d.name}">
      <div class="wishlist-item-info"><h4>${d.name}</h4><p>${d.country} · ${d.price}</p></div>
      <button class="wishlist-remove-btn" onclick="toggleWishlist(${d.id}, event);renderWishlist();" aria-label="Remove"><i class="fas fa-trash"></i></button>
    </div>`).join('');
}

// ===== TESTIMONIALS =====
function renderTestimonials() {
    const track = document.getElementById('testimonialTrack');
    const dots = document.getElementById('testimonialDots');
    if (!track || !dots) return;
    track.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="t-content">
        <div class="t-stars">${'<i class="fas fa-star"></i>'.repeat(t.rating)}</div>
        <p class="t-text">"${t.text}"</p>
        <div class="t-author">
          <img class="t-avatar" src="${t.avatar}" alt="${t.name}" loading="lazy">
          <div><div class="t-name">${t.name}</div><div class="t-country"><i class="fas fa-map-marker-alt" style="color:var(--primary);margin-right:4px"></i>${t.country}</div></div>
        </div>
      </div>
    </div>`).join('');
    dots.innerHTML = testimonials.map((_, i) => `<div class="t-dot ${i === 0 ? 'active' : ''}" onclick="goToTestimonial(${i})"></div>`).join('');
    // Auto-rotate
    setInterval(() => nextTestimonial(), 6000);
}

function goToTestimonial(n) {
    currentTestimonial = (n + testimonials.length) % testimonials.length;
    document.getElementById('testimonialTrack').style.transform = `translateX(-${currentTestimonial * 100}%)`;
    document.querySelectorAll('.t-dot').forEach((d, i) => d.classList.toggle('active', i === currentTestimonial));
}
function nextTestimonial() { goToTestimonial(currentTestimonial + 1); }
function prevTestimonial() { goToTestimonial(currentTestimonial - 1); }

// ===== GALLERY =====
function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    grid.innerHTML = galleryImages.map((img, i) => `
    <div class="gallery-item" onclick="openLightbox(${i})" data-aos="fade-up" data-aos-delay="${(i % 4) * 80}">
      <img src="${img.url}" alt="${img.title}" loading="lazy">
      <div class="gallery-item-overlay"><i class="fas fa-expand"></i></div>
      <div class="gallery-caption">${img.title}</div>
    </div>`).join('');
}

function openLightbox(i) {
    currentLightbox = i;
    document.getElementById('lightboxImg').src = galleryImages[i].url;
    document.getElementById('lightboxCaption').textContent = galleryImages[i].title;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}
function prevLightbox() { currentLightbox = (currentLightbox - 1 + galleryImages.length) % galleryImages.length; openLightbox(currentLightbox); }
function nextLightbox() { currentLightbox = (currentLightbox + 1) % galleryImages.length; openLightbox(currentLightbox); }

// ===== BLOG =====
function renderBlog() {
    const grid = document.getElementById('blogGrid');
    if (!grid) return;
    grid.innerHTML = blogPosts.map((p, i) => `
    <div class="blog-card" data-aos="fade-up" data-aos-delay="${i * 120}">
      <div class="blog-img">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <span class="blog-cat">${p.category}</span>
      </div>
      <div class="blog-body">
        <div class="blog-meta"><span><i class="fas fa-calendar"></i> ${p.date}</span><span><i class="fas fa-clock"></i> ${p.readTime}</span></div>
        <h3 class="blog-title">${p.title}</h3>
        <p class="blog-excerpt">${p.excerpt}</p>
        <a href="#" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>`).join('');
}

// ===== COUNTERS =====
function initCounters() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const nums = entry.target.querySelectorAll('.stat-num[data-target]');
                nums.forEach(el => animateCounter(el));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);
}

function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const duration = 2000;
    const start = performance.now();
    const update = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        el.textContent = Math.floor(ease * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(update);
}

// ===== PACKAGES =====
function bookPackage(name, price) {
    selectedPackage = name;
    document.getElementById('bookingTitle').textContent = `Book: ${name}`;
    document.getElementById('bookingSubtitle').textContent = `Starting from ₹${price.toLocaleString()} per person`;
    document.getElementById('bookingSummary').innerHTML = `<strong>Package:</strong> ${name}<br><strong>Price:</strong> ₹${price.toLocaleString()}/person`;
    openModal('bookingModal');
}

function openBookingForDest(name, price) {
    document.getElementById('bookingTitle').textContent = `Book Trip to ${name}`;
    document.getElementById('bookingSubtitle').textContent = `${price} from/person`;
    document.getElementById('bookingSummary').innerHTML = `<strong>Destination:</strong> ${name}<br><strong>Starting from:</strong> ${price}/person`;
    openModal('bookingModal');
}

function submitBooking(e) {
    e.preventDefault();
    closeModal('bookingModal');
    showToast('🎉 Booking confirmed! We\'ll contact you shortly.', 'success', 'fas fa-check-circle');
}

// ===== CONTACT =====
function submitContact(e) {
    e.preventDefault();
    const name = document.getElementById('cName').value.trim();
    const email = document.getElementById('cEmail').value.trim();
    const msg = document.getElementById('cMessage').value.trim();
    let valid = true;
    if (!name) { document.getElementById('cNameErr').textContent = 'Name is required'; valid = false; }
    else document.getElementById('cNameErr').textContent = '';
    if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) { document.getElementById('cEmailErr').textContent = 'Valid email required'; valid = false; }
    else document.getElementById('cEmailErr').textContent = '';
    if (!msg) { document.getElementById('cMsgErr').textContent = 'Message is required'; valid = false; }
    else document.getElementById('cMsgErr').textContent = '';
    if (!valid) return;
    e.target.reset();
    showToast('✉️ Message sent! We\'ll reply within 24 hours.', 'success', 'fas fa-paper-plane');
}

// ===== NEWSLETTER =====
function subscribeNewsletter() {
    const emailEl = document.getElementById('nlEmail');
    const email = emailEl?.value.trim();
    if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) { showToast('Please enter a valid email!', 'error', 'fas fa-exclamation-circle'); return; }
    if (emailEl) emailEl.value = '';
    showToast('🎉 You\'re subscribed! Check your inbox for exclusive deals.', 'success', 'fas fa-envelope');
}

// ===== CURRENCY CONVERTER =====
const rates = { USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, INR: 83.1, AUD: 1.53, CAD: 1.36, AED: 3.67, SGD: 1.34 };

function convertCurrency() {
    const amount = parseFloat(document.getElementById('currAmount')?.value) || 0;
    const from = document.getElementById('currFrom')?.value || 'USD';
    const to = document.getElementById('currTo')?.value || 'EUR';
    const result = (amount / rates[from]) * rates[to];
    const resultEl = document.getElementById('currResult');
    const rateEl = document.getElementById('currRateDisplay');
    if (resultEl) resultEl.value = result.toFixed(2);
    const rate = (rates[to] / rates[from]).toFixed(4);
    if (rateEl) rateEl.innerHTML = `<strong>1 ${from} = ${rate} ${to}</strong><br><small>Rates are approximate</small>`;
}

function swapCurrency() {
    const fromEl = document.getElementById('currFrom');
    const toEl = document.getElementById('currTo');
    if (!fromEl || !toEl) return;
    [fromEl.value, toEl.value] = [toEl.value, fromEl.value];
    convertCurrency();
}

// ===== AUTH =====
function handleLogin(e) {
    e.preventDefault();
    closeModal('loginModal');
    showToast('🎉 Welcome back! You\'re logged in.', 'success', 'fas fa-user-check');
}

function handleSignup(e) {
    e.preventDefault();
    closeModal('signupModal');
    showToast('🎉 Account created! Welcome aboard!', 'success', 'fas fa-user-plus');
}

function togglePass(id) {
    const input = document.getElementById(id);
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
    const btn = input.nextElementSibling?.nextElementSibling;
    if (btn) btn.querySelector('i').className = input.type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
}

// ===== MODALS =====
function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (id === 'currencyModal') convertCurrency();
    if (id === 'wishlistModal') renderWishlist();
}
function closeModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}
function closeModalOutside(e, id) {
    if (e.target === e.currentTarget) closeModal(id);
}
function switchModals(from, to) { closeModal(from); setTimeout(() => openModal(to), 200); }

// ===== CHATBOT =====
function launchChatbot() {
    document.getElementById('chatbotLauncher').style.display = 'none';
    const bot = document.getElementById('chatbot');
    bot.style.display = 'block';
    setTimeout(() => { bot.classList.add('open'); chatOpen = true; }, 10);
}

function toggleChatbot() {
    const body = document.getElementById('chatbotBody');
    const chevron = document.getElementById('chatChevron');
    chatOpen = !chatOpen;
    body.style.display = chatOpen ? 'flex' : 'none';
    if (chevron) chevron.className = chatOpen ? 'fas fa-chevron-down' : 'fas fa-chevron-up';
}

function chatSend(text) {
    const input = document.getElementById('chatInput');
    const msg = text || input?.value.trim();
    if (!msg) return;
    if (input) input.value = '';
    appendChat(msg, 'user');
    const suggestions = document.getElementById('chatSuggestions');
    if (suggestions) suggestions.style.display = 'none';
    setTimeout(() => {
        const typing = appendTyping();
        setTimeout(() => {
            typing.remove();
            const response = getBotResponse(msg);
            appendChat(response, 'bot');
        }, 1200);
    }, 300);
}

function appendChat(msg, type) {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    const div = document.createElement('div');
    div.className = `chat-msg ${type}`;
    const avatar = type === 'bot' ? '<div class="chat-avatar"><i class="fas fa-robot"></i></div>' : '';
    div.innerHTML = `${avatar}<div class="chat-bubble">${msg}</div>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
}

function appendTyping() {
    const container = document.getElementById('chatMessages');
    const div = document.createElement('div');
    div.className = 'chat-msg bot';
    div.innerHTML = '<div class="chat-avatar"><i class="fas fa-robot"></i></div><div class="chat-bubble"><div class="chat-typing"><span></span><span></span><span></span></div></div>';
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
    return div;
}

function getBotResponse(msg) {
    const lower = msg.toLowerCase();
    for (const key of Object.keys(chatbotResponses)) {
        if (lower.includes(key)) return chatbotResponses[key];
    }
    return chatbotResponses.default;
}

function chatKeyPress(e) { if (e.key === 'Enter') chatSend(); }

// ===== SCROLL =====
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

// ===== TOAST =====
function showToast(msg, type = 'success', icon = 'fas fa-check-circle') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="${icon}"></i><span>${msg}</span>`;
    container.appendChild(toast);
    requestAnimationFrame(() => { requestAnimationFrame(() => toast.classList.add('show')); });
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// ===== KEYBOARD =====
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        ['loginModal', 'signupModal', 'currencyModal', 'wishlistModal', 'bookingModal'].forEach(id => closeModal(id));
        closeLightbox();
    }
    if (document.getElementById('lightbox').classList.contains('active')) {
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
    }
});
