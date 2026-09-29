# إنشاء قائمة تنقل بتصميم Pill Navigation باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_pill_nav.asp

## مقدمة حول Pill Navigation

تعلم كيفية إنشاء قائمة تنقل بتصميم Pill Navigation باستخدام CSS.

- تصميم قوائم تنقل عصرية وجميلة
- استخدام CSS لتنسيق الروابط والأزرار
- تحسين تجربة المستخدم في تصفح الويب

## هيكل HTML لقائمة التنقل

بناء هيكل HTML باستخدام div و a tags لإنشاء عناصر القائمة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="pill-nav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  </body>
</html>
```

## تنسيق الروابط الأساسية

تنسيق روابط الـ Pill Navigation عبر خصائص CSS الأساسية.

```css
.pill-nav a {
  display: inline-block;
  color: black;
  text-align: center;
  padding: 14px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 5px;
}
```

## تأثير المرور بالموءشر hover

تغيير لون خلفية الرابط عند المرور فوقه باستخدام hover state.

```css
.pill-nav a:hover {
  background-color: #ddd;
  color: black;
}
```

## تنسيق الرابط النشط active

تمييز الرابط الحالي أو النشط باستخدام class active.

```css
.pill-nav a.active {
  background-color: dodgerblue;
  color: white;
}
```

## إنشاء قائمة تنقل عمودية Vertical Pill Navigation

تحويل قائمة التنقل إلى الشكل العمودي باستخدام display block.

```css
.pill-nav-vertical a {
  display: block;
  /* باقي التنسيقات السابقة */
}
```

## خلاصة الدرس

خلاصة درس تصميم قوائم التنقل بتصميم Pill Navigation.

- تصميم قوائم أفقية وعمودية مرنة
- استخدام تأثيرات hover و active باحترافية
- تطبيق خصائص CSS لبناء واجهات ويب جذابة
