# CSS Pseudo-elements for Text

المصدر: https://www.w3schools.com/css/css_pseudo_elements_text.asp

## شرح Introduction to Text Pseudo-elements

مرحبا بكم في درس Pseudo-elements المخصصة للنصوص وكيفية تنسيق أجزاء معينة منها.

- تنسيق أجزاء محددة من النصوص
- استخدام Pseudo-elements باحترافية
- التحكم في السطر والحرف الأول

## شرح The ::first-line Pseudo-element

استخدام ::first-line لإضافة تنسيق خاص على السطر الأول من عناصر block-level.

- تنسيق السطر الأول من النص
- يعمل حصرا على block-level elements
- يمنح مظهرا جماليا للمقالات

## شرح Code Example for ::first-line

مثال عملي لتطبيق ::first-line على عناصر الفقرات وتغيير لون النص وحجم الخط.

```css
p::first-line {
  color: red;
  font-variant: small-caps;
  font-size: 19px;
}
```

## شرح The ::first-letter Pseudo-element

استخدام ::first-letter لتنسيق الحرف الأول من النص وإبرازه بشكل مميز.

```css
p::first-letter {
  color: red;
  font-size: xx-large;
}
```

## شرح Combining with HTML Classes

دمج Pseudo-elements مع HTML classes لاستهداف عناصر محددة بدقة.

```css
p.intro::first-letter {
  color: #ff0000;
  font-size: 200%;
}
```

## شرح Multiple Pseudo-elements

استخدام عدة Pseudo-elements معا لتخصيص الحرف الأول وبقية السطر الأول في نفس الوقت.

```css
p::first-letter {
  color: red;
  font-size: xx-large;
}
p::first-line {
  color: blue;
  font-variant: small-caps;
}
```

## شرح Conclusion and Best Practices

خلاصة الدرس وأهمية استخدام Pseudo-elements في تحسين تصميم وتنسيق نصوص صفحات الويب.

- أدوات قوية لتنسيق النصوص الاحترافية
- إمكانية الدمج مع الفئات البرمجية بسهولة
- راجع الرابط في الوصف لمزيد من التفاصيل
