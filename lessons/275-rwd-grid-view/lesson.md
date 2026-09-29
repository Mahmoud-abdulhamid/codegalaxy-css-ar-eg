# بناء شبكة عرض مرنة Responsive Grid View

المصدر: https://www.w3schools.com/css/css_rwd_grid.asp

## مقدمة في Grid-View

مفهوم Grid-View هو تقسيم صفحة الويب إلى صفوف وأعمدة لبناء تصميم مرن ومتجاوب.

- Grid-View يقسم الصفحة إلى Rows و Columns
- التصميم المرن يتغير حجمه مع نافذة Web Browser
- يستخدم عادة 6 أو 12 عمودا في التصميم

## ضبط خاصية box-sizing

استخدام box-sizing بقيمة border-box يضمن دقة حساب أبعاد العناصر في التصميم.

```css
* {
  box-sizing: border-box;
}
```

## هيكل الـ HTML للشبكة

ننشئ حاوية grid-container تضم العناصر الأساسية للصفحة مثل الترويسة والقائمة والمحتوى.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="grid-container">
      <div class="header"><h1>Chania</h1></div>
      <div class="menu">...</div>
      <div class="content">...</div>
      <div class="facts">...</div>
      <div class="footer">...</div>
    </div>
  </body>
</html>
```

## تنسيق الشبكة باستخدام CSS

تنسيق CSS باستخدام Grid Layout لتحديد أماكن العناصر وتوزيع المسافات.

```css
.grid-container {
  display: grid;
  grid-template-areas:
  'header'
  'menu'
  'main'
  'facts'
  'footer';
  gap: 10px;
}
```

## تنسيق العناصر الفردية

ربط العناصر بـ grid-area وتطبيق الألوان والتنسيقات الجمالية.

```css
.header {
  grid-area: header; background-color: purple;
}
.menu {
  grid-area: menu;
}
.content {
  grid-area: main;
}
.footer {
  grid-area: footer; background-color: #0099cc;
}
```

## معاينة النتيجة

شكل الصفحة النهائي بعد تطبيق تنسيقات Grid Layout.

## خلاصة الدرس

خلاصة: استخدام Grid Layout يسهل بناء تصاميم مرنة ومنظمة.

- استخدم box-sizing: border-box دائما
- استخدم grid-template-areas لتخطيط الصفحة
- جرب تغيير الألوان والأحجام لتطوير مهاراتك
