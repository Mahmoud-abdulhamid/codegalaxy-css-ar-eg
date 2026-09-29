# إنشاء معرض صور أفقي قابل للتمرير باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_image_gallery_scroll.asp

## مقدمة حول معارض الصور الأفقية

سنتعلم اليوم كيفية إنشاء معرض صور أفقي قابل للتمرير باستخدام CSS لتحسين تجربة المستخدم في صفحات الويب.

- إنشاء معرض صور أفقي
- استخدام CSS للتحكم في التمرير
- تحسين واجهة المستخدم

## هيكلة HTML للمعرض

نستخدم div بكلاس scroll-container لتجميع الصور، حيث يتم تعريف كل صورة باستخدام Tag img داخل هذه الحاوية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="scroll-container">
      <img src="img_5terre.jpg" alt="Cinque Terre">
      <img src="img_forest.jpg" alt="Forest">
      <img src="img_lights.jpg" alt="Northern Lights">
      <img src="img_mountains.jpg" alt="Mountains">
    </div>
  </body>
</html>
```

## تنسيق الحاوية باستخدام CSS

نستخدم overflow: auto لتفعيل شريط التمرير، و white-space: nowrap لمنع التفاف الصور إلى أسطر جديدة.

```css
div.scroll-container {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
  padding: 10px;
}
```

## تنسيق الصور داخل المعرض

نضيف padding للصور داخل الحاوية لتوفير مسافات بصرية مريحة بين الصور أثناء التمرير.

```css
div.scroll-container img {
  padding: 10px;
}
```

## معاينة النتيجة

تظهر النتيجة كشريط تمرير أفقي يظهر تلقائيا عند زيادة عدد الصور عن عرض الحاوية.

```text
[ Image 1 ] [ Image 2 ] [ Image 3 ] [ Image 4 ]
---------------------------------------------
[ Scrollbar ]
```

## نصائح إضافية

استخدم خاصية alt دائما لتحسين إمكانية الوصول، وفكر في إضافة تأثيرات hover لزيادة التفاعلية.

- استخدام alt لجميع الصور
- تحسين إمكانية الوصول
- إضافة تأثيرات hover
- تجربة أحجام صور مختلفة

## خلاصة الدرس

لقد تعلمنا كيفية إنشاء معرض صور أفقي. جربوا الكود بأنفسكم وقوموا بتعديل التنسيقات.

- تم الانتهاء من بناء المعرض
- شجعنا على التجربة العملية
- نهاية الدرس
