# Responsive Images with CSS

المصدر: https://www.w3schools.com/howto/howto_css_image_responsive.asp

## مقدمة حول الصور المتجاوبة

مرحبا بكم في درس اليوم حول كيفية إنشاء صور متجاوبة باستخدام CSS لتناسب مختلف أحجام الشاشات.

- الصور المتجاوبة تتكيف تلقائيا مع حجم الشاشة
- تحسين تجربة المستخدم عبر مختلف الأجهزة
- استخدام خصائص CSS للتحكم في أبعاد الصور

## التحكم في أبعاد الصور

لجعل الصورة تتمدد وتنكمش، نضبط خاصية width إلى 100 وخاصية height إلى auto.

```css
.responsive {
  width: 100%;
  height: auto;
}
```

## استخدام خاصية max-width

استخدام max-width: 100 يمنع الصورة من أن تصبح أكبر من حجمها الأصلي مع السماح لها بالانكماش.

```css
.responsive {
  max-width: 100%;
  height: auto;
}
```

## تحديد أقصى حجم للصورة

يمكن تحديد حجم أقصى للصورة باستخدام قيمة ثابتة مثل 400px مع خاصية max-width.

```css
.responsive {
  width: 100%;
  max-width: 400px;
  height: auto;
}
```

## تطبيق الكود في HTML

يتم ربط تنسيقات CSS بالعنصر عبر إضافة class إلى Tag img في ملف HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="nature.jpg" alt="Nature" class="responsive">
  </body>
</html>
```

## معاينة النتيجة

تظهر الصورة متجاوبة وتغير أبعادها تلقائيا عند تغيير حجم نافذة المتصفح.

```text
Browser Window Resized:
- Image width: 100%
- Image height: auto
- Aspect ratio: Maintained
```

## خلاصة الدرس

خلاصة: استخدام width و max-width يضمن تجربة عرض مثالية للصور عبر مختلف الأجهزة.

- استخدم width: 100 للتمدد الكامل
- استخدم max-width: 100 لمنع التكبير الزائد
- دائما اضبط height: auto للحفاظ على التناسب
- جرب الأكواد بنفسك عبر الرابط في الوصف
