# تصميم الأزرار ذات الحدود الهادفة Outline Buttons باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_outline_buttons.asp

## مقدمة الدرس وأهمية Outline Buttons

مرحبا بكم في درس تصميم الأزرار ذات الحدود الخارجية Outline Buttons باستخدام لغة CSS.

- تعلم تصميم الأزرار ذات الحدود الخارجية Outline Buttons
- استخدام CSS لإضافة جمالية وتفاعلية لعناصر الويب
- تحسين تجربة المستخدم عبر تصاميم عصرية ونظيفة

## هيكل عناصر الأزرار في HTML

نكتب عناصر HTML للأزرار مع أصناف مخصصة لتحديد الحالات المختلفة لكل زر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <button class="btn success">Success</button>
    <button class="btn info">Info</button>
    <button class="btn warning">Warning</button>
    <button class="btn danger">Danger</button>
    <button class="btn default">Default</button>
  </body>
</html>
```

## تنسيق الصنف الأساسي btn في CSS

نضبط الخصائص الأساسية للصنف btn مثل الحدود والخلفية والحشو ومؤشر الفأرة.

```css
.btn {
  border: 2px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
}
```

## تنسيق حالة النجاح Success وحالة المعلومات Info

نخصص لون الحدود وحالة Hover للأزرار success ذات اللون الأخضر وinfo ذات اللون الأزرق.

```css
/* Green */
.success {
  border-color: #04AA6D;
  color: green;
}
.success:hover {
  background-color: #04AA6D;
  color: white;
}
/* Blue */
.info {
  border-color: #2196F3;
  color: dodgerblue;
}
.info:hover {
  background: #2196F3;
  color: white;
}
```

## تنسيق حالات التحذير Warning والخطر Danger والافتراضي Default

نطبق أنماط الألوان للصنف warning البرتقالي، وdanger الأحمر، وdefault الرمادي.

```css
/* Orange */
.warning {
  border-color: #ff9800;
  color: orange;
}
.warning:hover {
  background: #ff9800;
  color: white;
}
/* Red */
.danger {
  border-color: #f44336;
  color: red;
}
.danger:hover {
  background: #f44336;
  color: white;
}
/* Gray */
.default {
  border-color: #e7e7e7;
  color: black;
}
.default:hover {
  background: #e7e7e7;
}
```

## إضافة الزوايا الدائرية بـ border-radius

نضيف خاصية border-radius لإنشاء أزرار ذات زوايا دائرية ناعمة وجذابة.

```css
.btn {
  border-radius: 5px;
}
```

## خلاصة الدرس وتطبيقات عملية

خلاصة الدرس: تعلمنا تصميم الأزرار ذات الخطوط الخارجية الملونة وتطبيق تأثيرات Hover الاحترافية.

- تلخيص مهارات تنسيق الأزرار بـ CSS
- أهمية استخدام تأثيرات hover لتحسين التفاعل
- استمرار الممارسة عبر منصة CodeGalaxy
