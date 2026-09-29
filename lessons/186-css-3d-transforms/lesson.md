# دورة CSS3D Transforms

المصدر: https://www.w3schools.com/css/css3_3dtransforms.asp

## مقدمة حول 3D Transforms

مرحبا بكم في درس التحولات ثلاثية الأبعاد باستخدام CSS3D Transforms.

- التعرف على مفهوم التحولات ثلاثية الأبعاد في CSS
- استخدام خاصية transform لتطبيق تأثيرات 3D
- أهمية الفضاء الثلاثي الأبعاد في تصميم الويب

## أهمية الـ perspective

تفعيل الفضاء ثلاثي الأبعاد يتطلب استخدام خاصية perspective لتحديد المسافة.

- دور خاصية perspective في تحديد المسافة والرؤية
- تجنب ظهور العناصر بشكل مسطح وثنائي الأبعاد
- التحضير للتعمق في المنظور في الدرس القادم

## دالة rotateX

دالة rotateX تقوم بتدوير العنصر حول المحور الأفقي x.

```css
.box {
  transform: rotateX(45deg);
}
```

## دالة rotateY

دالة rotateY تقوم بتدوير العنصر حول المحور الرأسي y.

```css
.box {
  transform: rotateY(45deg);
}
```

## دالة rotateZ

دالة rotateZ تدور العنصر حول المحور z بشكل مسطح على الشاشة.

```css
.box {
  transform: rotateZ(45deg);
}
```

## دالة translateZ

دالة translateZ تعيد وضع العنصر على محور z للتقريب أو الإبعاد.

```css
.box {
  transform: translateZ(-100px);
}
```

## خلاصة الدرس

خلاصة شاملة لدوال التحولات ثلاثية الأبعاد وتطبيقاتها العملية.

- أهمية دوال rotateX و rotateY و rotateZ
- التحكم في العمق باستخدام translateZ
- تطبيق الخصائص لبناء صفحات ويب تفاعلية
