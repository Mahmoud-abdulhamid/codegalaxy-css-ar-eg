# CSS Position Code Challenge

المصدر: https://www.w3schools.com/css/css_challenges_position.asp

## مقدمة حول CSS Position

مرحبا بكم في درس تحدي CSS Position لتعلم التحكم في مواقع العناصر داخل صفحة الويب.

- خاصية position تحدد نوع التموضع للعنصر
- تؤثر هذه الخاصية على تدفق العناصر في الصفحة
- تستخدم مع خصائص الإزاحة مثل top وleft
- تعتبر أساسية لتصميم واجهات الويب المعقدة

## قيم خاصية position

تتضمن خاصية position قيما متعددة مثل static وrelative وabsolute وfixed وsticky.

## هيكل الكود الأساسي

نحدد العنصر باستخدام Selector ثم نطبق خاصية position مع قيم الإزاحة مثل top وleft.

```css
.box {
  position: absolute;
  top: 50px;
  left: 100px;
  background-color: blue;
}
```

## شرح تفصيلي للخصائص

تؤثر القيم absolute وrelative على تدفق العناصر داخل الـ Document بشكل مختلف.

- absolute يزيل العنصر من التدفق الطبيعي
- relative يحافظ على مساحة العنصر الأصلية
- استخدام top وleft يحدد المسافة بدقة
- يجب التأكد من وجود عنصر أب بـ position غير static

## معاينة المخرجات

تظهر المعاينة العنصر بعد تطبيق قيم position والإزاحة المحددة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <div class="box">محتوى العنصر</div>
    </div>
  </body>
</html>
```

## أفضل الممارسات

استخدم Flexbox أو Grid للتخطيط العام، واجعل position للحالات الخاصة فقط لتجنب تداخل العناصر.

- لا تبالغ في استخدام absolute
- استخدم Flexbox للتخطيط الأساسي
- اختبر التصميم على مختلف أحجام الشاشات
- حافظ على نظافة الكود وتنسيقه

## خلاصة الدرس

قم بتجربة الأكواد بنفسك عبر الرابط في الوصف لإتقان مهارات CSS Position.

- تعلمنا قيم position المختلفة
- فهمنا كيفية استخدام الإزاحة
- ناقشنا أفضل الممارسات البرمجية
- شجعنا على التطبيق العملي المستمر
