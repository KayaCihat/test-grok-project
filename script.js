// Kaya Core Marketing Site - Professional Script

// Product Data
const products = [
    {
        icon: "⚡",
        name: "Xcelerate",
        status: "LIVE • 99.98% UPTIME",
        desc: "The fastest AI-native recruiting platform. Matches candidates in under 3 seconds using edge RAG.",
        tech: ["Cloudflare", "React"],
        link: "https://xcelerate.work",
        linkText: "VISIT LIVE",
        metrics: "12.4k matches today • 4.2s avg"
    },
    {
        icon: "💬",
        name: "Praatbox",
        status: "LIVE",
        desc: "Voice-first AI companion for Dutch professionals. Real-time transcription + intelligent follow-ups.",
        tech: ["Whisper", "RAG"],
        link: "https://praatbox.com",
        linkText: "VISIT LIVE",
        metrics: null
    },
    {
        icon: "📊",
        name: "Boekhoud Buddies",
        status: "LIVE • €18.4K TODAY",
        desc: "Zero-friction invoicing for Dutch freelancers (ZZP). AI that understands Dutch tax rules.",
        tech: ["Stripe", "D1"],
        link: "https://boekhoudbuddies.com",
        linkText: "VISIT LIVE",
        metrics: null
    },
    {
        icon: "📄",
        name: "QuickResume",
        status: "LIVE",
        desc: "AI resume builder that actually gets interviews. Tailored for the Dutch job market.",
        tech: ["Grok", "PDF"],
        link: "https://quickresume.cc",
        linkText: "VISIT LIVE",
        metrics: null
    },
    {
        icon: "📦",
        name: "Handlebox",
        status: "LAUNCHING SOON",
        desc: "The ultimate client portal for freelancers. Contracts, payments, and communication in one place.",
        tech: [],
        link: "#",
        linkText: "REQUEST EARLY ACCESS",
        isBeta: true,
        metrics: null
    },
    {
        icon: "🎵",
        name: "Aether Drift",
        status: "LIVE",
        desc: "AI music studio for independent artists. Generate, master, and release tracks on-chain.",
        tech: ["Suno", "On-chain"],
        link: "https://aetherdriftrecords.com",
        linkText: "MINT ON-CHAIN",
        metrics: null
    }
];

// Render Products
function renderProducts() {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-header">
                <div class="product-icon">${product.icon}</div>
                <div class="product-meta">
                    <div class="product-name">${product.name}</div>
                    <div class="product-status">${product.status}</div>
                </div>
            </div>
            
            <div class="product-desc">${product.desc}</div>
            
            <div class="product-footer">
                <div class="tech-tags">
                    ${product.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
                
                ${product.isBeta ? 
                    `<button onclick="requestAccess(this)" class="btn btn-ghost" style="padding: 8px 20px; font-size: 12px;">
                        ${product.linkText}
                    </button>` : 
                    `<a href="${product.link}" target="_blank" class="text-sm flex items-center gap-1.5 hover:text-[#00f5ff] transition-colors">
                        ${product.linkText} <i class="fas fa-external-link-alt ml-1"></i>
                    </a>`
                }
            </div>
            
            ${product.metrics ? `
                <div class="mt-6 pt-6 border-t border-white/10 flex justify-between text-xs text-zinc-400">
                    <div>${product.metrics}</div>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// Boot OS Terminal
function bootOS() {
    const terminal = document.createElement('div');
    terminal.style.cssText = 'position:fixed;inset:0;background:#000;z-index:200;display:flex;align-items:center;justify-content:center;padding:2rem;';
    
    terminal.innerHTML = `
        <div style="max-width:620px;width:100%;">
            <div style="background:#111113;border:1px solid #166534;border-radius:24px;padding:40px 32px;font-family:monospace;color:#4ade80;font-size:13px;line-height:1.7;">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:28px;color:#22c173;">
                    <div style="width:10px;height:10px;background:#22c173;border-radius:50%;"></div>
                    <div>KAYA CORE v26.05 — SECURE BOOT</div>
                </div>
                
                <div style="margin-bottom:8px;">Initializing edge runtime...</div>
                <div style="color:#4ade80;">✓ Cloudflare Workers connected</div>
                <div style="color:#4ade80;">✓ D1 database synced</div>
                <div style="color:#4ade80;">✓ AI models loaded (Grok + Whisper)</div>
                
                <div style="margin:24px 0 8px;">Booting personal operating system...</div>
                
                <div style="margin-top:32px;color:white;">Welcome back, Cihat.</div>
                <div style="color:#4ade80;">You have 6 products running at 99.98% uptime.</div>
                
                <div style="margin-top:48px;font-size:11px;color:#3f3f46;">Press any key or click to exit</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(terminal);
    
    const close = () => {
        terminal.style.transition = 'opacity .3s';
        terminal.style.opacity = '0';
        setTimeout(() => terminal.remove(), 300);
    };
    
    terminal.onclick = close;
    document.addEventListener('keydown', close, { once: true });
}

// Request Access
function requestAccess(element) {
    if (element) {
        element.innerHTML = '<i class="fas fa-check"></i> REQUEST SENT';
        element.style.background = '#166534';
        element.style.borderColor = '#166534';
        element.style.color = 'white';
        element.disabled = true;
    }
    
    setTimeout(() => {
        alert("Thanks! I've received your request. Expect a reply within 24 hours.");
    }, 800);
}

// Mobile Menu
function toggleMobileMenu() {
    let menu = document.querySelector('.mobile-menu');
    
    if (!menu) {
        menu = document.createElement('div');
        menu.className = 'mobile-menu';
        menu.innerHTML = `
            <a href="#products">Products</a>
            <a href="#work">Client Work</a>
            <a href="#founder">Founder</a>
            <a href="#thesis">Thesis</a>
        `;
        document.querySelector('.nav').after(menu);
    }
    
    menu.classList.toggle('active');
}

// Initialize Everything
function init() {
    // Render products
    renderProducts();
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu) mobileMenu.classList.remove('active');
            }
        });
    });
    
    // Keyboard hint
    console.log('%c[Kaya Core] Press ↑↑↓↓←→←→ba for a surprise', 'color:#3f3f46');
    
    // Konami Code Easter Egg
    let keys = '';
    const secret = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
    
    document.addEventListener('keydown', (e) => {
        keys += e.key;
        if (keys.length > secret.length) keys = keys.slice(1);
        
        if (keys === secret) {
            document.body.style.transition = 'filter 0.6s';
            document.body.style.filter = 'hue-rotate(280deg) saturate(1.8)';
            
            setTimeout(() => {
                document.body.style.filter = '';
                keys = '';
            }, 2200);
        }
    });
    
    // Subtle load animation for cards
    setTimeout(() => {
        document.querySelectorAll('.product-card, .client-card').forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            setTimeout(() => {
                el.style.transition = 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, i * 60);
        });
    }, 400);
    
    // Welcome message
    console.log('%c[Kaya Core] Marketing site initialized successfully', 'color:#22c173');
}

// Boot the site
window.onload = init;