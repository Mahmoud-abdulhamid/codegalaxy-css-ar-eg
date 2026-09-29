# How TO - Change Background on Scroll

المصدر: https://www.w3schools.com/howto/howto_css_bg_change_scroll.asp

## مقدمة الدرس وأهمية تغيير الخلفية عند التمرير

مرحبا بكم في درس جديد حول كيفية تغيير صور الخلفية عند التمرير باستخدام CSS.

- تعلم كيفية تغيير صور الخلفية عند التمرير
- تحسين تجربة المستخدم عبر تأثيرات بصرية متقدمة
- استخدام خصائص CSS الحديثة لتصميم سلس

## بنية HTML لصفحة التمرير والخلفيات المتعددة

نكتب عناصر HTML المتعددة مع أصناف لربط كل قسم بصورة خلفية مستقلة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="bg-image img1"></div>
    <div class="bg-image img2"></div>
    <div class="bg-image img3"></div>
    <div class="bg-image img4"></div>
    <div class="bg-image img5"></div>
    <div class="bg-image img6"></div>
    <div class="bg-text">TEXT</div>
  </body>
</html>
```

## إعدادات الهيكل الأساسي وخصائص Box Sizing

نضبط ارتفاع الصفحة الكامل ونلغي الهوامش ونفعل خاصية box-sizing للجميع.

```css
body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
* {
  box-sizing: border-box;
}
```

## تنسيق صنف الخلفيات وضبط الأبعاد والتموضع

نحدد خصائص الأبعاد والموضع والتغطية لصنف الخلفيات المشترك.

```css
.bg-image {
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

## تخصيص صور الخلفيات الفردية للأصناف المختلفة

نربط كل صنف من img1 إلى img6 بصورة خلفية مميزة عبر url.

```css
.img1 {
  background-image: url("img_snow.jpg");
}
.img2 {
  background-image: url("img_girl.jpg");
}
.img3 {
  background-image: url("img_lights.jpg");
}
.img4 {
  background-image: url("img_nature.jpg");
}
.img5 {
  background-image: url("img_forest.jpg");
}
.img6 {
  background-image: url("img_woods.jpg");
}
```

## تنسيق النصوص الثابتة وتطبيق الشفافية والتحويلات

نثبت النص في منتصف الشاشة ونضيف خلفية شبه شفافة وتوسيطا دقيقا.

```css
.bg-text {
  background-color: rgba(0,0,0, 0.4);
  color: white;
  font-weight: bold;
  font-size: 80px;
  border: 10px solid #f1f1f1;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 300px;
  padding: 20px;
  text-align: center;
}
```

## خلاصة الدرس ودعوة للتجربة العملية

ملخص شامل لدرس تغيير الخلفيات عند التمرير ودعوة لتطبيق الأكواد.

- استخدام خلفيات متعددة تتغير عند التمرير
- تثبيت العناصر والنصوص بالخاصية fixed
- التحكم في الشفافية والمظهر الاحترافي للموقع
