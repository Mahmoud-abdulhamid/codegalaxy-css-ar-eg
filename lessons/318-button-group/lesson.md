# تصميم Button Group باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_button_group.asp

## مقدمة حول Button Group

مرحبا بكم في درس تصميم Button Group باستخدام CSS.

- تجميع الأزرار في صف واحد
- استخدام CSS للتحكم في المظهر
- تحسين تجربة المستخدم في صفحات الويب

## الهيكل البرمجي للـ Button Group

الهيكل البرمجي يعتمد على div حاوية ومجموعة من عناصر button.

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

## تنسيق الأزرار باستخدام CSS

تنسيق الأزرار باستخدام float وخصائص CSS الأساسية.

```css
.btn-group button {
  background-color: #04AA6D;
  border: 1px solid green;
  color: white;
  padding: 10px 24px;
  cursor: pointer;
  float: left;
}
```

## تحسين التنسيق ومنع تكرار الحدود

استخدام not(:last-child) لإزالة الحدود المتداخلة.

```css
.btn-group button:not(:last-child) {
  border-right: none;
}
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}
```

## إضافة تأثيرات التفاعل

إضافة تأثير hover لتحسين التفاعل البصري.

```css
.btn-group button:hover {
  background-color: #3e8e41;
}
```

## جعل الأزرار متجاوبة

استخدام النسب المئوية لجعل الأزرار متجاوبة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="btn-group" style="width:100%">
      <button style="width:33.3%">Apple</button>
      <button style="width:33.3%">Samsung</button>
      <button style="width:33.3%">Sony</button>
    </div>
  </body>
</html>
```

## خاتمة الدرس

خاتمة الدرس ودعوة للتطبيق العملي.

- راجع الأكواد البرمجية
- جرب تغيير الألوان والقياسات
- استمر في ممارسة مهارات CSS
