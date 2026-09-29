# CSS 12-Column Grid Layout

المصدر: https://www.w3schools.com/css/css_grid_12column.asp

## مقدمة في 12-Column Grid

نظام 12-Column Grid هو وسيلة مرنة لتنظيم محتوى صفحات الويب وتصميم واجهات متجاوبة.

- نظام 12-Column Grid يوفر هيكلا مرنا
- يسمح بتقسيم المساحة الأفقية إلى 12 عمودا متساويا
- يدعم التصميم المتجاوب Responsive Web Design

## إعداد الحاوية الأساسية

نستخدم display: grid لتفعيل الشبكة، وgrid-template-columns لإنشاء 12 عمودا متساويا.

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 20px;
}
```

## توزيع العناصر داخل الشبكة

تستخدم الخاصية grid-column لتحديد مكان وحجم العناصر عبر الأعمدة الـ 12.

```css
.container > * {
  grid-column: col-start / span 12;
  padding: 10px;
  border: 1px solid green;
}
```

## استخدام Media Queries

نستخدم Media Queries لتغيير توزيع العناصر بناء على عرض الشاشة.

```css
@media (min-width: 576px) {
  .sidebar {
    grid-column: col-start / span 3;
  }
  .content {
    grid-column: col-start 4 / span 9;
  }
}
```

## مثال متكامل

مثال كامل يوضح كيفية توزيع العناصر في شبكة من 12 عمودا.

```css
.nav {
  grid-column: col-start / span 2;
}
.content {
  grid-column: col-start 3 / span 8;
}
.sidebar {
  grid-column: col-start 11 / span 2;
}
```

## معاينة المخرجات

تظهر العناصر موزعة بدقة داخل الشبكة، وتتغير أبعادها تلقائيا مع تغير حجم المتصفح.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    Layout: [Nav(2) | Content(8) | Sidebar(2)]
    Responsive: Stacked on mobile, Grid on desktop.
  </body>
</html>
```

## خلاصة الدرس

نظام 12-Column Grid هو أداة قوية لتنظيم التصاميم المتجاوبة. جربوا الأكواد بأنفسكم!

- استخدم display: grid للحاويات
- استخدم repeat(12, 1fr) لإنشاء الأعمدة
- استخدم grid-column لتحديد مكان العناصر
- طبق Mobile First مع Media Queries
