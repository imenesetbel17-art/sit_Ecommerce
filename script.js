// DONNÉES PRODUITS - 30 FLEURS / BOUQUETS
const produits = [
    { id: 1, nom: "Éclat Royal", categorie: "Roses Éternelles ", prix: 890, image:"https://images.unsplash.com/photo-1495231916356-a86217efff12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJvc2V8ZW58MHx8MHx8fDA%3D"},
    { id: 2, nom: "Rouge Passion", categorie: "Roses Éternelles", prix: 750, image: " https://images.unsplash.com/photo-1582862058398-c157c8424b54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b3JjaGlkZWV8ZW58MHx8MHx8fDA%3D  " },
    { id: 3, nom: "Bohème Sauvage", categorie: "Compositions Bohème", prix: 620, image: "https://plus.unsplash.com/premium_photo-1725880496145-792ce8798665?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsZXVyJTIwQm9oJUMzJUE4bWUlMjBTYXV2YWdlfGVufDB8fDB8fHww" },
    { id: 4, nom: "Cœur de Rose", categorie: "Roses Éternelles", prix: 900, image: "https://images.unsplash.com/photo-1583846712268-a77d97b7fd68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JjaGlkZWV8ZW58MHx8MHx8fDA%3D   " },
    { id: 5, nom: "Prestige Doré", categorie: "Bouquets Royaux", prix: 15900, image: " https://plus.unsplash.com/premium_photo-1669997826684-785d9039f547?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9zZSUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D  " },
    { id: 6, nom: "Champêtre Chic", categorie: "Compositions Bohème", prix: 540, image: " https://images.unsplash.com/photo-1619962992057-be492a5816f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHR1bGlwZXxlbnwwfHwwfHx8MA%3D%3D " },
    { id: 7, nom: "Amour Infini", categorie: "Roses Éternelles", prix: 970, image: " https://images.unsplash.com/photo-1501973931234-5ac2964cd94a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx5c3xlbnwwfHwwfHx8MA%3D%3D  " },
    { id: 8, nom: "Majesté Impériale", categorie: "Bouquets Royaux", prix: 18500, image: "https://images.unsplash.com/photo-1622307013731-2a01a23d7f45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxtZWlsbGV1ciUyMGJvdXF1ZXQlMjBkZSUyMGZsZXVyfGVufDB8fDB8fHww  " },
    { id: 9, nom: "Liberté Florale", categorie: "Compositions Bohème", prix: 680, image: "https://plus.unsplash.com/premium_photo-1663133512036-06b1885ab1a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHR1bGlwZXxlbnwwfHwwfHx8MA%3D%3D "},
    { id: 10, nom: "Velours Pourpre", categorie: "Roses Éternelles", prix: 700, image: "https://images.unsplash.com/photo-1551829142-d9b8cf2c9232?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VyaXNpZXIlMjBkdSUyMGphcG9ufGVufDB8fDB8fHww  " },
    { id: 11, nom: "Or et Lys", categorie: "Bouquets Royaux", prix: 13900, image: " https://images.unsplash.com/photo-1613892877923-a79f99f6ad10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmxldXIlMjBkZSUyMGdhcmRlbmlhfGVufDB8fDB8fHww" },
    { id: 12, nom: "Rêve d'été", categorie: "Compositions Bohème", prix: 590, image: "https://plus.unsplash.com/premium_photo-1688045713393-53ed4a31202b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHJvc2UqfGVufDB8fDB8fHww " },
    { id: 13, nom: "Éclat de minuit", categorie: "Bouquets Royaux", prix: 19900, image: " https://images.unsplash.com/photo-1518709779341-56cf4535e94b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJvc2UqfGVufDB8fDB8fHww " },
    { id: 14, nom: "Rose Éternelle blush", categorie: "Roses Éternelles", prix: 830, image: " https://plus.unsplash.com/premium_photo-1688045632668-9ccd510cf164?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFzbWlufGVufDB8fDB8fHww " },
    { id: 15, nom: "Fleur de Lin", categorie: "Compositions Bohème", prix: 490, image: " https://plus.unsplash.com/premium_photo-1674343963928-d67007d2ae74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGphc21pbnxlbnwwfHwwfHx8MA%3D%3D "},
    { id: 16, nom: "Trianon", categorie: "Bouquets Royaux", prix: 14600, image: " https://plus.unsplash.com/premium_photo-1703369351133-ae15759133fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHJvc2UqfGVufDB8fDB8fHww  " },
    { id: 17, nom: "Rose de Sable", categorie: "Roses Éternelles", prix: 1050, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS5ifGv31alypPo1wnFtdjPynvIkAvkvNoaA&s " },
    { id: 18, nom: "Esprit Libre", categorie: "Compositions Bohème", prix: 720, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-PIFsMX4KoMzT834fQR2MV5XsFhf3MxgiXw&s " },
    { id: 19, nom: "Vicomte", categorie: "Bouquets Royaux", prix: 16400, image:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jh6gmICCj4YsxhC0q6kMxBhMmH5fFg_o1g&s " },
    { id: 20, nom: "Cœur de Velours", categorie: "Roses Éternelles", prix: 800, image: "https://images.pexels.com/photos/8522729/pexels-photo-8522729.jpeg " },
    { id: 21, nom: "Jardin Secret", categorie: "Compositions Bohème", prix: 670, image: "https://images.unsplash.com/photo-1593047833652-2ae65f74b22f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxseXN8ZW58MHx8MHx8fDA%3D  " },
    { id: 22, nom: "Suprême Abricot", categorie: "Bouquets Royaux", prix: 15300, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDdWt9xqbcHvKUCl9q4hxFiWIjFqlgw3GdA&s=600 " },
    { id: 23, nom: "Rêve d'Ambre", categorie: "Roses Éternelles", prix: 990, image: "https://images.unsplash.com/photo-1712260759129-0da6dbcd312b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxseXN8ZW58MHx8MHx8fDA%3D  " },
    { id: 24, nom: "Fleur de Coton", categorie: "Compositions Bohème", prix: 530, image: "https://images.unsplash.com/photo-1547098842-dcdd773e3390?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVhY2UlMjBmbGV1cnxlbnwwfHwwfHx8MA%3D%3D " },
    { id: 25, nom: "Coup de Cœur", categorie: "Bouquets Royaux", prix: 17700, image: "https://images.unsplash.com/photo-1615385639736-362b69696227?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvdXF1ZXQlMjB0dWxpcHxlbnwwfHwwfHx8MA%3D%3D " },
    { id: 26, nom: "Secret d'Atelier", categorie: "Roses Éternelles", prix: 900, image: "https://images.unsplash.com/photo-1650596622683-74218b233e26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxseXN8ZW58MHx8MHx8fDA%3D  " },
    { id: 27, nom: "Herbier Moderne", categorie: "Compositions Bohème", prix: 600, image:  " https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3JhbHxlbnwwfHwwfHx8MA%3D%3D " },
    { id: 28, nom: "Merveille d'Or", categorie: "Bouquets Royaux", prix: 22100, image: " https://plus.unsplash.com/premium_photo-1713823800827-4c10d4d37585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym91cXVldCUyMGZsZXVyfGVufDB8fDB8fHww  " },
    { id: 29, nom: "Ardent Désir", categorie: "Roses Éternelles", prix: 800, image: "https://plus.unsplash.com/premium_photo-1677178628425-84a64dc416b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3JhbHxlbnwwfHwwfHx8MA%3D%3D  " },
    { id: 30, nom: "Pivoine Enchantée", categorie: "Compositions Bohème", prix: 800, image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmxldXJpcnxlbnwwfHwwfHx8MA%3D%3D " },
];

// GESTION UTILISATEURS
let users = JSON.parse(localStorage.getItem("florist_users")) || [
    { email: "demo@fleurs.com", password: "123456", nom: "Laila Benali" }
];
function saveUsers() { localStorage.setItem("florist_users", JSON.stringify(users)); }

// SESSION
let currentUser = JSON.parse(sessionStorage.getItem("florist_session")) || null;

// PANIER
let cart = JSON.parse(localStorage.getItem("florist_cart")) || [];
function updateCartStorage() { localStorage.setItem("florist_cart", JSON.stringify(cart)); }

// THÈME JOUR/NUIT
const themeToggle = document.getElementById('themeToggle');
if(themeToggle) {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if(darkMode) document.body.setAttribute('data-theme', 'dark');
    themeToggle.checked = darkMode;
    themeToggle.addEventListener('change', (e) => {
        if(e.target.checked) {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('darkMode', 'false');
        }
    });
}

// MISE À JOUR NAVBAR
function updateNavForSession() {
    const profileNav = document.getElementById('profileNav');
    if(currentUser && profileNav) {
        profileNav.style.display = 'block';
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            if(link.getAttribute('href') === 'login.html' || link.getAttribute('href') === 'register.html')
                if(link.parentElement) link.parentElement.style.display = 'none';
        });
    } else if(profileNav) {
        profileNav.style.display = 'none';
        document.querySelectorAll('.nav-links li').forEach(li => li.style.display = 'list-item');
    }
}

// AJOUT AU PANIER
function attachCartEvents() {
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(!currentUser) { 
                alert("Veuillez vous connecter pour ajouter au panier"); 
                window.location.href = "login.html"; 
                return; 
            }
            const id = parseInt(btn.dataset.id);
            const product = produits.find(p => p.id === id);
            if(product) {
                cart.push(product);
                updateCartStorage();
                alert(`${product.nom} ajouté à votre panier (${cart.length} article(s))`);
            }
        });
    });
}

// PAGE ACCUEIL - APERÇU
function loadPreview() {
    const previewGrid = document.getElementById('previewGrid');
    if(previewGrid) {
        const topProducts = produits.slice(0, 4);
        previewGrid.innerHTML = topProducts.map(p => `
            <div class="product-card">
                <img src="${p.image}" alt="${p.nom}">
                <h3>${p.nom}</h3>
                <p class="price">${p.prix} DZD</p>
                <button class="add-to-cart" data-id="${p.id}">Ajouter au panier</button>
            </div>
        `).join('');
        attachCartEvents();
    }
}

// PAGE PRODUITS - FILTRAGE
function displayProducts(category = "Tous") {
    const container = document.getElementById('productsContainer');
    if(!container) return;
    let filtered = category === "Tous" ? produits : produits.filter(p => p.categorie === category);
    container.innerHTML = filtered.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.nom}">
            <h3>${p.nom}</h3>
            <p class="price">${p.prix} DZD</p>
            <button class="add-to-cart" data-id="${p.id}">🛍️ Ajouter au panier</button>
        </div>
    `).join('');
    attachCartEvents();
}

// INITIALISATION PAGE PRODUITS
if(window.location.pathname.includes("products.html")) {
    window.addEventListener('DOMContentLoaded', () => {
        displayProducts("Tous");
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active-filter'));
                btn.classList.add('active-filter');
                displayProducts(btn.dataset.cat);
            });
        });
    });
}

// ========== PAGE INSCRIPTION AVEC CONNEXION AUTOMATIQUE ==========
if(window.location.pathname.includes("register.html")) {
    const form = document.getElementById('registerForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('regEmail').value.trim();
            const pwd = document.getElementById('regPwd').value;
            const name = document.getElementById('regName').value.trim();
            
            // Validation email avec Regex
            const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
            if(!emailRegex.test(email)) {
                alert("❌ Email invalide. Exemple: nom@domaine.com");
                return;
            }
            
            // Validation mot de passe
            if(pwd.length < 4) {
                alert("❌ Mot de passe trop court (minimum 4 caractères)");
                return;
            }
            
            // Vérification email unique
            if(users.find(u => u.email === email)) {
                alert("❌ Cet email est déjà utilisé");
                return;
            }
            
            // Création du nouvel utilisateur
            const newUser = { email, password: pwd, nom: name };
            users.push(newUser);
            saveUsers();
            
            // CONNEXION AUTOMATIQUE (simulation)
            currentUser = newUser;
            sessionStorage.setItem("florist_session", JSON.stringify(newUser));
            
            alert(`✨ Bienvenue ${name} ! Votre compte a été créé avec succès. ✨`);
            
            // Redirection directe vers le profil (déjà connecté)
            window.location.href = "profile.html";
        });
    }
}

// ========== PAGE CONNEXION (inchangée, fonctionne normalement) ==========
if(window.location.pathname.includes("login.html")) {
    const form = document.getElementById('loginForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value.trim();
            const pwd = document.getElementById('loginPwd').value;
            const user = users.find(u => u.email === email && u.password === pwd);
            if(user) {
                currentUser = user;
                sessionStorage.setItem("florist_session", JSON.stringify(user));
                alert(`🌸 Bon retour ${user.nom} ! 🌸`);
                window.location.href = "profile.html";
            } else {
                alert("❌ Email ou mot de passe incorrect");
            }
        });
    }
}

// PAGE PROFIL + PANIER
if(window.location.pathname.includes("profile.html")) {
    if(!currentUser) window.location.href = "login.html";
    window.addEventListener('DOMContentLoaded', () => {
        document.getElementById('userName').innerText = currentUser.nom;
        document.getElementById('userEmail').innerText = currentUser.email;
        
        function renderCart() {
            const cartItemsDiv = document.getElementById('cartItems');
            const totalSpan = document.getElementById('cartTotal');
            if(cart.length === 0) { 
                cartItemsDiv.innerHTML = "<p>✨ Votre panier est vide, laissez-vous tenter par nos fleurs ✨</p>"; 
                totalSpan.innerText = "0"; 
                return; 
            }
            let total = 0;
            cartItemsDiv.innerHTML = cart.map((item, idx) => {
                total += item.prix;
                return `<div>${item.nom} - ${item.prix} DZD <button class="remove-item" data-index="${idx}">❌ Retirer</button></div>`;
            }).join('');
            totalSpan.innerText = total;
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = parseInt(btn.dataset.index);
                    cart.splice(idx, 1);
                    updateCartStorage();
                    renderCart();
                });
            });
        }
        renderCart();
        
        document.getElementById('emptyCart')?.addEventListener('click', () => {
            cart = [];
            updateCartStorage();
            renderCart();
        });
        
        document.getElementById('checkoutBtn')?.addEventListener('click', () => {
            if(cart.length === 0) alert("Votre panier est vide");
            else alert(`✅ Commande simulée ! Total: ${document.getElementById('cartTotal').innerText} DZD. Paiement à la livraison (Algérie). Merci pour votre confiance !`);
        });
        
        document.getElementById('logoutBtn')?.addEventListener('click', () => {
            sessionStorage.removeItem("florist_session");
            window.location.href = "index.html";
        });
    });
}

// MENU BURGER + INITIALISATIONS GLOBALES
document.addEventListener('DOMContentLoaded', () => {
    updateNavForSession();
    const burger = document.getElementById('burgerMenu');
    const nav = document.getElementById('navLinks');
    if(burger && nav) {
        burger.addEventListener('click', () => nav.classList.toggle('active'));
    }
    if(window.location.pathname.endsWith("index.html") || window.location.pathname === "/" || window.location.pathname.endsWith("/")) {
        loadPreview();
    }
    
    // Catégories cliquables sur accueil
    document.querySelectorAll('.cat-card').forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-cat');
            if(cat && window.location.pathname.includes("index.html")) {
                window.location.href = `products.html?cat=${encodeURIComponent(cat)}`;
            }
        });
    });
    
    // Paramètre URL pour filtrage auto
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    if(catParam && window.location.pathname.includes("products.html")) {
        setTimeout(() => {
            const btn = [...document.querySelectorAll('.filter-btn')].find(b => b.dataset.cat === catParam);
            if(btn) btn.click();
        }, 100);
    }
});