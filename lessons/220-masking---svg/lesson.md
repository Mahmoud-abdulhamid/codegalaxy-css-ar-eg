# CSS SVG Mask Layers

المصدر: https://www.w3schools.com/css/css3_masking_svg.asp

## مقدمة في تقنية Masking

مرحبا بكم في درس CSS SVG Mask Layers، سنتعلم اليوم كيفية تطبيق أقنعة إبداعية على صور الويب باستخدام SVG.

- تقنية Masking تسمح بإخفاء أجزاء من العنصر
- نستخدم SVG mask لتحديد شكل القناع
- يمكن تطبيق القناع على أي صورة باستخدام CSS

## إنشاء قناع دائري

نستخدم circle element داخل mask لتحديد مساحة الظهور، حيث اللون الأبيض يحدد الجزء المرئي من الصورة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <svg width="600" height="400">
      <mask id="svgmask1">
        <circle r="150" cx="200" cy="200" fill="#ffffff" />
      </mask>
      <image xlink:href="img.jpg" mask="url(#svgmask1)"></image>
    </svg>
  </body>
</html>
```

## استخدام Ellipse للقناع

نستخدم ellipse element مع خصائص rx و ry للتحكم في أبعاد القناع البيضوي وتشكيل حدود الصورة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <mask id="svgmask1">
      <ellipse cx="220" cy="150" rx="200" ry="100" fill="#ffffff" />
    </mask>
  </body>
</html>
```

## الأقنعة المضلعة والمثلثات

يستخدم polygon element لرسم أشكال هندسية معقدة مثل المثلثات والنجوم عبر تحديد إحداثيات النقاط في خاصية points.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <mask id="svgmask1">
      <polygon fill="#ffffff" points="200 0, 400 400, 0 400"></polygon>
    </mask>
  </body>
</html>
```

## دمج أشكال متعددة

يمكن دمج عدة أشكال داخل mask واحد لإنشاء تأثيرات بصرية متعددة الطبقات على الصورة الواحدة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <mask id="svgmask1">
      <circle fill="#ffffff" cx="75" cy="75" r="75"></circle>
      <circle fill="#ffffff" cx="80" cy="260" r="75"></circle>
    </mask>
  </body>
</html>
```

## خلاصة الدرس

دمج SVG مع CSS يفتح آفاقا واسعة للإبداع. جربوا تغيير الإحداثيات والأشكال بأنفسكم لرؤية النتائج المذهلة.

- استخدام mask يضيف لمسة احترافية
- SVG يوفر دقة عالية في الأشكال
- تطبيق mask عبر CSS سهل وفعال
- استمروا في التجربة والتطبيق العملي
