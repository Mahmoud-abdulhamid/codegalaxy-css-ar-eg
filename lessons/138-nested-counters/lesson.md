# CSS Nested Counters

المصدر: https://www.w3schools.com/css/css_counters_nested.asp

## مقدمة في CSS Nested Counters

مقدمة حول استخدام CSS Counters لإنشاء ترقيم متداخل ومنظم داخل صفحات الويب.

- استخدام CSS Counters للترقيم التلقائي
- إنشاء مستويات متعددة من الترقيم
- التحكم في تنسيق الترقيم المتداخل
- استخدام دالة counters() للربط بين المستويات

## القواعد الأساسية للترقيم

شرح مفاهيم counter-reset و counter-increment ودالة counter لعرض القيم.

- counter-reset لتهيئة العداد
- counter-increment لزيادة قيمة العداد
- دالة counter() لعرض القيمة الحالية
- استخدام ::before لإدراج الترقيم

## مثال استخدام عدادين

مثال برمجي يوضح كيفية استخدام عدادين مختلفين للترقيم.

```css
body {
  counter-reset: section;
}
h1 {
  counter-reset: subsection;
}
h1::before {
  counter-increment: section;
  content: "Section " counter(section) ". ";
}
h2::before {
  counter-increment: subsection;
  content: counter(section) "." counter(subsection) " ";
}
```

## دالة counters() للترقيم المتداخل

شرح دالة counters() التي تتيح عرض قيم العدادات المتداخلة كسلسلة نصية.

```css
ol {
  counter-reset: section;
  list-style-type: none;
}
li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
}
```

## معاينة المخرجات

شكل المخرجات المتوقعة للترقيم المتداخل في المتصفح.

```text
1. Section 1.
1.1 Item
1.2 Item
2. Section 2.
```

## أفضل الممارسات

نصائح برمجية حول الاستخدام الأمثل للعدادات في CSS.

- استخدم counter-reset في الحاوية الأب
- احرص على تسمية العدادات بوضوح
- استخدم counters() للترقيم المتعدد المستويات
- اختبر الترقيم في مختلف المتصفحات

## خاتمة الدرس

خلاصة الدرس ودعوة للممارسة العملية.

- تم تغطية مفهوم CSS Counters
- شرح دالة counters() المتداخلة
- تطبيق عملي على القوائم والعناوين
- راجع الرابط في الوصف لمزيد من التفاصيل
