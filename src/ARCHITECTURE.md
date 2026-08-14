# نقشه‌ی دقیق کدهای `src`

این فایل مرجع اصلی ساختار پروژه است. هر پوشه فقط یک مسئولیت دارد و `App.jsx` صرفاً state، انتخاب آیتم‌ها و اتصال layout را مدیریت می‌کند.

## درخت فایل‌ها

```text
src/
|-- App.jsx
|-- main.jsx
|
|-- components/
|   |-- home/
|   |   |-- HeroSection.jsx
|   |   |-- FeaturedWorkSection.jsx
|   |   |-- AboutSection.jsx
|   |   |-- ServicesSection.jsx
|   |   |-- BeyondWorkSection.jsx
|   |   `-- SelectionHandles.jsx
|   |-- inspector/
|   |   |-- InspectorDetails.jsx
|   |   |-- MobileInspectorSheet.jsx
|   |   `-- RightSidebar.jsx
|   |-- layout/
|   |   |-- LeftSidebar.jsx
|   |   |-- Workspace.jsx
|   |   |-- CanvasRulers.jsx
|   |   `-- BottomDock.jsx
|   |-- overlays/
|   |   `-- ContactModal.jsx
|   |-- projects/
|   |   `-- case-studies/
|   |       |-- CaseStudyLayout.jsx
|   |       |-- NovaCaseStudy.jsx
|   |       |-- FcMotivateCaseStudy.jsx
|   |       `-- SportsAutomationCaseStudy.jsx
|   `-- ui/
|       `-- Icon.jsx
|
|-- config/
|   `-- navigation.js
|
|-- data/
|   |-- about.js
|   |-- contact.js
|   |-- media.js
|   |-- portfolio.js
|   |-- profile.js
|   `-- services.js
|
|-- hooks/
|   `-- useCaseStudyReveal.js
|
|-- pages/
|   |-- HomePage.jsx
|   |-- ProjectsPage.jsx
|   |-- ContactSchedulePage.jsx
|   |-- ProjectPage.jsx
|   `-- projects/
|       |-- index.js
|       |-- NovaProjectPage.jsx
|       |-- FcMotivateProjectPage.jsx
|       |-- SportsAutomationProjectPage.jsx
|       `-- MeetingManagementProjectPage.jsx
|
|-- styles/
|   |-- app.css
|   |-- project-case-studies.css
|   `-- README.md
|
|-- utils/
|   `-- calendar.js
|
`-- assets/
    `-- README.md
```

## مسئولیت هر بخش

### هسته و layout

- `App.jsx`: stateهای انتخاب، باز و بسته شدن پروژه و Contact، و handlerهای navigation.
- `components/layout/Workspace.jsx`: تصمیم می‌گیرد در canvas کدام صفحه نمایش داده شود.
- `components/layout/LeftSidebar.jsx`: Pages و Layers سمت چپ.
- `components/layout/BottomDock.jsx`: منوی شناور پایین در دسکتاپ و موبایل.
- `components/layout/CanvasRulers.jsx`: rulerهای بالا و کنار canvas.

### صفحه‌ی اصلی

هر سکشن صفحه‌ی اصلی یک فایل مستقل در `components/home` دارد. ترتیب اتصال آن‌ها در `pages/HomePage.jsx` مشخص است:

1. `HeroSection.jsx`
2. `FeaturedWorkSection.jsx`
3. `AboutSection.jsx`
4. `ServicesSection.jsx`
5. `BeyondWorkSection.jsx`

### پروژه‌ها

- اطلاعات کارت‌ها، شناسه‌ها، توضیحات Inspector و layerهای پروژه: `data/portfolio.js`
- لیست Projects و Case Studies: `pages/ProjectsPage.jsx`
- انتخاب صفحه بر اساس `project.id`: `pages/ProjectPage.jsx`
- entry مستقل هر پروژه: `pages/projects/*ProjectPage.jsx`
- محتوای طولانی هر کیس‌استادی: `components/projects/case-studies/*CaseStudy.jsx`
- layout مشترک کیس‌استادی‌ها: `components/projects/case-studies/CaseStudyLayout.jsx`

`MeetingManagementProjectPage.jsx` یک صفحه‌ی مستقل و ساده دارد. سه پروژه‌ی دیگر محتوای کامل کیس‌استادی خود را در فایل مستقل نگه می‌دارند.

### Inspector و modalها

- محتوای Profile، Project و Skill Inspector: `components/inspector/InspectorDetails.jsx`
- سایدبار راست دسکتاپ: `components/inspector/RightSidebar.jsx`
- bottom sheet جزئیات در موبایل: `components/inspector/MobileInspectorSheet.jsx`
- modal راه‌های ارتباطی: `components/overlays/ContactModal.jsx`

### محتوا و تنظیمات

- `data/about.js`: ویژگی‌های About Me.
- `data/contact.js`: ایمیل، لینک شبکه‌ها و لینک CV.
- `data/media.js`: اطلاعات Spotify و چهار فیلم IMDb.
- `data/portfolio.js`: پروژه‌ها و کیس‌استادی‌های Behance.
- `data/profile.js`: ردیف‌های اطلاعات پروفایل در Inspector.
- `data/services.js`: Skillها، propertyها و Tech Stack.
- `config/navigation.js`: نام pageها و offset هر سکشن در breakpointهای مختلف.
- `utils/calendar.js`: ساخت تقویم صفحه‌ی درخواست جلسه.

## افزودن پروژه‌ی جدید

1. یک آیتم با `id` یکتا در آرایه‌ی `projects` داخل `data/portfolio.js` اضافه کن.
2. یک entry با نام `ExampleProjectPage.jsx` در `pages/projects` بساز و آن را از `pages/projects/index.js` export کن.
3. همان `id` را در map فایل `pages/ProjectPage.jsx` به صفحه‌ی جدید وصل کن.
4. اگر کیس‌استادی کامل دارد، محتوایش را در `components/projects/case-studies/ExampleCaseStudy.jsx` بگذار.
5. تصاویر پروژه را فقط در `assets/case-studies` یا `assets/projects` قرار بده.

## قانون نام‌گذاری

- کامپوننت و صفحه: `PascalCase.jsx`
- data، config، hook و utility: `camelCase.js`
- تصویر و آیکون: `kebab-case.ext`
- نام کلاس CSS: `kebab-case`
- هیچ محتوای ثابت بزرگی مستقیماً داخل `App.jsx` قرار نمی‌گیرد.
