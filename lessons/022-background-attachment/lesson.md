# CSS background-attachment Property

المصدر: https://www.w3schools.com/css/css_background_attachment.asp

## مقدمة حول background-attachment

تتحكم خاصية background-attachment في سلوك حركة صورة الخلفية عند التمرير في صفحة الويب.

- تحديد حركة الخلفية أثناء التمرير
- التحكم في ثبات الصورة أو حركتها
- تعزيز تجربة المستخدم البصرية

## القيم الأساسية للخاصية

القيم المتاحة هي fixed للثبات و scroll للحركة مع محتوى الصفحة.

## تطبيق القيمة fixed

استخدام القيمة fixed لتثبيت صورة الخلفية في مكانها.

```css
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
}
```

## تطبيق القيمة scroll

استخدام القيمة scroll لجعل الخلفية تتحرك مع الصفحة.

```css
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: scroll;
}
```

## ملاحظات هندسية

نصائح لتحسين الأداء وتجربة المستخدم عند استخدام صور الخلفية.

- استخدام صور محسنة الحجم
- اختيار صور ذات دقة مناسبة
- اختبار التوافق مع مختلف الشاشات

## خلاصة الدرس

تعلمنا اليوم كيفية التحكم في ثبات وحركة خلفية الصفحة باستخدام CSS.

- الخاصية تتحكم في ثبات الخلفية
- القيمة fixed تمنع التمرير
- القيمة scroll تسمح بالتمرير
- تطبيق عملي عبر CSS
