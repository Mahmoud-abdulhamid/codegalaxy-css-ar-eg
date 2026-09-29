# بناء Carousel ثلاثي الأبعاد باستخدام CSS

المصدر: https://www.w3schools.com/css/css3_3dtransforms_carousel.asp

## مقدمة حول 3D Carousel

مرحبا بكم في درس بناء 3D Carousel احترافي باستخدام CSS و 3D Transforms.

- بناء كائنات ثلاثية الأبعاد باستخدام CSS
- استخدام تقنيات 3D Transforms
- إنشاء حركة دوران مستمرة باستخدام CSS Animations

## هيكل HTML الخاص بـ Carousel

هيكل HTML يتكون من حاوية رئيسية وعنصر carousel وستة عناصر card.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <div class="carousel">
        <div class="card" style="--index:0;">1</div>
        <div class="card" style="--index:1;">2</div>
        <div class="card" style="--index:2;">3</div>
        <div class="card" style="--index:3;">4</div>
        <div class="card" style="--index:4;">5</div>
        <div class="card" style="--index:5;">6</div>
      </div>
    </div>
  </body>
</html>
```

## تعريف المتغيرات في CSS

استخدام :root لتعريف المتغيرات وحساب نصف القطر بدقة.

```css
:root {
  --card-width: 200px;
  --card-height: 200px;
  --total-items: 6;
  --radius: 173px;
}
```

## تنسيق الحاوية وخصائص 3D

استخدام perspective و transform-style لتهيئة بيئة ثلاثية الأبعاد.

```css
.container {
  width: var(--card-width);
  height: var(--card-height);
  margin: 80px auto;
  perspective: 1000px;
}
.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 20s infinite linear;
}
```

## تحويل العناصر وتوزيعها

استخدام rotateY و translateZ لتوزيع العناصر في الفضاء ثلاثي الأبعاد.

```css
.card {
  position: absolute;
  transform: rotateY(calc(var(--index) * (360deg / var(--total-items))))
  translateZ(var(--radius));
}
```

## الحركة والتفاعل

إضافة حركة الدوران وإيقافها عند التفاعل.

```css
@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
.carousel:hover {
  animation-play-state: paused;
}
```

## معاينة النتيجة النهائية

النتيجة النهائية لـ Carousel ثلاثي الأبعاد يعمل بكفاءة.

## خلاصة الدرس

شكرا لمتابعتكم، لا تنسوا تجربة الكود وتطوير مهاراتكم في CSS.

- استخدام CSS Variables للتحكم في الأبعاد
- أهمية perspective و transform-style
- تطبيق CSS Animations للدوران
- التفاعل مع العناصر باستخدام hover
