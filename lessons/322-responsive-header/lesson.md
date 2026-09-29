# بناء Header متجاوب باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_responsive_header.asp

## مقدمة حول Responsive Header

مرحبا بكم في درس تصميم Responsive Header متجاوب مع مختلف شاشات الويب.

- تصميم ترويسة متجاوبة مع كافة الأجهزة
- تغيير التصميم بناء على حجم شاشة المتصفح
- تحسين تجربة المستخدم عبر شاشات الويب المختلفة

## هيكل الـ HTML للترويسة

نكتب هيكل HTML للـ header مع روابط التنقل وشعار الشركة logo.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="header">
      <a href="#default" class="logo">CompanyLogo</a>
      <div class="header-right">
        <a class="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  </body>
</html>
```

## تنسيق الحاوية الرئيسية للترويسة

ننسق حاوية الـ header بـ overflow و background-color ولون رمادي هادئ.

```css
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}
```

## تنسيق روابط التنقل داخل الترويسة

نحدد خصائص روابط الـ header مثل float وخاصية text-decoration وfont-size.

```css
.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}
```

## تنسيق الشعار والرابط النشط

ننسق الشعار بـ font-weight واجبار الرابط النشط بلون خلفية dodgerblue.

```css
.header a.logo {
  font-size: 25px;
  font-weight: bold;
}
.header a.active {
  background-color: dodgerblue;
  color: white;
}
```

## تأثيرات المرور وخاصية اليمين

نضيف تأثير hover وندفع مجموعة header-right إلى جهة اليمين بـ float.

```css
.header a:hover {
  background-color: #ddd;
  color: black;
}
.header-right {
  float: right;
}
```

## تطبيق Media Queries للتجاوب

نستخدم Media Queries لإعادة ترتيب الروابط فوق بعضها عند عرض 500px أو أقل.

```css
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
}
```

## خلاصة الدرس وتجربة الأكواد

إلى هنا نختتم الدرس. نلتقي في دروس قادمة من دورة CSS مع المدرب محمود عبدالحميد.

- تلخيص خطوات بناء ترويسة متجاوبة
- أهمية استخدام Media Queries للشاشات الصغيرة
- تابعوا المزيد من دروس تصميم الويب
