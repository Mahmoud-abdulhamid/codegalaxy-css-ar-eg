# CSS Gradients

المصدر: https://www.w3schools.com/css/css3_gradients.asp

## مقدمة عن CSS Gradients

تسمح CSS Gradients بعرض انتقالات سلسة بين لونين أو أكثر داخل عنصر الويب وتستخدم ضمن خاصية background-image.

- تستخدم CSS Gradients لإنشاء انتقالات لونية سلسة
- تطبق التدرجات داخل خاصية background-image
- توجد أنواع متعددة من التدرجات في CSS

## دالة linear-gradient

تنشئ دالة linear-gradient تدرجا خطيا يسير في خط مستقيم ويمكن توجيهه في اتجاهات مختلفة.

```css
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

## اتجاهات التدرج

يمكن التحكم في اتجاه التدرج باستخدام قيم مثل to bottom أو to right أو اتجاهات قطرية.

```css
#grad {
  background-image: linear-gradient(to bottom right, red, yellow);
}
```

## استخدام الزوايا

يمكن تحديد زاوية التدرج بدقة باستخدام وحدة deg بدلا من الاتجاهات النصية.

```css
#grad {
  background-image: linear-gradient(180deg, red, yellow);
}
```

## تعدد نقاط الألوان

يمكن إضافة عدة ألوان داخل دالة linear-gradient لإنشاء تدرجات لونية متعددة.

```css
#grad {
  background-image: linear-gradient(to right, red, orange, yellow, green, blue);
}
```

## الشفافية في التدرجات

تسمح دالة rgba بإضافة الشفافية للتدرجات، حيث تتراوح القيمة الأخيرة بين 0 و1.

```css
#grad {
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
}
```

## تكرار التدرج

تستخدم دالة repeating-linear-gradient لتكرار التدرج الخطي بشكل متتابع.

```css
#grad {
  background-image: repeating-linear-gradient(red, yellow 10%, green 20%);
}
```

## خاتمة

تعلمنا كيفية بناء تدرجات لونية احترافية. جربوا تغيير الألوان والزوايا بأنفسكم.

- استخدم linear-gradient للتدرجات الخطية
- تحكم في الاتجاهات والزوايا
- أضف الشفافية باستخدام rgba
- جرب repeating-linear-gradient للتكرار
