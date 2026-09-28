# CSS Background Shorthand

المصدر: https://www.w3schools.com/css/css_background_shorthand.asp

## مقدمة حول CSS Shorthand

مرحبا بكم في درس CSS Shorthand لخصائص الخلفية.

- تستخدم خاصية Shorthand لتقليل حجم الكود
- تسمح بدمج عدة خصائص في سطر واحد
- تزيد من كفاءة وقابلية قراءة ملفات CSS

## الطريقة التقليدية لكتابة الخصائص

الطريقة التقليدية لكتابة خصائص الخلفية بشكل منفصل.

```css
body {
  background-color: #ffffff;
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
```

## مفهوم الـ Shorthand property

استخدام خاصية background كـ Shorthand لدمج الخصائص.

- خاصية background هي shorthand لجميع خصائص الخلفية
- تكتب القيم مفصولة بمسافات
- الترتيب مهم لضمان عمل المتصفح بشكل صحيح

## تطبيق الـ Shorthand

تحويل الخصائص المتعددة إلى سطر واحد باستخدام Shorthand.

```css
body {
  background: #ffffff
  url("img_tree.png")
  no-repeat
  right top;
}
```

## التعامل مع القيم المفقودة

القيم المفقودة تأخذ قيمها الافتراضية تلقائيا.

- القيم المفقودة لا تسبب خطأ في الكود
- المتصفح يستخدم القيم الافتراضية للخصائص غير المحددة
- يجب الحذر عند الاعتماد على القيم الافتراضية

## خلاصة الدرس

خلاصة: استخدم Shorthand لجعل كود CSS أكثر احترافية.

- استخدام Shorthand يقلل من تكرار الكود
- يجب مراجعة الترتيب الصحيح للقيم
- جرب كتابة أكوادك الخاصة باستخدام هذا الأسلوب
