# CSS Structural Pseudo-classes

المصدر: https://www.w3schools.com/css/css_pseudo_classes_structural.asp

## مقدمة في Structural Pseudo-classes

تسمح لنا Structural Pseudo-classes باختيار العناصر بناء على موقعها في شجرة المستند.

- تعتمد على موقع العنصر في هيكل HTML
- تسهل استهداف العناصر دون الحاجة لـ class أو id
- تزيد من مرونة التنسيق في صفحات الويب

## فهم :first-child

يستخدم :first-child لاستهداف العنصر الذي يمثل الابن الأول لعنصر أب.

```css
p:first-child {
  color: blue;
}
```

## استهداف العناصر المتداخلة

يمكن دمج Selectors للتحكم الدقيق في العناصر المتداخلة.

```css
/* استهداف أول em داخل p */
p em:first-child {
  color: blue;
}
/* استهداف em داخل أول p */
p:first-child em {
  color: blue;
}
```

## استخدام :lang()

يستخدم :lang() لاستهداف العناصر بناء على قيمة Attribute lang.

```css
q:lang(no) {
  quotes: "~" "~";
}
```

## مثال عملي متكامل

مثال يوضح استخدام :lang() لتنسيق علامات الاقتباس.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      q:lang(no) {
        quotes: "~" "~";
      }
    </style>
  </head>
  <body>
    <p>Some text <q lang="no">Quote</q></p>
  </body>
</html>
```

## معاينة النتيجة

تظهر النتيجة في المتصفح بتنسيق مخصص بناء على اللغة.

## خلاصة الدرس

استخدم Structural Pseudo-classes لتعزيز مرونة وقوة تنسيق صفحات الويب الخاصة بك.

- استخدم :first-child لاستهداف العناصر الأولى
- استخدم :lang() لتخصيص التنسيق حسب اللغة
- راجع CSS Pseudo-classes Reference للمزيد
- محمود عبدالحميد يتمنى لكم رحلة تعلم ممتعة
