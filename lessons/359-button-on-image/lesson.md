# تصميم زر فوق صورة باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_button_on_image.asp

## مقدمة حول وضع زر فوق صورة

سنتعلم اليوم كيفية وضع Button فوق صورة بطريقة احترافية ومنسقة باستخدام CSS.

- استخدام CSS للتحكم في تموضع العناصر
- بناء واجهات تفاعلية وجذابة
- تطبيق تقنيات التموضع المطلق والنسبي

## الهيكل البرمجي للصفحة

نستخدم div كحاوية رئيسية تضم الصورة والزر للتحكم في تموضعهما.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <img src="img_snow.jpg" alt="Snow">
      <button class="btn">Button</button>
    </div>
  </body>
</html>
```

## تنسيق الحاوية والصورة

نضبط الحاوية على position: relative ونضمن استجابة الصورة للشاشات.

```css
.container {
  position: relative;
  width: 50%;
}
.container img {
  width: 100%;
  height: auto;
}
```

## تنسيق الزر وتموضعه

نستخدم position: absolute و transform لضبط الزر في منتصف الصورة.

```css
.container .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
}
```

## إضافة تأثير التفاعل

نستخدم hover لتغيير لون الزر عند تمرير الفأرة فوقه.

```css
.container .btn:hover {
  background-color: black;
}
```

## خلاصة الدرس

تذكروا أهمية position: relative للحاوية و absolute للعناصر الداخلية.

- الحاوية يجب أن تكون relative
- الزر يجب أن يكون absolute
- استخدام transform للتوسيط الدقيق
- تطبيق hover لتحسين تجربة المستخدم
