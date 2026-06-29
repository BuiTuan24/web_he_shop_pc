// Lấy tất cả các khối có class là hero-banner-slide
const slides = document.querySelectorAll('.hero-banner-slide');
let currentSlide = 0;

function nextSlide() {
    if (slides.length === 0) return;

    // Xóa class 'active' của slide hiện tại để ẩn đi
    slides[currentSlide].classList.remove('active');
    
    // Tính toán vị trí slide tiếp theo
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Thêm class 'active' vào slide tiếp theo để hiện lên
    slides[currentSlide].classList.add('active');
}

// Tự động chuyển ảnh sau mỗi 3 giây
setInterval(nextSlide, 3000);
