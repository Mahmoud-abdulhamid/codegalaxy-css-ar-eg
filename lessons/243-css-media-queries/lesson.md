# CSS Media Queries

المصدر: https://www.w3schools.com/css/css3_mediaqueries.asp

## مقدمة في Media Queries

تعد Media Queries أداة أساسية في CSS لإنشاء صفحات ويب متجاوبة مع مختلف الأجهزة.

- تسمح Media Queries بتطبيق تنسيقات بناء على خصائص الجهاز
- تعد جزءا حيويا من تصميم الويب المتجاوب Responsive Web Design
- نستخدم القاعدة media لإضافة هذه الاستعلامات إلى ملفات CSS

## بنية Media Queries

تتكون Media Query من نوع الوسائط وخصائص الوسائط التي تعطي نتيجة صحيحة أو خاطئة.

```css
@media [not] media-type and (media-feature: value) {
  /* CSS rules to apply */
}
```

## شرح Media Types و Media Features

تحدد Media Type نوع الوسائط، بينما تصف Media Features خصائص الجهاز مثل العرض.

- Media Type: تحدد نوع الجهاز (مثل screen أو print)
- إذا لم تحدد Media Type تضبط تلقائيا على all
- Media Features: تحدد خصائص مثل min-width أو max-width

## تطبيق عملي بسيط

مثال يغير لون الخلفية عند وصول عرض الشاشة إلى 480 بيكسل أو أكثر.

```css
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

## استخدام نطاق عرض محدد

تطبيق تنسيق ضمن نطاق عرض محدد بين 480 و 768 بيكسل.

```css
@media screen and (min-width: 480px)
and (max-width: 768px) {
  body {
    background-color: lightgreen;
  }
}
```

## معاينة المخرجات

تتغير خلفية الصفحة فور استيفاء شروط العرض المحددة في Media Query.

```text
Viewport width >= 480px: Background becomes lightgreen
Viewport width < 480px: Default background color
```

## أفضل الممارسات

نصائح برمجية: اختبر تصميمك على أجهزة مختلفة وتأكد من ترتيب قواعد CSS.

- اختبر دائما على أحجام شاشات مختلفة
- استخدم Mobile-first approach في التصميم
- نظم ملفات CSS لسهولة الصيانة

## خلاصة الدرس

خلاصة: Media Queries هي مفتاحك لتصميم ويب متجاوب واحترافي.

- Media Queries هي جوهر التصميم المتجاوب
- استخدام media يمنحك تحكما كاملا في العرض
- جرب الأكواد بنفسك عبر رابط Try it Yourself
