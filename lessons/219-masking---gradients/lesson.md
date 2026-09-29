# CSS Gradient Mask Layers

المصدر: https://www.w3schools.com/css/css3_masking_gradients.asp

## مقدمة في CSS Gradient Mask Layers

سنتعلم اليوم كيفية استخدام CSS Gradients كطبقة قناع للصور لإضافة تأثيرات بصرية احترافية على مواقع الويب.

- استخدام CSS Gradients كطبقة قناع
- تحسين المظهر البصري للعناصر
- التحكم في شفافية الصور برمجيا

## تطبيق Linear Gradient Mask

نستخدم Linear Gradient Mask لتدرج الشفافية من الأعلى إلى الأسفل باستخدام خاصية mask-image.

```css
.mask1 {
  -webkit-mask-image: linear-gradient(black, transparent);
  mask-image: linear-gradient(black, transparent);
}
```

## مثال عملي متكامل

تطبيق القناع على صورة مع تحديد الأبعاد واستخدام خاصية background لتعيين الصورة.

```css
.mask1 {
  max-width: 600px;
  height: 400px;
  background: url(img_5terre.jpg) no-repeat;
  -webkit-mask-image: linear-gradient(black, transparent);
  mask-image: linear-gradient(black, transparent);
}
```

## استخدام Radial Gradient كدائرة

استخدام Radial Gradient لإنشاء قناع دائري مع التحكم في نقاط التوقف والشفافية.

```css
.mask2 {
  -webkit-mask-image: radial-gradient(circle, black 50%, rgba(0, 0, 0, 0.5) 50%);
  mask-image: radial-gradient(circle, black 50%, rgba(0, 0, 0, 0.5) 50%);
}
```

## استخدام Radial Gradient كشكل بيضاوي

استخدام ellipse لتشكيل القناع بشكل بيضاوي يمنح مرونة أكبر في توزيع القناع.

```css
.mask3 {
  -webkit-mask-image: radial-gradient(ellipse, black 50%, rgba(0, 0, 0, 0.5) 50%);
  mask-image: radial-gradient(ellipse, black 50%, rgba(0, 0, 0, 0.5) 50%);
}
```

## استخدام Conic Gradient

استخدام Conic Gradient لإنشاء قناع دوراني وتأثيرات دائرية معقدة.

```css
.mask3 {
  -webkit-mask-image: conic-gradient(black 0deg, transparent 360deg);
  mask-image: conic-gradient(black 0deg, transparent 360deg);
}
```

## خلاصة الدرس

تعلمنا استخدام أنواع مختلفة من Gradients كأقنعة للصور. جربوا الأكواد بأنفسكم وراجعوا التوثيق الرسمي للمزيد.

- Linear Gradient للقناع الخطي
- Radial Gradient للقناع الدائري والبيضاوي
- Conic Gradient للقناع الدوراني
- استخدام -webkit-mask-image للتوافق
