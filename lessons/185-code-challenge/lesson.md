# CSS Transforms Code Challenge

المصدر: https://www.w3schools.com/css/css_challenges_css3_transforms.asp

## مقدمة في CSS Transforms

مرحبا بكم في درس CSS Transforms حيث سنتعلم التحكم في شكل وموقع العناصر.

- CSS Transforms تسمح بتغيير شكل العناصر
- يمكننا تدوير العناصر أو تغيير حجمها
- تستخدم هذه الخصائص لتحسين تجربة المستخدم
- سنتدرب اليوم على تحدي برمجي عملي

## مفاهيم التحويل الأساسية

نستخدم خاصية transform مع دوال مثل rotate و scale و skew للتحكم في العناصر.

## هيكل الكود البرمجي

نبدأ بتحديد العنصر في HTML ثم نطبق التحويلات المطلوبة عبر CSS.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      .box {
        width: 100px;
        height: 100px;
        background: blue;
        transform: rotate(20deg);
      }
    </style>
  </head>
  <body>
    <div class="box">
      Transform Me!
    </div>
  </body>
</html>
```

## شرح تفصيلي للخصائص

تحديد الأبعاد ضروري قبل تطبيق التحويل، واستخدام rotate يغير زاوية ميل العنصر.

- width و height يحددان مساحة العنصر
- background يحدد لون الخلفية
- transform: rotate(20deg) يقوم بالتدوير
- القيم بالدرجات deg هي المعيار للتدوير

## معاينة النتيجة

هكذا يظهر العنصر في المتصفح بعد تطبيق خاصية التدوير.

```text
[ العنصر المربع ]
      /  /
     /  /
    [__]
```

## أفضل الممارسات

استخدم vendor prefixes لضمان التوافقية مع كافة المتصفحات.

- استخدم -webkit-transform للتوافق
- تأكد من تحديد أبعاد العنصر
- جرب دمج أكثر من تحويل معا
- اختبر التصميم على متصفحات مختلفة

## خلاصة الدرس

لقد تعلمنا أساسيات CSS Transforms، جربوا التحديات بأنفسكم.

- CSS Transforms أداة قوية للتصميم
- تطبيق rotate و scale و skew سهل
- التوافقية مهمة جدا في العمل
- مارسوا التحديات لتطوير مهاراتكم
