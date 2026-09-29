# CSS Styling Images

المصدر: https://www.w3schools.com/css/css3_images.asp

## شرح Introduction to CSS Image Styling

سنتعلم اليوم كيفية تحسين مظهر الصور في مواقع الويب باستخدام خصائص لغة CSS.

- تحسين مظهر الصور وتنسيقها
- جعل الصور دائرية أو ذات حواف ناعمة
- إنشاء صور مصغرة وبطاقات تفاعلية
- جعل الصور متجاوبة مع جميع الشاشات

## شرح Rounded Images with border-radius

نستخدم الخاصية border-radius لتحديد مقدار انحناء حواف الصور.

```css
img {
  border-radius: 8px;
}
```

## شرح Circular Images

لتحويل الصورة إلى شكل دائري كامل، نقوم بتعيين border-radius إلى 50.

```css
img {
  border-radius: 50%;
}
```

## شرح Creating Thumbnail Images

لإنشاء صورة مصغرة Thumbnail، نستخدم الخصائص border و padding مع تحديد العرض.

```css
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
```

## شرح Hover Effects on Thumbnails

نستخدم hover مع الخاصية box-shadow لإنشاء تأثير ظل تفاعلي عند مرور المؤشر.

```css
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
```

## شرح Responsive Images

لجعل الصور متجاوبة، نستخدم max-width بنسبة 100 مع height auto.

```css
img {
  max-width: 100%;
  height: auto;
}
```

## شرح Polaroid Images / Cards

لتصميم بطاقة Polaroid، نستخدم حاوية بخلفية بيضاء وظل أنيق مع نص توضيحي.

```css
div.polaroid {
  width: 80%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
img {
  width: 100%;
}
div.container {
  text-align: center;
  padding: 10px 20px;
}
```

## شرح Responsive Image Gallery

نستخدم media queries لتعديل عرض عناصر المعرض تلقائيا حسب حجم الشاشة.

```css
@media only screen and (max-width: 768px) {
  div.gallery-item {
    width: calc(50% - 20px);
  }
}
@media only screen and (max-width: 480px) {
  div.gallery-item {
    width: calc(100% - 20px);
  }
}
```
