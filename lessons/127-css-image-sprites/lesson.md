# تقنية CSS Image Sprites

المصدر: https://www.w3schools.com/css/css_image_sprites.asp

## مقدمة حول Image Sprites

تعد تقنية Image Sprites وسيلة فعالة لتجميع صور متعددة في ملف واحد لتقليل عدد طلبات السيرفر.

- تجميع الصور يقلل من وقت تحميل الصفحة
- تقليل عدد طلبات السيرفر يحسن سرعة الموقع
- توفير في استهلاك الـ bandwidth
- تستخدم تقنية Image Sprites في أيقونات التنقل

## كيف تعمل Image Sprites

تعتمد الفكرة على استخدام background-position لتحديد الجزء المراد عرضه من ملف الصورة الكبير.

- استخدام background-image لتحديد ملف الصورة
- استخدام background-position لتحديد إحداثيات العرض
- تحديد العرض والارتفاع بدقة لكل عنصر
- تقليل زمن التحميل الكلي للصفحة

## تطبيق عملي باستخدام CSS

يوضح الكود كيفية ضبط background-position لكل زر تنقل لعرض الأيقونة الصحيحة.

```css
#home {
  width: 46px;
  height: 44px;
  background-image: url(img_navsprites.gif);
  background-position: 0 0;
}
#prev {
  width: 43px;
  height: 44px;
  background-image: url('img_navsprites.gif');
  background-position: -47px 0;
}
```

## استخدام Sprites في القوائم

دمج Image Sprites داخل القوائم يوفر تحكما ممتازا في واجهة المستخدم.

```css
#navlist li {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
}
#home {
  left: 0px;
  width: 46px;
  background: url('img_navsprites.gif') 0 0;
}
```

## إضافة تأثير Hover

تأثير hover يتم عبر تغيير إحداثيات الخلفية فقط، مما يضمن استجابة فورية.

```css
#home a:hover {
  background: url('img_navsprites_hover.gif') 0 -45px;
}
#prev a:hover {
  background: url('img_navsprites_hover.gif') -47px -45px;
}
```

## خلاصة الدرس

تعد Image Sprites ممارسة هندسية ممتازة لتحسين تجربة المستخدم وسرعة الموقع.

- Image Sprites تقلل طلبات HTTP
- تحسن سرعة تحميل صفحات الويب
- تسهل إضافة تأثيرات تفاعلية مثل hover
- تعتمد على دقة background-position
