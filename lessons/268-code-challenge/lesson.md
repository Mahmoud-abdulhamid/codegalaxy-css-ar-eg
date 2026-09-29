# CSS 12-Column Grid Layout Challenge

المصدر: https://www.w3schools.com/css/css_challenges_grid_12column.asp

## مقدمة في نظام 12-Column Grid

مرحبا بكم في درس CSS 12-Column Grid. سنتعلم تقسيم صفحة الويب إلى 12 عمودا باستخدام CSS Grid.

- نظام 12-Column Grid هو معيار صناعي لتصميم الويب
- يوفر مرونة عالية في توزيع العناصر
- يعتمد بشكل أساسي على خاصية grid-template-columns

## القواعد الأساسية للشبكة

نستخدم display: grid مع grid-template-columns لإنشاء 12 عمودا متساويا باستخدام وحدة 1fr.

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
}
```

## هيكل الـ HTML للشبكة

نضع عناصر div داخل حاوية رئيسية، ونستخدم grid-column لتحديد عرض كل عنصر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </body>
</html>
```

## التحكم في عرض العناصر

استخدام grid-column: span 6 يجعل العنصر يمتد على 6 أعمدة من أصل 12.

```css
.item {
  grid-column: span 6;
  background: #f1f1f1;
  padding: 20px;
}
```

## معاينة النتيجة

تظهر العناصر موزعة بانتظام مع وجود فواصل بينها بفضل خاصية gap.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- النتيجة المتوقعة -->
    <div class="container">
      <div style="grid-column: span 6">نصف العرض</div>
      <div style="grid-column: span 6">نصف العرض</div>
    </div>
  </body>
</html>
```

## أفضل الممارسات

استخدم Media Queries لضمان تجاوب التصميم مع مختلف أحجام الشاشات.

- استخدم Media Queries لتغيير تخطيط الشبكة
- حافظ على اتساق الـ gap في جميع الشاشات
- اختبر التصميم دائما في Web Browser

## خلاصة الدرس

تعلمنا بناء 12-Column Grid. تدربوا على الأكواد عبر الرابط في الوصف.

- تم تغطية مفاهيم CSS Grid
- شرح كيفية تقسيم الأعمدة
- أهمية التجاوب في التصميم
- شكر خاص للمتابعة
