# CSS Form Focus and Icons

المصدر: https://www.w3schools.com/css/css_form_focus.asp

## مقدمة حول CSS Form Focus

مرحبا بكم في درس CSS Form Focus لتحسين تجربة المستخدم في حقول الإدخال.

- التحكم في مظهر حقول الإدخال عند التركيز
- إضافة أيقونات داخل حقول الإدخال
- تطبيق تأثيرات الحركة باستخدام CSS

## التحكم في حالة focus

إزالة الإطار الافتراضي باستخدام outline: none واستخدام محدد :focus.

```css
input[type=text]:focus {
  outline: none;
  background-color: lightblue;
  border: 3px solid #555;
}
```

## إضافة أيقونات لحقول الإدخال

استخدام background-image و padding-left لإضافة أيقونة داخل حقل الإدخال.

```css
input[type=text] {
  background-image: url('searchicon.png');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
}
```

## تأثيرات الحركة مع transition

استخدام transition لتغيير عرض حقل الإدخال عند التركيز بسلاسة.

```css
input[type=text] {
  transition: width 0.4s ease-in-out;
}
input[type=text]:focus {
  width: 100%;
}
```

## معاينة النتائج

معاينة تفاعلية لحقل الإدخال مع الأيقونة وتأثير الحركة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <input type='text' placeholder='Search..'>
  </body>
</html>
```

## ملاحظات هندسية

أفضل الممارسات: تأكد من وضوح النص وتوافقية المتصفحات.

- استخدم padding كاف للأيقونات
- اختبر التوافق عبر المتصفحات
- حافظ على بساطة تأثيرات transition

## خلاصة الدرس

خلاصة: التحكم في focus، إضافة الأيقونات، وتطبيق الحركة.

- استخدام :focus للتحكم في التفاعل
- دمج الصور كأيقونات داخل الحقول
- تحسين تجربة المستخدم بـ transition
