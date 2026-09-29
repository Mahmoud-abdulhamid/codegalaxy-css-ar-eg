# إنشاء زر مزيد في شريط التنقل Navbar بلغة CSS

المصدر: https://www.w3schools.com/howto/howto_css_more_button.asp

## مقدمة حول إنشاء زر More في Navbar

مرحبا بكم في درس إنشاء زر More داخل Navbar باستخدام لغة CSS.

- تعلم بناء زر More تفاعلي في Navbar
- عرض قائمة Dropdown عند تحريك المؤشر
- تنظيم الهيكل باستخدام حاويات div

## هيكل HTML الخاص بالقائمة المنسدلة

نكتب هيكل HTML متضمنا الـ navbar وقائمة الـ dropdown مع الروابط الفرعية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="navbar">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <div class="dropdown">
        <button class="dropbtn">More</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  </body>
</html>
```

## تنسيق شريط التنقل الرئيسي Navbar

ننسق شريط التنقل الرئيسي باستخدام background-color وخاصية overflow.

```css
.navbar {
  overflow: hidden;
  background-color: #333;
  font-family: Arial;
}
.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
```

## تنسيق زر Dropdown Button وحويته

نحدد تنسيقات الـ dropdown والـ dropbtn لضمان محاذاة صحيحة.

```css
.dropdown {
  float: left;
  overflow: hidden;
}
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}
```

## إخفاء وتنسيق محتوى القائمة المنسدلة

نخفي محتوى القائمة افتراضيا ونضبط موضعها المطلق والظل.

```css
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
```

## تنسيق الروابط الفرعية وتأثيرات التحويم Hover

ننسق الروابط الفرعية ونفعل تأثيرات hover للتفاعل.

```css
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}
```

## إظهار القائمة عند التفاعل مع Hover

نستخدم selector الـ hover لإظهار القائمة المنسدلة عند مرور الماوس.

```css
/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
```

## خلاصة الدرس ودعوة للتجربة العملية

خلاصة الدرس: بناء قائمة منسدلة تفاعلية بمهارات CSS المتقدمة.

- تم استخدام HTML لبناء الهيكل
- تم تنسيق Navbar و Dropdown بـ CSS
- تم تفعيل تأثيرات hover لعرض القائمة
