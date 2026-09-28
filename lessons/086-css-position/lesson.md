# CSS position Property

المصدر: https://www.w3schools.com/css/css_position.asp

## مقدمة في CSS Positioning

تستخدم CSS positioning للتحكم في أماكن العناصر داخل صفحة الويب وتجاوز التدفق الطبيعي للمستند.

- التحكم في أماكن العناصر
- تجاوز التدفق الطبيعي للمستند
- استخدام خاصية position

## فهم خاصية position

تحدد خاصية position نوع التموضع، وتستخدم الخصائص top و bottom و left و right لتحديد الموقع النهائي.

## التموضع الافتراضي static

العناصر ذات position: static تتبع التدفق الطبيعي للصفحة ولا تتأثر بخصائص التموضع.

```css
div.static {
  position: static;
  border: 3px solid #73AD21;
}
```

## التموضع النسبي relative

يتموضع العنصر relative نسبة لموقعه الأصلي، ولا يتم تعديل العناصر الأخرى لملء الفراغ الناتج.

```css
div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}
```

## معاينة المخرجات

تظهر المعاينة إزاحة العنصر relative بمقدار 30px عن موقعه الطبيعي.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="static">Static Element</div>
    <div class="relative">Relative Element</div>
  </body>
</html>
```

## ملاحظات هندسية

استخدم position: relative بحذر لتجنب تداخل العناصر والحفاظ على استقرار التخطيط.

- تجنب التداخل غير المقصود
- اختبار التخطيط على شاشات مختلفة
- استخدام relative كمرجع للعناصر المطلقة

## خلاصة الدرس

تعلمنا أساسيات position. جرب الأكواد بنفسك عبر الرابط في الوصف.

- static هو الوضع الافتراضي
- relative يحافظ على مساحة العنصر
- استخدم top, left, right, bottom للتحريك
