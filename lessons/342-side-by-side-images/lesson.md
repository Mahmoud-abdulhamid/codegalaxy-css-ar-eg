# محاذاة الصور جنبا إلى جنب باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_images_side_by_side.asp

## مقدمة حول محاذاة الصور

سنتعلم اليوم كيفية محاذاة الصور جنبا إلى جنب باستخدام CSS بطرق احترافية.

- استخدام CSS لمحاذاة الصور
- مقارنة بين float و Flexbox
- إنشاء معرض صور متجاوب

## الهيكل البرمجي للصور

نستخدم div class='row' لتجميع العناصر و div class='column' لكل صورة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="row">
      <div class="column">
        <img src="img_snow.jpg" alt="Snow" style="width:100%">
      </div>
      <div class="column">
        <img src="img_forest.jpg" alt="Forest" style="width:100%">
      </div>
    </div>
  </body>
</html>
```

## استخدام خاصية float

نستخدم float: left مع عرض 33.33 لإنشاء أعمدة متجاورة.

```css
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
```

## استخدام تقنية Flexbox

Flexbox توفر مرونة أكبر في توزيع العناصر وتنسيقها.

```css
.row {
  display: flex;
}
.column {
  flex: 33.33%;
  padding: 5px;
}
```

## إضافة التصميم المتجاوب

نستخدم Media Queries لجعل التصميم متجاوبا مع الشاشات الصغيرة.

```css
@media screen and (max-width: 500px) {
  .column {
    width: 100%;
  }
}
```

## خلاصة الدرس

تعلمنا موازنة استخدام float و Flexbox لتصميم معارض صور احترافية.

- استخدم Flexbox للمشاريع الحديثة
- استخدم float لدعم المتصفحات القديمة
- لا تنس Media Queries للتجاوب
