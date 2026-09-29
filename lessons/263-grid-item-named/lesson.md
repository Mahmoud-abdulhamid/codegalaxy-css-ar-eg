# تسمية عناصر شبكة CSS Grid باستخدام grid-area

المصدر: https://www.w3schools.com/css/css_grid_item_name.asp

## مقدمة حول تسمية عناصر الشبكة

مرحبا بكم في درس تسمية عناصر CSS Grid وتحديد المناطق بدقة وسهولة.

- تنظيم صفحات الويب باستخدام CSS Grid
- استخدام grid-template-areas لتحديد المناطق
- تسمية العناصر المرئية بأسماء واضحة

## مفهوم خصائص التسمية والمناطق

تتيح خاصية grid-template-areas تحديد مناطق الشبكة وربطها بالأسماء.

- grid-template-areas تخص حاوية الويب
- grid-area تخص العنصر الفردي
- تعريف كل منطقة داخل علامات اقتباس مفصولة بمسافة

## توسيع العنصر على عدة أعمدة

جعل العنصر يمتد على خمسة أعمدة باستخدام الأسماء داخل علامات الاقتباس.

```css
.container {
  display: grid;
  grid-template-areas: 'myHeader myHeader myHeader myHeader myHeader';
}
.item1 {
  grid-area: myHeader;
}
```

## استخدام النقطة للخلايا الفارغة

استخدام رمز النقطة (.) للإشارة إلى عنصر بلا اسم أو خلايا فارغة.

```css
.container {
  display: grid;
  grid-template-areas: 'myHeader myHeader myHeader . .';
}
.item1 {
  grid-area: myHeader;
}
```

## تعريف صفوف متعددة في الشبكة

تعريف صفوف متعددة عبر وضع كل صف داخل مجموعة خاصة من علامات الاقتباس.

```css
.container {
  display: grid;
  grid-template-areas:
  'myHeader myHeader . . .'
  'myHeader myHeader . . .';
}
.item1 {
  grid-area: myHeader;
}
```

## بناء قوالب صفحات الويب الجاهزة

بناء قالب صفحة ويب متكامل عبر تسمية كافة العناصر بأسماء دلالية واضحة.

- تسمية الرأس header والقائمة menu
- تحديد القسم الرئيسي main والمحتوى الجانبي right
- تخصيص التذييل footer في أسفل الشبكة

## كود قالب صفحة الويب المتكامل

الكود الكامل لتوزيع مناطق الموقع على الشبكة بشكل احترافي.

```css
.item1 {
  grid-area: header;
}
.item2 {
  grid-area: menu;
}
.item3 {
  grid-area: main;
}
.item4 {
  grid-area: right;
}
.item5 {
  grid-area: footer;
}
.container {
  display: grid;
  grid-template-areas:
  'header header header header header header'
  'menu main main main main right'
  'menu footer footer footer footer footer';
}
```

## خلاصة الدرس ودعوة للمتابعة

خلاصة درس تسمية عناصر Grid وبناء قوالب الويب المرنة.

- تنظيم وتسمية مناطق الشبكة بمرونة عالية
- تسهيل قراءة صيانة الشفرة البرمجية
- تجربة الأكواد بأنفسكم لمزيد من الفهم
