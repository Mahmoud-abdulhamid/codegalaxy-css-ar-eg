# تصميم هيكل صفحات الويب باستخدام CSS

المصدر: https://www.w3schools.com/css/css_website_layout.asp

## مقدمة في تصميم هيكل الويب

تصميم هيكل صفحات الويب يعتمد على تقسيم الصفحة إلى أقسام رئيسية مثل header و navigation menu و footer.

- تقسيم الصفحة إلى أقسام منطقية
- استخدام CSS للتحكم في التخطيط
- أهمية الهيكل في تجربة المستخدم

## تصميم الـ Header

يستخدم الـ header في أعلى الصفحة لعرض اسم الموقع أو الشعار مع تنسيقات CSS بسيطة.

```css
header {
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
}
```

## إنشاء Navigation Bar

نستخدم Flexbox لإنشاء قائمة تنقل أفقية متجاوبة مع تأثيرات hover.

```css
ul.topnav {
  display: flex;
  list-style-type: none;
  background-color: #333;
}
ul.topnav li a {
  display: block;
  color: white;
  padding: 14px 16px;
  text-decoration: none;
}
```

## تخطيط المحتوى باستخدام Flexbox

استخدام Media Queries مع Flexbox لتحويل التخطيط من 3 أعمدة إلى عمود واحد.

```css
@media screen and (max-width: 600px) {
  div.flex-container {
    flex-direction: column;
  }
}
```

## تثبيت الـ Footer

تثبيت الـ footer في أسفل الصفحة باستخدام position: fixed لضمان بقائه مرئيا.

```css
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f1f1f1;
  text-align: center;
}
```

## خلاصة الدرس

استخدم Flexbox و Media Queries لبناء مواقع ويب احترافية ومتجاوبة مع مختلف الشاشات.

- استخدام Flexbox للتحكم في التخطيط
- تطبيق Media Queries للتجاوب
- تثبيت العناصر باستخدام position
- تجربة الأكواد عبر الرابط في الوصف
