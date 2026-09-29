# CSS property Rule

المصدر: https://www.w3schools.com/css/css3_property.asp

## مقدمة قاعدة property

تعرف على قاعدة property لتعريف Custom Properties مباشرة في ملف الويب.

- تستخدم قاعدة property لتعريف Custom Properties في CSS
- لا تحتاج إلى تشغيل أكواد JavaScript لتفعيلها
- تدعم التحقق من أنواع البيانات وتحديد القيم الافتراضية

## صياغة وبنية property

تتضمن بنية property تحديد نوع البيانات syntax والقيمة الابتدائية initial-value.

```css
@property --myColor {
  syntax: "<color>";
  inherits: true;
  initial-value: lightgray;
}
```

## استخدام دالة var

تستخدم دالة var لإدراج المتغير المخصص في عناصر CSS المختلفة.

```css
body {
  background-color: var(--myColor);
}
```

## تطبيق خصائص متعددة

يمكن تعريف أكثر من متغير مخصص واستخدامها داخل عنصر div.

```css
@property --my-bg-color {
  syntax: "<color>";
  inherits: true;
  initial-value: lightgray;
}
div {
  background-color: var(--my-bg-color);
  color: var(--my-txt-color);
}
```

## تجاوز القيم عبر الفئات

يمكن تجاوز القيمة الافتراضية للمتغير داخل الفئات الفرعية.

```css
.fresh {
  --my-bg-color: #ff6347;
}
.nature {
  --my-bg-color: rgb(120, 180, 30);
}
```

## معاينة النتيجة المرئية

صورة توضح معاينة عنصر div بعد تطبيق الخصائص المخصصة.

## التحقق من الأخطاء والاحتياط

عند إدخال قيمة غير صالحة، يستخدم المتصفح القيمة الاحتياطية تلقائيا.

```css
.nature {
  --my-bg-color: 2;
  /* Falls back to lightgray */
}
```

## رسوم متحركة للتدرجات

تتيح قاعدة property إمكانية تحريك التدرجات اللونية بسلاسة فائقة.

```css
@property --startColor {
  syntax: "<color>";
  initial-value: #EADEDB;
  inherits: false;
}
```

## خلاصة الدرس

خلاصة استخدام قاعدة property والتحقق من الأنواع في CSS.

- تعريف متغيرات CSS المخصصة بقواعد دقيقة
- استخدام syntax و initial-value لمنع الأخطاء
- تفعيل الرسوم المتحركة للتدرجات اللونية Gradients
