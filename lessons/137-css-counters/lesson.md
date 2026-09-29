# CSS Counters

المصدر: https://www.w3schools.com/css/css_counters.asp

## مقدمة عن CSS Counters

تتيح CSS Counters إنشاء ترقيم ديناميكي للعناصر مثل العناوين أو القوائم دون استخدام JavaScript.

- CSS Counters هي متغيرات يتم التحكم بها عبر CSS
- تستخدم لترقيم العناوين والأقسام تلقائيا
- تغني عن استخدام JavaScript في عمليات الترقيم
- تعتمد على خصائص CSS محددة للتحكم في القيم

## الخصائص الأساسية للترقيم

تعتمد CSS Counters على counter-reset لإنشاء المتغير، وcounter-increment لتعديل قيمته، ودالة counter() لعرضه.

- counter-reset: لإنشاء أو إعادة ضبط قيمة العداد
- counter-increment: لزيادة أو نقصان قيمة العداد
- counter(): دالة تستخدم داخل content لعرض القيمة
- Pseudo-elements مثل ::before تستخدم لإظهار الترقيم

## مثال عملي للترقيم التلقائي

مثال يوضح كيفية تهيئة العداد وزيادته تلقائيا مع كل عنصر h2.

```css
body {
  counter-reset: section;
}
h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
```

## نقصان قيمة العداد

يمكن تقليل قيمة العداد عبر تمرير قيمة سالبة إلى خاصية counter-increment.

```css
body {
  counter-reset: section;
}
h2::before {
  counter-increment: section -1;
  content: "Section " counter(section) ": ";
}
```

## الزيادة بقيم مخصصة

يمكن تخصيص مقدار الزيادة في العداد عبر تمرير رقم محدد لخاصية counter-increment.

```css
body {
  counter-reset: section;
}
h2::before {
  counter-increment: section 2;
  content: "Section " counter(section) ": ";
}
```

## خلاصة الدرس

تعد CSS Counters أداة احترافية وفعالة لإدارة الترقيم التلقائي في صفحات الويب.

- استخدام counter-reset للبدء
- استخدام counter-increment للتعديل
- استخدام counter() للعرض
- تجربة القيم المختلفة للزيادة والنقصان
