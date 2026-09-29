# إضافة شريط بحث احترافي في قائمة التنقل باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_searchbar.asp

## مقدمة عن شريط البحث المتجاوب

مرحبا بكم في درس إضافة شريط بحث احترافي داخل قائمة التنقل في صفحات الويب.

- تعلم بناء شريط بحث تفاعلي داخل الـ topnav
- تحسين تجربة المستخدم عبر توفير محرك بحث سريع
- فهم آلية التجاوب مع شاشات الهواتف المحمولة

## هيكل HTML الخاص بقائمة التنقل

نكتب هيكل HTML لقائمة التنقل مع عنصر الإدخال المخصص للبحث داخل الـ topnav.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <input type="text" placeholder="Search..">
    </div>
  </body>
</html>
```

## تنسيق حاوية القائمة والروابط

تنسيق حاوية الـ topnav وإعطاؤها لون خلفية متناسق مع تنسيق الروابط بداخلها.

```css
.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
}
.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
```

## تنسيق حالات الروابط والتفاعل

تطبيق تأثيرات التحويم والتلوين للرابط النشط لتوضيح الصفحة الحالية للمستخدم.

```css
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
.topnav a.active {
  background-color: #2196F3;
  color: white;
}
```

## تنسيق صندوق البحث في الجهة اليمنى

تنسيق صندوق البحث وإزاحته إلى يمين شريط التنقل مع ضبط الأبعاد والمسافات.

```css
.topnav input[type=text] {
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}
```

## التجاوب مع الشاشات الصغيرة عبر Media Queries

استخدام Media Queries لضمان ظهور الروابط وصندوق البحث بشكل عمودي على الهواتف.

```css
@media screen and (max-width: 600px) {
  .topnav a, .topnav input[type=text] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;
  }
}
```

## خلاصة الدرس وأفضل الممارسات

خلاصة الدرس: بناء شريط بحث متجاوب يعزز تجربة المستخدم على مختلف الأجهزة.

- دمج عناصر الإدخال داخل قوائم الـ topnav بنجاح
- التحكم بموقع العنصر باستخدام الـ float والتفاف الشاشات
- استخدام الـ Media Queries لتصميم متجاوب بالكامل
