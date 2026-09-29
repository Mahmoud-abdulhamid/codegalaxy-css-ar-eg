# تصميم شريط تنقل بمركزية العناصر باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_topnav_centered.asp

## مقدمة في تصميم شريط التنقل

سنتعلم اليوم كيفية إنشاء شريط تنقل احترافي يحتوي على روابط مركزية باستخدام CSS.

- إنشاء هيكل HTML لشريط التنقل
- استخدام CSS لتمركز العناصر
- تنسيق الروابط وتأثيرات الـ hover
- ضمان تجاوب التصميم مع الهواتف

## هيكل الـ HTML لشريط التنقل

نستخدم div كحاوية رئيسية مع كلاسات مخصصة لتوزيع العناصر داخل شريط التنقل.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="topnav">
      <div class="topnav-centered">
        <a href="#home" class="active">Home</a>
      </div>
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

## تنسيق الحاوية والروابط

نضبط الخصائص الأساسية للحاوية والروابط لضمان مظهر متناسق.

```css
.topnav {
  position: relative;
  background-color: #333;
  overflow: hidden;
}
.topnav a {
  float: left;
  color: #f2f2f2;
  padding: 14px 16px;
  text-decoration: none;
}
```

## تمركز العنصر في المنتصف

نستخدم تقنية التحويل لتمركز الرابط بدقة في منتصف شريط التنقل.

```css
.topnav-centered a {
  float: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## تنسيق العناصر اليمنى

نستخدم float: right لنقل مجموعة الروابط إلى جهة اليمين.

```css
.topnav-right {
  float: right;
}
```

## التجاوب مع الشاشات الصغيرة

نستخدم Media Queries لجعل شريط التنقل متجاوبا على الشاشات الصغيرة.

```css
@media screen and (max-width: 600px) {
  .topnav a, .topnav-right {
    float: none;
    display: block;
  }
}
```

## معاينة النتيجة

النتيجة النهائية: شريط تنقل بمركزية العناصر مع توزيع متوازن للروابط.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    [ Home ] [ News ] [ Contact ] [ Search ] [ About ]
  </body>
</html>
```

## خلاصة الدرس

شكرا لمتابعتكم. جربوا الأكواد بأنفسكم وطوروا مهاراتكم في CSS.

- استخدام position: absolute للتمركز
- تطبيق float للتحكم في التوزيع
- أهمية Media Queries للتجاوب
- استمروا في الممارسة والتعلم
