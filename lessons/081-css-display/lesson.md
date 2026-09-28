# CSS display Property

المصدر: https://www.w3schools.com/css/css_display.asp

## مقدمة حول خاصية display

تعد خاصية display من أهم خصائص CSS للتحكم في تخطيط عناصر الويب وتحديد سلوك عرضها.

- خاصية display تتحكم في تخطيط العناصر
- تحدد ما إذا كان العنصر Block أو Inline
- لكل عنصر HTML قيمة عرض افتراضية
- يمكن تغيير السلوك الافتراضي باستخدام CSS

## الفرق بين Block و Inline

تتميز عناصر Block بالبدء في سطر جديد، بينما تظهر عناصر Inline بجانب بعضها.

## تغيير السلوك الافتراضي

يمكن استخدام display لتغيير السلوك الافتراضي للعناصر لتحقيق تخطيطات مخصصة.

```css
li {
  display: inline;
}
span {
  display: block;
}
a {
  display: block;
}
```

## قيم إضافية لخاصية display

توفر CSS قيما متقدمة مثل flex و grid للتحكم الكامل في تخطيط الصفحة.

```css
p.ex1 {
  display: none;
}
p.ex2 {
  display: inline;
}
p.ex3 {
  display: block;
}
p.ex4 {
  display: inline-block;
}
p.ex5 {
  display: flex;
}
p.ex6 {
  display: grid;
}
```

## معاينة المخرجات

تؤثر قيم display بشكل مباشر على كيفية ظهور العناصر وتوزيعها في المتصفح.

```text
Block Element (New Line)
Inline Element (Same Line)
Hidden Element (Not Visible)
```

## ملاحظات هامة

يجب الالتزام بمعايير الويب عند تغيير قيم display وعدم وضع عناصر block داخل inline.

- تغيير display لا يغير نوع العنصر
- احذر من وضع Block داخل Inline
- استخدم flex و grid للتخطيط الحديث
- اختبر دائما مخرجاتك في المتصفح

## خلاصة الدرس

شكرا لمتابعتكم. جربوا الأكواد بأنفسكم لتطوير مهاراتكم في CSS.

- تعلمنا الفرق بين Block و Inline
- تعلمنا كيفية تغيير السلوك الافتراضي
- تعرفنا على قيم متقدمة مثل flex و grid
- رابط المصدر متاح في الوصف للتطبيق العملي
