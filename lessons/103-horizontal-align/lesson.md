# CSS Horizontal Alignment Techniques

المصدر: https://www.w3schools.com/css/css_align_horizontal.asp

## مقدمة في محاذاة العناصر أفقيا

مرحبا بكم في درس CSS الجديد حول تقنيات المحاذاة الأفقية للعناصر في صفحات الويب.

- تعدد طرق المحاذاة حسب نوع العنصر
- استخدام margin و text-align
- التحكم في المواقع باستخدام position و float

## محاذاة العناصر من نوع Block

نستخدم margin: auto مع تحديد width لعناصر block-level لضمان توسيطها أفقيا داخل الحاوية.

```css
.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
```

## توسيط النصوص داخل العناصر

تستخدم الخاصية text-align: center لتوسيط النصوص داخل العناصر الحاوية.

```css
p {
  text-align: center;
}
```

## محاذاة الصور

لتوسيط الصور، يجب تحويلها إلى block ثم استخدام margin-left و margin-right بقيمة auto.

```css
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
```

## المحاذاة باستخدام position

استخدام position: absolute يتيح وضع العناصر في أماكن محددة، لكنه يخرجها من التدفق الطبيعي.

```css
.right {
  position: absolute;
  right: 0px;
  width: 300px;
  border: 3px solid green;
  padding: 10px;
}
```

## المحاذاة باستخدام float

تستخدم الخاصية float: right لإزاحة العناصر إلى جهة اليمين داخل الحاوية.

```css
.right {
  float: right;
  width: 300px;
  border: 3px solid green;
  padding: 10px;
}
```

## خلاصة الدرس

تعلمنا اليوم طرقا متنوعة للمحاذاة الأفقية. جربوا هذه الأكواد بأنفسكم لتطوير مهاراتكم في CSS.

- استخدم margin: auto للعناصر block
- استخدم text-align للنصوص
- استخدم display: block للصور
- استخدم position و float للتحكم المتقدم
