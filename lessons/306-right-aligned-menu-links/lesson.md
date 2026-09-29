# تصميم قائمة تنقل في الـ Web مع أزرار محاذاة لليمين

المصدر: https://www.w3schools.com/howto/howto_css_topnav_right.asp

## مقدمة الدرس وأهمية تصميم Navigation Bar

مرحبا بكم في درس جديد من دورة CSS لتعلم تصميم navigation bar احترافية.

- تعلم تصميم navigation bar متقدمة في الـ Web
- إدارة توزيع الروابط بين اليمين واليسار
- تحسين تجربة المستخدم عبر واجهات منظمة

## بناء هيكل الـ HTML الخاص بالقائمة

نبدأ ببناء هيكل HTML الخاص بالقائمة وعناصر الروابط الداخلية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
  </body>
</html>
```

## إضافة الحاوية اليمنى للروابط

نضيف حاوية داخلية لتجميع الروابط التي ستظهر في الجهة اليمنى.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <div class="topnav-right">
        <a href="#search">Search</a>
        <a href="#about">About</a>
      </div>
    </div>
  </body>
</html>
```

## تنسيق الحاوية الرئيسية في الـ CSS

نقوم بتنسيق الحاوية الرئيسية بوضع لون خلفية داكن وإدارة الـ overflow.

```css
.topnav {
  background-color: #333;
  overflow: hidden;
}
```

## تنسيق الروابط وتوزيعها بـ float

ننسق روابط القائمة بتحديد الطفو لليسار وتطبيق الحواشی المناسبة.

```css
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
```

## تأثيرات الـ hover والحالة النشطة

نضيف تأثيرات hover وتحديد لون العنصر النشط active لتعزيز التفاعل.

```css
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
```

## إتمام محاذاة القسم الأيمن في الـ CSS

نطبق خاصية float على الحاوية الفرعية لضمان محاذاة عناصرها لليمين.

```css
.topnav-right {
  float: right;
}
```

## خلاصة الدرس ودعوة للتجربة العملية

خلاصة الدرس حول تنظيم الروابط في القائمة ودعوة للتجربة العملية.

- إتقان استخدام float في تنظيم الـ Navigation Bars
- فصل الروابط بين الجهتين اليمنى واليسرا بكفاءة
- تطبيق أفضل الممارسات في تصميم الـ Web
