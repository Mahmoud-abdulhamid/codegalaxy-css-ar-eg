# تعلم CSS Flexbox لبناء صفحات وب مرنة ومتجاوبة

المصدر: https://www.w3schools.com/css/css3_flexbox.asp

## مقدمة عن CSS Flexbox

مرحبا بكم في درس جديد حول تقنية CSS Flexbox وكيفية بناء تصاميم مرنة ومجاوبة للويب.

- تستخدم لغة CSS لبناء وتنسيق صفحات الويب
- تقنية Flexbox هي اختصار لـ Flexible Box Layout
- تتيح تصميم واجهات مرنة ومتجاوبة بدون استخدام float أو positioning

## مفهوم التخطيط المرن

تعتبر تقنية Flexbox نموذج تخطيط متطور لترتيب العناصر أفقيا أو عموديا داخل الحاوية.

- ترتيب العناصر أفقيا أو عموديا داخل الحاوية
- توزيع المساحات والفراغات بمرونة تامة
- تحقيق استجابة كاملة لمختلف أحجام الشاشات

## الفرق بين Flexbox و CSS Grid

تقنية Flexbox مخصصة للتخطيط ذي البعد الواحد صفوف أو أعمدة، بينما CSS Grid للبعدين معا.

## مكونات نظام Flexbox

يتكون نظام Flexbox من حاوية رئيسية Flex Container وعناصر فرعية Flex Items.

- Flex Container: الحاوية الأب التي تحمل خاصية display flex
- Flex Items: العناصر الابنة التي يتم ترتيبها بداخل الحاوية

## كتابة كود الـ HTML و CSS لـ Flexbox

نكتب كود HTML مع تنسيقات CSS داخل قسم style لتفعيل وتطبيق نموذج Flexbox.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      .container {
        display: flex;
        background-color: DodgerBlue;
      }
      .container div {
        background-color: #f1f1f1;
        margin: 10px;
        padding: 20px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </div>
  </body>
</html>
```

## معاينة المخرجات المرنة في المتصفح

توضح معاينة المتصفح ترتيب العناصر أفقيا وبانتظام داخل الحاوية الزرقاء.

## خلاصة وأفضل الممارسات

تعتبر تقنية Flexbox الأداة الأساسية للمطورين لبناء صفحات ويب سريعة ومرنة.

- Flexbox يوفر الوقت والجهد في تنسيق الصفحات
- لا يحتاج إلى استخدام float أو positioning للعناصر
- تابع معنا الدروس القادمة لاحتراف خصائص Flexbox المتقدمة
