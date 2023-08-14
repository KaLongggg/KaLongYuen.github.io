const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.control');

function hideAllSectionsExcept(exceptElement) {
    sections.forEach(section => {
        if(section !== exceptElement) {
            section.classList.add('slide-out-to-top');
            setTimeout(() => {
                section.classList.remove('active', 'slide-out-to-top');
            }, 1000); // remove after animation, match this duration with CSS
        }
    });
}

function PageTransitions(){
    // Button click handler
    sectBtns.forEach(btn => {
        btn.addEventListener('click', function(){
            // Remove active class from all buttons
            sectBtns.forEach(b => b.classList.remove('active-btn'));
            
            // Add active class to clicked button
            this.classList.add('active-btn');
            
            // Hide all sections
            const id = this.dataset.id;
            const element = document.getElementById(id);
            hideAllSectionsExcept(element);
            
            // Show the corresponding section
            element.classList.add('active');
        });
    });
}

PageTransitions();
