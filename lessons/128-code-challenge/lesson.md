# CSS Image Sprites Challenge

المصدر: https://www.w3schools.com/css/css_challenges_image_sprites.asp

## مقدمة حول Image Sprites

مقدمة حول تقنية Image Sprites وكيفية استخدامها لتحسين أداء صفحات الويب.

- تقنية Image Sprites تجمع عدة صور في ملف واحد
- تقلل من عدد طلبات HTTP للمتصفح
- تسرع من تحميل صفحات الويب
- تعتمد بشكل أساسي على خاصية background-position

## مفهوم العمل الأساسي

شرح مفهوم العمل الأساسي باستخدام background-image و background-position.

- استخدام background-image لتعيين ملف الصورة المجمع
- استخدام background-position لتحديد الجزء المراد عرضه
- تحديد أبعاد العنصر عبر width و height

## كود CSS لتطبيق Image Sprites

كود CSS يوضح كيفية ضبط الأبعاد والإحداثيات لعنصر يستخدم Image Sprites.

```css
.icon {
  width: 50px;
  height: 50px;
  background-image: url('sprites.png');
  background-position: -10px -20px;
}
```

## تحليل أجزاء الكود

تحليل تفصيلي لخصائص CSS المستخدمة في تحديد موقع الصورة.

- width و height يحددان إطار العرض
- background-image يربط ملف الصورة المجمع
- القيم السالبة في background-position تحرك الصورة للأعلى أو اليسار

## معاينة النتيجة

معاينة النتيجة النهائية في المتصفح حيث تظهر الأيقونة المحددة فقط.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="icon"></div>
  </body>
</html>
```

## أفضل الممارسات

نصائح وأفضل الممارسات للتعامل مع Image Sprites باحترافية.

- تنظيم الصور داخل الملف المجمع بمسافات ثابتة
- استخدام أدوات توليد Sprites لتقليل الأخطاء
- التأكد من دقة الإحداثيات لضمان جودة العرض

## خاتمة الدرس

خاتمة الدرس ودعوة للممارسة والتطبيق العملي.

- شكرا لمتابعتكم هذا الدرس
- مارسوا كتابة الكود بأنفسكم
- تابعوا الدورة لمزيد من التحديات
