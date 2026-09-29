# إنشاء تأثير الأيقونة المتراكبة على الصور باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_image_overlay_icon.asp

## مقدمة الدرس

مرحبا بكم في درس جديد حول إنشاء تأثير الأيقونة المتراكبة على الصور عند تمرير المؤشر باستخدام CSS.

- تعلم تصميم تأثيرات تفاعلية لجذاب انتباه مستخدمي الوب
- استخدام تأثيرات hover المتقدمة على الصور
- فهم آلية تراكب العناصر فوق بعضها البعض

## هيكل HTML ومكتبة الأيقونات

نربط مكتبة Font Awesome ونبني هيكل HTML الأساسي الذي يتضمن الحاوية والصورة وعنصر التراكب.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
    <div class="container">
      <img src="img_avatar.png" alt="Avatar" class="image">
      <div class="overlay">
        <a href="#" class="icon" title="User Profile">
          <i class="fa fa-user"></i>
        </a>
      </div>
    </div>
  </body>
</html>
```

## تنسيق الحاوية والصورة المتجاوبة

نحدد موقع الحاوية كمرجع ونضبط الصورة لتكون متجاوبة مع مختلف أحجام الشاشات.

```css
.container {
  position: relative;
  width: 100%;
  max-width: 400px;
}
.image {
  width: 100%;
  height: auto;
}
```

## إعداد طبقة التراكب وتأثير الشفافية

ننشئ طبقة التراكب ونحدد شفافيتها بصفر مع إضافة تأثير انتقال سلس transition.

```css
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  background-color: red;
}
```

## تفعيل التأثير عند تمرير المؤشر

نستخدم المحدد container:hover لزيادة شفافية طبقة التراكب إلى واحد عند تمرير المؤشر.

```css
.container:hover .overlay {
  opacity: 1;
}
```

## توسيط الأيقونة داخل طبقة التراكب

نستخدم خصائص التوضضع وميزة transform translate لتوسيط الأيقونة في منتصف الطبقة بدقة.

```css
.icon {
  color: white;
  font-size: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
```

## تأثير تفاعلي على الأيقونة وتغيير اللون

نضيف تأثير تفاعلي لتغيير لون الأيقونة عند تمرير المؤشر فوقها لتحسين تجربة المستخدم.

```css
/* When you move the mouse over the icon, change color */
.fa-user:hover {
  color: #eee;
}
```

## خلاصة الدرس والممارسة

خلاصة الدرس: تعلمنا تطبيق تأثيرات تراكب الصور والأيقونات الاحترافية باستخدام CSS مع المدرب محمود عبدالحميد.

- استخدام position absolute لتراكب العناصر
- التحكم بالشفافية والتحولات عبر opacity و transition
- توسيط العناصر بدقة تامة باستخدام transform
