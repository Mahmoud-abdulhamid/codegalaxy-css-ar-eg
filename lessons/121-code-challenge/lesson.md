# CSS Navbar Code Challenge

المصدر: https://www.w3schools.com/css/css_challenges_navbar.asp

## مقدمة تحدي Navbar

مرحبا بكم في درس جديد لاختبار مهارات تنسيق Navbar باستخدام CSS وبناء قوائم التنقل.

- اختبار المهارات العملية في لغة CSS
- بناء وتصميم عناصر Navbar باحترافية
- تطبيق القواعد لتنسيق روابط الويب

## أساسيات تصميم Navbar

نحتاج إلى استخدام عناصر HTML المناسبة وتطبيق قواعد CSS لإزالة النقاط وتنسيق الروابط.

- استخدام عناصر ul و li و a للبنية
- إزالة الرموز النقطية الافتراضية للقوائم
- تنسيق الألوان والمسافات الداخلية

## هيكل HTML للقائمة

نكتب هيكل HTML باستخدام عنصر ul وحاضن الروابط ليتم تنسيقها لاحقا بواسطة CSS.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <ul class="navbar">
      <li><a href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </body>
</html>
```

## تنسيق القائمة الأساسي

نطبق قواعد CSS الأولية لإزالة النقاط وتصفير الحوامش الخاصة بعنصر ul.

```css
ul.navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}
```

## جعل القائمة أفقية

نستخدم خاصية float: left أو flexbox على عناصر li لتحويل القائمة إلى الشكل الأفقي.

```css
ul.navbar li {
  float: left;
}
ul.navbar li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
```

## تنسيق تأثيرات Hover

نضيف تأثيرات hover لتغيير لون الخلفية عند مرور مؤشر الفأرة على الروابط.

```css
ul.navbar li a:hover {
  background-color: #111;
}
```

## أفضل الممارسات الهندسية

نراعي أفضل الممارسات مثل التجاوب وتباين الألوان لضمان تجربة مستخدم ممتازة.

- ضمان تجاوب Navbar مع مختلف الشاشات
- اختيار ألوان ذات تباين عالي للقراءة
- استخدام أدوات المطورين لفحص الأكواد

## خلاصة الدرس والدعوة للتجربة

خلاصة الدرس: تعلمنا تنسيق وتحدي Navbar بنجاح. ندعوكم لتجربة الأكواد بأنفسكم.

- ملخص حل تحدي Navbar بـ CSS
- أهمية استخدام float و hover
- تابعوا الدورة لتطوير مهاراتكم
