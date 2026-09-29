# وضع كتل النص فوق الصور باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_image_text_blocks.asp

## مقدمة عن كتل النص فوق الصور

مرحبا بكم في درس وضع كتل النص فوق الصور باستخدام CSS.

- تعلم كيفية وضع نصوص فوق الصور
- استخدام HTML و CSS لتصميم جذاب
- التحكم في تمركز العناصر بدقة

## المفاهيم الأساسية للوضع والتمركز

نستخدم حاوية رئيسية تحمل الصورة والنص معا بقيمة position لـ relative.

- العنصر الحاوي container يحمل الصورة والنص
- استخدام position بمقدار relative للحاوية
- استخدام position بمقدار absolute للنص

## كتابة هيكل HTML للصورة والنص

نكتب هيكل HTML عبر إنشاء حاوية تحتوي على الصورة وعنصر النص.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <img src="nature.jpg" alt="Norway" style="width:100%;">
      <div class="text-block">
        <h4>Nature</h4>
        <p>What a beautiful sunrise</p>
      </div>
    </div>
  </body>
</html>
```

## تنسيق الحاوية في CSS

نضبط الحاوية بخاصية position بقيمة relative لتعمل كإطار مرجعي.

```css
/* Container holding the image and the text */
.container {
  position: relative;
}
```

## تنسيق وتمركز كتلة النص

نحدد موقع كتلة النص باستخدام position بقيمة absolute مع تحديد الإحداثيات.

```css
/* Bottom right text */
.text-block {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}
```

## ضبط الألوان والهوامش الداخلية

نضيف خلفية سوداء ونصا أبيض مع هوامش داخلية لتنسيق الكتلة.

- تطبيق لون خلفية أسود خلف النص
- استخدام نص أبيض لضمان التباين العالي
- ضبط padding لتباعد النصوص عن الحواف

## معاينة المخرجات المرئية في المتصفح

شكل المخرجات النهائي في المتصفح مع ظهور النص فوق الصورة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    +---------------------------------------+
    | Nature |
    | What a beautiful sunrise |
    +---------------------------------------+
  </body>
</html>
```

## خلاصة الدرس ودعوة للتجربة

خلاصة الدرس: استخدام تقنيات التموضع لوضع النصوص فوق الصور.

- استخدام position relative للحاويات
- استخدام position absolute للعناصر المتداخلة
- التحكم في المظهر باستخدام background و padding
