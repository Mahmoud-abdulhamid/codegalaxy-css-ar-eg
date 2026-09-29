# التحكم في أعمدة الويب باستخدام CSS Column Rules

المصدر: https://www.w3schools.com/css/css3_multiple_columns_rules.asp

## مقدمة في CSS Multi-columns

مرحبا بكم في درس جديد من دورة CSS. سنتعلم اليوم كيفية التحكم في تخطيط الأعمدة داخل صفحة الويب باستخدام خصائص CSS المتقدمة.

- التحكم في الفواصل بين الأعمدة باستخدام column-rule
- توسيع العناصر عبر الأعمدة باستخدام column-span
- تحديد العرض الأمثل للأعمدة باستخدام column-width

## خصائص الفواصل بين الأعمدة

يمكننا تحسين مظهر الفواصل بين الأعمدة باستخدام خصائص مثل column-rule-style وcolumn-rule-width وcolumn-rule-color.

```css
div {
  column-rule-style: solid;
  column-rule-width: 1px;
  column-rule-color: lightblue;
}
```

## استخدام خاصية الاختصار column-rule

خاصية الاختصار column-rule تسمح لنا بتحديد العرض والنمط واللون في سطر واحد فقط لجعل الكود أكثر تنظيما.

```css
div {
  column-rule: 1px solid lightblue;
}
```

## توسيع العناصر عبر الأعمدة

نستخدم خاصية column-span مع القيمة all لجعل العنوان يمتد عبر جميع الأعمدة، مع استخدام text-align للتوسيط.

```css
h2 {
  column-span: all;
  text-align: center;
}
```

## تحديد العرض الأمثل للأعمدة

خاصية column-width تحدد العرض المقترح لكل عمود، ويقوم المتصفح بحساب عدد الأعمدة بناء على المساحة المتاحة.

```css
div {
  column-width: 100px;
}
```

## خلاصة الدرس

تعلمنا اليوم كيفية التحكم في تخطيط الأعمدة بدقة. ندعوكم لتجربة الأكواد بأنفسكم لملاحظة النتائج.

- استخدام column-rule للاختصار
- استخدام column-span للتوسيع
- استخدام column-width للتحكم في العرض
- تطبيق الخصائص على عناصر div وh2
