# التحكم في عرض الحدود باستخدام CSS border-width

المصدر: https://www.w3schools.com/css/css_border_width.asp

## مقدمة حول border-width

تستخدم خاصية border-width لتحديد سمك الحدود الأربعة للعنصر في صفحات الويب.

- خاصية border-width تتحكم في سمك الحدود
- يمكن تعيين السمك بقيم محددة مثل px أو em
- تتوفر قيم جاهزة مثل thin و medium و thick

## القيم الجاهزة للسمك

توفر CSS ثلاث قيم جاهزة للتحكم في سمك الحدود وهي thin و medium و thick.

## تطبيق border-width عمليا

مثال يوضح تطبيق قيم مختلفة لخاصية border-width مع أنماط حدود متنوعة.

```css
p.one { border-style: solid;
  border-width: 5px; }
p.two { border-style: solid;
  border-width: medium; }
p.three { border-style: dotted;
  border-width: 2px; }
```

## تكملة أمثلة border-width

استكمال تطبيق border-width مع القيمة thick ونمط dotted.

```css
p.four { border-style: dotted;
  border-width: thick; }
```

## تحديد سمك كل جانب على حدة

يمكن تحديد سمك مختلف لكل جانب باستخدام من قيمة واحدة إلى أربع قيم.

- قيمة واحدة: لجميع الجوانب
- قيمتان: الأولى للعلوي والسفلي، الثانية للجانبين
- أربع قيم: علوي، أيمن، سفلي، أيسر

## كود تحديد جوانب الحدود

مثال يوضح تمرير أربع قيم لخاصية border-width لتحديد سمك كل جانب.

```css
p.three {
  border-style: solid;
  border-width: 25px 10px
  4px 35px;
}
```

## خلاصة الدرس

استخدموا خاصية border-width لتخصيص حدود عناصر الويب بمرونة واحترافية.

- استخدم border-style قبل border-width
- يمكن استخدام وحدات قياس متنوعة مثل px
- الترتيب في القيم المتعددة يبدأ من الأعلى باتجاه عقارب الساعة
