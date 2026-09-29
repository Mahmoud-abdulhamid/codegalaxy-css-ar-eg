# تصميم قائمة جانبية ثابتة باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp

## مقدمة حول القائمة الجانبية الثابتة

سنتعلم اليوم كيفية إنشاء قائمة جانبية ثابتة Fixed Sidebar باستخدام CSS لتحسين تجربة المستخدم في مواقع الويب.

- القائمة الجانبية الثابتة تبقى في مكانها عند التمرير
- تستخدم خاصية position: fixed للتحكم في التموضع
- تعد عنصرا أساسيا في تصميم واجهات المستخدم الحديثة

## الهيكل البرمجي للقائمة الجانبية

نستخدم div بكلاس sidenav لاحتواء الروابط، و div بكلاس main لاحتواء محتوى الصفحة الرئيسي لتنظيم العناصر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="sidenav">
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
    <div class="main">
      <p>Main content goes here</p>
    </div>
  </body>
</html>
```

## تنسيق القائمة باستخدام CSS

نستخدم position: fixed لتثبيت القائمة، مع ضبط top و left على صفر، و z-index لضمان ظهورها فوق العناصر الأخرى.

```css
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}
```

## تنسيق الروابط والمحتوى الرئيسي

ننسق الروابط داخل sidenav ونضيف تأثير hover، ونضبط margin-left لعنصر main ليتناسب مع عرض القائمة الجانبية.

```css
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}
.main {
  margin-left: 160px;
  padding: 0px 10px;
}
```

## الاستجابة للشاشات الصغيرة

نستخدم Media Queries لضبط حجم الخط والتباعد في القائمة الجانبية عند الشاشات التي يقل طولها عن 450 بيكسل.

```css
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
```

## خلاصة الدرس

لقد تعلمنا كيفية بناء قائمة جانبية ثابتة مع مراعاة التجاوب وتنسيق المحتوى الرئيسي. جربوا الأكواد بأنفسكم لتطوير مهاراتكم.

- استخدام position: fixed لتثبيت القائمة
- ضبط margin-left للمحتوى الرئيسي لتجنب التداخل
- استخدام Media Queries لضمان تجاوب التصميم
- تطبيق تأثيرات hover لتحسين التفاعل
