# CSS Multi-column Layout

المصدر: https://www.w3schools.com/css/css3_multiple_columns.asp

## مقدمة في Multi-column Layout

يسمح CSS Multi-column Layout Module بتقسيم النصوص إلى أعمدة متعددة لتنظيم المحتوى بشكل احترافي.

- تنظيم النصوص في أعمدة متعددة
- محاكاة تنسيق الصحف والمجلات
- تحسين تجربة القراءة في صفحات الويب

## استخدام خاصية column-count

تحدد خاصية column-count عدد الأعمدة التي سيتم تقسيم العنصر إليها.

```css
div {
  column-count: 3;
}
```

## التحكم في المسافات عبر column-gap

تستخدم خاصية column-gap لتحديد المساحة الفارغة بين الأعمدة.

```css
div {
  column-count: 3;
  column-gap: 40px;
}
```

## معاينة النتيجة

يظهر النص موزعا على 3 أعمدة مع مسافة 40px بينها.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div style="column-count: 3; column-gap: 40px;">
      هذا نص تجريبي يتم توزيعه تلقائياً على الأعمدة.
    </div>
  </body>
</html>
```

## ملاحظات هندسية

يمكن إضافة خصائص إضافية مثل column-rule لإضافة خطوط فاصلة بين الأعمدة.

- استخدام column-rule لإضافة خطوط فاصلة
- التأكد من توافق المتصفحات
- اختبار التخطيط على شاشات مختلفة

## خلاصة الدرس

شكرا لمتابعتكم، جربوا الأكواد بأنفسكم لتطوير مهاراتكم في CSS.

- تمت تغطية column-count و column-gap
- تعلمنا كيفية تقسيم المحتوى بمرونة
- راجعوا الروابط في الوصف للمزيد
