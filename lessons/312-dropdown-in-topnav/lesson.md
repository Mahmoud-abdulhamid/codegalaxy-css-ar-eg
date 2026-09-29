# بناء Dropdown Navbar باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp

## مقدمة حول Dropdown Navbar

تعلم كيفية إنشاء شريط تنقل يحتوي على قائمة منسدلة باستخدام CSS.

- بناء هيكل HTML لشريط التنقل
- تنسيق القائمة المنسدلة باستخدام CSS
- استخدام خاصية hover للتفاعل
- تحسين تجربة المستخدم في صفحات الويب

## هيكل HTML للقائمة المنسدلة

هيكل HTML يتكون من حاوية navbar وعنصر dropdown يحتوي على زر ومحتوى.

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
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
        </div>
      </div>
    </div>
  </body>
</html>
```

## تنسيق شريط التنقل الأساسي

تنسيق حاوية navbar والروابط بداخلها باستخدام CSS.

```css
.navbar {
  overflow: hidden;
  background-color: #333;
}
.navbar a {
  float: left;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
}
```

## تنسيق القائمة المنسدلة

إخفاء القائمة المنسدلة وتنسيق مظهرها باستخدام CSS.

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

## تفعيل القائمة عند التمرير

استخدام hover لإظهار القائمة المنسدلة عند تمرير الفأرة.

```css
.dropdown:hover .dropdown-content {
  display: block;
}
.navbar a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}
```

## معاينة النتيجة

النتيجة النهائية: شريط تنقل تفاعلي مع قائمة منسدلة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- النتيجة المرئية في المتصفح -->
    [ Home ] [ News ] [ Dropdown v ]
    [ Link 1 ]
    [ Link 2 ]
  </body>
</html>
```

## خلاصة الدرس

خلاصة: استخدام z-index و hover لإنشاء قائمة منسدلة احترافية.

- استخدام div كحاوية للقائمة
- خاصية display للتحكم في الإخفاء والظهور
- استخدام z-index للترتيب الطبقي
- تطبيق hover للتفاعل مع المستخدم
