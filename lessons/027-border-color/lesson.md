# التحكم في ألوان الحدود باستخدام CSS

المصدر: https://www.w3schools.com/css/css_border_color.asp

## مقدمة حول border-color

تستخدم خاصية border-color لتحديد لون الحدود الأربعة للعنصر.

- خاصية border-color تتحكم في ألوان الحدود
- يمكن تطبيقها على الجهات الأربع للعنصر
- ترث الخاصية لون العنصر إذا لم يتم تحديدها

## تطبيق ألوان بسيطة على الحدود

تطبيق ألوان مختلفة على عناصر الفقرات باستخدام border-color.

```css
p.one {
  border-style: solid;
  border-color: red;
}
p.two {
  border-style: solid;
  border-color: green;
}
```

## تحديد ألوان لكل جانب

يمكن تمرير حتى أربع قيم لخاصية border-color لتحديد لون كل جانب.

```css
p.one {
  border-style: solid;
  border-color: red green blue yellow;
}
```

## استخدام قيم HEX

استخدام قيم HEX لتحديد لون الحدود بدقة.

```css
p.one {
  border-style: solid;
  border-color: #ff0000;
}
```

## استخدام قيم RGB

استخدام قيم RGB لتحديد لون الحدود.

```css
p.one {
  border-style: solid;
  border-color: rgb(255, 0, 0);
}
```

## استخدام قيم HSL

استخدام قيم HSL لتحديد لون الحدود.

```css
p.one {
  border-style: solid;
  border-color: hsl(0, 100%, 50%);
}
```

## خلاصة الدرس

مارس كتابة الأكواد لتتقن التحكم في ألوان الحدود.

- استخدم border-color لتلوين الحدود
- جرب قيم HEX و RGB و HSL
- طبق ألوانا مختلفة لكل جانب
- راجع دروس CSS Colors للمزيد
