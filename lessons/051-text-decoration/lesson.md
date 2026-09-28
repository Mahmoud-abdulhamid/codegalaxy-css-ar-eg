# CSS Text Decoration

المصدر: https://www.w3schools.com/css/css_text_decoration.asp

## مقدمة في CSS Text Decoration

تستخدم خاصية text-decoration للتحكم في مظهر خطوط التزيين على النصوص في صفحات الويب.

- التحكم في مظهر خطوط التزيين
- استخدام خاصية shorthand
- تحسين جمالية النصوص

## خاصية text-decoration-line

تحدد خاصية text-decoration-line نوع الخط المضاف للنص مثل overline أو underline أو line-through.

- overline: خط علوي
- underline: تسطير
- line-through: خط شطب
- دمج قيم متعددة

## تطبيق عملي لأنواع الخطوط

تطبيق قيم مختلفة لخاصية text-decoration-line على عناصر HTML متنوعة.

```css
h1 {
  text-decoration-line: overline;
}
h2 {
  text-decoration-line: line-through;
}
h3 {
  text-decoration-line: underline;
}
p {
  text-decoration-line: overline underline;
}
```

## تلوين خطوط التزيين

تستخدم خاصية text-decoration-color لتحديد لون خط التزيين المضاف للنص.

- تخصيص لون الخط
- دعم الألوان القياسية
- تعزيز التباين البصري

## مثال على تلوين الخطوط

دمج خاصية اللون مع نوع الخط لتنسيق النصوص بشكل متقدم.

```css
h1 { text-decoration-line: overline;
  text-decoration-color: red; }
h2 { text-decoration-line: line-through;
  text-decoration-color: blue; }
h3 { text-decoration-line: underline;
  text-decoration-color: green; }
```

## أفضل الممارسات

نصيحة: تجنب تسطير النصوص التي ليست روابط لتفادي إرباك المستخدم.

- تجنب التسطير لغير الروابط
- الحفاظ على وضوح التصميم
- تحسين تجربة المستخدم

## خلاصة الدرس

شكرا لمتابعتكم. جربوا الأكواد بأنفسكم عبر الرابط في الوصف.

- مراجعة الخصائص المشروحة
- تجربة الأكواد عمليا
- استمرار التعلم مع CodeGalaxy
