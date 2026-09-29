# CSS Flex Container Properties

المصدر: https://www.w3schools.com/css/css3_flexbox_container.asp

## مقدمة في CSS Flex Container

مرحبا بكم في درس CSS Flex Container للتحكم في توزيع العناصر داخل صفحة الويب.

- Flexbox هو نموذج تصميم قوي لتوزيع العناصر
- يتم تفعيل Flexbox عبر خاصية display: flex
- يوفر تحكما كاملا في الاتجاه والالتفاف

## التحكم في اتجاه العناصر

تحدد خاصية flex-direction اتجاه العناصر داخل الحاوية سواء أفقيا أو عموديا.

```css
.flex-container {
  display: flex;
  flex-direction: row;
}
```

## خيارات اتجاه العناصر

خيارات flex-direction تشمل row و column و row-reverse و column-reverse.

## خاصية flex-wrap

تحدد خاصية flex-wrap ما إذا كانت العناصر ستلتف إلى سطر جديد عند ضيق المساحة.

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
```

## الخاصية المختصرة flex-flow

تجمع خاصية flex-flow بين flex-direction و flex-wrap في سطر واحد.

```css
.flex-container {
  display: flex;
  flex-flow: row wrap;
}
```

## معاينة المخرجات

تظهر العناصر داخل الحاوية بشكل مرن ومنظم بناء على الخصائص المطبقة.

```text
Item 1 | Item 2 | Item 3
(توزيع مرن حسب العرض المتاح)
```

## خلاصة الدرس

جربوا الأكواد بأنفسكم عبر الرابط في الوصف لتتقنوا مهارات Flexbox.

- استخدم display: flex للحاوية
- تحكم بالاتجاه عبر flex-direction
- تحكم بالالتفاف عبر flex-wrap
- استخدم flex-flow للاختصار
