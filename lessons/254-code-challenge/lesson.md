# CSS Responsive Flexbox Code Challenge

المصدر: https://www.w3schools.com/css/css_challenges_flexbox_responsive.asp

## مقدمة في Responsive Flexbox

مرحبا بكم في درس CSS Responsive Flexbox Code Challenge.

- Flexbox يوفر أدوات قوية لتوزيع العناصر
- Responsive Design يضمن تجربة مستخدم ممتازة
- التحديات البرمجية تعزز مهاراتك في CSS

## القواعد الأساسية لـ Flexbox

استخدام display: flex و flex-wrap للتحكم في مرونة العناصر.

- display: flex لتفعيل التخطيط المرن
- flex-wrap: wrap للسماح بالالتفاف
- flex-direction للتحكم في اتجاه العناصر

## هيكل الكود البرمجي

هيكل HTML و CSS الأساسي لتطبيق Flexbox.

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  flex: 1 1 200px;
  padding: 10px;
}
```

## استخدام Media Queries

تغيير اتجاه العناصر باستخدام Media Queries.

```css
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```

## معاينة المخرجات

توزيع العناصر يتغير تلقائيا بناء على عرض الشاشة.

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

## أفضل الممارسات

نصائح لاختبار وتطوير التصميم المرن.

- استخدم Chrome DevTools للاختبار
- جرب أحجام شاشات مختلفة
- تأكد من توافق الكود مع المعايير

## خلاصة الدرس

شكرا لمتابعتكم، استمروا في ممارسة البرمجة.

- Flexbox هو الحل الأمثل للتصميم المرن
- التطبيق العملي هو مفتاح الاحتراف
- راجع الرابط في الوصف للمزيد من التحديات
