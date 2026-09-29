# بناء معرض صور متجاوب باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_image_gallery.asp

## مقدمة حول معرض الصور المتجاوب

سنتعلم اليوم كيفية بناء معرض صور متجاوب باستخدام CSS لضمان ظهور الصور بشكل مثالي على مختلف أحجام الشاشات.

- بناء معرض صور متجاوب
- استخدام CSS لتنسيق الصور
- التحكم في التخطيط عبر Media Queries

## هيكل HTML لمعرض الصور

نستخدم div مع كلاس responsive و gallery لاحتواء كل صورة، مع رابط a يحيط بـ img ووصف للصورة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="responsive">
      <div class="gallery">
        <a target="_blank" href="img.jpg">
          <img src="img.jpg" alt="Image">
        </a>
        <div class="desc">وصف الصورة</div>
      </div>
    </div>
  </body>
</html>
```

## تنسيق معرض الصور بـ CSS

نستخدم box-sizing بقيمة border-box لضبط الأبعاد، ونحدد عرض العناصر بـ 24.99999 بالمئة لتوزيع أربع صور في السطر الواحد.

```css
* {
  box-sizing: border-box;
}
.responsive {
  padding: 0 6px;
  float: left;
  width: 24.99999%;
}
div.gallery {
  border: 1px solid #ccc;
}
```

## استخدام Media Queries للتجاوب

نستخدم Media Queries لتغيير العرض عند تصغير الشاشة، حيث نجعل العرض 49.99999 بالمئة للشاشات الصغيرة، و100 بالمئة للشاشات الأصغر.

```css
@media only screen and (max-width: 700px) {
  .responsive {
    width: 49.99999%;
  }
}
@media only screen and (max-width: 500px) {
  .responsive {
    width: 100%;
  }
}
```

## معاينة المخرجات

معرض صور مرتب يتغير تخطيطه تلقائيا بناء على عرض المتصفح، مما يوفر تجربة مستخدم ممتازة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- النتيجة: معرض صور متجاوب -->
    <!-- 4 صور في الشاشات الكبيرة -->
    <!-- صورتان في الشاشات المتوسطة -->
    <!-- صورة واحدة في الشاشات الصغيرة -->
  </body>
</html>
```

## أفضل الممارسات

استخدم clearfix بعد العناصر العائمة، واستخدم خاصية hover لإضافة تفاعل بصري عند تمرير الفأرة فوق الصور.

- استخدام clearfix لتنظيف العناصر العائمة
- إضافة تأثيرات hover لتحسين التفاعل
- ضبط الصور لتكون بعرض 100 بالمئة
- اختبار التصميم على أحجام شاشات مختلفة

## خاتمة الدرس

بهذا نكون قد أتممنا بناء معرض صور متجاوب. أدعوكم لتجربة الكود وتعديل القيم بأنفسكم عبر الرابط في الوصف.

- تم شرح هيكل HTML
- تم شرح تنسيقات CSS
- تم شرح Media Queries
- رابط المصدر في الوصف
