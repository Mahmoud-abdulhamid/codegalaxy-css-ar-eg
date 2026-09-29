# فهم CSS Specificity

المصدر: https://www.w3schools.com/css/css_specificity.asp

## مقدمة في CSS Specificity

مفهوم CSS Specificity هو خوارزمية تحدد أي نمط سيتم تطبيقه على العنصر عند وجود تعارض.

- CSS Specificity تحدد الأولوية عند تكرار القواعد
- القاعدة ذات الأولوية الأعلى هي التي تفوز
- تؤثر هذه الخوارزمية على مظهر صفحات الويب

## مثال على Selector بسيط

عند استخدام Selector بسيط مثل p، يتم تطبيق النمط المحدد مباشرة على العنصر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```

## أولوية الـ Class Selector

الـ Class Selector يمتلك أولوية أعلى من الـ Element Selector.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      .test {
        color: green;
      }
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p class="test">Hello World!</p>
  </body>
</html>
```

## أولوية الـ ID Selector

الـ ID Selector يتفوق في الأولوية على الـ Class والـ Element.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      #demo {
        color: blue;
      }
      .test {
        color: green;
      }
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p id="demo" class="test">Hello World!</p>
  </body>
</html>
```

## قوة الـ Inline Style

الـ Inline Style يمتلك أعلى أولوية ويتجاوز أي قواعد أخرى.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      #demo {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p id="demo" style="color: pink;">Hello World!</p>
  </body>
</html>
```

## خلاصة الدرس

ترتيب الأولوية: Element < Class < ID < Inline Style.

- Element Selector: أولوية منخفضة
- Class Selector: أولوية متوسطة
- ID Selector: أولوية عالية
- Inline Style: أولوية قصوى
