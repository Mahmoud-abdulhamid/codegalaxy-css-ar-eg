# CSS Media Queries and Responsive Web Design

المصدر: https://www.w3schools.com/css/css_rwd_mediaqueries.asp

## مقدمة حول CSS Media Queries

تعرف على مفهوم CSS Media Queries ودورها الأساسي في Responsive Web Design.

- تطبيق التنسيقات بناء على خصائص الجهاز والبيئة
- عنصر أساسي لإنشاء صفحات وب متجاوبة Responsive
- استخدام قاعدة media لتضمين الاستعلامات في الملف

## إضافة Breakpoints عبر Media Queries

استخدام Media Queries لإضافة Breakpoints وإعادة ترتيب عناصر Grid Layout.

```css
@media (min-width: 600px) {
  .header {
    grid-area: 1 / span 6;
  }
  .menu {
    grid-area: 2 / span 1;
  }
  .content {
    grid-area: 2 / span 4;
  }
  .facts {
    grid-area: 2 / span 1;
  }
  .footer {
    grid-area: 3 / span 6;
  }
}
```

## تعدد Breakpoints للشاشات المختلفة

يمكن إضافة عدة Breakpoints لتغطية قياسات شاشات متعددة ودقيقة.

```css
@media (min-width: 600px) {
  .facts {
    grid-area: 3 / span 6;
  }
}
@media (min-width: 768px) {
  .facts {
    grid-area: 2 / span 1;
  }
}
```

## مجموعات الأجهزة النمطية

تصنيف الأجهزة إلى خمس مجموعات أساسية لتسهيل كتابة Media Queries.

```css
@media only screen and (max-width: 600px) {
  ...
}
@media only screen and (min-width: 600px) {
  ...
}
@media only screen and (min-width: 768px) {
  ...
}
@media only screen and (min-width: 992px) {
  ...
}
@media only screen and (min-width: 1200px) {
  ...
}
```

## استعلامات اتجاه الشاشة Orientation

تغيير تصميم صفحات الويب اعتمادا على اتجاه الشاشة Landscape أو Portrait.

```css
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```

## إخفاء العناصر وتعديل الخطوط

إخفاء عناصر معينة أو تعديل حجم الخط بناء على عرض الـ Viewport.

```css
@media screen and (max-width: 600px) {
  #div1 {
    display: none;
  }
}
@media screen and (min-width: 600px) {
  #div1 {
    font-size: 80px;
  }
}
```

## استعلامات تفضيلات المستخدم

احترام تفضيلات المستخدمين عبر ميزة prefers-reduced-motion وإيقاف الحركات.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## خلاصة الدرس والممارسة العملية

خلاصة استخدام CSS Media Queries لبناء تجارب ويب متجاوبة.

- استخدام media لتخصيص الأنماط حسب قياس الشاشة
- التعامل مع اتجاهات العرض وتفضيلات الحركة
- تجربة الأكواد المذكورة لتطوير مهارات Responsive Design
