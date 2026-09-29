# CSS Specificity Code Challenge

المصدر: https://www.w3schools.com/css/css_challenges_specificity.asp

## مقدمة تحدي Specificity

مرحبا بكم يا أصدقائي في هذا التحدي العملي لغة CSS لاختبار فهم قواعد Specificity.

- مرحبا بك في تحدي Specificity العملي
- اختبار الفهم الحقيقي لأولوية CSS
- تجنب التداخل والنزاعات بين الـ Selectors

## القواعد الأساسية للحساب الدقيق

تحسب Specificity بنظام (A, B, C) للـ IDs والـ Classes والـ Elements بدقة.

- نظام الحساب الثلاثي (A, B, C)
- A يمثل عدد الـ ID Selectors
- B يمثل الـ Classes والـ Attributes
- C يمثل الـ Elements والـ Pseudo-elements

## أولوية Inline Styles والـ IDs

تملك Inline Styles أعلى أولوية، والـ ID يتفوق دائما على أي عدد من الـ Classes.

- Inline Styles تتفوق على جميع الـ Selectors
- ID واحد يتفوق على أي عدد من الـ Classes
- لا يمكن لـ 11 Class هزيمة ID واحد

## كتابة كود التحدي العملي

ننتقل إلى كتابة كود التحدي العملي لتطبيق قواعد Specificity بوضوح.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      p {
        color: red;
      }
      .text {
        color: blue;
      }
      #main {
        color: green;
      }
    </style>
  </head>
  <body>
    <p id="main" class="text">Test Paragraph</p>
  </body>
</html>
```

## تحليل الأكواد وتحديد الفائز

يفوز الـ ID في هذا التحدي وتظهر الفقرة باللون الأخضر متفوقة على البقية.

- عنصر p وزنه (0,0,1)
- الـ Class وزنه (0,1,0)
- الـ ID وزنه (1,0,0) وهو الفائز

## أفضل الممارسات البرمجية

تجنب الإسراف في استخدام الـ IDs واعتمد على الـ Classes لمرونة التصميم.

- تجنب الإفراط في استخدام الـ IDs
- استخدم الـ Classes لإعادة الاستخدام
- حافظ على هيكل Specificity بسيط ومنظم

## خلاصة تحدي Specificity

تعرفنا على نظام الحساب السليم لـ Specificity ونلتقي في التحدي القادم.

- ملخص حساب A, B, C للأولويات
- تفوق الـ IDs والأحكام المطلقة
- قم بزيارة الرابط لتطبيق التحدي بنفسك
