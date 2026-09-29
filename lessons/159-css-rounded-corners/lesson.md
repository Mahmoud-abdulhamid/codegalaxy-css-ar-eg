# CSS Rounded Corners

المصدر: https://www.w3schools.com/css/css3_borders.asp

## مقدمة حول CSS Rounded Corners

تستخدم خاصية border-radius في CSS لإضافة زوايا مستديرة للعناصر.

- خاصية border-radius تضيف لمسة عصرية للعناصر
- يمكن تطبيقها على العناصر التي تحتوي على background-color
- تعمل أيضا مع العناصر التي تمتلك border أو background-image

## الكود الأساسي لخاصية border-radius

تطبيق border-radius بقيمة ثابتة على جميع الزوايا.

```css
#div1 {
  border-radius: 25px;
  background-color: #73AD21;
  padding: 20px;
  width: 200px;
  height: 150px;
}
```

## تحديد كل زاوية على حدة

يمكن تحديد قيم مختلفة لكل زاوية باستخدام أربع قيم.

```css
#div1 {
  border-radius: 15px 50px 30px 5px;
  background: #04AA6D;
  width: 200px;
  height: 150px;
}
```

## قواعد القيم المختصرة

قواعد توزيع القيم عند استخدام أقل من أربع قيم.

## الأشكال البيضاوية والدائرية

استخدام النسبة المئوية لإنشاء أشكال دائرية وبيضاوية.

```css
#circle {
  border-radius: 50%;
  background: #04AA6D;
  width: 200px;
  height: 200px;
}
#oval {
  border-radius: 70px / 30px;
  background: #04AA6D;
  width: 200px;
  height: 150px;
}
```

## معاينة المخرجات

النتيجة المرئية للعناصر بعد تطبيق border-radius.

```text
Element 1: Rounded corners (25px)
Element 2: Oval shape (70px/30px)
Element 3: Circular shape (50%)
```

## خلاصة الدرس

تذكر دائما تجربة الأكواد لتعزيز مهاراتك في CSS.

- border-radius تدعم من قيمة واحدة إلى أربع قيم
- استخدام الشرطة المائلة / للقيم البيضاوية
- النسبة المئوية 50 تنشئ دوائر مثالية
- راجع الرابط في الوصف لمزيد من الأمثلة
