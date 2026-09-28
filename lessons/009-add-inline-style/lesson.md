# How To Add Inline CSS

المصدر: https://www.w3schools.com/css/css_howto_inline.asp

## مقدمة حول Inline CSS

مرحبا بكم في درس جديد من دورة CSS. سنتعلم اليوم كيفية إضافة Inline CSS لتطبيق تصميم فريد على Element واحد داخل صفحة الويب.

- Inline CSS يستخدم لتنسيق عنصر واحد
- يتم إضافته مباشرة داخل Element
- يستخدم style attribute لتطبيق الخصائص

## قواعد استخدام Inline CSS

لاستخدام هذا الأسلوب، نقوم بإضافة style attribute إلى الـ Element المعني. هذا الـ attribute يمكن أن يحتوي على أي CSS property نريدها.

- نستخدم style attribute داخل الـ Start Tag
- يمكن إضافة أي CSS property داخل الـ attribute
- يؤثر التنسيق فقط على الـ Element الذي يحتوي عليه

## كتابة الكود البرمجي

لننظر إلى هذا المثال. نبدأ بـ DOCTYPE HTML ثم نفتح الـ body. نقوم بتنسيق h1 باستخدام style attribute لتحديد اللون والمحاذاة.

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 style="color:blue;text-align:center;">
      This is a heading</h1>
```

## استكمال الكود البرمجي

نكمل الآن بإضافة p وتطبيق style attribute عليها لتغيير اللون إلى red. هكذا نكون قد طبقنا التنسيق بشكل مباشر على كل Element على حدة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <p style="color:red;">
      This is a paragraph.</p>
    </body>
  </html>
```

## ملاحظات هندسية هامة

يجب أن نعلم أن Inline CSS يفقد الكثير من مميزات الـ style sheet، لأنه يقوم بخلط المحتوى مع التقديم. ننصح باستخدام هذه الطريقة بحذر شديد.

- يقلل من قابلية إعادة استخدام الكود
- يخلط المحتوى مع التنسيق
- يستخدم فقط عند الضرورة القصوى

## خلاصة الدرس

في ختام درسنا، تعلمنا كيف نضيف التنسيقات مباشرة داخل الـ Elements. أدعوكم لتجربة هذه الأكواد بأنفسكم عبر الرابط الموجود في وصف الفيديو.

- تم شرح مفهوم Inline CSS
- تم تطبيق style attribute عمليا
- تم التنبيه على أفضل الممارسات البرمجية
