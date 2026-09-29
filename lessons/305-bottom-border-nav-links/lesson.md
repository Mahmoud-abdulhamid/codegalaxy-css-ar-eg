# تصميم شريط تنقل بحد سفلي باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_navbar_border.asp

## مقدمة في أشرطة التنقل

مرحبا بكم في درس تصميم شريط تنقل احترافي باستخدام CSS مع تأثير الحدود السفلية التفاعلية.

- إنشاء شريط تنقل أفقي باستخدام HTML
- تنسيق الروابط باستخدام خصائص CSS
- إضافة تأثير border-bottom عند التفاعل
- تمييز الرابط النشط باستخدام class active

## هيكل شريط التنقل

هيكل HTML يستخدم div كحاوية رئيسية وعناصر a للروابط مع تحديد الرابط النشط عبر class.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="topnav">
      <a href="#home" class="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
  </body>
</html>
```

## تنسيق الحاوية الرئيسية

تنسيق الحاوية topnav باستخدام background-color و overflow لضمان احتواء العناصر.

```css
.topnav {
  background-color: #333;
  overflow: hidden;
}
```

## تنسيق الروابط

تنسيق الروابط داخل شريط التنقل مع إعداد الحدود السفلية الشفافة.

```css
.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border-bottom: 3px solid transparent;
}
```

## تأثير التفاعل والنشاط

استخدام hover و active لإضافة تأثير الحدود السفلية الحمراء عند التفاعل.

```css
.topnav a:hover {
  border-bottom: 3px solid red;
}
.topnav a.active {
  border-bottom: 3px solid red;
}
```

## معاينة النتيجة

معاينة شريط التنقل مع تأثير الحدود السفلية التفاعلية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- شريط تنقل بحدود سفلية -->
    [Home] [News] [Contact]
    (عند التمرير يظهر خط أحمر تحت الرابط)
  </body>
</html>
```

## خلاصة الدرس

خلاصة: استخدام CSS لإنشاء أشرطة تنقل تفاعلية. جربوا الأكواد بأنفسكم لتطوير مهاراتكم.

- استخدام CSS للتحكم في مظهر الروابط
- أهمية border-bottom في التفاعل
- تطبيق class active للروابط النشطة
- شجعناكم على تجربة الأكواد وتطويرها
