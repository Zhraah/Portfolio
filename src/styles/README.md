# راهنمای استایل‌ها

- `app.css`: تمام استایل‌های shell شبیه Figma، سایدبارها، صفحه‌ی اصلی، Projects، Contact و responsive عمومی.
- `project-case-studies.css`: فقط استایل محتوای صفحه‌های کیس‌استادی Nova، FC Motivate و Sports Automation.

## breakpointهای اصلی

- موبایل: `max-width: 620px`
- تبلت: `621px` تا `1260px`
- دسکتاپ متوسط: `1261px` تا `1440px`
- دسکتاپ بزرگ: `min-width: 1441px`

قبل از اضافه کردن media query جدید، نزدیک‌ترین breakpoint موجود را پیدا کن تا override تکراری ساخته نشود. استایل جدید صفحه‌های پروژه باید در `project-case-studies.css` و سایر تغییرها در `app.css` قرار بگیرد.
