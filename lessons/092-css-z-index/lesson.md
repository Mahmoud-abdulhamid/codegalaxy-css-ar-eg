# CSS z-index Property

المصدر: https://www.w3schools.com/css/css_z-index.asp

## مقدمة حول خاصية z-index

مرحبا بكم في درس جديد من دورة CSS لتعلم خاصية z-index.

- تحدد خاصية z-index ترتيب التكدس للعناصر الموضحة
- تتحكم في أي عنصر يظهر في المقدمة أو الخلفية
- تتعامل مع العناصر المتداخلة التي تتبنى خصائص الموقع

## مفهوم ترتيب التكدس

العناصر المتداخلة يمكن أن تحمل قيما موجبة أو سالبة للتحكم بالظهور.

- العناصر الموضحة قد تتقاطع وتتداخل في المساحة
- القيم الأكبر تظهر دائما في المقدمة فوق القيم الأقل
- القيم السالبة تضع العنصر خلف النصوص أو العناصر الأخرى

## الشروط الأساسية للعمل

خاصية z-index تعمل حصريا على العناصر الموضحة وflex items.

```css
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```

## مثال متقدم لصناديق متعددة

مثال متقدم يوضح تأثير قيم z-index المختلفة على عدة صناديق.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <div class="black-box">Black box</div>
      <div class="gray-box">Gray box</div>
      <div class="green-box">Green box</div>
    </div>
  </body>
</html>
```

## تنسيق الصناديق بخصائص CSS

تنسيق الصناديق في CSS مع تحديد قيم z-index لكل صندوق.

```css
.black-box {
  position: relative;
  z-index: 1;
  border: 2px solid black;
  height: 100px;
}
.gray-box {
  position: absolute;
  z-index: 3;
  background: lightgray;
}
.green-box {
  position: absolute;
  z-index: 2;
  background: lightgreen;
}
```

## معاينة النتيجة المرئية

معاينة النتيجة المرئية للصناديق المكدسة وفق قيم z-index.

## سلوك العناصر بدون z-index

بدون z-index تترتب العناصر حسب تسلسلها في مصدر HTML.

## خلاصة الدرس

خلاصة استخدام z-index للتحكم الكامل بطبقات وعناصر صفحات الويب.

- خاصية z-index أداة قوية للتحكم بالطبقات
- تتطلب عناصر موضحة لتأثيرها الفعال
- ترتب العناصر حسب الأرقام الموجبة والسالبة
