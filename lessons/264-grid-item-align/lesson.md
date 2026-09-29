# CSS Grid Items Alignment

المصدر: https://www.w3schools.com/css/css_grid_item_align.asp

## مقدمة في محاذاة عناصر Grid

مرحبا بكم في درس محاذاة عناصر Grid باستخدام CSS.

- تستخدم CSS Grid لتنظيم العناصر في شبكة
- يمكن محاذاة كل عنصر داخل خليته الخاصة
- نتعلم اليوم خصائص justify-self و align-self

## خاصية justify-self

خاصية justify-self تتحكم في المحاذاة الأفقية للعنصر داخل خليته.

- justify-self تتحكم في المحاذاة الأفقية
- تتطلب مساحة إضافية داخل الخلية لتعمل
- القيم تشمل start و end و center و stretch

## تطبيق justify-self

مثال برمجي لاستخدام justify-self مع عناصر Grid.

```css
.item1 {
  justify-self: right;
}
.item6 {
  justify-self: center;
}
```

## خاصية align-self

خاصية align-self تتحكم في المحاذاة الرأسية للعنصر.

- align-self تتحكم في المحاذاة الرأسية
- تعمل في اتجاه block direction
- تتطلب مساحة إضافية داخل الخلية

## تطبيق align-self

مثال برمجي لاستخدام align-self مع عناصر Grid.

```css
.item1 {
  align-self: start;
}
.item6 {
  align-self: center;
}
```

## معاينة المخرجات

تظهر العناصر داخل الشبكة محاذية وفقا للخصائص المطبقة.

```text
Grid Cell [ .item1 ] -> Aligned Right / Start
Grid Cell [ .item6 ] -> Aligned Center / Center
```

## خلاصة الدرس

خلاصة: استخدم justify-self و align-self للتحكم الكامل في محاذاة عناصر Grid.

- justify-self للمحاذاة الأفقية
- align-self للمحاذاة الرأسية
- تأكد من وجود مساحة كافية للخلية
- جرب الأكواد عبر الرابط في الوصف
