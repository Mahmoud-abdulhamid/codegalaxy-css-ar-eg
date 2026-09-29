# تصميم نموذج تسجيل دخول فوق صورة باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_form_on_image.asp

## مقدمة حول دمج النماذج مع الصور

تعلم كيفية إضافة Form فوق صورة بعرض كامل للصفحة باستخدام CSS.

- استخدام CSS للتحكم في خلفية الصفحة
- وضع النموذج فوق الصورة باستخدام position
- تحسين تجربة المستخدم عبر التنسيق المرئي

## هيكلة الـ HTML للنموذج

هيكلة HTML تتضمن div للحاوية وForm للبيانات.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="bg-img">
      <form action="/action_page.php" class="container">
        <h1>Login</h1>
        <label for="email"><b>Email</b></label>
        <input type="text" name="email" required>
        <label for="psw"><b>Password</b></label>
        <input type="password" name="psw" required>
        <button type="submit" class="btn">Login</button>
      </form>
    </div>
  </body>
</html>
```

## تنسيق الحاوية والصورة

تنسيق الصورة الخلفية باستخدام background-size وposition.

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

## تموضع النموذج فوق الصورة

استخدام position absolute لتموضع النموذج فوق الصورة.

```css
.container {
  position: absolute;
  right: 0;
  margin: 20px;
  max-width: 300px;
  padding: 16px;
  background-color: white;
}
```

## تنسيق حقول الإدخال

تنسيق حقول الإدخال لتكون بعرض كامل وتفاعلية.

```css
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  border: none;
  background: #f1f1f1;
}
input:focus {
  background-color: #ddd;
  outline: none;
}
```

## تنسيق زر الإرسال

تنسيق زر الإرسال مع تأثير hover.

```css
.btn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
.btn:hover {
  opacity: 1;
}
```

## خلاصة الدرس

خلاصة: استخدام CSS لدمج النماذج مع الصور بشكل احترافي.

- استخدام position absolute للتموضع
- تنسيق الحقول بـ width 100
- إضافة تفاعل hover للأزرار
- تطبيق background-size cover للصور
