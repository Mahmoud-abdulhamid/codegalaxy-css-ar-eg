# CSS Grid Items Code Challenge

المصدر: https://www.w3schools.com/css/css_challenges_grid_item.asp

## مقدمة في تحدي Grid Items

مرحبا بكم في تحدي CSS Grid Items العملي لتطوير مهارات تصميم وتخطيط صفحات الويب.

- مراجعة مفاهيم CSS Grid
- تطبيق تحدي Grid Items
- تحسين مهارات التخطيط المرن

## القواعد الأساسية لـ Grid Items

تتحول العناصر الموجودة داخل Grid Container تلقائيا إلى Grid Items قابلة للتحكم.

- Grid Container هو الحاوية الرئيسية
- Grid Items هي العناصر المباشرة داخل الحاوية
- استخدام خصائص CSS للتحكم في التموضع

## هيكل الكود البرمجي

نبدأ بتعريف الحاوية وتفعيل خاصية display: grid لتجهيز بيئة العمل.

```css
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  text-align: center;
}
```

## التحكم في Grid Items

استخدام خصائص grid-column و grid-row للتحكم في أبعاد وموقع العناصر داخل الشبكة.

```css
.item1 {
  grid-column: 1 / span 2;
}
.item2 {
  grid-row: 1 / span 2;
}
```

## معاينة النتيجة

تظهر العناصر داخل المتصفح مرتبة وفقا للشبكة المحددة في كود CSS.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="grid-container">
      <div class="grid-item item1">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item item2">3</div>
    </div>
  </body>
</html>
```

## أفضل الممارسات

استخدام grid-gap لتحسين التباعد بين العناصر وضمان كود نظيف وقابل للصيانة.

- استخدم grid-gap للتحكم في المسافات
- حافظ على تسمية واضحة للـ Classes
- اختبر التجاوب في مختلف المتصفحات

## خلاصة الدرس

تعلمنا إدارة Grid Items بفعالية. جرب الأكواد بنفسك عبر الرابط في الوصف.

- تمت تغطية مفاهيم Grid Items
- شرحنا كيفية تطبيق الكود عمليا
- نوصي بالتطبيق المستمر للوصول للاحتراف
