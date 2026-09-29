# CSS Image Overlay Zoom Effect

المصدر: https://www.w3schools.com/howto/howto_css_image_overlay_zoom.asp

## مقدمة حول تأثير Overlay Zoom

سنتعلم اليوم كيفية إنشاء تأثير Image Overlay Zoom الجمالي باستخدام CSS.

- تأثير بصري تفاعلي عند Hover
- يعتمد على خاصية transform و scale
- يستخدم في معارض الصور والمواقع الحديثة

## الهيكل البرمجي للـ Overlay

نستخدم حاوية container تضم الصورة وعنصر overlay الذي يحتوي على النص.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <img src="img_avatar.png" alt="Avatar" class="image">
      <div class="overlay">
        <div class="text">Hello World</div>
      </div>
    </div>
  </body>
</html>
```

## تنسيق الـ Container والـ Image

نضبط الحاوية كمرجع نسبي ونجعل الصورة متجاوبة مع حجم الحاوية.

```css
.container {
  position: relative;
  width: 50%;
}
.image {
  width: 100%;
  height: auto;
}
```

## إعداد الـ Overlay وتأثير التكبير

نستخدم transform: scale(0) لإخفاء الـ overlay ثم نغيره إلى 1 عند الـ hover.

```css
.overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #008CBA;
  transform: scale(0);
  transition: .3s ease;
}
.container:hover .overlay {
  transform: scale(1);
}
```

## تنسيق النص داخل الـ Overlay

نستخدم تقنية التوسيط المطلق لتمركز النص داخل الـ overlay.

```css
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
```

## خلاصة الدرس

قم بتجربة الكود وتعديل الخصائص لتناسب مشروعك الخاص.

- استخدام position للتحكم في المواقع
- تطبيق transform للتحجيم والتوسيط
- استخدام transition للحركة الانسيابية
- راجع CSS Images Tutorial للمزيد
