# بناء قائمة فرعية احترافية باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_subnav.asp

## مقدمة حول القوائم الفرعية

تعلم كيفية إنشاء قائمة تنقل فرعية Subnav احترافية باستخدام CSS.

- القوائم الفرعية تعزز تنظيم محتوى الموقع
- نستخدم CSS للتحكم في التفاعل والظهور
- تعتمد الفكرة على حاوية رئيسية وعناصر منسدلة

## الهيكل البرمجي للقائمة

الهيكل البرمجي يستخدم div كحاويات و button للتفاعل مع القائمة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="navbar">
      <a href="#home">Home</a>
      <div class="subnav">
        <button class="subnavbtn">About</button>
        <div class="subnav-content">
          <a href="#company">Company</a>
          <a href="#team">Team</a>
        </div>
      </div>
    </div>
  </body>
</html>
```

## تنسيق القائمة الرئيسية

تنسيق القائمة الرئيسية باستخدام float و padding لترتيب الروابط.

```css
.navbar {
  overflow: hidden;
  background-color: #333;
}
.navbar a {
  float: left;
  padding: 14px 16px;
  text-decoration: none;
  color: white;
}
```

## منطق القائمة المنسدلة

استخدام display: none و absolute positioning للتحكم في ظهور القائمة.

```css
.subnav-content {
  display: none;
  position: absolute;
  left: 0;
  background-color: red;
  width: 100%;
}
.subnav:hover .subnav-content {
  display: block;
}
```

## تأثيرات التفاعل

إضافة تأثيرات hover لتحسين تجربة المستخدم البصرية.

```css
.navbar a:hover, .subnav:hover .subnavbtn {
  background-color: red;
}
.subnav-content a:hover {
  background-color: #eee;
  color: black;
}
```

## خلاصة الدرس

خلاصة الدرس: أهمية التنظيم البرمجي وتطبيق CSS بشكل صحيح.

- استخدم div كحاوية للعناصر
- تحكم في الظهور عبر display: none و block
- استخدم absolute positioning للمواقع الدقيقة
- طبق hover لتعزيز التفاعل
