/* ========================================
   موقع أثر الأدب
   التنسيق العام لجميع صفحات الموقع
======================================== */


/* 1. إعدادات عامة */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #274c3b;
    --secondary-color: #3c7056;
    --accent-color: #c49a5a;
    --background-color: #f8f5ef;
    --white-color: #ffffff;
    --text-color: #303a33;
    --muted-color: #727970;
    --border-color: #e7e0d4;
    --shadow: 0 5px 20px rgba(39, 76, 59, 0.08);
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Tahoma, Arial, sans-serif;
    direction: rtl;
    text-align: right;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.9;
    font-size: 16px;
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

button,
input {
    font: inherit;
}

button {
    cursor: pointer;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}


/* 2. رأس الموقع */

.site-header {
    background-color: var(--white-color);
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
}

.header-content {
    min-height: 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
}

.logo {
    color: var(--primary-color);
    font-size: 29px;
    font-weight: bold;
    white-space: nowrap;
}

.logo span {
    color: var(--accent-color);
}

.main-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    flex-wrap: wrap;
}

.main-nav a {
    color: var(--text-color);
    font-size: 14px;
    font-weight: bold;
    padding: 8px 0;
    position: relative;
    transition: color 0.3s ease;
}

.main-nav a:hover,
.main-nav a.active {
    color: var(--secondary-color);
}

.main-nav a.active::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: var(--accent-color);
}


/* 3. القسم الرئيسي في الصفحة الرئيسية */

.hero {
    background: linear-gradient(
        135deg,
        #193b2c,
        #315e46
    );
    color: var(--white-color);
    padding: 90px 0;
    overflow: hidden;
}

.hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
}

.hero-text {
    flex: 1;
}

.hero-text h1 {
    font-size: 43px;
    line-height: 1.6;
    margin: 15px 0;
    color: var(--white-color);
}

.hero-text p {
    color: #e4ebe5;
    font-size: 17px;
    max-width: 650px;
    margin-bottom: 25px;
}

.hero .section-label {
    color: #e5c58d;
}

.hero-decoration {
    width: 230px;
    height: 230px;
    flex-shrink: 0;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #f0d5a5;
    padding: 20px;
}

.decoration-text {
    font-size: 18px;
    line-height: 2;
}

.decoration-symbol {
    font-size: 45px;
    margin-top: 5px;
}

.hero-buttons {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
}


/* 4. الأزرار */

.btn {
    display: inline-block;
    background-color: var(--accent-color);
    color: #ffffff;
    padding: 11px 25px;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    transition: background-color 0.3s ease,
                transform 0.3s ease;
}

.btn:hover {
    background-color: #a98246;
    transform: translateY(-2px);
}

.btn-outline {
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.7);
    color: var(--white-color);
    padding: 10px 24px;
    border-radius: 6px;
    transition: all 0.3s ease;
}

.btn-outline:hover {
    background-color: var(--white-color);
    color: var(--primary-color);
}


/* 5. العناوين والنصوص العامة */

.section-label {
    color: var(--accent-color);
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
}

.section-heading {
    text-align: center;
    max-width: 750px;
    margin: 0 auto 35px;
}

.section-heading h2 {
    color: var(--primary-color);
    font-size: 30px;
    margin-bottom: 12px;
}

.section-heading > p:last-child {
    color: var(--muted-color);
    font-size: 15px;
}


/* 6. مقدمة الصفحات الداخلية */

.page-banner {
    background: linear-gradient(
        135deg,
        #193b2c,
        #315e46
    );
    color: var(--white-color);
    text-align: center;
    padding: 65px 20px;
}

.page-banner .section-label {
    color: #e5c58d;
}

.page-banner h1 {
    font-size: 36px;
    margin: 10px 0 15px;
}

.page-banner p:last-child {
    max-width: 760px;
    margin: 0 auto;
    color: #e4ebe5;
    font-size: 16px;
}


/* 7. محتوى الصفحات */

.page-content {
    padding-top: 65px;
    padding-bottom: 65px;
}

.section {
    padding: 65px 0;
}

.about-section {
    margin-bottom: 60px;
}

.about-card {
    max-width: 900px;
    margin: 0 auto;
}

.about-card p {
    margin-bottom: 18px;
    color: var(--muted-color);
}

.about-card p:last-child {
    margin-bottom: 0;
}


/* 8. شبكة البطاقات */

.cards-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 25px;
    margin-top: 30px;
}

.literature-grid,
.writers-grid {
    margin-top: 30px;
}

.content-card {
    background-color: var(--white-color);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 28px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease,
                box-shadow 0.3s ease;
    min-width: 0;
}

.content-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 28px rgba(39, 76, 59, 0.13);
}

.card-icon {
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f3eee4;
    color: var(--primary-color);
    border-radius: 50%;
    font-size: 27px;
    margin-bottom: 18px;
}

.card-category {
    color: var(--accent-color);
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 8px;
}

.content-card h3 {
    color: var(--primary-color);
    font-size: 21px;
    margin-bottom: 13px;
}

.card-text {
    color: var(--muted-color);
    font-size: 15px;
    line-height: 2;
}

.content-card .btn {
    margin-top: 18px;
}


/* 9. تنسيق أبيات الشعر والنصوص */

.poem-card {
    text-align: center;
}

.poem-text {
    color: var(--text-color);
    font-size: 18px;
    line-height: 2.2;
    margin: 18px 0;
}

.poem-author {
    color: var(--accent-color);
    font-size: 14px;
    font-weight: bold;
    margin-top: 15px;
}

.writer-famous {
    color: var(--accent-color);
    font-size: 13px;
    font-weight: bold;
    margin-top: 18px;
    margin-bottom: 8px;
}

blockquote {
    border-right: 3px solid var(--accent-color);
    padding: 10px 15px;
    margin-top: 12px;
    color: var(--muted-color);
    background-color: #faf8f3;
    border-radius: 4px;
    line-height: 2;
}


/* 10. البحث */

.search-box {
    max-width: 650px;
    margin: 0 auto 35px;
}

.search-box input {
    width: 100%;
    padding: 14px 18px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background-color: var(--white-color);
    color: var(--text-color);
    outline: none;
    transition: border-color 0.3s ease,
                box-shadow 0.3s ease;
}

.search-box input:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px rgba(60, 112, 86, 0.1);
}

.search-box input::placeholder {
    color: #9b9b93;
}

.no-results {
    text-align: center;
    color: var(--muted-color);
    padding: 25px;
    margin: 20px 0;
}


/* 11. زر نسخ النص */

.copy-btn {
    background-color: transparent;
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
    border-radius: 5px;
    padding: 7px 17px;
    margin-top: 18px;
    font-size: 13px;
    transition: all 0.3s ease;
}

.copy-btn:hover {
    background-color: var(--secondary-color);
    color: var(--white-color);
}


/* 12. صندوق الانتقال إلى الصفحات الأخرى */

.page-link-box {
    background-color: #eee9de;
    border-radius: 12px;
    text-align: center;
    padding: 40px 25px;
    margin-top: 60px;
}

.page-link-box h2 {
    color: var(--primary-color);
    font-size: 27px;
    margin-bottom: 12px;
}

.page-link-box p {
    color: var(--muted-color);
    margin-bottom: 22px;
}

.page-link-box .btn {
    margin: 5px;
}


/* 13. تذييل الموقع */

.site-footer {
    background-color: #193b2c;
    color: var(--white-color);
    text-align: center;
    padding: 40px 20px 25px;
}

.site-footer h3 {
    font-size: 26px;
    margin-bottom: 12px;
    color: #e5c58d;
}

.site-footer p {
    color: #d7e0d8;
    font-size: 14px;
    margin-bottom: 10px;
}

.site-footer p:last-child {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 18px;
    margin-top: 22px;
}


/* 14. قسم إضافي للمعلومات */

.info-box {
    background-color: var(--white-color);
    border-right: 4px solid var(--accent-color);
    padding: 20px;
    margin: 25px 0;
    border-radius: 6px;
    box-shadow: var(--shadow);
}

.info-box h3 {
    color: var(--primary-color);
    margin-bottom: 10px;
}

.info-box p {
    color: var(--muted-color);
}


/* 15. القوائم داخل المحتوى */

.content-list {
    padding-right: 25px;
    margin: 15px 0;
}

.content-list li {
    margin-bottom: 10px;
    color: var(--muted-color);
}


/* 16. الشاشات المتوسطة */

@media (max-width: 992px) {

    .header-content {
        flex-direction: column;
        justify-content: center;
        padding: 15px 0;
        gap: 10px;
    }

    .main-nav {
        gap: 12px 20px;
    }

    .hero-content {
        gap: 25px;
    }

    .hero-text h1 {
        font-size: 35px;
    }

    .cards-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

}


/* 17. الهواتف */

@media (max-width: 600px) {

    body {
        font-size: 15px;
    }

    .container {
        width: 92%;
    }

    .header-content {
        padding: 12px 0;
    }

    .logo {
        font-size: 25px;
    }

    .main-nav {
        gap: 7px 13px;
    }

    .main-nav a {
        font-size: 12px;
    }

    .hero {
        padding: 55px 0;
    }

    .hero-content {
        flex-direction: column;
        text-align: center;
    }

    .hero-text h1 {
        font-size: 29px;
    }

    .hero-text p {
        font-size: 15px;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-decoration {
        width: 190px;
        height: 190px;
    }

    .page-banner {
        padding: 45px 15px;
    }

    .page-banner h1 {
        font-size: 28px;
    }

    .page-banner p:last-child {
        font-size: 14px;
    }

    .page-content {
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .section-heading h2 {
        font-size: 25px;
    }

    .cards-grid {
        grid-template-columns: 1fr;
        gap: 18px;
    }

    .content-card {
        padding: 22px;
    }

    .content-card h3 {
        font-size: 20px;
    }

    .poem-text {
        font-size: 16px;
    }

    .page-link-box {
        padding: 30px 18px;
        margin-top: 40px;
    }

    .page-link-box h2 {
        font-size: 23px;
    }

    .page-link-box .btn {
        display: block;
        width: 100%;
        margin: 10px 0;
    }

    .site-footer {
        padding: 30px 15px 20px;
    }

}


/* 18. تحسينات الوصول */

button:focus-visible,
a:focus-visible,
input:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 3px;
}


/* 19. تقليل الحركة لمن يفضل ذلك */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
    }

}
