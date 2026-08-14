# Zhra Portfolio

پروژه‌ی پرتفولیوی React با ظاهر الهام‌گرفته از Figma. کدها بر اساس مسئولیت تفکیک شده‌اند تا برای تغییر محتوا، صفحه‌ها، کامپوننت‌ها و assetها محل مشخصی وجود داشته باشد.

## اجرای پروژه

```bash
npm install
npm run dev
```

برای بررسی نسخه‌ی نهایی:

```bash
npm run build
npm run preview
```

## از کجا شروع کنم؟

- نقشه‌ی کامل فایل‌ها و محل انجام هر تغییر: [`src/ARCHITECTURE.md`](src/ARCHITECTURE.md)
- راهنمای تصاویر و آیکون‌ها: [`src/assets/README.md`](src/assets/README.md)
- راهنمای استایل‌ها و breakpointها: [`src/styles/README.md`](src/styles/README.md)
- اطلاعات کارت پروژه‌ها: [`src/data/portfolio.js`](src/data/portfolio.js)
- صفحه‌ی مستقل هر پروژه: [`src/pages/projects/`](src/pages/projects/)
- محتوای کیس‌استادی هر پروژه: [`src/components/projects/case-studies/`](src/components/projects/case-studies/)

## ساختار کلی

```text
src/
|-- App.jsx          # state و اتصال بخش‌های اصلی برنامه
|-- main.jsx         # نقطه‌ی ورود React و CSSهای عمومی
|-- assets/          # تصویرها و آیکون‌ها، دسته‌بندی‌شده بر اساس کاربرد
|-- components/      # اجزای رابط کاربری
|-- config/          # تنظیمات navigation و offsetهای responsive
|-- data/            # تمام محتوای قابل ویرایش
|-- hooks/           # رفتارهای مشترک React
|-- pages/           # صفحه‌های اصلی و صفحه‌ی مستقل پروژه‌ها
|-- styles/          # استایل عمومی و استایل کیس‌استادی
`-- utils/           # توابع مستقل از React
```

اصل ساختار این است: محتوای ثابت در `data`، صفحه در `pages`، رابط قابل استفاده‌ی مجدد در `components` و فایل تصویری در پوشه‌ی مرتبط داخل `assets` قرار می‌گیرد.
