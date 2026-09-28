# CSS Selectors Grouping Challenge

المصدر: https://www.w3schools.com/css/css_challenges_selectors.asp

## مقدمة في تجميع الـ Selectors

مرحبا بكم في درس تجميع الـ Selectors في CSS لتحسين كفاءة الكود.

- تجميع الـ Selectors يقلل من تكرار الكود
- يتم فصل الـ Selectors باستخدام الفاصلة
- طريقة فعالة لتطبيق نفس الـ Styles على عناصر مختلفة

## مفهوم الـ Grouping Selectors

نستخدم الفاصلة لتجميع الـ Selectors وتطبيق نفس الـ Styles بكفاءة.

- استخدام الفاصلة (,) للفصل بين الـ Selectors
- تطبيق الـ Styles داخل أقواس المجموعة
- مثال: h1, p color: blue

## كتابة الكود البرمجي

تجميع الـ h1 والـ p لتطبيق نفس الـ Styles.

```css
h1, p {
  text-align: center;
  color: red;
}
```

## تحليل أجزاء الكود

شرح تفصيلي لكيفية عمل الـ Grouping Selectors في CSS.

- h1, p: الـ Selectors المجمعة
- text-align: center: محاذاة النص للمنتصف
- color: red: تغيير لون النص إلى الأحمر

## المخرجات في المتصفح

تظهر النتيجة في المتصفح بتنسيق موحد للعناصر المجمعة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>هذا عنوان</h1>
    <p>هذه فقرة نصية.</p>
  </body>
</html>
```

## أفضل الممارسات

أفضل الممارسات لتنظيم الكود البرمجي في CSS.

- تجميع الـ Selectors يقلل حجم ملف الـ CSS
- يسهل عملية التعديل والتطوير مستقبلا
- يقلل من احتمالية حدوث أخطاء في التنسيق

## خلاصة الدرس

خلاصة الدرس: تجميع الـ Selectors مهارة أساسية لبرمجة الويب.

- استخدام الفاصلة لتجميع الـ Selectors
- تطبيق الـ Styles بكفاءة عالية
- قم بزيارة الرابط في الوصف لحل التحدي
