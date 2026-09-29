# بناء قائمة جانبية احترافية باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_sidebar_icons.asp

## مقدمة حول القوائم الجانبية

مرحبا بكم في درس بناء القائمة الجانبية الاحترافية باستخدام CSS.

- إنشاء هيكل القائمة الجانبية
- استخدام مكتبة Font Awesome للأيقونات
- تنسيق القائمة باستخدام CSS
- جعل القائمة متجاوبة مع الشاشات الصغيرة

## هيكل HTML للقائمة الجانبية

هيكل HTML يستخدم div كحاوية رئيسية و i للأيقونات.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="sidebar">
      <a href="#home"><i class="fa fa-home"></i> Home</a>
      <a href="#services"><i class="fa fa-wrench"></i> Services</a>
      <a href="#clients"><i class="fa fa-user"></i> Clients</a>
      <a href="#contact"><i class="fa fa-envelope"></i> Contact</a>
    </div>
  </body>
</html>
```

## تنسيق القائمة الجانبية بـ CSS

تنسيق القائمة الجانبية باستخدام خصائص CSS الثابتة.

```css
.sidebar {
  height: 100%;
  width: 160px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 16px;
}
```

## تنسيق الروابط والتفاعل

تنسيق الروابط داخل القائمة وإضافة تأثير hover.

```css
.sidebar a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}
.sidebar a:hover {
  color: #f1f1f1;
}
```

## تنسيق المحتوى الرئيسي

ضبط الهامش للمحتوى الرئيسي ليتناسب مع عرض القائمة.

```css
.main {
  margin-left: 160px;
  padding: 0px 10px;
}
```

## التجاوب مع الشاشات الصغيرة

استخدام Media Queries لضبط القائمة في الشاشات الصغيرة.

```css
@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}
```

## خلاصة الدرس

خلاصة: القائمة الجانبية تعزز تجربة المستخدم وتوفر تنقلا سهلا.

- استخدام position: fixed للقوائم الثابتة
- تنسيق الروابط بـ display: block
- استخدام Media Queries للتجاوب
- تجربة الأكواد عبر الرابط في الوصف
