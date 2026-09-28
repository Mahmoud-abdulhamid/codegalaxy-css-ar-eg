# CSS Outline Color

المصدر: https://www.w3schools.com/css/css_outline_color.asp

## مقدمة عن خصائص Outline Color في CSS

مرحبا بكم في درس جديد من دورة CSS لتعلم استخدام outline-color وتحديد لون الإطار الخارجي.

- التعرف على خصائص outline-color في CSS
- تحديد لون الإطار الخارجي للعناصر بدقة
- تطبيق تنسيقات متقدمة على صفحات الويب

## القواعد الأساسية لإطارات عناصر الويب

استخدام border و padding مع الفقرات لتوضيح الفرق بين الحدود والإطارات.

```css
p {
  border: 1px solid black;
  padding: 5px;
}
```

## أمثلة الألوان المباشرة مع Outline Style

تطبيق أنواع وألوان مختلفة للإطار الخارجي باستخدام outline-style وoutline-color.

```css
p.ex1 {
  outline-style: solid;
  outline-color: red;
}
p.ex2 {
  outline-style: dotted;
  outline-color: blue;
}
```

## المزيد من أنماط الألوان المباشرة

تطبيق أنماط إضافية مثل outset green و solid invert.

```css
p.ex3 {
  outline-style: outset;
  outline-color: green;
}
p.ex4 {
  outline-style: solid;
  outline-color: invert;
}
```

## استخدام قيم HEX لتحديد الألوان

تحديد لون الإطار الخارجي باستخدام قيم HEX مثل #ff0000.

```css
p.ex1 {
  outline-style: solid;
  outline-color: #ff0000;
}
```

## استخدام قيم RGB لتحديد الألوان

استخدام دالة RGB لتحديد الألوان مثل rgb(255, 0, 0).

```css
p.ex1 {
  outline-style: solid;
  outline-color: rgb(255, 0, 0);
}
```

## استخدام قيم HSL لتحديد الألوان

استخدام قيم HSL لتحديد ألوان الإطار الخارجي باحترافية.

```css
p.ex1 {
  outline-style: solid;
  outline-color: hsl(0, 100%, 50%);
}
```

## خلاصة الدرس وأفضل الممارسات البرمجية

خلاصة استخدام خصائص outline-color وقيم الألوان المختلفة في CSS.

- استخدام الأسماء المباشرة للألوان في outlines
- تطبيق قيم HEX وRGB وHSL المرنة
- مراجعة دورة CSS Colors لمزيد من التفاصيل
