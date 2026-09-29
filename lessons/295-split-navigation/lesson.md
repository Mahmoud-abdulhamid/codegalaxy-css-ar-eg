# إنشاء شريط تنقل مقسوم باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_topnav_split.asp

## مقدمة عن شريط التنقل المقسوم

مرحبا بكم في درس جديد لتعلم إنشاء شريط تنقل مقسوم باستخدام CSS.

- تعلم بناء شريط تنقل احترافي
- تقسيم الروابط في يمين ويسار الشريط
- تحسين تجربة المستخدم في مواقع الويب

## هبكلة HTML لشريط التنقل

نكتب هيكل HTML لعناصر شريط التنقل مع تحديد الروابط الأساسية ورابط التقسيم.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="topnav">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about" class="split">Help</a>
    </div>
  </body>
</html>
```

## تنسيق الحاوية الرئيسية

ننسق الحاوية الرئيسية باستخدام لون خلفية داكن وخاصية overflow.

```css
.topnav {
  background-color: #333;
  overflow: hidden;
}
```

## تنسيق روابط التنقل

نحدد خصائص الروابط مثل التموضع العائم لليسار والألوان والهوامش الداخلية.

```css
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
```

## إضافة تأثيرات الحوم HOVER

نضيف تأثير hover لتغيير ألوان الخلفية والنص عند مرور المؤشر.

```css
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
```

## تفصيل الرابط المقسوم يمينا

نستخدم float right ولون خلفية مميز لعنصر split لدفعه إلى يمين الشريط.

```css
.topnav a.split {
  float: right;
  background-color: #04AA6D;
  color: white;
}
```

## خلاصة الدرس والنتيجة

خلاصة الدرس: إنشاء شريط تنقل مقسوم احترافي باستخدام خصائص float في CSS.

- تطبيق ناجح لتقسيم شريط التنقل يمينا ويسارا
- استخدام float left و float right بفعالية
- تصميم مرن وجذاب باستخدام CSS الصافي
