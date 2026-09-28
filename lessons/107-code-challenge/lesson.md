# تحدي استخدام CSS Combinators

المصدر: https://www.w3schools.com/css/css_challenges_combinators.asp

## مقدمة تحدي CSS Combinators

مرحبا بكم في درس تحدي CSS Combinators وتطبيق المفاهيم البرمجية عمليا.

- اختبار الفهم الحقيقي لـ CSS Combinators
- تطبيق الأكواد عبر تحديات عملية تفاعلية
- التحكم الكامل في تنسيق عناصر صفحات الويب

## أنواع Combinators في لغة CSS

جدول يوضح أنواع CSS Combinators الأربعة والرموز الخاصة بكل منها.

## كتابة هيكل تحدي CSS Combinators

إنشاء الهيكل البرمجي الأولي لتطبيق تحدي Combinators في ملف CSS.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <h1>العنوان الرئيسي</h1>
      <p>هذه الفقرة الأولى داخل الحاوية.</p>
      <div>
        <p>هذه الفقرة داخل عنصر فرعي متداخل.</p>
      </div>
      <p>هذه الفقرة شقيقة لاحقة للفقرة الأولى.</p>
    </div>
  </body>
</html>
```

## شرح قواعد الكود والتنسيق

تفصيل عمل Child Selector باستخدام (>) وGeneral Sibling باستخدام ().

- استخدام div > p لاستهداف الأبناء المباشرين فقط
- استخدام div p لاستهداف جميع العناصر الفرعية متضمنة المتداخلة
- استخدام div p لاستهداف العناصر الشقيقة اللاحقة بـ General Sibling
- التحكم الدقيق في CSS لتجنب تداخل التنسيق

## تطبيق حل التحدي البرمجي

كود CSS النهائي لحل تحدي Combinators وتطبيق قواعد التنسيق.

```css
/* Descendant Selector */
div p {
  background-color: yellow;
}
/* Child Selector */
div > p {
  color: red;
}
/* General Sibling Selector */
h1 ~ p {
  font-size: 18px;
}
```

## أفضل الممارسات البرمجية

أفضل الممارسات البرمجية عند التعامل مع CSS Combinators.

- استخدم Child Selector لتحديد الأبناء المباشرين بدقة
- تجنب المبالغة في تعقيد Descendant Selectors الكبيرة
- اختبر الكود جيدا في المتصفح للتأكد من صحة النتائج
- الحفاظ على نظافة ملفات CSS وقابليتها للصيانة

## خلاصة الدرس ودعوة للمتابعة

خلاصة درس CSS Combinators ودعوة لتطبيق الأكواد بأنفسكم.

- تم تغطية كافة أنواع Combinators في لغة CSS
- تطبيق عملي لتحدي W3Schools بنجاح تامة
- استمروا في ممارسة البرمجة وتطوير مهاراتكم
