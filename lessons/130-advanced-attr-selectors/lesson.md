# CSS Advanced Attribute Selectors

المصدر: https://www.w3schools.com/css/css_attribute_selectors_advanced.asp

## مقدمة في Advanced Attribute Selectors

مرحبا بكم في درس Advanced Attribute Selectors للتعرف على كيفية استهداف العناصر باحترافية.

- استهداف العناصر باحترافية في CSS
- استخدام أحدث Operators المتقدمة
- تطبيقات عملية على صفحات الويب

## فهم محدد البدء attribute value

يستخدم محدد البدء لاستهداف العناصر التي تبدأ قيمة Attribute فيها بنص محدد.

- تحديد العناصر التي تبدأ بقيمة معينة
- استخدام علامة داخل الأقواس
- مفيد لاستهداف الـ classes المترابطة

## تطبيق عملي على محدد البدء

مثال عملي يوضح تطبيق الـ selector لاستهداف الكلاسات التي تبدأ بكلمة top.

```css
[class^="top"] {
  background: yellow;
}
```

## فهم محدد النهاية attribute value

يستخدم محدد النهاية لاستهداف العناصر التي تنتهي قيمة Attribute بحرف أو كلمة معينة.

- تحديد العناصر التي تنتهي بقيمة معينة
- استخدام علامة قبل علامة التساوي
- ممتاز للتحقق من نهايات الـ attributes

## مثال تطبيقي على محدد النهاية

مثال تطبيقي لاستهداف الكلاسات التي تنتهي بكلمة test.

```css
[class$="test"] {
  background: yellow;
}
```

## محدد الاحتواء attribute value

يستخدم محدد الاحتواء لاستهداف العناصر التي تحتوي قيمتها على نص محدد في أي جزء منها.

```css
[class*="te"] {
  background: yellow;
}
```

## تنسيق عناصر النماذج باحترافية

استخدام محددات Attributes لتنسيق حقول النماذج وأزرار الإدخال.

```css
input[type="text"] {
  width: 150px;
  padding: 6px;
  margin-bottom: 10px;
  background-color: pink;
}
input[type="button"] {
  width: 100px;
  padding: 6px;
  background-color: lightgreen;
}
```

## خلاصة الدرس والدعوة للتجربة

خلاصة درس محددات Attributes المتقدمة في CSS ودعوة للتطبيق العملي المستمر.

- مراجعة محددات البدء والانتهاء
- تنسيق النماذج بدقة عالية
- التطبيق العملي المستمر للأكواد
