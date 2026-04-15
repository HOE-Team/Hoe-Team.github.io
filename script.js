/**
 * 打字机逻辑
 */
const words = ["和谐", "开放", "平等"];
const typewriter = document.getElementById('typewriter');

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 200;

function typeEffect() {
    const currentFullText = words[wordIndex];
    
    if (isDeleting) {
        // 逐字减少
        typewriter.textContent = currentFullText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 100;
    } else {
        // 逐字增加
        typewriter.textContent = currentFullText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 200;
    }

    // 逻辑判定
    if (!isDeleting && charIndex === currentFullText.length) {
        // 输入完成，停顿后开始删除
        isDeleting = true;
        typeSpeed = 1500; 
    } else if (isDeleting && charIndex === 0) {
        // 删除完成，切换到下一个词
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// 页面加载完成后启动
window.onload = () => {
    typeEffect();
};
