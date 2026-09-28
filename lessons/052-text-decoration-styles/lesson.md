# تنسيق خطوط الزينة في CSS

المصدر: https://www.w3schools.com/css/css_text_decoration_styles.asp

## مقدمة حول تنسيق خطوط الزينة

مرحبا بكم في درس تنسيق خطوط الزينة باستخدام CSS.

- التحكم في نمط خط الزينة
- تعديل سمك الخط
- استخدام خاصية الاختصار
- إزالة التسطير من الروابط

## التحكم في نمط خط الزينة

تستخدم خاصية text-decoration-style لتحديد نمط خط الزينة.

```css
h1 {
  text-decoration-style: solid;
}
h2 {
  text-decoration-style: double;
}
h3 {
  text-decoration-style: dotted;
}
p.ex1 {
  text-decoration-style: dashed;
}
p.ex2 {
  text-decoration-style: wavy;
}
```

## تعديل سمك خط الزينة

تستخدم خاصية text-decoration-thickness للتحكم في سمك الخط.

```css
h1 {
  text-decoration-thickness: auto;
}
h2 {
  text-decoration-thickness: 5px;
}
h3 {
  text-decoration-thickness: 25%;
}
p {
  text-decoration-thickness: 5px;
}
```

## خاصية الاختصار text-decoration

خاصية الاختصار text-decoration تجمع كافة خصائص الزينة.

```css
h1 {
  text-decoration: underline;
}
h2 {
  text-decoration: underline red;
}
h3 {
  text-decoration: underline red double;
}
p {
  text-decoration: underline red double 5px;
}
```

## إزالة التسطير من الروابط

استخدم text-decoration: none لإزالة التسطير من الروابط.

```css
a {
  text-decoration: none;
}
```

## خلاصة الدرس

شكرا لمتابعتكم، جربوا الأكواد بأنفسكم لتطوير مهاراتكم.

- راجعنا text-decoration-style
- طبقنا text-decoration-thickness
- استخدمنا خاصية الاختصار
- تعلمنا إزالة التسطير من الروابط
