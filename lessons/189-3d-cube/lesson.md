# CSS3D Transforms - 3D Cube

المصدر: https://www.w3schools.com/css/css3_3dtransforms_cube.asp

## مقدمة حول بناء المكعب ثلاثي الأبعاد

مرحبا بكم في درس جديد حول بناء مكعب ثلاثي الأبعاد متحرك باستخدام CSS.

- بناء جسم ثلاثي الأبعاد كلاسيكي في CSS
- استخدام التحولات والفضاء الثلاثي
- ربط عناصر HTML بخصائص التنسيق

## الهيكل الأساسي باستخدام HTML

الهيكل الأساسي يتكون من حاوية رئيسية ومكعب يضم ستة أوجه منفصلة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <div class="cube">
        <div class="face front">front</div>
        <div class="face back">back</div>
        <div class="face right">right</div>
        <div class="face left">left</div>
        <div class="face top">top</div>
        <div class="face bottom">bottom</div>
      </div>
    </div>
  </body>
</html>
```

## تنسيق الحاوية وإعداد المنظور

نحدد أبعاد الحاوية ونطبق خاصية perspective لخلق شعور بالعمق الثلاثي الأبعاد.

```css
.container {
  width: 200px;
  height: 200px;
  margin: 100px auto;
  perspective: 600px;
}
```

## إعداد المكعب والحفاظ على الفضاء

خاصية transform-style بقيمة preserve-3d ضرورية لمنع تسطيح الأوجه في فضاء ثنائي الأبعاد.

```css
.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 12s infinite linear;
}
```

## التنسيق الأساسي لأوجه المكعب

نطبق تنسيقات موحدة للأوجه الستة مع تحديد الموقع المطلق والخلفية الشفافة.

```css
.face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid white;
  line-height: 200px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background: rgba(255, 0, 0, 0.5);
}
```

## توزيع الأوجه في الفضاء الثلاثي

نستخدم دوال الدوران والإزاحة translateZ لوضع كل وجه في مكانه الصحيح من المكعب.

```css
.front {
  transform: rotateY( 0deg) translateZ(100px);
}
.back {
  transform: rotateY(180deg) translateZ(100px);
}
.left {
  transform: rotateY( -90deg) translateZ(100px);
}
.right {
  transform: rotateY( 90deg) translateZ(100px);
}
.top {
  transform: rotateX( 90deg) translateZ(100px);
}
.bottom {
  transform: rotateX( -90deg) translateZ(100px);
}
```

## إنشاء حركة الدوران المستمرة

ننشئ حركة keyframes لتنفيذ دوران مستمر للمكعب في كافة الاتجاهات.

```css
@keyframes spin {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
```

## معاينة المكعب ثلاثي الأبعاد

نتيجة المعاينة المرئية للمكعب ثلاثي الأبعاد أثناء الدوران المستمر في متصفح الويب.

## خلاصة ودعوة للمتابعة

إلى اللقاء في الدرس القادم لمزيد من إبداعات تنسيق الصفحات وتطوير الويب.

- إتقان خاصية perspective والعمق
- فهم تحولات rotateX و rotateY
- تطبيق حركات keyframes الاحترافية
