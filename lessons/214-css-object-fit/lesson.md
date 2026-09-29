# التحكم في أبعاد الصور باستخدام CSS object-fit

المصدر: https://www.w3schools.com/css/css3_object-fit.asp

## مقدمة حول object-fit

تستخدم خاصية object-fit للتحكم في كيفية تغيير أبعاد عناصر img أو video لتناسب حاوياتها.

- تستخدم خاصية object-fit مع عناصر الوسائط
- تساعد في ضبط مظهر الصور والفيديوهات داخل الحاويات
- تمنع تشوه العناصر عند تغيير أبعادها

## استخدام القيمة fill

القيمة fill تقوم بملء الحاوية بالكامل مع احتمال حدوث تشويه في أبعاد الصورة.

```css
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
```

## استخدام القيمة cover

القيمة cover تحافظ على نسبة العرض إلى الارتفاع مع قص أجزاء من الصورة لملء الحاوية.

```css
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## استخدام القيمة contain

القيمة contain تظهر الصورة بالكامل داخل الحاوية مع الحفاظ على نسبة العرض إلى الارتفاع.

```css
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
```

## استخدام القيم none و scale-down

القيمة none لا تغير أبعاد الصورة، بينما scale-down تختار الحجم الأصغر بين none و contain.

```css
.image-container img {
  object-fit: scale-down;
}
```

## خلاصة الدرس

تعد خاصية object-fit أداة أساسية للتحكم في الوسائط، جربوها لتحسين تجربة المستخدم.

- استخدم fill للملء الكامل مع احتمال التشوه
- استخدم cover للملء مع الحفاظ على النسبة
- استخدم contain لضمان ظهور كامل الصورة
- جرب القيم المختلفة للحصول على أفضل نتيجة
