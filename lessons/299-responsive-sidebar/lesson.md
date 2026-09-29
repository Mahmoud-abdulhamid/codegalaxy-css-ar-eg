# بناء Responsive Sidebar باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp

## مقدمة الدرس

مرحبا بكم في درس بناء Responsive Sidebar باستخدام CSS لتحسين تصميم مواقع الويب.

- إنشاء Responsive Sidebar متجاوب واحترافي
- تحسين تجربة المستخدم في تصفح مواقع الويب
- التعرف على خصائص التخطيط والتجاوب في CSS

## هيكل HTML للقائمة الجانبية

نكتب هيكل HTML للقائمة الجانبية باستخدام عناصر div والروابط الداخلية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- The sidebar -->
    <div class="sidebar">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
    <!-- Page content -->
    <div class="content">
      ...
    </div>
  </body>
</html>
```

## تنسيق القائمة الجانبية الأساسية

نحدد عرض القائمة الجانبية ونثبت موقعها باستخدام position fixed و height 100.

```css
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}
```

## تنسيق الروابط وحالات التفاعل

ننسق الروابط داخل القائمة باستخدام display block ونحدد ألوان حالة التفاعل و active.

```css
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}
.sidebar a.active {
  background-color: #04AA6D;
  color: white;
}
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}
```

## تنسيق محتوى الصفحة الرئيسي

نضبط margin-left لمحتوى الصفحة ليتطابق مع عرض القائمة الجانبية الثابتة.

```css
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}
```

## التجاوب مع الشاشات المتوسطة

نستخدم Media Queries للشاشات أقل من 700 بكسل لتحويل القائمة الجانبية إلى شريط علوي.

```css
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}
```

## التجاوب مع الشاشات الصغيرة جدا

نضبط العناصر للشاشات أقل من 400 بكسل لتتوسط النصوص وتظهر عموديا بشكل متناسق.

```css
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
```

## خلاصة الدرس

خلاصة الدرس: تعلم بناء Responsive Sidebar وتطويعه لمختلف الشاشات باستخدام Media Queries.

- استخدام position fixed لتثبيت القائمة الجانبية
- مطابقة margin-left للمحتوى مع عرض القائمة
- تطبيق Media Queries للتجاوب مع كافة الأجهزة
