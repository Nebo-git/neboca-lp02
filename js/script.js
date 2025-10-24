// ========================================
// 背景グラデーションのスライドショー
// ========================================
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// 5秒ごとにグラデーションを切り替え
setInterval(nextSlide, 5000);

// ========================================
// スムーズスクロール
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// スクロールアニメーション
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ========================================
// Q&Aアコーディオン
// ========================================
document.querySelectorAll('.qa-question').forEach(question => {
    question.addEventListener('click', function() {
        const qaItem = this.parentElement;
        const answer = qaItem.querySelector('.qa-answer');
        const isActive = qaItem.classList.contains('active');
        
        // 全てのQ&Aを閉じる
        document.querySelectorAll('.qa-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.qa-answer').style.maxHeight = null;
        });
        
        // クリックされた項目が閉じていた場合は開く
        if (!isActive) {
            qaItem.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});

// ========================================
// お問い合わせフォーム送信処理
// ========================================
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    // Formspreeを使用する場合は、この部分をコメントアウトまたは削除
    // e.preventDefault();
    // alert('お問い合わせを受け付けました。担当者より折り返しご連絡いたします。');
    // this.reset();
    
    // Formspree使用時: action属性にFormspreeのURLが設定されていれば自動で送信される
    // 特別な処理は不要だが、送信後のカスタム処理を追加したい場合は以下のようにする:
    
    /*
    e.preventDefault();
    const formData = new FormData(this);
    
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('お問い合わせを受け付けました。担当者より折り返しご連絡いたします。');
            this.reset();
        } else {
            alert('送信に失敗しました。もう一度お試しください。');
        }
    }).catch(error => {
        alert('送信に失敗しました。もう一度お試しください。');
    });
    */
});

// ========================================
// ページ読み込み時の初期化
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('neboca. LP loaded successfully');
});