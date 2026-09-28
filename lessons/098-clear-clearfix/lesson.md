# CSS clear Property and Clearfix Hack

المصدر: https://www.w3schools.com/css/css_float_clear.asp

## مقدمة حول خاصية clear

مرحبا بكم في درس CSS الجديد حول خاصية clear وتقنية Clearfix.

- خاصية clear تحدد سلوك العناصر المجاورة لـ float
- تمنع العناصر من الالتفاف حول المحتوى العائم
- تقنية Clearfix تحل مشكلة overflow في الحاويات

## فهم خاصية clear

خاصية clear تمنع العناصر من الالتفاف حول المحتوى العائم.

- clear: left يمنع العناصر من الالتفاف على الجانب الأيسر
- clear: right يمنع العناصر من الالتفاف على الجانب الأيمن
- clear: both يمنع العناصر من الالتفاف على كلا الجانبين

## مثال عملي على clear

مثال يوضح كيف تجبر clear العنصر على النزول أسفل العنصر العائم.

```css
div1 {
  float: left;
}
div2 {
  clear: left;
}
```

## مشكلة overflow في الحاويات

مشكلة overflow تحدث عندما يخرج العنصر العائم عن حدود الحاوية.

- العنصر العائم يخرج عن حدود الحاوية
- الحاوية لا تتعرف على طول العناصر بداخلها
- Clearfix هو الحل البرمجي لهذه المشكلة

## تطبيق تقنية Clearfix

كود تطبيق Clearfix باستخدام pseudo-element after.

```css
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

## معاينة النتيجة

النتيجة: الحاوية تحتوي العناصر العائمة بشكل صحيح.

```text
Container Height: Auto (Corrected)
Floated Elements: Enclosed
Layout: Stable and Clean
```

## خلاصة الدرس

خلاصة: استخدم clear و Clearfix للتحكم في تخطيط صفحات الويب.

- clear تمنع الالتفاف حول العناصر العائمة
- Clearfix تحل مشكلة overflow للحاويات
- استخدم pseudo-element after لتطبيق Clearfix
- جرب الأكواد بنفسك من الرابط في الوصف
