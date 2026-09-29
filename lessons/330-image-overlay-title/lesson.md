# إنشاء تأثير Image Overlay Title في CSS

المصدر: https://www.w3schools.com/howto/howto_css_image_overlay_title.asp

## مقدمة الدرس

مرحبا بكم في درس إنشاء تأثير Image Overlay Title باستخدام CSS.

- تعلم إنشاء تأثير Image Overlay Title
- إظهار النصوص والعناوين فوق الصور عند المرور
- استخدام خصائص CSS المتقدمة والحديثة

## هيكل HTML للصفحة

نبدأ ببناء هيكل HTML باستخدام container يحوي الصورة ونص الـ overlay.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <img src="img_avatar.png" alt="Avatar" class="image">
      <div class="overlay">My Name is John</div>
    </div>
  </body>
</html>
```

## تنسيق الحاوية الرئيسية Container

نضبط خاصية position بقيمة relative للحاوية container.

```css
* {
  box-sizing: border-box
}
.container {
  position: relative;
  width: 50%;
  max-width: 300px;
}
```

## تنسيق الصورة وجعلها مرنة

نجعل الصورة متجاوبة بضبط العرض بنسبة مئوية والارتفاع التلقائي.

```css
.image {
  display: block;
  width: 100%;
  height: auto;
}
```

## تنسيق عنصر الـ Overlay

نحدد موقع overlay بالأسفل مع خلفية شفافة وتأثير انتقال سلس.

```css
.overlay {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  transition: .5s ease;
  opacity: 0;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}
```

## تفعيل تأثير الـ Hover

نغير قيمة opacity إلى واحد عند التمرير لإظهار النص بسلاسة.

```css
.container:hover .overlay {
  opacity: 1;
}
```

## خلاصة الدرس

خلاصة الدرس: دمج position و transition و opacity لتأثيرات احترافية.

- استخدام position absolute و relative لتمركز دقيق
- التحكم في الشفافية عبر opacity و rgba
- إضافة حركات انتقالية سلسة بواسطة transition
