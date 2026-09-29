# CSS Custom Fonts Code Challenge

المصدر: https://www.w3schools.com/css/css_challenges_css3_fonts.asp

## مقدمة حول Custom Fonts

مرحبا بكم في درس CSS Custom Fonts. سنتعلم اليوم كيفية استخدام الخطوط المخصصة في تصميم صفحات الويب.

- أهمية الخطوط المخصصة في تحسين تجربة المستخدم
- استخدام قاعدة font-face في CSS
- تطبيق التحدي البرمجي الخاص بالخطوط

## قاعدة font-face

تسمح قاعدة font-face للمتصفح بتحميل وعرض الخطوط الخارجية المخصصة.

```css
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2');
}
```

## تطبيق الخط على العناصر

نستخدم خاصية font-family لتطبيق الخط المخصص على عناصر HTML مثل h1 و p.

```css
body {
  font-family: 'MyFont', sans-serif;
}
h1 {
  font-weight: bold;
}
```

## هيكل التحدي البرمجي

هيكل التحدي يتطلب كتابة كود CSS سليم لتعريف وتطبيق الخط المخصص.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      @font-face {
        font-family: 'Sansita';
        src: url('sansita.woff');
      }
      h1 {
        font-family: 'Sansita';
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

## معاينة النتيجة

تظهر النتيجة في المتصفح بعد تطبيق الخط المخصص على عنصر العنوان.

```text
Hello World (rendered in Sansita font)
```

## أفضل الممارسات

استخدم دائما خطوط احتياطية (Fallback Fonts) لضمان استقرار التصميم.

- توفير خطوط احتياطية مثل sans-serif
- استخدام صيغ خطوط حديثة مثل woff2
- تحسين سرعة تحميل الخطوط

## خلاصة الدرس

شكرا لمتابعتكم. جربوا التحدي البرمجي بأنفسكم عبر الرابط المرفق.

- تم تغطية font-face بالكامل
- تم تطبيق الخطوط على العناصر
- تمت مراجعة أفضل الممارسات
