# CSS object-position Code Challenge

المصدر: https://www.w3schools.com/css/css_challenges_objectposition.asp

## مقدمة حول CSS object-position

مرحبا بكم في درس CSS object-position، سنتعلم اليوم كيفية التحكم في موضع الصور داخل الحاويات.

- خاصية object-position تحدد موضع الصورة داخل الـ Element
- تستخدم غالبا مع خاصية object-fit
- تساعد في تحسين مظهر الصور في صفحات الويب

## مفاهيم أساسية حول object-position

تسمح خاصية object-position بتحديد نقطة التركيز للصورة باستخدام قيم مثل center أو top أو قيم رقمية.

## تطبيق عملي على الكود

نستخدم object-fit مع cover و object-position مع top للتحكم في عرض الصورة.

```css
img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  object-position: top;
}
```

## معاينة النتيجة في المتصفح

المتصفح يقوم بقص الصورة بناء على القيم المحددة لضمان أفضل عرض للمحتوى.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <img src="image.jpg" alt="Nature">
    </div>
  </body>
</html>
```

## أفضل الممارسات البرمجية

استخدم قيم النسب المئوية للتجربة والوصول إلى أفضل نتيجة بصرية ممكنة.

- اختبر دائما استجابة الصور على أحجام شاشات مختلفة
- استخدم object-position مع object-fit للحصول على نتائج احترافية
- تجنب القيم التي قد تؤدي إلى إخفاء الأجزاء المهمة من الصورة

## خاتمة الدرس

شكرا لمتابعتكم، جربوا حل التحديات البرمجية المتاحة في الرابط أسفل الفيديو.

- راجع الرابط في الوصف لحل التحدي
- استمر في ممارسة CSS يوميا
- لا تتردد في طرح الأسئلة في التعليقات
