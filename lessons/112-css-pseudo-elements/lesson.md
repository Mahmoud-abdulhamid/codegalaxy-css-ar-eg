# CSS Pseudo-elements

المصدر: https://www.w3schools.com/css/css_pseudo_elements.asp

## مقدمة حول CSS Pseudo-elements

مرحبا بكم في درس CSS Pseudo-elements، وهي كلمات محجوزة تضاف إلى Selector لتنسيق أجزاء محددة من العناصر.

- الـ Pseudo-elements هي أدوات قوية في CSS
- تستخدم لتنسيق أجزاء محددة من الـ Element
- تضيف مرونة عالية في التحكم بالتصميم

## قواعد كتابة الـ Pseudo-elements

تستخدم الـ Pseudo-elements النقطتين المتتاليتين (::) متبوعة باسم الـ Pseudo-element لتحديد التنسيق.

```css
selector::pseudo-element-name {
  CSS properties
}
```

## التعامل مع الـ Text Pseudo-elements

تستخدم الـ Text Pseudo-elements لتنسيق أجزاء محددة من محتوى النص داخل العناصر.

- تنسيق الحرف الأول من الفقرة
- تنسيق السطر الأول من النص
- تغيير مظهر النصوص المحددة

## الـ Content Pseudo-elements

تسمح الـ Content Pseudo-elements بإدراج محتوى جديد أو تنسيقه برمجيا دون تعديل HTML.

- إدراج محتوى قبل العنصر
- إدراج محتوى بعد العنصر
- توليد عناصر مرئية إضافية

## مثال عملي على الـ Pseudo-elements

مثال عملي يوضح استخدام ::first-letter لتنسيق الحرف الأول و ::before لإضافة محتوى.

```css
p::first-letter {
  font-size: 200%;
  color: red;
}
h1::before {
  content: "★ ";
  color: gold;
}
```

## معاينة المخرجات

تظهر النتيجة بتنسيق الحرف الأول من الفقرة وإضافة رمز النجمة قبل عنوان h1.

```text
★ Heading Title

Lorem ipsum dolor sit amet...
```

## أفضل الممارسات

استخدم دائما :: للـ Pseudo-elements لضمان التوافقية والتمييز عن الـ Pseudo-classes.

- استخدام :: للـ Pseudo-elements
- استخدام : للـ Pseudo-classes
- الالتزام بمعايير CSS3 الحديثة

## خلاصة الدرس

تعلمنا اليوم استخدام Pseudo-elements لتنسيق العناصر بدقة. جربوا الأكواد وراجعوا المرجع الشامل.

- الـ Pseudo-elements أداة أساسية للمصمم
- راجعوا المرجع الشامل في الرابط المرفق
- استمروا في التدريب العملي
