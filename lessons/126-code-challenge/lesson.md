# CSS Image Gallery Challenge

المصدر: https://www.w3schools.com/css/css_challenges_image_gallery.asp

## مقدمة في تحدي معرض الصور

مرحبا بكم في تحدي بناء معرض صور احترافي باستخدام CSS.

- بناء معرض صور متجاوب
- استخدام خصائص CSS المتقدمة
- تحسين المظهر البصري للعناصر
- تطبيق تحدي البرمجة العملي

## القواعد الأساسية للمعرض

نستخدم حاوية div لتجميع الصور وتنسيقها باستخدام Flexbox أو Grid.

- استخدام div كحاوية للعناصر
- تنسيق img داخل المعرض
- تطبيق خاصية display flex
- التحكم في المسافات باستخدام gap

## هيكل الكود البرمجي

هيكل HTML الأساسي لمعرض الصور مع استخدام Class للتحكم بالتنسيق.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="gallery">
      <img src="img1.jpg" alt="Image 1">
      <img src="img2.jpg" alt="Image 2">
      <img src="img3.jpg" alt="Image 3">
    </div>
  </body>
</html>
```

## تنسيق المعرض بـ CSS

تنسيق المعرض باستخدام CSS لجعل الصور متراصة ومنظمة.

```css
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.gallery img {
  width: 200px;
  height: auto;
  border: 1px solid #ccc;
}
```

## معاينة المخرجات

نتيجة المعرض في المتصفح مع ترتيب الصور وتجاوبها.

```text
[Image 1] [Image 2] [Image 3]
[Image 4] [Image 5] [Image 6]
```

## أفضل الممارسات الهندسية

أفضل الممارسات تشمل استخدام alt للصور وتحسين أحجام الملفات.

- استخدام alt لتعزيز Accessibility
- ضغط الصور لتقليل وقت التحميل
- استخدام وحدات قياس مرنة
- اختبار التجاوب على مختلف الشاشات

## خلاصة الدرس

شكرا لمتابعتكم، جربوا الأكواد بأنفسكم لتطوير مهاراتكم.

- تم الانتهاء من تحدي معرض الصور
- تم شرح هيكل HTML وCSS
- تم توضيح أهمية التجاوب
- استمروا في التدريب العملي
