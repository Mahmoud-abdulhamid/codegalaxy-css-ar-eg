# CSS Link Buttons

المصدر: https://www.w3schools.com/css/css_link_buttons.asp

## مقدمة في CSS Link Buttons

مرحبا بكم في درس CSS Link Buttons. سنتعلم اليوم كيفية تحويل الروابط العادية إلى أزرار جذابة باستخدام خصائص CSS.

- تحويل الروابط إلى أزرار احترافية
- تحسين تجربة المستخدم في صفحات الويب
- استخدام CSS للتحكم في مظهر العناصر

## المفاهيم الأساسية

نعتمد على خصائص مثل background-color و padding، ونستخدم Pseudo-classes مثل :link و :visited و :hover للتحكم في حالات الرابط.

- استخدام background-color لتلوين الزر
- استخدام padding لتحديد أبعاد الزر
- استخدام :hover لإضافة تأثيرات تفاعلية
- استخدام text-decoration: none لإزالة تسطير الرابط

## تطبيق الكود الأول

تطبيق الكود الأول: نستخدم background-color و padding مع display: inline-block لتحويل الرابط إلى شكل زر.

```css
a:link, a:visited {
  background-color: #f44336;
  color: white;
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
a:hover, a:active {
  background-color: red;
}
```

## تطبيق الكود الثاني

تطبيق الكود الثاني: إضافة حدود للزر باستخدام border وتغيير الألوان عند حالة :hover.

```css
a:link, a:visited {
  background-color: white;
  color: black;
  border: 2px solid green;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
a:hover, a:active {
  background-color: green;
  color: white;
}
```

## معاينة المخرجات

معاينة المخرجات: يظهر الرابط كزر تفاعلي يتغير لونه عند مرور الفأرة فوقه.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <a href="#">هذا زر رابط</a>
  </body>
</html>
```

## أفضل الممارسات

أفضل الممارسات: تأكد من التباين اللوني واستخدم transition لجعل التغييرات أكثر سلاسة.

- استخدام تباين ألوان عال لسهولة القراءة
- إضافة خاصية transition لتأثيرات ناعمة
- الحفاظ على اتساق التصميم في كامل الموقع

## خاتمة الدرس

خاتمة: جربوا الأكواد بأنفسكم وابتكروا تصاميمكم الخاصة. شكرا لمتابعتكم وإلى اللقاء في الدرس القادم.

- راجعوا الأمثلة في موقع W3Schools
- جربوا تغيير القيم في الكود
- استمروا في ممارسة CSS يوميا
