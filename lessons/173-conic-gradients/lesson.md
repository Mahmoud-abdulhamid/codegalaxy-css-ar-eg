# CSS Conic Gradients

المصدر: https://www.w3schools.com/css/css3_gradients_conic.asp

## مقدمة حول CSS Conic Gradients

تستخدم دالة conic-gradient لإنشاء تدرجات لونية تدور حول نقطة مركزية في صفحات الويب.

- تدرج لوني يدور حول نقطة مركزية
- تتطلب لونين على الأقل للعمل
- تستخدم في تصميم الرسوم البيانية

## بناء الجملة البرمجية

بناء الجملة البرمجية لدالة conic-gradient مع تحديد الزوايا والمواقع.

```css
background-image: conic-gradient([from angle] [at position,] color [degree], color [degree], ...);
```

## تدرج بثلاثة ألوان

مثال بسيط لتدرج لوني باستخدام ثلاثة ألوان موزعة بالتساوي.

```css
#grad {
  background-image: conic-gradient(red, yellow, green);
}
```

## تحديد الزوايا بدقة

تحديد زوايا دقيقة لكل لون داخل التدرج المخروطي.

```css
#grad {
  background-image: conic-gradient(red 45deg, yellow 90deg, green 210deg);
}
```

## إنشاء Pie Charts

استخدام border-radius لتحويل التدرج إلى شكل دائري يشبه المخطط البياني.

```css
#grad {
  background-image: conic-gradient(red, yellow, green, blue, black);
  border-radius: 50%;
}
```

## التحكم في الزاوية والموقع

تغيير زاوية الدوران وموقع المركز للتدرج المخروطي.

```css
#grad {
  background-image: conic-gradient(from 90deg at 60% 45%, red, yellow, green);
}
```

## دالة repeating-conic-gradient

استخدام دالة التكرار لإنشاء أنماط بصرية متكررة.

```css
#grad {
  background-image: repeating-conic-gradient(red 0deg 10deg, yellow 10deg 20deg);
  border-radius: 50%;
}
```

## خلاصة الدرس

خلاصة الدرس: جرب تغيير القيم والألوان لإنشاء تصاميمك الخاصة.

- استخدام conic-gradient للتدرجات الدائرية
- التحكم في الزوايا والمواقع
- إنشاء Pie Charts بـ border-radius
- استخدام repeating-conic-gradient للتكرار
