import './style.css'

// Dark mode functionality
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.getElementById('theme-toggle');
           
            body.classList.toggle('dark');
            themeToggle.classList.toggle('dark');
           
            // Save theme preference
            const isDark = body.classList.contains('dark');
            localStorage.setItem('darkMode', isDark);
        }

        // Load saved theme on page load
        document.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('darkMode');
            const themeToggle = document.getElementById('theme-toggle');
           
            if (savedTheme === 'true') {
                document.body.classList.add('dark');
                themeToggle.classList.add('dark');
            }
        });

        // Smooth scrolling
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Navigation links
        document.querySelectorAll('nav a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
            });
        });

        // Fade in animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Animate skill bars when visible
        const skillObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-bar');
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width + '%';
                        }, 200);
                    });
                }
            });
        }, observerOptions);

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillObserver.observe(skillsSection);
        }

        // Project details
        const projectDetails = {
            project1: {
                title: 'Sales Performance Dashboard',
                content: `
                    <h4 class="font-semibold mb-3">Project Overview</h4>
                    <p class="mb-4">Created an interactive Tableau dashboard for a retail company to analyze sales performance across different regions, products, and time periods.</p>
                   
                    <h4 class="font-semibold mb-3">Key Features</h4>
                    <ul class="list-disc list-inside mb-4 space-y-1">
                        <li>Real-time sales tracking and KPI monitoring</li>
                        <li>Geographic sales distribution with heat maps</li>
                        <li>Product performance analysis and trending</li>
                        <li>Customer segmentation and behavior insights</li>
                        <li>Forecasting models for revenue prediction</li>
                    </ul>
                   
                    <h4 class="font-semibold mb-3">Impact</h4>
                    <p class="mb-4">The dashboard helped identify underperforming regions and products, leading to a 15% increase in overall sales efficiency and better inventory management decisions.</p>
                   
                    <h4 class="font-semibold mb-3">Technologies Used</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Tableau</span>
                        <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">SQL</span>
                        <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">PostgreSQL</span>
                    </div>
                `
            },
            project2: {
                title: 'Customer Churn Prediction',
                content: `
                    <h4 class="font-semibold mb-3">Project Overview</h4>
                    <p class="mb-4">Developed a machine learning model to predict customer churn for a telecommunications company using Python and various ML algorithms.</p>
                   
                    <h4 class="font-semibold mb-3">Methodology</h4>
                    <ul class="list-disc list-inside mb-4 space-y-1">
                        <li>Data preprocessing and feature engineering with Pandas</li>
                        <li>Exploratory data analysis and visualization</li>
                        <li>Model comparison: Logistic Regression, Random Forest, XGBoost</li>
                        <li>Hyperparameter tuning and cross-validation</li>
                        <li>Model evaluation using precision, recall, and F1-score</li>
                    </ul>
                   
                    <h4 class="font-semibold mb-3">Results</h4>
                    <p class="mb-4">Achieved 87% accuracy with the Random Forest model, identifying key factors contributing to churn such as contract type, monthly charges, and customer service interactions.</p>
                   
                    <h4 class="font-semibold mb-3">Technologies Used</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Python</span>
                        <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Scikit-learn</span>
                        <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Pandas</span>
                        <span class="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Matplotlib</span>
                    </div>
                `
            },
            project3: {
                title: 'Financial Market Analysis',
                content: `
                    <h4 class="font-semibold mb-3">Project Overview</h4>
                    <p class="mb-4">Comprehensive analysis of stock market trends and portfolio optimization using Python for data processing and Tableau for interactive visualizations.</p>
                   
                    <h4 class="font-semibold mb-3">Analysis Components</h4>
                    <ul class="list-disc list-inside mb-4 space-y-1">
                        <li>Historical price analysis and trend identification</li>
                        <li>Volatility analysis and risk assessment</li>
                        <li>Correlation analysis between different assets</li>
                        <li>Moving averages and technical indicators</li>
                        <li>Portfolio performance optimization</li>
                    </ul>
                   
                    <h4 class="font-semibold mb-3">Key Insights</h4>
                    <p class="mb-4">Identified optimal portfolio allocation strategies that reduced risk by 23% while maintaining competitive returns. Created automated reporting system for daily market updates.</p>
                   
                    <h4 class="font-semibold mb-3">Technologies Used</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Python</span>
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Tableau</span>
                        <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">NumPy</span>
                        <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Yahoo Finance API</span>
                    </div>
                `
            },
            project4: {
                title: 'Interactive Data Dashboard',
                content: `
                    <h4 class="font-semibold mb-3">Project Overview</h4>
                    <p class="mb-4">Built a full-stack web application that provides real-time business analytics through interactive dashboards, combining data analysis expertise with modern web development.</p>
                   
                    <h4 class="font-semibold mb-3">Key Features</h4>
                    <ul class="list-disc list-inside mb-4 space-y-1">
                        <li>Real-time data streaming and visualization</li>
                        <li>Interactive charts with D3.js and Chart.js</li>
                        <li>RESTful API for data management</li>
                        <li>Responsive design for mobile and desktop</li>
                        <li>User authentication and role-based access</li>
                        <li>Automated report generation and email alerts</li>
                    </ul>
                   
                    <h4 class="font-semibold mb-3">Technical Implementation</h4>
                    <p class="mb-4">Frontend built with React for dynamic user interfaces, Node.js backend with Express for API endpoints, and PostgreSQL for data storage. Integrated Python scripts for advanced analytics and machine learning predictions.</p>
                   
                    <h4 class="font-semibold mb-3">Impact</h4>
                    <p class="mb-4">Reduced manual reporting time by 80% and improved decision-making speed through real-time insights. Currently used by 50+ business stakeholders across multiple departments.</p>
                   
                    <h4 class="font-semibold mb-3">Technologies Used</h4>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                        <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
                        <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">D3.js</span>
                        <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">PostgreSQL</span>
                        <span class="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Python</span>
                    </div>
                `
            }
        };

        function showProjectDetails(projectId) {
            const modal = document.getElementById('project-modal');
            const title = document.getElementById('modal-title');
            const content = document.getElementById('modal-content');
           
            const project = projectDetails[projectId];
            title.textContent = project.title;
            content.innerHTML = project.content;
           
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('project-modal');
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        document.getElementById('project-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        function showDemoMessage() {
            alert('Thank you for your interest! This is a demo form. In a real portfolio, this would send your message directly to the data analyst.');
        }

        // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            // This would toggle a mobile menu in a full implementation
            alert('Mobile menu would open here in a full implementation!');
        });