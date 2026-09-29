# تصميم Vertical Button Group باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_button_group_vertical.asp

## مقدمة في Vertical Button Groups

مرحبا بكم في درس تصميم Vertical Button Group باستخدام CSS.

- تجميع الأزرار بشكل عمودي
- تحسين تجربة المستخدم في واجهات الويب
- استخدام CSS للتحكم في المظهر

## الهيكل البرمجي للمجموعة

استخدام div كحاوية رئيسية ووضع عناصر button بداخلها.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="btn-group">
      <button>Apple</button>
      <button>Samsung</button>
      <button>Sony</button>
    </div>
  </body>
</html>
```

## تنسيق الأزرار بـ CSS

تنسيق الأزرار باستخدام display: block وتحديد العرض والألوان.

```css
.btn-group button {
  background-color: #04AA6D;
  border: 1px solid green;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
  width: 50%;
  display: block;
}
```

## إدارة الحدود والتفاعل

استخدام :not(:last-child) لإزالة الحدود المزدوجة وإضافة تأثير hover.

```css
.btn-group button:not(:last-child) {
  border-bottom: none;
}
.btn-group button:hover {
  background-color: #3e8e41;
}
```

## معاينة النتيجة النهائية

النتيجة النهائية: أزرار مرتبة عموديا مع تأثيرات تفاعلية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- النتيجة في المتصفح -->
    [Apple] (Green)
    [Samsung] (Green)
    [Sony] (Green)
  </body>
</html>
```

## أفضل الممارسات

نصائح إضافية لتحسين التصميم وتجربة المستخدم.

- استخدام transitions لتأثيرات أكثر سلاسة
- اختيار ألوان متناسقة مع هوية الموقع
- التأكد من وضوح النصوص داخل الأزرار

## خاتمة الدرس

شكرا لمتابعتكم، جربوا الكود بأنفسكم عبر الرابط في الوصف.

- راجعوا الرابط في الوصف للتطبيق العملي
- استمروا في ممارسة مهارات CSS
- محمود عبدالحميد يتمنى لكم التوفيق
