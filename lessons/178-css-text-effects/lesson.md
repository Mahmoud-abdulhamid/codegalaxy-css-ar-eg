# CSS Text Effects

المصدر: https://www.w3schools.com/css/css3_text_effects.asp

## مقدمة في تأثيرات النصوص

سنتعلم اليوم كيفية التحكم في النصوص الفائضة ومعالجة الكلمات الطويلة وتغيير اتجاه الكتابة في صفحات الويب.

- التحكم في overflow النصوص
- تنسيق تكسير الكلمات الطويلة
- تغيير اتجاه النص عبر writing-mode

## خاصية text-overflow

تتطلب خاصية text-overflow ضبط white-space على nowrap و overflow على hidden لتعمل بشكل صحيح.

```css
p.test1 {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
p.test2 {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## تفاعل النص عند المرور

يمكن إظهار النص المخفي عند المرور بالفأرة عبر تغيير خاصية overflow إلى visible.

```css
p:hover {
  overflow: visible;
}
```

## خاصية word-wrap

تسمح خاصية word-wrap بكسر الكلمات الطويلة جدا ونقلها للسطر التالي لمنع خروجها عن الحاوية.

```css
p {
  word-wrap: break-word;
}
```

## خاصية word-break

تتحكم خاصية word-break في كيفية كسر الكلمات، حيث تتيح break-all الكسر عند أي حرف.

```css
p.test1 {
  word-break: normal;
}
p.test2 {
  word-break: break-all;
}
```

## خاصية writing-mode

تستخدم خاصية writing-mode لتغيير اتجاه النص بين الأفقي والرأسي.

```css
p.test1 {
  writing-mode: horizontal-tb;
}
span {
  writing-mode: vertical-rl;
}
```

## خلاصة الدرس

لقد استعرضنا أهم خصائص تأثيرات النصوص في CSS. جربوا الأكواد بأنفسكم لتطوير مهاراتكم.

- text-overflow للتحكم في النص الفائض
- word-wrap و word-break لتنسيق الكلمات
- writing-mode لتغيير اتجاه الكتابة
