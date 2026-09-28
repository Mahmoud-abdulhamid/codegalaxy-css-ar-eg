# فهم خاصية CSS Outline

المصدر: https://www.w3schools.com/css/css_outline.asp

## مقدمة حول CSS Outline

تستخدم خاصية Outline لرسم خط حول العناصر خارج حدود الـ Border لجعلها تبرز بشكل مميز.

- الـ Outline يرسم خارج الـ Border
- يستخدم لجعل العناصر تبرز (Stand out)
- لا يؤثر على أبعاد العنصر الكلية

## الفرق بين Outline و Border

الفرق الجوهري هو أن الـ Outline لا يشغل مساحة من أبعاد العنصر ولا يؤثر على تخطيط الصفحة.

## خاصية outline-style

خاصية outline-style هي الخاصية الإجبارية لظهور الـ Outline وتدعم قيما متنوعة.

- مفهوم dotted
- مفهوم dashed
- مفهوم solid
- مفهوم double
- مفهوم groove, ridge, inset, outset

## تطبيق عملي للأكواد

تطبيق قيم مختلفة لخاصية outline-style على عناصر الفقرات p.

```css
p.dotted {
  outline-style: dotted;
}
p.dashed {
  outline-style: dashed;
}
p.solid {
  outline-style: solid;
}
p.double {
  outline-style: double;
}
```

## استكمال قيم outline-style

تأثيرات ثلاثية الأبعاد تعتمد على لون الـ Outline.

```css
p.groove {
  outline-style: groove;
}
p.ridge {
  outline-style: ridge;
}
p.inset {
  outline-style: inset;
}
p.outset {
  outline-style: outset;
}
```

## خلاصة الدرس

الـ Outline أداة ممتازة للتركيز البصري دون تغيير أبعاد العناصر.

- لا تنس ضبط outline-style
- الـ Outline لا يشغل مساحة
- استخدمه للتركيز على العناصر
