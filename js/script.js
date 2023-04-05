document.addEventListener('DOMContentLoaded', function () {


    // REVEAL ON SCROLL JS
    // CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER
    // CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVER 
    const myobserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute("data-one-half-column", "active");
        } else {
            entry.target.setAttribute("data-one-half-column", "inactive");
        }
        });
    });
    
    
    document.querySelectorAll('.scroll-triggered').forEach((el) => {
        myobserver.observe(el);
    }); 


});