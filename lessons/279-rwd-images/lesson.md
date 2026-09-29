# Responsive Web Design Images in CSS

المصدر: https://www.w3schools.com/css/css_rwd_images.asp

## مقدمة في تصميم الصور المتجاوبة

مرحبا بكم في درس تصميم الصور المتجاوبة في لغة CSS وكيفية ملاءمتها للشاشات.

- تطوير صفحات وب تتكيف مع كافة أحجام الشاشات
- جعل الصور مرنة وتتغير أبعادها بمرونة تامة
- تحسين تجربة المستخدم عبر تقليص أوقات التحميل

## استخدام الخاصية width

عند ضبط الخاصية width بالنسبة المئوية وheight على auto تصبح الصورة متجاوبة.

```css
img {
  width: 100%;
  height: auto;
}
```

## استخدام الخاصية max-width

استخدام max-width بدلا من width يمنع الصورة من التمدد أكبر من حجمها الأصلي.

```css
img {
  max-width: 100%;
  height: auto;
}
```

## صور الخلفية المتجاوبة Background Images

صور الخلفية تستجيب للتحجيم عبر استخدام خصائص background-size المختلفة.

```css
div {
  width: 100%;
  height: 400px;
  background-image: url('img_flowers.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  border: 1px solid black;
}
```

## القيم المختلفة لـ background-size

قيمة cover تغطي كامل مساحة المحتوى مع احتمال قص جزء من الصورة.

```css
div {
  width: 100%;
  height: 400px;
  background-image: url('img_flowers.jpg');
  background-size: cover;
  border: 1px solid black;
}
```

## عرض صور مختلفة للأجهزة المختلفة

استخدام media queries لتحميل صور مختلفة تناسب الأجهزة الكبيرة والصغيرة.

```css
body {
  background-image: url('img_smallflower.jpg');
}
@media only screen and (min-width: 400px) {
  body {
    background-image: url('img_flowers.jpg');
  }
}
```

## استخدام العنصر picture في HTML

عنصر picture يمنح مطوري الويب مرونة فائقة في تحديد موارد الصور المتعددة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <picture>
      <source srcset="img_smallflower.jpg" media="(max-width: 400px)">
      <source srcset="img_flowers.jpg">
      <img src="img_flowers.jpg" alt="Flowers">
    </picture>
  </body>
</html>
```

## خلاصة وخاتمة الدرس

خلاصة درس الصور المتجاوبة وأفضل الممارسات لتصميم صفحات ويب سريعة وجذابة.

- استخدام max-width لحماية جودة وتصميم الصور
- الاستفادة من background-size لخلفيات متجاوبة
- تفعيل picture element لتحسين الأداء وسرعة التحميل
