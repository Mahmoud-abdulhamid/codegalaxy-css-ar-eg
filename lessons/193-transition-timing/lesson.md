# التحكم في توقيت وتأخير CSS Transitions

المصدر: https://www.w3schools.com/css/css3_transitions_timing.asp

## مقدمة في CSS Transition Timing

مرحبا بكم في درس التحكم في توقيت وتأخير CSS Transitions.

- التحكم في منحنى سرعة الانتقال
- إضافة تأخير زمني قبل بدء التأثير
- الدمج بين Transition و Transform
- استخدام خاصية الاختصار لتنظيم الكود

## خاصية transition-timing-function

تستخدم خاصية transition-timing-function لتحديد منحنى سرعة تأثير الانتقال.

```css
#div1 {
  transition-timing-function: linear;
}
#div2 {
  transition-timing-function: ease;
}
#div3 {
  transition-timing-function: ease-in;
}
#div4 {
  transition-timing-function: ease-out;
}
```

## خاصية transition-delay

تستخدم خاصية transition-delay لتحديد وقت التأخير قبل بدء الانتقال.

```css
div {
  transition-delay: 1s;
}
```

## الدمج بين Transition و Transform

يمكن دمج خصائص متعددة مثل transform مع Transition.

```css
button {
  transition: background-color 1s ease-out, transform 1s ease-out;
}
```

## خاصية الاختصار transition

استخدام خاصية الاختصار transition لكتابة كود CSS مختصر.

```css
div {
  transition: width 2s linear 1s;
}
```

## خلاصة الدرس

خلاصة: استخدم خصائص Transition للتحكم الكامل في حركات عناصر الويب.

- استخدم transition-timing-function لتحديد منحنى السرعة
- استخدم transition-delay لإضافة تأخير زمني
- استخدم transition للاختصار
- جرب دمج transform مع Transition
