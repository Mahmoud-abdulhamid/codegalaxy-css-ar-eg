# How To Add Internal CSS

المصدر: https://www.w3schools.com/css/css_howto_internal.asp

## مقدمة حول Internal CSS

مرحبا بكم في درس اليوم حول كيفية إضافة Internal CSS لتنسيق صفحات الويب بشكل فريد.

- تستخدم Internal CSS لتنسيق صفحة HTML واحدة
- توضع التنسيقات داخل style Element
- يتم تعريفها في قسم head

## قواعد استخدام Internal CSS

يتم وضع التنسيقات داخل style Element الموجود في قسم head لضمان تحميلها قبل عرض المحتوى.

- يجب وضع style Element داخل head
- تكتب قواعد CSS داخل هذا العنصر
- تؤثر التنسيقات على كامل الصفحة

## هيكل الكود الأساسي

هيكل الكود يبدأ بـ DOCTYPE html ثم تعريف التنسيقات داخل style Element.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      body {
        background-color: linen;
      }
      h1 {
        color: maroon;
        margin-left: 40px;
      }
    </style>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

## استكمال هيكل الصفحة

نكمل كتابة محتوى الصفحة داخل body ليظهر بالتنسيقات المحددة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      body {
        background-color: linen;
      }
      h1 {
        color: maroon;
        margin-left: 40px;
      }
    </style>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

## تحليل التنسيقات

توضيح تأثير التنسيقات على العناصر مثل تغيير لون الخلفية وتنسيق العناوين.

## ملاحظات هندسية

نصيحة: استخدم Internal CSS للصفحات المنفردة، وفكر في External CSS للمواقع الكبيرة.

- Internal CSS مثالية للصفحات الفريدة
- تسهل تجربة التنسيقات بسرعة
- تجنب تكرار الكود في صفحات متعددة

## خاتمة الدرس

شكرا لمتابعتكم، لا تنسوا تجربة الكود بأنفسكم عبر الرابط المرفق.

- راجع الكود المكتوب في الدرس
- جرب تغيير القيم والألوان
- تابع الدورة للمزيد من المهارات
