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
    // メールアドレスの照合チェック
    const email = document.getElementById('email').value;
    const emailConfirm = document.getElementById('email-confirm').value;
    
    if (email !== emailConfirm) {
        e.preventDefault();
        alert('メールアドレスが一致しません。もう一度ご確認ください。');
        document.getElementById('email-confirm').focus();
        return false;
    }
    
    // チェックボックスの確認
    const confirmCheck = document.getElementById('confirm-check');
    if (!confirmCheck.checked) {
        e.preventDefault();
        alert('「上記の内容を確認しました」にチェックを入れてください。');
        return false;
    }
    
    // Formspreeへの送信をカスタマイズ
    e.preventDefault();
    const formData = new FormData(this);
    const submitButton = this.querySelector('.submit-button');
    
    // ボタンを無効化して二重送信を防止
    submitButton.disabled = true;
    submitButton.textContent = '送信中...';
    
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // 成功メッセージを表示
            alert('お問い合わせを受け付けました。\n\nご入力いただいたメールアドレス宛に、確認のため担当者よりご連絡いたします。\n通常2-3営業日以内にご返信いたしますので、今しばらくお待ちください。\n\nメールが届かない場合は、迷惑メールフォルダもご確認ください。');
            this.reset();
        } else {
            alert('送信に失敗しました。\n恐れ入りますが、もう一度お試しください。');
        }
    }).catch(error => {
        alert('送信に失敗しました。\n恐れ入りますが、もう一度お試しください。');
    }).finally(() => {
        // ボタンを元に戻す
        submitButton.disabled = false;
        submitButton.textContent = '送信する';
    });
});

// ========================================
// ページ読み込み時の初期化
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('neboca. LP loaded successfully');
});