# بناء Vertical Menu باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_vertical_menu.asp

## مقدمة الدرس وأهمية Vertical Menu

مرحبا بكم في درس بناء Vertical Menu باستخدام CSS لتنظيم الروابط بشكل عمودي احترافي.

- تعلم تصميم Vertical Menu احترافي
- استخدام لغة CSS لتنسيق الروابط
- تنظيم محتوى صفحات الوب بعمود أنيق

## هيكل HTML الخاص بالقائمة العمودية

نستخدم عنصر div كحاوية رئيسية وبداخلها مجموعة من anchor tags لروابط التنقل.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="vertical-menu">
      <a href="#" class="active">Home</a>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
    </div>
  </body>
</html>
```

## تنسيق الحاوية الرئيسية في CSS

نحدد عرض الحاوية الرئيسية vertical-menu بقيمة 200px لضمان تناسق القائمة.

```css
.vertical-menu {
  width: 200px;
}
```

## تنسيق الروابط داخل القائمة العمودية

نحول الروابط إلى كتل عبر display block ونضيف الألوان والهوامش المناسبة.

```css
.vertical-menu a {
  background-color: #eee;
  color: black;
  display: block;
  padding: 12px;
  text-decoration: none;
}
```

## إضافة تأثيرات التفاعل hover و active

نضيف تأثير hover لتغيير لون الخلفية وتنسيق active للرابط الحالي باللون الأخضر.

```css
.vertical-menu a:hover {
  background-color: #ccc;
}
.vertical-menu a.active {
  background-color: #04AA6D;
  color: white;
}
```

## إنشاء قائمة عمودية قابلة للتمرير scroll menu

نحدد ارتفاع محدد ونضيف overflow-y بقيمة auto لإنشاء قائمة تمرير عمودية.

```css
.vertical-menu {
  width: 200px;
  height: 150px;
  overflow-y: auto;
}
```

## أفضل الممارسات البرمجية والخلاصة

ملخص شامل لتعلم تصميم القوائم العمودية وتطبيقاتها العملية في صفحات الويب.

- استخدام display block لترتيب الروابط عموديا
- تفعيل تأثيرات hover لزيادة تفاعل المستخدم
- تطبيق overflow لإنشاء قوائم تمرير مرنة
