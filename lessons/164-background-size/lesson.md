# CSS background-size Property

المصدر: https://www.w3schools.com/css/css3_background_size.asp

## مقدمة حول background-size

تسمح خاصية background-size بالتحكم الكامل في أبعاد صور الخلفية داخل صفحات الويب.

- التحكم في أبعاد صور الخلفية
- استخدام القيم الرقمية والنسب المئوية
- استخدام الكلمات المفتاحية auto و contain و cover

## استخدام القيم الرقمية

يمكن تحديد أبعاد الصورة بدقة باستخدام وحدات القياس مثل px.

```css
#div1 {
  background-image: url(img_flower.jpg);
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 100px 80px;
}
```

## الكلمات المفتاحية للتحكم

القيم auto و contain و cover توفر تحكما ذكيا في عرض الصور.

```css
#div1 {
  background-size: contain;
}
#div2 {
  background-size: cover;
}
#div3 {
  background-size: auto;
}
```

## صور خلفية متعددة

يمكن تعيين أحجام مختلفة لصور خلفية متعددة باستخدام الفواصل.

```css
#div1 {
  background-image: url(tree.gif), url(flwr.gif);
  background-size: contain, 150px;
}
```

## خلفية كاملة للشاشة

استخدام cover مع عنصر html لإنشاء خلفية تغطي كامل الشاشة.

```css
html {
  background: url(img.jpg) no-repeat center fixed;
  background-size: cover;
}
```

## خلاصة الدرس

تعد خاصية background-size أداة أساسية لكل مطور ويب محترف.

- استخدام px للتحكم الدقيق
- استخدام cover لتغطية كامل المساحة
- استخدام contain لاحتواء الصورة
- تطبيق القيم المتعددة للخلفيات
