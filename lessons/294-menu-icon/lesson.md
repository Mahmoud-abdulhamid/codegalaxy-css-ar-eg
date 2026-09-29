# تصميم Menu Icon تفاعلي باستخدام CSS و JavaScript

المصدر: https://www.w3schools.com/howto/howto_css_menu_icon.asp

## مقدمة حول Menu Icon

سنتعلم اليوم كيفية بناء Menu Icon احترافي لمواقع الويب باستخدام CSS و JavaScript.

- بناء أيقونة القائمة بدون مكتبات خارجية
- استخدام CSS للتحكم في المظهر والأبعاد
- إضافة تفاعلية عند النقر باستخدام JavaScript
- تحويل الأيقونة إلى شكل X عند التفعيل

## الهيكل البرمجي للأيقونة

نستخدم ثلاثة عناصر div لتمثيل الأشرطة الأفقية داخل حاوية رئيسية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container" onclick="myFunction(this)">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  </body>
</html>
```

## تنسيق الأشرطة باستخدام CSS

نستخدم CSS لتحديد أبعاد الأشرطة وإضافة تأثير الانتقال السلس.

```css
.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}
```

## تطبيق التحويلات الحركية

نستخدم transform و opacity لإنشاء تأثير التحول إلى شكل X.

```css
.change .bar1 {
  transform: translate(0, 11px) rotate(-45deg);
}
.change .bar2 {
  opacity: 0;
}
.change .bar3 {
  transform: translate(0, -11px) rotate(45deg);
}
```

## التفاعل البرمجي

نستخدم JavaScript لتبديل الـ Class عند النقر.

```javascript
function myFunction(x) {
  x.classList.toggle("change");
}
```

## خلاصة الدرس

استخدموا transition لجعل التحولات سلسة واحترافية.

- استخدام div Elements كأشرطة
- تطبيق transform للتدوير والإزاحة
- استخدام opacity للإخفاء
- استخدام classList.toggle للتبديل
