# انشاء أزرار تنقل جانبية تفاعلية باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_sidenav_buttons.asp

## مقدمة الدرس وأهمية Sidenav

مرحبا بكم في درس إنشاء أزرار تنقل جانبية تفاعلية باستخدام CSS.

- تعلم بناء أزرار تظهر عند المرور بالعربية والإنجليزية
- استخدام خصائص position و transition المتقدمة
- تنظيم الهيكل البرمجي داخل صفحات الويب

## هيكل HTML الخاص بعنصر Sidenav

نبدأ بإنشاء حاوية div مع روابط a لتشكيل عناصر القائمة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div id="mySidenav" class="sidenav">
      <a href="#" id="about">About</a>
      <a href="#" id="blog">Blog</a>
      <a href="#" id="projects">Projects</a>
      <a href="#" id="contact">Contact</a>
    </div>
  </body>
</html>
```

## التنسيق الأساسي للروابط داخل Sidenav

نستخدم position absolute وإزاحة left سالبة لإخفاء الروابط خارج الشاشة.

```css
#mySidenav a {
  position: absolute;
  left: -80px;
  transition: 0.3s;
  padding: 15px;
  width: 100px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 0 5px 5px 0;
}
```

## تفعيل تأثير Hover وعرض العناصر

عند استخدام a:hover تتغير قيمة left إلى الصفر لتظهر العناصر بوضوح.

```css
#mySidenav a:hover {
  left: 0;
}
```

## تخصيص مواقع وألوان كل زر على حدة

نحدد موقع top وخلفية background-color لكل رابط على حدة.

```css
#about {
  top: 20px;
  background-color: #04AA6D;
}
#blog {
  top: 80px;
  background-color: #2196F3;
}
#projects {
  top: 140px;
  background-color: #f44336;
}
#contact {
  top: 200px;
  background-color: #555;
}
```

## أفضل الممارسات والنصائح الهندسية

احرص على استخدام قيم transition دقيقة وتنسيق الزوايا بعناية.

- استخدام transition بسلاسة لضمان تجربة مستخدم ممتازة
- ضبط تدرج الألوان ليتناسب مع هوية الموقع الإلكتروني
- التأكد من التوافقية مع مختلف متصفحات الويب

## خلاصة الدرس ودعوة للتجربة

تعلمنا إنشاء أزرار تنقل جانبية تفاعلية باستخدام CSS وننصح بالتجربة العملية.

- بناء هيكل القائمة الجانبية sidenav بنجاح
- تطبيق التفاعل الحركي بواسطة hover و transition
- راجع الرابط في الوصف للاطلاع على المزيد من الأمثلة
