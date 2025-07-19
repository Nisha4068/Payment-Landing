// Mobile menu toggle
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const isOpen = mobileMenu.style.display === 'flex';
            mobileMenu.style.display = isOpen ? 'none' : 'flex';
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const mobileMenu = document.getElementById('mobileMenu');
            const menuButton = document.querySelector('.mobile-menu-btn');
            
            if (!mobileMenu.contains(event.target) && !menuButton.contains(event.target)) {
                mobileMenu.style.display = 'none';
            }
        });

        // Add click handlers for interactive elements
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function() {
                console.log('Card clicked:', this.querySelector('.card-balance').textContent);
            });
        });

        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                console.log('Action clicked:', this.textContent);
            });
        });

        document.querySelectorAll('.transaction').forEach(transaction => {
            transaction.addEventListener('click', function() {
                console.log('Transaction clicked:', this.querySelector('h4').textContent);
            });
        });

        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                // Remove active class from all items
                document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
                // Add active class to clicked item
                this.classList.add('active');
            });
        });