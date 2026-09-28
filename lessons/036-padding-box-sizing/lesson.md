# CSS Padding and box-sizing

المصدر: https://www.w3schools.com/css/css_padding_box-sizing.asp

## مقدمة حول الـ box model

مرحبا بكم في درس جديد حول تأثير الـ padding على عرض العناصر وكيفية استخدام box-sizing للتحكم في أبعادها.

- فهم كيفية حساب عرض الـ element
- تأثير الـ padding على الـ box model
- حل مشكلة زيادة العرض غير المتوقعة
- استخدام box-sizing للتحكم الدقيق

## مشكلة الـ padding مع الـ width

تؤدي إضافة الـ padding إلى زيادة العرض الكلي للعنصر، مما قد يؤدي إلى نتائج غير مرغوبة في التصميم.

- width تحدد منطقة المحتوى فقط
- الـ padding يضاف إلى العرض الكلي
- النتيجة: عرض العنصر يصبح أكبر من المحدد
- هذا السلوك جزء من الـ box model

## مثال على زيادة العرض

في هذا المثال، يصبح العرض الفعلي للـ div هو 350px بدلا من 300px بسبب الـ padding.

```css
div {
  width: 300px;
  padding: 25px;
}
```

## استخدام خاصية box-sizing

خاصية box-sizing بقيمة border-box تجعل الـ padding والـ border جزءا من العرض الكلي المحدد.

- box-sizing تتحكم في حساب الأبعاد
- القيمة border-box هي الحل الأمثل
- تحافظ على العرض المحدد 300px
- يقلل مساحة المحتوى عند زيادة الـ padding

## تطبيق box-sizing: border-box

باستخدام box-sizing: border-box، يظل العرض ثابتا عند 300px مهما تغيرت قيمة الـ padding.

```css
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```

## خلاصة الدرس

تذكر دائما استخدام box-sizing: border-box للتحكم الدقيق في أبعاد عناصرك وتجنب مشاكل الـ box model.

- الـ padding يغير العرض الكلي افتراضيا
- استخدم box-sizing: border-box دائما
- حافظ على ثبات أبعاد العناصر
- جرب الكود بنفسك عبر الرابط في الوصف
