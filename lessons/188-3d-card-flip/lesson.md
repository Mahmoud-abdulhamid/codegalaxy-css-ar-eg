# CSS3D Transforms - Card Flip

المصدر: https://www.w3schools.com/css/css3_3dtransforms_cardflip.asp

## مقدمة حول 3D Card Flip

سنتعلم اليوم كيفية إنشاء تأثير 3D Card Flip التفاعلي باستخدام خصائص CSS المتقدمة.

- مفهوم الـ 3D Transforms في CSS
- بناء هيكل HTML المناسب
- استخدام perspective و transform-style
- تفعيل الحركة عند الـ hover

## هيكل HTML للبطاقة

هيكل HTML يتكون من حاوية رئيسية وعنصر البطاقة الذي يحتوي على وجهين.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <div class="card">
        <div class="face front"><h2>Front</h2></div>
        <div class="face back"><h2>Back</h2></div>
      </div>
    </div>
  </body>
</html>
```

## إعداد الحاوية والمنظور

خاصية perspective ضرورية لخلق إحساس العمق في الفضاء ثلاثي الأبعاد.

```css
.container {
  width: 200px;
  height: 250px;
  perspective: 600px;
}
```

## تجهيز عنصر البطاقة

استخدام transform-style: preserve-3d يضمن بقاء العناصر داخل الفضاء ثلاثي الأبعاد.

```css
.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}
```

## تنسيق أوجه البطاقة

خاصية backface-visibility: hidden تمنع رؤية الوجه الخلفي عند الدوران.

```css
.face {
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}
```

## تفعيل حركة الدوران

تفعيل الدوران عند تمرير الفأرة باستخدام transform: rotateY(180deg).

```css
.back {
  transform: rotateY(180deg);
}
.container:hover .card {
  transform: rotateY(180deg);
}
```

## خلاصة الدرس

شكرا لمتابعتكم، جربوا الكود بأنفسكم لتطوير مهاراتكم في CSS.
