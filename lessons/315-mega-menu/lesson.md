# تصميم Mega Menu احترافي باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_mega_menu.asp

## مقدمة حول Mega Menu

تعلم كيفية إنشاء Mega Menu احترافية لتنظيم المحتوى في شريط التنقل.

- Mega Menu توفر تجربة مستخدم ممتازة
- تعتمد على HTML للهيكلة و CSS للتنسيق
- تظهر عند تمرير الفأرة فوق العناصر

## هيكلة HTML للقائمة

هيكلة HTML تعتمد على حاويات div لتنظيم القائمة والأعمدة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="navbar">
      <a href="#home">Home</a>
      <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <h3>Category 1</h3>
              <a href="#">Link 1</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

## تنسيق شريط التنقل

تنسيق شريط التنقل باستخدام CSS لضمان محاذاة العناصر.

```css
.navbar {
  overflow: hidden;
  background-color: #333;
}
.navbar a {
  float: left;
  padding: 14px 16px;
  color: white;
  text-decoration: none;
}
```

## منطق القائمة المنسدلة

استخدام hover لإظهار القائمة المنسدلة وتحديد موقعها.

```css
.dropdown-content {
  display: none;
  position: absolute;
  width: 100%;
  left: 0;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
}
.dropdown:hover .dropdown-content {
  display: block;
}
```

## تقسيم الأعمدة

تقسيم القائمة إلى أعمدة متساوية باستخدام float.

```css
.column {
  float: left;
  width: 33.33%;
  padding: 10px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
```

## التجاوب مع الشاشات

جعل القائمة متجاوبة باستخدام Media Query.

```css
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    height: auto;
  }
}
```

## خلاصة الدرس

خلاصة: تم بناء Mega Menu متجاوبة واحترافية.

- استخدام hover للتفاعل
- تطبيق Grid بسيط بالأعمدة
- دعم الهواتف بـ Media Query
