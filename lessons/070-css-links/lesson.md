# CSS Styling Links

المصدر: https://www.w3schools.com/css/css_link.asp

## مقدمة في تنسيق الروابط

مرحبا بكم في درس تنسيق الروابط باستخدام CSS.

- تنسيق الروابط باستخدام CSS
- استخدام خصائص مثل color و background-color
- التحكم في مظهر الروابط عبر حالاتها المختلفة

## تنسيق الروابط الأساسي

تنسيق الروابط باستخدام خصائص CSS الأساسية.

```css
a {
  color: hotpink;
  background-color: yellow;
  font-weight: bold;
}
```

## حالات الروابط الأربع

التعرف على حالات الروابط الأربع في CSS.

## تطبيق التنسيق حسب الحالة

تطبيق ألوان مختلفة لكل حالة من حالات الروابط.

```css
a:link {
  color: red;
}
a:visited {
  color: green;
}
a:hover {
  color: hotpink;
}
a:active {
  color: blue;
}
```

## إزالة التسطير

استخدام text-decoration للتحكم في تسطير الروابط.

```css
a:link, a:visited {
  text-decoration: none;
}
a:hover, a:active {
  text-decoration: underline;
}
```

## تغيير لون الخلفية

تغيير لون خلفية الروابط بناء على الحالة.

```css
a:link {
  background-color: yellow;
}
a:visited {
  background-color: cyan;
}
a:hover {
  background-color: lightgreen;
}
a:active {
  background-color: hotpink;
}
```

## خلاصة الدرس

خلاصة: تعلم تنسيق الروابط باحترافية.

- استخدام CSS لتنسيق الروابط
- فهم حالات الروابط الأربع
- التحكم في التسطير والخلفية
- تجربة الأكواد عبر الرابط المرفق
