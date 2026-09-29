# CSS Button Groups

المصدر: https://www.w3schools.com/css/css3_buttons_groups.asp

## مقدمة في مجموعات الأزرار

مرحبا بكم في درس CSS Button Groups، حيث سنتعلم تنظيم الأزرار وتصميمها باحترافية.

- تنظيم الأزرار في مجموعات متناسقة
- استخدام CSS للتحكم في التخطيط
- إضافة تأثيرات تفاعلية عند التفاعل

## إنشاء مجموعة أزرار أفقية

نستخدم div مع display: flex لإنشاء مجموعة أزرار أفقية متجاورة.

```css
.btn-group {
  display: flex;
  flex-wrap: wrap;
}
```

## تنسيق الأزرار داخل المجموعة

تنسيق الأزرار باستخدام الألوان والمسافات وإضافة تأثير hover.

```css
.button {
  background-color: #04AA6D;
  padding: 15px 32px;
  cursor: pointer;
}
.btn-group .button:hover {
  background-color: dodgerblue;
}
```

## إضافة حدود للمجموعة

استخدام border لإنشاء مجموعة أزرار ذات حدود متصلة.

```css
.button {
  border: 1px solid green;
}
.btn-group .button:not(:last-child) {
  border-right: none;
}
```

## إنشاء مجموعة أزرار عمودية

استخدام flex-direction: column لترتيب الأزرار عموديا.

```css
.btn-group {
  display: flex;
  flex-direction: column;
}
```

## معاينة المخرجات

النتيجة النهائية: أزرار متجاورة أو عمودية بتأثيرات تفاعلية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="btn-group">
      <button class="button">Button 1</button>
      <button class="button">Button 2</button>
    </div>
  </body>
</html>
```

## خلاصة الدرس

خلاصة: استخدمنا flexbox لتنظيم الأزرار. جربوا الأكواد بأنفسكم!

- استخدام display: flex للتخطيط
- التحكم في الاتجاه عبر flex-direction
- تخصيص الحدود عبر border
- إضافة تفاعلية عبر hover
