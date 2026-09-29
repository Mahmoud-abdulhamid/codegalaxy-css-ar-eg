# CSS Color Keywords

المصدر: https://www.w3schools.com/css/css_colors_keywords.asp

## مقدمة في CSS Color Keywords

سنتعرف اليوم على الكلمات المفتاحية الخاصة بالألوان في CSS وكيفية استخدامها مع خصائص مثل color و background-color.

- CSS توفر كلمات مفتاحية خاصة للألوان
- تستخدم مع خصائص مثل color و background-color
- تسهل عملية التحكم في تصميم صفحات الويب

## استخدام الكلمة المفتاحية transparent

تستخدم الكلمة المفتاحية transparent لجعل لون العنصر شفافا تماما، وهي تعادل قيمة rgba(0,0,0,0).

```css
body {
  background-image: url("paper.gif");
}
div {
  background-color: transparent;
}
```

## فهم الكلمة المفتاحية currentcolor

تعمل الكلمة المفتاحية currentcolor كمتغير يحتفظ بقيمة خاصية color الحالية للعنصر.

```css
div {
  color: blue;
  border: 10px solid currentcolor;
}
```

## تطبيقات متقدمة لـ currentcolor

يمكن استخدام currentcolor لربط ألوان الحدود والظلال بقيمة لون العنصر الأب.

```css
body {
  color: green;
}
div {
  box-shadow: 0px 0px 15px currentcolor;
  border: 5px solid currentcolor;
}
```

## الكلمة المفتاحية inherit

تستخدم الكلمة المفتاحية inherit لجعل الخاصية ترث قيمتها من العنصر الأب.

```css
div {
  border: 2px solid red;
}
span {
  border: inherit;
}
```

## خلاصة الدرس

تعلمنا اليوم كيفية استخدام transparent و currentcolor و inherit لتحسين مرونة وتناسق التصميم في صفحات الويب.

- transparent للشفافية
- currentcolor لربط الألوان
- inherit لوراثة القيم
- استخدم الروابط في الوصف للتطبيق العملي
