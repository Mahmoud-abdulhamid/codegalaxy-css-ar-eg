# CSS property Code Challenge

المصدر: https://www.w3schools.com/css/css_challenges_css3_property.asp

## مقدمة في CSS property

مرحبا بكم في درس CSS property المتقدم لتحديد أنواع البيانات للـ Custom Properties.

- CSS property يسمح بتعريف متغيرات CSS مع نوع بيانات محدد
- يوفر تحكما أكبر في القيم الافتراضية والوراثة
- يعد جزءا من CSS Houdini API

## قواعد كتابة property

تتطلب كتابة property تحديد اسم الخاصية مع خصائص مثل syntax وinherits وinitial-value.

```css
@property --my-color {
  syntax: '<color>';
  inherits: false;
  initial-value: red;
}
```

## شرح تفصيلي للكود

شرح مكونات property: تحديد نوع البيانات، الوراثة، والقيمة الافتراضية.

- syntax: يحدد نوع البيانات مثل <color> أو <number>
- inherits: قيمة منطقية (true/false) للتحكم في الوراثة
- initial-value: القيمة التي يبدأ بها المتغير

## تطبيق عملي

استخدام المتغير المعرف بواسطة property داخل العناصر لتطبيق تأثيرات متقدمة.

```css
div {
  color: var(--my-color);
  transition: --my-color 1s;
}
div:hover {
  --my-color: blue;
}
```

## معاينة المخرجات

تأثير انتقال اللون عند التفاعل مع العنصر باستخدام property.

```text
Element color changes smoothly from red to blue on hover.
```

## أفضل الممارسات

نصائح تقنية: توافق النوع وتحسين الأداء عبر ضبط الوراثة.

- تأكد دائما من مطابقة syntax للقيم المستخدمة
- استخدم inherits: false لتقليل استهلاك الموارد
- اختبر الكود في المتصفحات الحديثة

## خلاصة الدرس

خلاصة: تعلم كيفية تعريف واستخدام property لتطوير مهاراتك في CSS.

- CSS property يمنحك تحكما برمجيا متقدما
- جرب التحدي البرمجي في الرابط المرفق
- استمر في ممارسة كتابة الأكواد
