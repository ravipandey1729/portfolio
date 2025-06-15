// Creative Interactive Features
    
    // 1. Typing Animation for Hero Title
    function initTypingAnimation() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = "Hi, I'm Ravi Pandey";
            const gradientSpan = '<span class="gradient-text">Ravi Pandey</span>';
            
            heroTitle.innerHTML = '';
            let i = 0;
            
            function typeWriter() {
                if (i < originalText.length) {
                    if (originalText.substr(i, 11) === "Ravi Pandey") {
                        heroTitle.innerHTML = originalText.substr(0, 7) + gradientSpan;
                        i = originalText.length;
                    } else {
                        heroTitle.innerHTML = originalText.substr(0, i + 1);
                        i++;
                    }
                    setTimeout(typeWriter, 100);
                } else {
                    // Add blinking cursor effect
                    heroTitle.innerHTML = "Hi, I'm " + gradientSpan;
                }
            }
            
            // Start typing animation after a small delay
            setTimeout(typeWriter, 1000);
        }
    }

    // 3. Parallax Scrolling Effect
    function initParallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Apply parallax to floating elements
            const floatingElements = document.querySelectorAll('.float-element');
            floatingElements.forEach((element, index) => {
                const speed = (index + 1) * 0.1;
                element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.02}deg)`;
            });
        });
    }

    // 4. Text Reveal Animation on Scroll
    function initTextRevealAnimation() {
        const revealElements = document.querySelectorAll('.section-title, .section-subtitle, h3, p');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('text-reveal');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

    // 5. Interactive Background Particles
    function createBackgroundParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-container';
        document.body.appendChild(particleContainer);
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 10 + 's';
            particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
            particleContainer.appendChild(particle);
        }
    }

    // 6. Skill Cards Interactive Tilt Effect
    function initTiltEffect() {
        const cards = document.querySelectorAll('.skill-card, .project-card, .experience-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            });
        });
    }

    // 7. Progress Counter Animation
    function initProgressCounters() {
        const counters = document.querySelectorAll('[data-count]');
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-count'));
                    let current = 0;
                    const increment = target / 100;
                    
                    const updateCounter = () => {
                        if (current < target) {
                            current += increment;
                            counter.textContent = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            });
        });
        
        counters.forEach(counter => counterObserver.observe(counter));
    }

    // 8. Glitch Effect for Special Elements
    function addGlitchEffect() {
        const glitchElements = document.querySelectorAll('.gradient-text');
        
        glitchElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add('glitch-effect');
                setTimeout(() => {
                    element.classList.remove('glitch-effect');
                }, 500);
            });
        });
    }

    // 9. Magnetic Button Effect
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn, .social-link, .theme-toggle');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0px, 0px)';
            });
        });
    }

    // 10. Loading Screen with Progress
    function createLoadingScreen() {
        const loader = document.createElement('div');
        loader.className = 'creative-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-logo">RP</div>
                <div class="loader-progress">
                    <div class="loader-bar"></div>
                </div>
                <div class="loader-text">Loading Portfolio...</div>
            </div>
        `;
        document.body.appendChild(loader);
        
        let progress = 0;
        const progressBar = loader.querySelector('.loader-bar');
        const progressText = loader.querySelector('.loader-text');
        
        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(loadingInterval);
                setTimeout(() => {
                    loader.style.opacity = '0';
                    setTimeout(() => {
                        loader.remove();
                        document.body.classList.add('loaded');
                    }, 500);
                }, 500);
            }
            progressBar.style.width = progress + '%';
            progressText.textContent = `Loading Portfolio... ${Math.floor(progress)}%`;
        }, 100);
    }

    // Scroll Progress Indicator
    function initScrollProgress() {
        const progressBar = document.querySelector('.scroll-progress');
        
        window.addEventListener('scroll', () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalHeight) * 100;
            progressBar.style.width = progress + '%';
        });
    }

    // Enhanced Theme Toggle with Sound Effect (Visual)
    function enhanceThemeToggle() {
        const themeToggle = document.querySelector('.theme-toggle');
        
        themeToggle.addEventListener('click', () => {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            themeToggle.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }    // Mobile Navigation Functionality
    function initMobileNavigation() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const body = document.body;

        if (hamburger && navMenu) {
            // Toggle mobile menu
            hamburger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                body.classList.toggle('menu-open');
                
                // Prevent body scroll when menu is open
                if (navMenu.classList.contains('active')) {
                    body.style.overflow = 'hidden';
                } else {
                    body.style.overflow = '';
                }
            });

            // Close menu when clicking on links
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    body.classList.remove('menu-open');
                    body.style.overflow = '';
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (navMenu.classList.contains('active') && 
                    !navMenu.contains(e.target) && 
                    !hamburger.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    body.classList.remove('menu-open');
                    body.style.overflow = '';
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    body.classList.remove('menu-open');
                    body.style.overflow = '';
                }
            });

            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    body.classList.remove('menu-open');
                    body.style.overflow = '';
                }
            });
        }
    }

    // Smooth scrolling for navigation links
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Enhanced touch interactions for mobile
    function initMobileTouchInteractions() {
        // Add touch feedback to cards
        const interactiveElements = document.querySelectorAll('.skill-card, .project-card, .experience-card, .btn');
        
        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
            
            element.addEventListener('touchcancel', function() {
                this.style.transform = '';
            });
        });
    }

    // Optimize animations for mobile performance
    function optimizeForMobile() {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Reduce animation complexity on mobile
            const floatingElements = document.querySelectorAll('.float-element');
            floatingElements.forEach(element => {
                element.style.animation = 'float-simple 6s ease-in-out infinite';
            });
            
            // Disable parallax on mobile for better performance
            const parallaxElements = document.querySelectorAll('[data-parallax]');
            parallaxElements.forEach(element => {
                element.style.transform = 'none';
            });
        }
    }

    // Mobile-specific scroll progress indicator
    function initMobileScrollProgress() {
        const progressBar = document.querySelector('.scroll-progress');
        
        if (progressBar) {
            let ticking = false;
            
            function updateScrollProgress() {
                const scrollTop = window.pageYOffset;
                const docHeight = document.body.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                
                progressBar.style.width = scrollPercent + '%';
                ticking = false;
            }
            
            window.addEventListener('scroll', function() {
                if (!ticking) {
                    requestAnimationFrame(updateScrollProgress);
                    ticking = true;
                }
            });
        }
    }

    // Initialize all creative features
    createLoadingScreen();
    initTypingAnimation();
    initParallaxEffect();
    initTextRevealAnimation();
    createBackgroundParticles();
    initTiltEffect();
    initProgressCounters();
    addGlitchEffect();
    initMagneticButtons();
    initScrollProgress();
    enhanceThemeToggle();
    // Initialize all mobile functions
    initMobileNavigation();
    initSmoothScrolling();
    initMobileTouchInteractions();
    optimizeForMobile();
    initMobileScrollProgress();