# CSS Image Filter Effects

المصدر: https://www.w3schools.com/css/css3_image_filters.asp

## مقدمة في CSS Filters

تستخدم خاصية filter في CSS لإضافة تأثيرات بصرية متنوعة على عناصر الويب مثل الصور.

- خاصية filter تتيح إضافة تأثيرات بصرية
- تستخدم مع الصور والعناصر المختلفة
- تعتمد على دوال برمجية محددة
- تغير مظهر العناصر دون الحاجة لبرامج تعديل صور

## دوال blur و brightness

تتحكم دالة blur في درجة التضبيب، بينما تعدل دالة brightness من سطوع العنصر.

```css
#img1 {
  filter: blur(2px);
}
#img2 {
  filter: brightness(150%);
}
```

## تأثيرات Contrast و Drop-shadow

تستخدم contrast لضبط التباين، و drop-shadow لإضافة ظلال احترافية للعناصر.

```css
#img1 {
  filter: contrast(150%);
}
#img2 {
  filter: drop-shadow(8px 8px 10px gray);
}
```

## تأثيرات Grayscale و Hue-rotate

تحول grayscale الصورة للرمادي، وتغير hue-rotate درجات الألوان بناء على الزاوية.

```css
#img1 {
  filter: grayscale(1);
}
#img2 {
  filter: hue-rotate(90deg);
}
```

## تأثيرات Invert و Opacity

تعكس دالة invert الألوان، بينما تتحكم opacity في مستوى الشفافية.

```css
#img1 {
  filter: invert(100%);
}
#img2 {
  filter: opacity(50%);
}
```

## تأثيرات Saturate و Sepia

تعدل saturate كثافة الألوان، وتضيف sepia لمسة كلاسيكية دافئة للصور.

```css
#img1 {
  filter: saturate(200%);
}
#img2 {
  filter: sepia(60%);
}
```

## خلاصة الدرس

تعد CSS Filters أداة قوية لتحسين المظهر البصري. جربوا تطبيقها في مشاريعكم.

- استخدام filter يغني عن برامج معالجة الصور
- يمكن دمج أكثر من تأثير في نفس الخاصية
- تأثيرات CSS خفيفة وسريعة الأداء
- راجعوا الرابط في الوصف لمزيد من التفاصيل
