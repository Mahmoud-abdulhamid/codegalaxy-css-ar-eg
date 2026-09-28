# التحكم في شفافية العناصر باستخدام CSS

المصدر: https://www.w3schools.com/css/css_image_transparency.asp

## مقدمة حول خاصية opacity

تعد خاصية opacity من أهم الخصائص في CSS للتحكم في درجة شفافية العناصر.

- خاصية opacity تحدد درجة الشفافية
- تتراوح القيم من 0.0 إلى 1.0
- القيمة 1.0 تعني عنصر غير شفاف تماما
- القيمة 0.0 تعني عنصر شفاف كليا

## تطبيق خاصية opacity على الصور

تطبيق بسيط لخاصية opacity على عنصر img لجعل الصورة شبه شفافة.

```css
img {
  opacity: 0.5;
}
```

## تأثير الشفافية مع :hover

استخدام :hover لتغيير الشفافية عند مرور الفأرة فوق العنصر.

```css
img {
  opacity: 0.5;
}
img:hover {
  opacity: 1.0;
}
```

## مشكلة وراثة الشفافية

تنبيه: خاصية opacity تجعل العناصر الأبناء شفافة أيضا مما يؤثر على وضوح النصوص.

```css
div {
  opacity: 0.3;
}
```

## الحل الاحترافي باستخدام RGBA

استخدام RGBA للتحكم في شفافية الخلفية دون التأثير على محتوى العنصر.

```css
div {
  background: rgba(4, 170, 109, 0.3);
}
```

## مثال عملي متكامل

مثال كامل يوضح كيفية بناء صندوق شفاف يحتوي على نص واضح.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      div.transbox {
        background-color: rgba(255, 255, 255, 0.6);
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div class="background">
      <div class="transbox">
        <p>This is some text.</p>
      </div>
    </div>
  </body>
</html>
```

## خلاصة الدرس

خلاصة: استخدم opacity للشفافية العامة، وRGBA للشفافية المخصصة للخلفيات.
