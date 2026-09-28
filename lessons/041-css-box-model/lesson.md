# CSS Box Model

المصدر: https://www.w3schools.com/css/css_boxmodel.asp

## مقدمة في CSS Box Model

مرحبا بكم في درس CSS Box Model، المفهوم الأساسي لتصميم وتنسيق صفحات الويب.

- الـ CSS Box Model هو الأساس في تصميم الـ layout
- كل HTML element في الصفحة يعامل كأنه صندوق
- يساعدنا هذا النموذج في التحكم في المسافات والحدود

## أجزاء الـ Box Model

يتكون الـ Box Model من أربعة أجزاء: content، padding، border، و margin.

- content: المحتوى الفعلي مثل النصوص أو الصور
- padding: المساحة الشفافة حول المحتوى
- border: الإطار الذي يحيط بالـ padding والمحتوى
- margin: المساحة الخارجية الفاصلة بين العناصر

## تطبيق عملي على الـ Box Model

مثال برمجي يوضح استخدام خصائص الـ Box Model في CSS.

```css
div {
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
}
```

## حساب العرض والارتفاع

يجب إضافة الـ padding والـ border عند حساب العرض والارتفاع الكلي للعنصر.

- مفهوم Total width = width + left padding + right padding + left border + right border
- مفهوم Total height = height + top padding + bottom padding + top border + bottom border
- الـ margin لا يحسب ضمن حجم العنصر الفعلي

## مثال حسابي دقيق

مثال يوضح كيفية حساب العرض الكلي للعنصر بدقة.

```css
div {
  width: 320px;
  height: 50px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
```

## خلاصة الدرس

الـ Box Model هو مفتاح التحكم في تخطيط صفحات الويب. جرب الأكواد بنفسك!

- الـ Box Model يحدد مساحة العنصر
- احرص على حساب الـ padding والـ border بدقة
- الـ margin يؤثر على المساحة الكلية حول العنصر
- مارس كتابة الأكواد لتعزيز فهمك
