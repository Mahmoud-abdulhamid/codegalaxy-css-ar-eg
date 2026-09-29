# التحكم في توقيت وتكرار CSS Animations

المصدر: https://www.w3schools.com/css/css3_animations_timing.asp

## مقدمة في توقيت CSS Animations

سنتعلم اليوم التحكم في توقيت وتكرار CSS Animations لجعل صفحات الويب أكثر حيوية.

- التحكم في تأخير بدء الحركة عبر animation-delay
- تحديد عدد مرات التكرار باستخدام animation-iteration-count
- ضبط منحنى السرعة بواسطة animation-timing-function

## خاصية animation-delay

تستخدم خاصية animation-delay لتحديد وقت التأخير قبل بدء الحركة، وتدعم القيم السالبة.

```css
div {
  animation-name: myAnimation;
  animation-duration: 4s;
  animation-delay: 2s;
}
/* استخدام قيمة سالبة */
div.negative {
  animation-delay: -2s;
}
```

## خاصية animation-iteration-count

تحدد خاصية animation-iteration-count عدد مرات تكرار الحركة، ويمكن استخدام infinite للتكرار الدائم.

```css
div {
  animation-duration: 4s;
  animation-iteration-count: 3;
}
.infinite-loop {
  animation-iteration-count: infinite;
}
```

## خاصية animation-timing-function

تحدد خاصية animation-timing-function منحنى سرعة الحركة مثل linear أو ease.

```css
#div1 {
  animation-timing-function: linear;
}
#div2 {
  animation-timing-function: ease;
}
#div3 {
  animation-timing-function: ease-in;
}
#div4 {
  animation-timing-function: ease-out;
}
```

## معاينة المخرجات

تظهر المخرجات اختلافا في سلوك العناصر بناء على قيم animation-timing-function.

```text
Element 1 (linear): Constant speed.
Element 2 (ease-in): Starts slow, accelerates.
Element 3 (infinite): Never stops running.
```

## أفضل الممارسات

جرب قيم توقيت مختلفة للحصول على أفضل تأثير بصري، مع مراعاة أداء صفحة الويب.

- استخدم القيم السالبة لتقليل وقت انتظار المستخدم
- استخدم infinite بحذر لتجنب تشتيت الانتباه
- وازن بين الجمالية والأداء التقني

## خلاصة الدرس

تعلمنا التحكم في توقيت وتكرار وسرعة CSS Animations. جرب الأكواد بنفسك الآن.

- animation-delay: تأخير بدء الحركة
- animation-iteration-count: عدد مرات التكرار
- animation-timing-function: منحنى سرعة الحركة
