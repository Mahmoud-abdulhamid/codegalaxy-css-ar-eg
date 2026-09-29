# CSS Animations

المصدر: https://www.w3schools.com/css/css3_animations.asp

## مقدمة في CSS Animations

تتيح CSS Animations تحريك عناصر HTML بشكل انسيابي دون الحاجة إلى JavaScript.

- تحريك العناصر بأسلوب احترافي
- لا حاجة لاستخدام JavaScript
- تغيير الخصائص تدريجيا

## المفاهيم الأساسية للتحريك

تعتمد الرسوم المتحركة على تغيير خصائص CSS تدريجيا باستخدام Keyframes.

- تغيير الخصائص من نمط إلى آخر
- تحديد Keyframes للتحكم في التوقيت
- إمكانية تكرار التغييرات

## خصائص التحكم في التحريك

استخدام animation-name و animation-duration للتحكم في اسم ومدة الحركة.

- animation-name: اسم الحركة
- animation-duration: مدة الحركة بالثواني
- القيمة الافتراضية للمدة هي 0s

## قاعدة keyframes

تستخدم قاعدة keyframes لتحديد أنماط CSS عند نقاط زمنية محددة.

```css
@keyframes myAnimation {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}
div {
  animation-name: myAnimation;
  animation-duration: 4s;
}
```

## استخدام النسب المئوية

استخدام النسب المئوية يتيح إضافة تغييرات متعددة أثناء الحركة.

```css
@keyframes myAnimation {
  0% {
    background-color: red;
  }
  25% {
    background-color: yellow;
  }
  50% {
    background-color: blue;
  }
  100% {
    background-color: green;
  }
}
```

## تحريك الموقع واللون

يمكن تحريك الموقع واللون معا باستخدام خصائص CSS داخل keyframes.

```css
@keyframes myAnimation {
  0% {
    background-color: red; left:0px; top:0px;
  }
  50% {
    background-color: blue; left:200px; top:200px;
  }
  100% {
    background-color: red; left:0px; top:0px;
  }
}
div {
  position: relative;
  animation-name: myAnimation;
  animation-duration: 4s;
}
```

## خلاصة الدرس

تذكروا دائما تجربة الأكواد وتغيير القيم لاكتشاف إمكانيات CSS Animations.

- استخدم keyframes لتعريف الحركة
- اربط الحركة بالعنصر عبر animation-name
- حدد المدة الزمنية بـ animation-duration
- جرب النسب المئوية لتعدد التغييرات
