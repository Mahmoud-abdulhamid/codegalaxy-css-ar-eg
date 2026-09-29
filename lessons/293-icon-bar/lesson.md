# تصميم شريط أيقونات احترافي باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_icon_bar.asp

## مقدمة حول شريط الأيقونات

سنتعلم اليوم كيفية بناء Icon Bar احترافي لمواقع الويب باستخدام CSS، سواء كان هذا الشريط عموديا أو أفقيا.

- بناء شريط أيقونات جذاب
- دعم التخطيط العمودي والأفقي
- إضافة تأثيرات تفاعلية
- استخدام مكتبة Font Awesome

## الهيكل البرمجي للأيقونات

نستخدم مكتبة Font Awesome لعرض الأيقونات داخل عناصر a ضمن حاوية icon-bar.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
    <div class="icon-bar">
      <a class="active" href="#"><i class="fa fa-home"></i></a>
      <a href="#"><i class="fa fa-search"></i></a>
      <a href="#"><i class="fa fa-envelope"></i></a>
      <a href="#"><i class="fa fa-globe"></i></a>
      <a href="#"><i class="fa fa-trash"></i></a>
    </div>
  </body>
</html>
```

## تنسيق الشريط العمودي

نستخدم display: block لجعل الروابط تظهر فوق بعضها في الشريط العمودي.

```css
.icon-bar {
  width: 90px;
  background-color: #555;
}
.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  color: white;
  font-size: 36px;
}
```

## تنسيق الشريط الأفقي

نستخدم float: left وعرض 20 لكل رابط لتوزيع الأيقونات أفقيا بالتساوي.

```css
.icon-bar {
  width: 100%;
  background-color: #555;
  overflow: auto;
}
.icon-bar a {
  float: left;
  width: 20%;
  text-align: center;
  padding: 12px 0;
  color: white;
  font-size: 36px;
}
```

## إضافة التأثيرات التفاعلية

نستخدم hover و transition لإضافة تأثيرات تفاعلية عند التمرير، مع تمييز العنصر النشط.

```css
.icon-bar a:hover {
  background-color: #000;
}
.active {
  background-color: #04AA6D;
}
```

## خلاصة الدرس

لقد تعلمنا بناء شريط أيقونات مرن. جربوا الأكواد بأنفسكم عبر الرابط في الوصف.

- استخدام CSS للتحكم في التخطيط
- تطبيق تأثيرات hover و transition
- تنسيق العناصر النشطة بـ active
- تطوير مهارات تصميم واجهات الويب
