# CSS Text Spacing Properties

المصدر: https://www.w3schools.com/css/css_text_spacing.asp

## مقدمة في تباعد النصوص

مرحبا بكم في درس جديد من دورة CSS لتعلم كيفية التحكم في تباعد النصوص وتحسين مظهر صفحات الويب.

- التحكم في تباعد الأسطر والكلمات
- تنسيق المسافات بين الحروف
- ضبط إزاحة الفقرات
- التحكم في تدفق النصوص

## خاصية text-indent

تستخدم خاصية text-indent لتحديد إزاحة السطر الأول من الفقرة، وتدعم القيم السالبة والموجبة.

```css
p {
  text-indent: 50px;
}
```

## خاصية letter-spacing

تتحكم خاصية letter-spacing في المسافة بين الحروف، وتدعم القيم السالبة لتقارب الحروف.

```css
h1 {
  letter-spacing: 5px;
}
h2 {
  letter-spacing: -2px;
}
```

## خاصية line-height

تستخدم خاصية line-height لتحديد المسافة بين الأسطر، وهي لا تقبل القيم السالبة.

```css
p.small {
  line-height: 0.8;
}
p.big {
  line-height: 1.8;
}
```

## خاصية word-spacing

تتحكم خاصية word-spacing في المسافة بين الكلمات، وتدعم القيم السالبة والموجبة.

```css
p.one {
  word-spacing: 10px;
}
p.two {
  word-spacing: -2px;
}
```

## خاصية white-space

تحدد خاصية white-space كيفية معالجة المسافات البيضاء، وتستخدم nowrap لمنع التفاف النص.

```css
p {
  white-space: nowrap;
}
```

## خلاصة الدرس

تعلمنا اليوم كيفية استخدام خصائص CSS للتحكم في تباعد النصوص. جربوا هذه الخصائص بأنفسكم لتطوير مهاراتكم.

- text-indent للإزاحة
- letter-spacing للحروف
- line-height للأسطر
- word-spacing للكلمات
- white-space للتدفق
