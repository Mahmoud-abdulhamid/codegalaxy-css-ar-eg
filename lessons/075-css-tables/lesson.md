# CSS Tables Styling

المصدر: https://www.w3schools.com/css/css_table.asp

## مقدمة تنسيق الجداول

مرحبا بكم في درس تنسيق جداول الويب باستخدام CSS.

- تحسين جداول الويب باستخدام CSS
- تطبيق خصائص التنسيق المختلفة
- جعل الجداول أكثر احترافية ووضوحا

## إضافة الحدود للجداول

تستخدم border property لتحديد حدود عناصر table و th و td.

```css
table, th, td {
  border: 1px solid;
}
```

## تلوين حدود الجداول

يمكن تحديد لون مخصص للحدود مثل اللون الأخضر.

```css
table, th, td {
  border: 1px solid green;
}
```

## فهم الحدود المزدوجة

تظهر الحدود المزدوجة لأن كل عنصر يمتلك حدودا مستقلة.

- ظهور حدود مزدوجة افتراضيا
- استقلال حدود عناصر الجدول
- الحاجة لدمج الحدود لشكل أفضل

## دمج الحدود باستخدام Collapse

تستخدم border-collapse لدمج حدود الجدول في حد واحد مفرد.

```css
table {
  border-collapse: collapse;
}
```

## إضافة المسافات الداخلية Padding

تستخدم padding property للتحكم بالمسافة بين المحتوى والحدود.

```css
th, td {
  padding: 10px;
}
```

## المسافات بين الخلايا Border Spacing

تحدد border-spacing المسافة بين الخلايا المتجاورة عند الفصل.

```css
table {
  border-collapse: separate;
  border-spacing: 15px;
}
```

## خلاصة الدرس والتطبيقات

خلاصة تنسيق الجداول واستخدام الخصائص المختلفة باحترافية.

- استخدام border لتحديد الحدود والألوان
- دمج الحدود عبر border-collapse
- التحكم بالمسافات باستخدام padding و border-spacing
