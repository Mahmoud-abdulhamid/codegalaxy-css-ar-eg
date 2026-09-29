# إنشاء شريط تنقل سفلي Bottom Navigation باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_bottom_nav.asp

## مقدمة حول شريط التنقل السفلي Bottom Navigation

مرحبا بكم في درس إنشاء شريط تنقل سفلي Bottom Navigation باستخدام CSS.

- أهمية شريط التنقل السفلي في تصميم واجهات الويب الحديثة
- كيفية توجيه المستخدمين بسرعة بين أقسام الموقع المختلفة
- استخدام لغة CSS لتصميم عناصر القائمة وتثبيتها أسفل الصفحة

## هيكلة عناصر HTML لقائمة التنقل

نبدأ بكتابة هيكل HTML لقائمة التنقل السفلية باستخدام عنصر div والروابط.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="navbar">
      <a href="#home" class="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
  </body>
</html>
```

## تثبيت شريط الـ navbar في أسفل الصفحة

تثبيت شريط التنقل في أسفل الصفحة باستخدام position fixed و bottom zero.

```css
.navbar {
  background-color: #333;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}
```

## تنسيق الروابط الداخلية للـ navbar

تنسيق روابط الويب داخل القائمة بتحديد الطفو والمحاذاة والهوامش الداخلية.

```css
.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
```

## إضافة تأثير التفاعل hover على الروابط

إضافة تأثير hover لتغيير ألوان الروابط عند مرور مؤشر الفأرة.

```css
.navbar a:hover {
  background-color: #ddd;
  color: black;
}
```

## تمييز الرابط النشط active link

تخصيص الرابط النشط active لتعيين لون خلفية مميز.

```css
.navbar a.active {
  background-color: #04AA6D;
  color: white;
}
```

## خلاصة الدرس وأفضل الممارسات

خلاصة درس تصميم شريط التنقل السفلي الثابت وأفضل الممارسات البرمجية.

- استخدام position fixed لضمان بقاء الشريط أسفل الشاشة دائما
- تنسيق حالات الروابط العادية و hover و active بعناية
- تجربة الكود وتعديله لتناسب تصاميم مواقع الويب المختلفة
