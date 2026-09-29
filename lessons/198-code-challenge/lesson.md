# CSS Animations Challenge

المصدر: https://www.w3schools.com/css/css_challenges_css3_animations.asp

## مقدمة في CSS Animations

مرحبا بكم في درس CSS Animations. سنتعلم اليوم كيفية إضافة الحركات التفاعلية إلى صفحات الويب.

- CSS Animations تسمح بتحريك العناصر
- تعتمد على keyframes و Animation Properties
- تحسين تجربة المستخدم في صفحات الويب

## القواعد الأساسية للتحريك

تعتمد الحركات على keyframes لتحديد المراحل وخصائص animation للتحكم في التوقيت والسلوك.

- keyframes يحدد مراحل الحركة
- animation-name يربط الحركة بالعنصر
- animation-duration يحدد زمن الحركة
- animation-iteration-count للتكرار

## كتابة كود CSS Animations

هيكل كود CSS Animations يتضمن تعريف keyframes وتطبيقه على العنصر المستهدف.

```css
@keyframes example {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}
div {
  width: 100px;
  height: 100px;
  animation: example 4s infinite;
}
```

## شرح تفصيلي للخصائص

شرح الخصائص: animation-name يحدد الاسم، duration يحدد الزمن، و infinite تجعل الحركة مستمرة.

- animation-name: يربط الـ keyframes
- animation-duration: زمن تنفيذ الدورة
- infinite: تكرار الحركة بلا نهاية

## معاينة الحركة

نتيجة الكود: يتغير لون العنصر من الأحمر إلى الأصفر بشكل دوري ومستمر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div style="background-color: red; width: 100px; height: 100px;">
    </div>
  </body>
</html>
```

## أفضل الممارسات

أفضل الممارسات: استخدم vendor prefixes وتجنب الإفراط في الحركات للحفاظ على الأداء.

- استخدام vendor prefixes للتوافق
- الحفاظ على بساطة الحركة
- مراعاة أداء المتصفح

## خلاصة الدرس

خلاصة: تعلمنا بناء الحركات باستخدام keyframes والخصائص الأساسية. جربوا الأكواد بأنفسكم.

- تم تغطية keyframes
- تم شرح خصائص animation
- تم توضيح كيفية التكرار
- استمروا في الممارسة
