# تصميم أزرار التنبيه باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_alert_buttons.asp

## مقدمة حول أزرار التنبيه

مرحبا بكم في درس تصميم Alert Buttons باستخدام CSS لبناء واجهات تفاعلية جذابة.

- أزرار التنبيه تعزز تجربة المستخدم
- تستخدم لتوضيح حالات النجاح أو التحذير
- تعتمد على CSS لتغيير الألوان والحالة

## هيكل الأزرار في HTML

نستخدم عنصر button مع Classes متعددة للتحكم في التنسيق العام والخاص.

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

## تنسيق الفئة العامة btn

تنسيق الفئة العامة btn يضمن توحيد المظهر الأساسي لجميع الأزرار.

```css
.btn {
  border: none;
  color: white;
  padding: 14px 28px;
  cursor: pointer;
}
```

## تخصيص ألوان الحالات

تخصيص الألوان لكل حالة يعطي دلالة بصرية واضحة للمستخدم.

```css
.success {
  background-color: #04AA6D;
}
.info {
  background-color: #2196F3;
}
.warning {
  background-color: #ff9800;
}
.danger {
  background-color: #f44336;
}
.default {
  background-color: #e7e7e7; color: black;
}
```

## إضافة تأثيرات التفاعل

استخدام hover يضيف تفاعلية بصرية عند مرور مؤشر الماوس.

```css
.success:hover {
  background-color: #46a049;
}
.info:hover {
  background: #0b7dda;
}
.warning:hover {
  background: #e68a00;
}
.danger:hover {
  background: #da190b;
}
.default:hover {
  background: #ddd;
}
```

## خلاصة الدرس

لقد تعلمنا بناء أزرار تنبيه احترافية باستخدام CSS. جربوا الأكواد بأنفسكم!

- استخدام Classes متعددة للعناصر
- تطبيق Pseudo-class للتحكم في التفاعل
- تحسين تجربة المستخدم بالألوان
- الاستمرار في ممارسة كتابة CSS
