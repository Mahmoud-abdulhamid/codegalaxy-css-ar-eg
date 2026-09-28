# Multiple Style Sheets & Cascading Order

المصدر: https://www.w3schools.com/css/css_howto_multiple_cascade.asp

## مقدمة في Multiple Style Sheets

سنتعرف اليوم على كيفية التعامل مع ملفات CSS المتعددة ومفهوم Cascading Order في صفحات الويب.

- تعدد ملفات CSS في الصفحة الواحدة
- تأثير ترتيب الملفات على التصميم
- مفهوم Cascading Order في CSS
- أولوية تطبيق الأنماط على العناصر

## قاعدة الأولوية في CSS

عند تعريف خصائص لنفس العنصر في ملفات مختلفة، يتم اعتماد القيمة الموجودة في الملف الذي تمت قراءته أخيرا.

```css
h1 {
  color: navy;
}
h1 {
  color: orange;
}
```

## تأثير الترتيب في head

إذا تم تعريف النمط الداخلي بعد رابط الملف الخارجي، فسيتم تطبيق النمط الداخلي.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="mystyle.css">
    <style>
      h1 {
        color: orange;
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Styled Web Page</p>
  </body>
</html>
```

## عكس ترتيب الأنماط

عند وضع النمط الداخلي قبل الملف الخارجي، سيتم تطبيق نمط الملف الخارجي كونه الأخير.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      h1 {
        color: orange;
      }
    </style>
    <link rel="stylesheet" href="mystyle.css">
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Styled Web Page</p>
  </body>
</html>
```

## قواعد Cascading Order

تتجمع الأنماط في ورقة أنماط افتراضية، حيث يمتلك Inline style الأولوية القصوى في التجاوز.

- Inline style له الأولوية القصوى
- Internal style يأتي في المرتبة الثانية
- External style يأتي في المرتبة الثالثة
- Browser defaults لها الأولوية الأقل

## خلاصة الدرس

ترتيب الأنماط هو مفتاح التحكم في التصميم. جربوا الأكواد بأنفسكم لتطبيق المفاهيم التي تعلمناها اليوم.

- راجعوا ترتيب ملفات CSS
- استخدموا Inline style بحذر
- طبقوا الأمثلة في المتصفح
- تابعوا الدورة لمزيد من الاحتراف
