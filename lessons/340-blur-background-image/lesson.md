# تصميم خلفية ضبابية باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_blurred_background.asp

## مقدمة حول الخلفيات الضبابية

تعلم كيفية إنشاء خلفية ضبابية جذابة باستخدام CSS لتعزيز تصميم صفحات الويب.

- استخدام CSS لإنشاء تأثيرات بصرية متقدمة
- تطبيق خاصية filter: blur
- تحسين تجربة المستخدم عبر التصميم الجذاب

## هيكل HTML للصفحة

هيكل HTML يتكون من حاوية للصورة وحاوية للنص فوقها.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="bg-image"></div>
    <div class="bg-text">
      <h1>I am John Doe</h1>
      <p>And I'm a Photographer</p>
    </div>
  </body>
</html>
```

## تطبيق تأثير الضبابية

استخدام filter: blur لتطبيق التأثير على عنصر الخلفية.

```css
.bg-image {
  background-image: url("photographer.jpg");
  filter: blur(8px);
  -webkit-filter: blur(8px);
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

## تنسيق النص في المنتصف

استخدام position و transform لتوسيط النص فوق الخلفية.

```css
.bg-text {
  background-color: rgba(0,0,0, 0.4);
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}
```

## معاينة النتيجة

النتيجة النهائية: خلفية ضبابية مع نص متمركز بوضوح.

```text
[ Blurred Background Image ]
[   I am John Doe    ]
[ Photographer Text  ]
```

## ملاحظات تقنية هامة

نصائح حول التوافقية مع المتصفحات.

- تأثير blur لا يدعم المتصفحات القديمة
- استخدام -webkit-prefix للتوافق
- اختبار التصميم في متصفحات حديثة

## خاتمة الدرس

شكرا لمتابعتكم، جربوا الأكواد بأنفسكم!

- راجع الأكواد من الرابط
- جرب تغيير قيم blur
- استمر في التعلم
