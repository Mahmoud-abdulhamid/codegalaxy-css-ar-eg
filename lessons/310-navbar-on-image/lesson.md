# تصميم قائمة تنقل فوق صورة باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_navbar_image.asp

## مقدمة حول دمج القوائم مع الصور

مرحبا بكم في درس تصميم قائمة تنقل فوق صورة باستخدام CSS.

- دمج العناصر المرئية مع القوائم
- استخدام CSS للتحكم في التموضع
- تحسين تجربة المستخدم في صفحات الويب

## الهيكل البرمجي للصفحة

هيكل HTML يتكون من حاوية للصورة وحاوية للقائمة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="bg-img">
      <div class="container">
        <div class="topnav">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  </body>
</html>
```

## تنسيق الصورة الخلفية

تنسيق الصورة الخلفية باستخدام background-size و position.

```css
.bg-img {
  background-image: url("img_nature.jpg");
  min-height: 380px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
```

## تموضع القائمة داخل الصورة

استخدام position absolute لتثبيت القائمة فوق الصورة.

```css
.container {
  position: absolute;
  margin: 20px;
  width: auto;
}
```

## تنسيق روابط القائمة

تنسيق روابط القائمة باستخدام float و padding.

```css
.topnav {
  overflow: hidden;
  background-color: #333;
}
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
```

## إضافة تأثير التفاعل

استخدام hover لإضافة تأثير تفاعلي عند مرور الفأرة.

```css
.topnav a:hover {
  background-color: #ddd;
  color: black;
}
```

## معاينة النتيجة النهائية

النتيجة النهائية: قائمة تنقل تفاعلية فوق صورة.

```text
[ Home ] [ News ] [ Contact ] [ About ]
---------------------------------------
|                                     |
|          صورة الخلفية الطبيعية        |
|                                     |
```

## خلاصة الدرس

خلاصة: استخدم position و CSS لتصميم واجهات احترافية.

- استخدام position للتحكم في الطبقات
- تنسيق القوائم الأفقية بـ float
- تطبيق تأثيرات hover التفاعلية
- تجربة الأكواد عبر الرابط في الوصف
