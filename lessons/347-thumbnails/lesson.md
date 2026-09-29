# تصميم صور مصغرة باحترافية باستخدام CSS Thumbnail

المصدر: https://www.w3schools.com/howto/howto_css_thumbnail.asp

## مقدمة عن الصور المصغرة

تعرف على كيفية إنشاء Thumbnail باستخدام CSS لتنظيم العرض.

- ما هي الصور المصغرة Thumbnail
- أهمية الصور المصغرة في تجربة المستخدم
- استخدام عناصر HTML و CSS معا

## المفهوم الأساسي للصور المصغرة

Thumbnail هي صورة مصغرة تمثل صورة أكبر عند النقر مع إطار مميز.

- تمثيل الصور الكبيرة بصور مصغرة
- إضافة إطار خارجي لتوضيح الحدود
- تحسين سرعة تحميل وتخطيط الصفحة

## تطبيق هيكل HTML للصورة المصغرة

استخدام عنصر <img> داخل عنصر <a> لإنشاء رابط للصورة الكبيرة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <a target="_blank" href="img_forest.jpg">
      <img src="img_forest.jpg" alt="Forest">
    </a>
  </body>
</html>
```

## تنسيق الحدود والزوايا بـ CSS

تنسيق الحدود والزوايا وتحديد العرض المناسب للصورة.

```css
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}
```

## إضافة تأثير التفاعل hover

إضافة تأثير hover مع box-shadow بلون أزرق عند مرور المؤشر.

```css
img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
```

## تجميع الكود الكامل في الصفحة

جمع أكواد HTML و CSS في ملف واحد لتطبيق التأثيرات بالكامل.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      img {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
        width: 150px;
      }
      img:hover {
        box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
      }
    </style>
  </head>
  <body>
    <a target="_blank" href="img_forest.jpg">
      <img src="img_forest.jpg" alt="Forest">
    </a>
  </body>
</html>
```

## أفضل الممارسات والنصائح الهندسية

أفضل الممارسات لتحسين إمكانية الوصول ومحركات البحث.

- استخدام alt لجميع عناصر الصور بدقة
- اختيار ألوان ظلال تتناسب مع تصميم الموقع
- مراجعة دورة CSS Images لمزيد من التنسيقات

## خلاصة الدرس ودعوة للتجربة

خلاصة الدرس ودعوة لتطبيق الكود بأنفسكم.

- تلخيص خطوات إنشاء Thumbnail
- تجربة الأكواد بأنفسكم عبر الرابط المرفق
- انتظرونا في الدرس القادم من دورة CSS
