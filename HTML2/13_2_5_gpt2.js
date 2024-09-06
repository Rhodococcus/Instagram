document.addEventListener("DOMContentLoaded", function(e){
    let button = document.querySelector("input[type='button']"); // 버튼 선택
    let img = document.querySelector("img"); // 이미지 선택
    
    // 이미지 경로들
    let img1 = "image/hl 1.jpg";  // 공백이 있다면 %20으로 인코딩 필요
    let img2 = "image/hl 2.jpg";  // 공백이 있다면 %20으로 인코딩 필요
    let img3 = "image/profile.jpg";

    button.addEventListener("click", function(e){
        let src = img.getAttribute("src");  // 현재 이미지 src 가져오기
        console.log("현재 이미지 경로:", src);  // 현재 이미지 경로 콘솔 출력
        
        if (src === img1){
            img.setAttribute("src", img2);  // img1이면 img2로 변경
            console.log("이미지 변경: img2로 변경");
        } else if (src === img2) {
            img.setAttribute("src", img3);  // img2면 img3로 변경
            console.log("이미지 변경: img3로 변경");
        } else {
            img.setAttribute("src", img1);  // 나머지 경우 img1로 변경
            console.log("이미지 변경: img1로 변경");
        }
    });
});