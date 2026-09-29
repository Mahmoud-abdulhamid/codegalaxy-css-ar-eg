# التحكم في محاذاة العناصر باستخدام justify-content

المصدر: https://www.w3schools.com/css/css3_flexbox_container_justify.asp

## مقدمة حول justify-content

تستخدم خاصية justify-content لتحديد محاذاة العناصر داخل flex-container على المحور الرئيسي.

- تتحكم justify-content في المحاذاة الأفقية
- تعمل هذه الخاصية ضمن بيئة Flexbox
- تؤثر على توزيع العناصر داخل الـ container

## الهيكل البرمجي الأساسي

يجب ضبط display على flex أولا ثم استخدام justify-content للتحكم في التموضع.

```css
.flex-container {
  display: flex;
  justify-content: center;
}
```

## المحاذاة عند البداية والنهاية

تستخدم flex-start للمحاذاة عند البداية، وflex-end للمحاذاة عند نهاية الحاوية.

```css
.flex-container {
  display: flex;
  justify-content: flex-end;
}
```

## توزيع الفراغات حول العناصر

قيمة space-around توزع الفراغات حول العناصر بالتساوي.

```css
.flex-container {
  display: flex;
  justify-content: space-around;
}
```

## المسافات بين العناصر

قيمة space-between تضع العنصر الأول في البداية والأخير في النهاية مع فراغات بينية.

```css
.flex-container {
  display: flex;
  justify-content: space-between;
}
```

## التوزيع المتساوي تماما

قيمة space-evenly تضمن توزيعا متساويا تماما للفراغات.

```css
.flex-container {
  display: flex;
  justify-content: space-evenly;
}
```

## خلاصة الدرس

تعد justify-content أداة قوية ومرنة للتحكم في توزيع العناصر داخل Flexbox.

- center: للمنتصف
- flex-start: للبداية
- flex-end: للنهاية
- space-between/around/evenly: للتوزيع الفراغي
