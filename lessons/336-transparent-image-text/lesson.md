# إنشاء نص ذو خلفية شفافة فوق الصور باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_image_transparent.asp

## مقدمة الدرس وأهمية النصوص الشفافة فوق الصور

تعلم كيفية إنشاء صورة مع نص خلفية شفاف باستخدام CSS وتنسيق الحاويات.

- دمج النصوص مع الصور بأسلوب عصري
- استخدام CSS لإنشاء خلفيات شفافة
- تحسين المظهر البصري لصفحات الويب
- التحكم الكامل في الشفافية والتموضع

## بناء هيكل HTML الأساسي للصورة والنص

بناء هيكل HTML باستخدام container و img و content.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <img src="notebook.jpg" alt="Notebook" style="width:100%;">
      <div class="content">
        <h1>Heading</h1>
        <p>Lorem ipsum..</p>
      </div>
    </div>
  </body>
</html>
```

## تنسيق الحاوية الرئيسية باستخدام خاصية position

تنسيق الحاوية الرئيسية container وتحديد العرض الأقصى والتوسيط.

```css
.container {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}
```

## تنسيق صندوق المحتوى النصي الشفاف

ضبط تموضع محتوى النص باستخدام position absolute وتحديد الموقع bottom.

```css
.container .content {
  position: absolute;
  bottom: 0;
}
```

## تطبيق الشفافية والألوان باستخدام rgba

استخدام خاصية background مع دالة rgba لتطبيق تأثير الشفافية بمقدار 0.5.

```css
background: rgb(0, 0, 0);
background: rgba(0, 0, 0, 0.5);
color: #f1f1f1;
width: 100%;
padding: 20px;
```

## أفضل الممارسات والنصائح الهندسية لتصميم الويب

أفضل الممارسات لضمان تباين الألوان وقابلية قراءة النصوص فوق الصور.

- اختيار ألوان نصوص فاتحة مع خلفيات داكنة شفافة
- استخدام قيمة padding المناسبة لتجنب التصاق النصوص
- اختبار التجاوب على مختلف شاشات الأجهزة الذكية
- الاستفادة من الألوان الاحتياطية fallback colors

## خلاصة الدرس ومراجعة شاملة للمفاهيم المكتسبة

خلاصة درس إنشاء نصوص شفافة فوق الصور واحتراف استخدام CSS.

- فهم آلية عمل position relative و absolute
- تطبيق الشفافية المتقدمة عبر دالة rgba
- تنسيق العناصر لإنشاء واجهات ويب جذابة
- متابعة دورات CodeGalaxy للمزيد من المهارات
