# كيفية وضع النصوص فوق الصور باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_image_text.asp

## مقدمة الدرس

مرحبا بكم في درس جديد من دورة CSS لتعلم كيفية وضع النصوص فوق الصور باحترافية.

- تعلم كيفية وضع النصوص فوق الصور
- استخدام خصائص CSS Position
- تنسيق العناصر للحصول على مظهر احترافي

## هيكل HTML للصفحة

نبدأ ببناء هيكل HTML باستخدام container يحوي الصورة وعناصر النصوص المختلفة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <img src="img_snow_wide.jpg" alt="Snow" style="width:100%;">
      <div class="bottom-left">Bottom Left</div>
      <div class="top-left">Top Left</div>
      <div class="top-right">Top Right</div>
      <div class="bottom-right">Bottom Right</div>
      <div class="centered">Centered</div>
    </div>
  </body>
</html>
```

## تنسيق الحاوية الرئيسية container

نحدد خاصية position بقيمة relative للحاوية لتكون الإطار المرجعي للعناصر الفرعية.

```css
.container {
  position: relative;
  text-align: center;
  color: white;
}
```

## تنسيق النصوص في الزوايا

نستخدم position بقيمة absolute مع خصائص تحديد الإحداثيات لتوزيع النصوص في الزوايا.

```css
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}
```

## استكمال الزوايا اليمنى

نضبط إحداثيات الزوايا اليمنى باستخدام خاصية right لتوزيع النصوص بشكل متناسق.

```css
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}
```

## توسيط النص في منتصف الصورة

نستخدم top و left بقيمة 50 مع دالة transform لضمان توسيط النص تماما.

```css
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## أفضل الممارسات البرمجية

احرص دائما على استخدام وحدات قياس مرنة وضبط الصور لتتلاءم مع كافة الأجهزة.

- استخدام position relative للعنصر الحاضن
- استخدام position absolute للعناصر المتموضعة
- استخدام transform للتوسيط المثالي

## خلاصة الدرس

خلاصة الدرس: تعلم وضع النصوص فوق الصور باحترافية عبر خصائص CSS Position.

- تم توطين النصوص في الزوايا والمنتصف
- فهم آلية التموضع النسبي والمطلق
- تابعونا للمزيد من دروس CSS الشيقة
