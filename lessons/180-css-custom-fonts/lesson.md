# CSS Custom Fonts

المصدر: https://www.w3schools.com/css/css3_fonts.asp

## مقدمة حول Custom Fonts

مرحبا بكم في درس CSS Custom Fonts. سنتعلم كيفية استخدام font-face لتحميل خطوط مخصصة في صفحات الويب.

- استخدام font-face لتحميل خطوط مخصصة
- لا يشترط وجود الخط على جهاز المستخدم
- يتم تحميل ملف الخط تلقائيا من الخادم

## صيغ الخطوط الشائعة

تعد صيغ WOFF و WOFF2 هي الأفضل والأكثر توافقا مع متصفحات الويب الحديثة.

## تعريف الخط باستخدام font-face

يتم تعريف الخط عبر font-face وتحديد المسار باستخدام src، ثم استخدامه في CSS.

```css
@font-face {
  font-family: myFont;
  src: url(sansation_light.woff);
}
p {
  font-family: myFont;
}
```

## إضافة أوزان الخطوط

لإضافة وزن Bold، نستخدم font-face إضافية مع تحديد font-weight.

```css
@font-face {
  font-family: myFont;
  src: url(sansation_bold.woff);
  font-weight: bold;
}
```

## معاينة النتيجة

يظهر النص في المتصفح بالخط المخصص الذي قمنا بتحميله عبر CSS.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- النتيجة في المتصفح -->
    <p>هذا نص يستخدم خطاً مخصصاً</p>
    <p style="font-weight: bold;">هذا نص عريض بنفس الخط</p>
  </body>
</html>
```

## نصائح تقنية

استخدم WOFF2 لتحسين الأداء، ويمكنك تعريف عدة أوزان لنفس الخط.

- استخدم WOFF2 لتقليل حجم الملفات
- تأكد من صحة مسار ملف الخط في src
- يمكن تعريف عدة أوزان لنفس font-family

## خلاصة الدرس

تعلمنا اليوم كيفية استخدام font-face. جربوا الأكواد بأنفسكم من الرابط المرفق.

- تم تغطية font-face بالكامل
- شرح صيغ الخطوط WOFF و TTF
- تطبيق عملي على الخطوط العادية والعريضة
- رابط المصدر متاح في الوصف
