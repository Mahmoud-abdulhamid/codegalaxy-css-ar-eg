# بناء شريط تنقل احترافي مع أيقونات باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_navbar_icon.asp

## مقدمة حول أشرطة التنقل

تعلم كيفية إنشاء شريط تنقل متجاوب مع أيقونات باستخدام CSS.

- أهمية أشرطة التنقل في تجربة المستخدم
- استخدام مكتبة Font Awesome للأيقونات
- تنسيق العناصر باستخدام CSS
- تحقيق التجاوب مع مختلف الشاشات

## الهيكل البرمجي لشريط التنقل

الهيكل البرمجي لشريط التنقل مع روابط وأيقونات.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
    <div class="navbar">
      <a class="active" href="#"><i class="fa fa-fw fa-home"></i> Home</a>
      <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
      <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a>
      <a href="#"><i class="fa fa-fw fa-user"></i> Login</a>
    </div>
  </body>
</html>
```

## تنسيق الحاوية الأساسية

تنسيق الحاوية navbar باستخدام CSS.

```css
.navbar {
  width: 100%;
  background-color: #555;
  overflow: auto;
}
```

## تنسيق روابط التنقل

تنسيق الروابط داخل شريط التنقل.

```css
.navbar a {
  float: left;
  text-align: center;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
}
```

## تأثيرات التفاعل

إضافة تأثيرات التفاعل وتحديد الرابط النشط.

```css
.navbar a:hover {
  background-color: #000;
}
.active {
  background-color: #04AA6D;
}
```

## جعل الشريط متجاوبا

تطبيق التجاوب للشاشات الصغيرة.

```css
@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
  }
}
```

## معاينة النتيجة

النتيجة النهائية لشريط التنقل في المتصفح.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- شريط تنقل أفقي في الشاشات الكبيرة -->
    <!-- شريط تنقل عمودي في الشاشات الصغيرة -->
    [Home] [Search] [Contact] [Login]
  </body>
</html>
```

## خلاصة الدرس

خلاصة الدرس ودعوة للتطبيق العملي.

- استخدام Font Awesome للأيقونات
- تنسيق الروابط بـ CSS
- تطبيق Media Queries للتجاوب
- تجربة الكود عبر الرابط في الوصف
