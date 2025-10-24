// صبر می‌کنیم تا کل محتوای صفحه لود شود
document.addEventListener('DOMContentLoaded', function() {
    
    // انتخاب تمام اسلایدها و دکمه‌ها
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // متغیر برای نگه داشتن شماره اسلاید فعلی
    let currentSlide = 0;

    // تابعی برای نمایش یک اسلاید مشخص
    function showSlide(index) {
        // اول، همه اسلایدها را مخفی می‌کنیم
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // بعد، اسلاید مورد نظر را نمایش می‌دهیم
        slides[index].classList.add('active');
    }

    // تابعی برای رفتن به اسلاید بعدی
    function nextSlide() {
        currentSlide++; // اسلاید فعلی + 1
        
        // اگر به آخر رسیدیم، برمی‌گردیم به اسلاید اول (حلقه)
        if (currentSlide >= slides.length) {
            currentSlide = 0; 
        }
        showSlide(currentSlide);
    }

    // تابعی برای رفتن به اسلاید قبلی
    function prevSlide() {
        currentSlide--; // اسلاید فعلی - 1
        
        // اگر به اول رسیدیم، می‌ریم به اسلاید آخر (حلقه)
        if (currentSlide < 0) {
            currentSlide = slides.length - 1; 
        }
        showSlide(currentSlide);
    }

    // به دکمه‌ها می‌گوییم که با کلیک، توابع را اجرا کنند
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // (اختیاری) اسلاید خودکار هر 7 ثانیه
    // setInterval(nextSlide, 7000); 

    // در ابتدا، اسلاید اول (0) را نشان بده
    showSlide(currentSlide);
});