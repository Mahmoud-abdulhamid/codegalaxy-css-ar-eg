# CSS Padding

المصدر: https://www.w3schools.com/css/css_padding.asp

## مقدمة حول CSS Padding

تستخدم خصائص CSS padding لإنشاء مساحة حول محتوى العنصر داخل الحدود.

- الـ padding يولد مساحة داخل الـ border
- يوفر تحكما كاملا في جوانب الـ Element الأربعة
- يساعد في تحسين المظهر البصري وتجربة المستخدم

## تحديد الـ padding لكل جانب

يمكن تحديد مساحة padding لكل جانب على حدة باستخدام خصائص محددة.

```css
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```

## خاصية الـ Shorthand

خاصية padding هي shorthand لتعيين جميع جوانب المساحة في إعلان واحد.

- تختصر أربعة أسطر في سطر واحد
- تتبع ترتيبا معينا للجوانب
- تزيد من كفاءة صيانة ملفات الـ CSS

## أربع قيم للـ Shorthand

عند استخدام أربع قيم: padding: top right bottom left

```css
div {
  padding: 25px 50px 75px 100px;
}
```

## ثلاث قيم للـ Shorthand

عند استخدام ثلاث قيم: padding: top (right & left) bottom

```css
div {
  padding: 25px 50px 75px;
}
```

## قيمتان للـ Shorthand

عند استخدام قيمتين: padding: (top & bottom) (right & left)

```css
div {
  padding: 25px 50px;
}
```

## قيمة واحدة للـ Shorthand

عند استخدام قيمة واحدة: padding: all sides

```css
div {
  padding: 25px;
}
```

## خلاصة الدرس

لقد تعلمتم كيفية التحكم في padding لتحسين تصميم صفحات الويب.

- استخدام الخصائص الفردية للتحكم الدقيق
- استخدام الـ shorthand لتقليل الكود
- تذكر دائما أن الـ padding لا يقبل قيما سالبة
- مارسوا التطبيق العملي عبر الرابط في الوصف
