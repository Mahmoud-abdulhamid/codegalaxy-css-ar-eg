# CSS Image Gallery

المصدر: https://www.w3schools.com/css/css_image_gallery.asp

## مقدمة حول CSS Image Gallery

مرحبا بكم في درس CSS Image Gallery. سنتعلم اليوم كيفية إنشاء معرض صور احترافي ومنظم لعرض الصور بشكل جذاب على صفحة الويب.

- معرض الصور هو مجموعة من الصور المنظمة
- يستخدم CSS لتحسين المظهر والتفاعل
- يعتمد الدرس على تقنيات Flexbox الحديثة

## القواعد الأساسية للمعرض

نستخدم خاصية display: flex على الحاوية الرئيسية لترتيب العناصر بسهولة في صفوف أو أعمدة، مما يجعل التصميم متجاوبا ومنظما.

- استخدام display: flex للحاوية
- تفعيل flex-wrap: wrap للتحكم في الالتفاف
- استخدام justify-content لتوزيع العناصر

## هيكلة الكود البرمجي

نقوم بتعريف div بكلاس gallery لتضم جميع العناصر. داخلها، نضع كل صورة ضمن div بكلاس gallery-item، مع رابط a لفتح الصورة في نافذة جديدة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="gallery">
      <div class="gallery-item">
        <a target="_blank" href="img_5terre.jpg">
          <img src="img_5terre.jpg" alt="Cinque Terre">
        </a>
        <div class="desc">Cinque Terre</div>
      </div>
    </div>
  </body>
</html>
```

## تنسيق العناصر بـ CSS

نقوم بتنسيق العناصر، نحدد عرض gallery-item بـ 180 بيكسل، ونضيف حدود border. كما نستخدم خاصية hover لتغيير لون الحدود عند تمرير الفأرة.

```css
div.gallery-item {
  margin: 5px;
  border: 1px solid #ccc;
  width: 180px;
}
div.gallery-item:hover {
  border: 1px solid #777;
}
```

## جعل الصور متجاوبة

لضمان ظهور الصور بشكل متناسق، نضبط عرض img على 100، ونجعل الارتفاع auto. هذا يضمن أن الصورة تأخذ مساحة الحاوية دون تشوه.

```css
div.gallery-item img {
  width: 100%;
  height: auto;
}
div.gallery-item div.desc {
  padding: 15px;
  text-align: center;
}
```

## معاينة النتيجة

هذه هي النتيجة النهائية للمعرض. الصور مرتبة بجانب بعضها، وعند التمرير فوقها تتغير الحدود، مما يعطي تفاعلية ممتعة للمستخدم.

## خاتمة الدرس

بهذا نكون قد تعلمنا كيفية بناء معرض صور بسيط وفعال. لا تنسوا أن تقنية Flexbox هي المستقبل في ترتيب العناصر. جربوا تغيير القيم في الكود وشاهدوا كيف يتغير التصميم.

- استخدموا Flexbox للمشاريع القادمة
- جربوا إضافة Media Queries للتجاوب
- راجعوا الرابط في الوصف للتطبيق العملي
