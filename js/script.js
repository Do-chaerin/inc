// 스크롤 시 이미지가 화면에 보일 때 나타나는 효과
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".fade-in-image");

    const handleScroll = () => {
        images.forEach((image) => {
            const rect = image.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                image.classList.add("visible");
            }
        });
    };

    // 초기화 및 스크롤 이벤트 등록
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행
});