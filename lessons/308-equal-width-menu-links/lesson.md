# تصميم Navigation Bar بعرض متساو باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_topnav_equal_width.asp

## مقدمة الدرس

مرحبا بكم في درس جديد من دورة CSS لتعلم تصميم Navigation Bar بعرض متساو.

- تعلم تصميم Navigation Bar احترافي
- توزيع الـ Links بعروض متساوية
- بناء واجهات وب متجاوبة وعصرية

## هيكل الـ HTML للقائمة

نبدأ بكتابة هيكل HTML لعنصر div الرئيسي مع روابط التنقل داخله.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- The navigation menu -->
    <div class="navbar">
      <a class="active" href="#">Home</a>
      <a href="#">Search</a>
      <a href="#">Contact</a>
      <a href="#">Login</a>
    </div>
  </body>
</html>
```

## تنسيق حاوية الـ Navbar

تنسيق حاوية الـ navbar بعرض كامل ولون خلفية مناسب.

```css
/* Style the navigation menu */
.navbar {
  width: 100%;
  background-color: #555;
  overflow: auto;
}
```

## تنسيق الروابط والعرض المتساو

تحديد عرض الروابط بنسبة 25 بالمائة لكل عنصر لضمان المساواة التامة.

```css
/* Navigation links */
.navbar a {
  float: left;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
  width: 25%;
  text-align: center;
}
```

## تأثيرات التفاعل hover والصفحة النشطة active

إضافة تأثيرات hover وتحديد لون الرابط النشط active.

```css
/* Add a background color on mouse-over */
.navbar a:hover {
  background-color: #000;
}
/* Style the current/active link */
.navbar a.active {
  background-color: #04AA6D;
}
```

## جعل القائمة متجاوبة Responsive

استخدام media query لتعديل القائمة على الشاشات التي تقل عن 500 بيكسل.

```css
@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
    width: 100%;
    text-align: left;
  }
}
```

## خلاصة الدرس

خلاصة الدرس ودعوة لتجربة الأكواد وتطبيقها بأنفسكم.

- توزيع عادل للروابط بنسبة مئوية دقيقة
- تفعيل تفاعل hover و active بسهولة
- ضمان تجاوب الواجهة مع الهواتف الذكية
