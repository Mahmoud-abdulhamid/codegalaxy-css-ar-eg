# CSS Transitions Challenge

المصدر: https://www.w3schools.com/css/css_challenges_css3_transitions.asp

## مقدمة في CSS Transitions

مرحبا بكم في درس CSS Transitions حيث سنتعلم كيفية إنشاء تحولات سلسة للعناصر.

- تسمح CSS Transitions بتغيير قيم الخصائص بسلاسة
- تتحكم في سرعة التغيير عبر الزمن
- تعتبر جزءا أساسيا من التفاعل في صفحات الويب

## المفاهيم الأساسية للتحولات

تعتمد التحولات على خصائص مثل transition-property و transition-duration للتحكم في التغيير.

- transition-property: تحديد الخاصية المستهدفة
- transition-duration: تحديد زمن التحول
- transition-timing-function: التحكم في تسارع الحركة

## كتابة كود CSS Transition

مثال برمجي يوضح تطبيق transition على عنصر div عند التفاعل معه.

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}
div:hover {
  width: 300px;
}
```

## شرح تفصيلي للكود

شرح سطر transition: width 2s الذي يحدد الخاصية والمدة الزمنية للتحول.

- width: الخاصية التي سيتم تطبيق التحول عليها
- 2s: المدة الزمنية المستغرقة للتحول
- يتم التفعيل تلقائيا عند تغير العرض

## معاينة النتيجة

تظهر المعاينة تمدد العنصر بسلاسة عند التفاعل معه بواسطة المؤشر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- النتيجة: -->
    <div class="box"></div>
    <!-- عند الـ hover يتغير العرض -->
    <!-- من 100px إلى 300px في 2s -->
  </body>
</html>
```

## أفضل الممارسات

أفضل الممارسات تشمل اختيار timing function مناسب وتجنب استخدام all لضمان الأداء.

- استخدم قيم محددة للخصائص بدلا من all
- جرب timing-functions مختلفة لتحسين تجربة المستخدم
- حافظ على بساطة التحولات لضمان سرعة الأداء

## خلاصة الدرس

خلاصة: تعلمت كيفية إنشاء التحولات، أدعوك لتجربة الكود وحل التحديات في الرابط.

- CSS Transitions أداة قوية للتفاعل
- التطبيق العملي هو مفتاح الإتقان
- راجع الرابط في الأسفل لمزيد من التمارين
