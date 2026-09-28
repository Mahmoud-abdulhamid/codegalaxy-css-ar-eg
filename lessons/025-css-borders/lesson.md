# CSS Borders

المصدر: https://www.w3schools.com/css/css_border.asp

## مقدمة في CSS Borders

تسمح خصائص CSS Borders بتحديد نمط وعرض ولون حدود العناصر في صفحات الويب.

- التحكم في حدود العناصر
- تحديد النمط والعرض واللون
- تحسين المظهر المرئي للعناصر

## خاصية border-style

خاصية border-style ضرورية لظهور الحدود، ويمكنها استقبال من قيمة واحدة إلى أربع قيم.

- border-style هي الخاصية الأساسية
- بدونها لا تعمل خصائص الحدود الأخرى
- تدعم من قيمة واحدة إلى أربع قيم

## تطبيق أنماط الحدود

تطبيق أنماط مختلفة مثل dotted و dashed و solid و double على عناصر الفقرات.

```css
p.dotted {
  border-style: dotted;
}
p.dashed {
  border-style: dashed;
}
p.solid {
  border-style: solid;
}
p.double {
  border-style: double;
}
```

## أنماط حدود إضافية

استخدام أنماط groove و ridge و inset و outset لإضافة تأثيرات ثلاثية الأبعاد.

```css
p.groove {
  border-style: groove;
}
p.ridge {
  border-style: ridge;
}
p.inset {
  border-style: inset;
}
p.outset {
  border-style: outset;
}
```

## إخفاء الحدود والدمج

استخدام none و hidden لإخفاء الحدود، ودمج أنماط مختلفة في خاصية واحدة.

```css
p.none {
  border-style: none;
}
p.hidden {
  border-style: hidden;
}
p.mix {
  border-style: dotted dashed solid double;
}
```

## معاينة النتائج

تظهر النتائج في المتصفح كأنماط حدود متنوعة تعزز من تنظيم وتنسيق المحتوى.

- تنوع الأنماط يعزز تجربة المستخدم
- الحدود تساعد في تقسيم المحتوى
- تأثيرات احترافية بخصائص بسيطة

## ملاحظات هندسية

تنبيه: لن تظهر خصائص العرض أو اللون ما لم يتم تحديد border-style أولا.

- border-style هي الشرط الأساسي
- تأكد من ترتيب الخصائص
- جرب دمج الأنماط المختلفة

## خلاصة الدرس

تعلمنا التحكم في الحدود، ندعوكم لتجربة الأكواد بأنفسكم عبر الرابط في الوصف.

- تمت تغطية كافة أنماط الحدود
- شرح كيفية دمج القيم
- أهمية ترتيب الخصائص
- رابط التجربة متاح في الوصف
