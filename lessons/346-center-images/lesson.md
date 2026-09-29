# توسيط الصور باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_image_center.asp

## مقدمة حول توسيط الصور

مرحبا بكم في درس توسيط الصور باستخدام CSS لتنسيق صفحات الويب بشكل احترافي.

- توسيط الصور يعزز من جمالية تصميم صفحات الويب
- نستخدم CSS للتحكم في تموضع العناصر
- سنتعلم الطريقة القياسية باستخدام margin و display

## القواعد الأساسية للتوسيط

لتحويل الصورة إلى عنصر block وتوسيطها نستخدم خاصية margin بقيمة auto.

- تحويل العنصر إلى block باستخدام display: block
- ضبط margin-left على auto
- ضبط margin-right على auto

## تطبيق الكود العملي

تطبيق كود CSS لتوسيط الصورة عبر كلاس center.

```css
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
```

## استخدام الكلاس في HTML

ربط كلاس CSS بعنصر img في HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="paris.jpg" alt="Paris" class="center">
  </body>
</html>
```

## ملاحظات تقنية هامة

تنبيه: لا يمكن توسيط الصورة إذا كان العرض 100.

- لا يعمل التوسيط إذا كان العرض 100
- تأكد من اختيار عرض مناسب للصورة
- راجع دروس CSS Images لمزيد من التنسيقات

## خلاصة الدرس

شكرا لمتابعتكم، جربوا الأكواد بأنفسكم لتطوير مهاراتكم.

- استخدام display: block ضروري
- استخدام margin: auto للجانبين
- طبقوا الكود عبر الرابط في الوصف
