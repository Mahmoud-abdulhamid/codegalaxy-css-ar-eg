# CSS Pseudo-classes Mastery

المصدر: https://www.w3schools.com/css/css_challenges_pseudo_classes.asp

## مقدمة في Pseudo-classes

مرحبا بكم في درس CSS Pseudo-classes. سنتعلم اليوم كيفية استخدام Pseudo-classes لتحسين تفاعلية صفحة الويب.

- Pseudo-classes تتيح تنسيق العناصر بناء على حالتها
- تستخدم مع Selector لتحديد حالة معينة
- تزيد من تفاعلية واجهة المستخدم

## مفهوم Pseudo-classes

تستخدم Pseudo-classes لتحديد حالة خاصة للعنصر مثل hover أو nth-child لتنسيق العناصر بناء على موقعها.

- :hover لتغيير التنسيق عند مرور الفأرة
- :nth-child لتنسيق عناصر محددة في القائمة
- :focus للحقول النشطة في النماذج

## تطبيق عملي على الكود

نستخدم النقطتين الرأسيتين لتطبيق Pseudo-class على العنصر p لتغيير لونه عند مرور الفأرة.

```css
p:hover {
  background-color: yellow;
}
li:nth-child(2) {
  color: red;
}
```

## شرح Structural Pseudo-classes

استخدام nth-child لاستهداف العنصر الثاني في القائمة وتطبيق تنسيق خاص عليه بسهولة.

- nth-child(n) يستهدف العنصر رقم n
- لا حاجة لتعديل HTML
- تنسيق ديناميكي ومرن

## معاينة النتيجة

تظهر النتيجة بتغيير لون العنصر الثاني في القائمة وتفاعل الفقرات عند مرور الفأرة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <ul>
      <li>Item 1</li>
      <li>Item 2 (Red)</li>
    </ul>
    <p>Hover over me!</p>
  </body>
</html>
```

## أفضل الممارسات

نصائح برمجية: استخدم Pseudo-classes بحكمة للحفاظ على أداء الصفحة وتجنب التعقيد غير الضروري.

- استخدم Pseudo-classes بذكاء
- تجنب التداخل المفرط
- اختبر التفاعل في مختلف المتصفحات

## خلاصة الدرس

تعلمنا اليوم أساسيات Pseudo-classes. جرب الأكواد بنفسك عبر الرابط في الوصف لتطوير مهاراتك.

- Pseudo-classes أداة قوية للتفاعل
- تطبيق عملي عبر الرابط المرفق
- استمر في الممارسة والتعلم
