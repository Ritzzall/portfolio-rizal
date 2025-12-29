document.addEventListener('DOMContentLoaded', () => {
    
    // Mencari semua elemen yang memiliki kelas 'fade-in'
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Animasi berjalan ketika 10% elemen terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas 'visible' untuk memicu CSS transition
                entry.target.classList.add('visible');
                
                // Hentikan observasi setelah animasi berjalan sekali (agar tidak berulang-ulang)
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});