# CSS Inheritance

المصدر: https://www.w3schools.com/css/css_inheritance.asp

## مقدمة في CSS Inheritance

مفهوم CSS Inheritance يحدد سلوك الخصائص عند عدم تعيين قيم لها على العناصر.

- الـ Inheritance هو انتقال قيم الخصائص من العنصر الأب إلى الابن
- الخصائص إما أن تكون Inherited أو Non-inherited
- تساعد هذه الميزة في الحفاظ على تناسق التصميم

## الخصائص القابلة للتوريث

الخصائص المتعلقة بالنص مثل color و font-size يتم توريثها افتراضيا.

- مفهوم color
- مفهوم font-family
- مفهوم font-size
- مفهوم line-height
- مفهوم text-align

## مثال على التوريث

العنصر strong يرث خصائص النص من العنصر الأب p.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      p {
        color: blue;
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <p>This is a <strong>important</strong> text.</p>
  </body>
</html>
```

## الخصائص غير القابلة للتوريث

خصائص الـ Box Model مثل border و margin لا يتم توريثها افتراضيا.

- مفهوم border
- مفهوم background
- مفهوم margin
- مفهوم padding
- مفهوم width / height

## مثال على عدم التوريث

العنصر strong لن يظهر له border لأن الخاصية لا تورث.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      p {
        border: 1px solid red;
      }
    </style>
  </head>
  <body>
    <p>This is a <strong>important</strong> text.</p>
  </body>
</html>
```

## استخدام الـ inherit keyword

كلمة inherit تجبر العنصر على توريث قيمة الخاصية من الأب.

```css
strong {
  border: inherit;
}
```

## خلاصة الدرس

استخدم inherit للتحكم الكامل في توريث الخصائص.

- الخصائص النصية تورث افتراضيا
- خصائص الـ Layout لا تورث افتراضيا
- استخدم inherit لفرض التوريث يدويا
