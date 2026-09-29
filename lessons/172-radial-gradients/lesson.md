# CSS Radial Gradients

المصدر: https://www.w3schools.com/css/css3_gradients_radial.asp

## مقدمة حول Radial Gradients

تستخدم دالة radial-gradient لإنشاء تدرج لوني شعاعي ينتشر من المركز.

- التدرج الشعاعي ينتشر من نقطة المركز
- يمكن أن يكون الشكل ellipse أو circle
- يتطلب التدرج لونين على الأقل كـ color stops

## بنية دالة radial-gradient

البنية الأساسية لدالة radial-gradient مع المعاملات الافتراضية.

```css
background-image: radial-gradient(shape size at position, start-color, ..., last-color);
```

## مثال على التدرج الافتراضي

تدرج لوني شعاعي بسيط مع توزيع ألوان متساو.

```css
#grad {
  background-image: radial-gradient(red, yellow, green);
}
```

## تخصيص مسافات الألوان

تخصيص مسافات الألوان باستخدام النسب المئوية.

```css
#grad {
  background-image: radial-gradient(red 5%, yellow 15%, green 60%);
}
```

## تحديد شكل التدرج

استخدام القيمة circle لتغيير شكل التدرج الشعاعي.

```css
#grad {
  background-image: radial-gradient(circle, red, yellow, green);
}
```

## التحكم في حجم التدرج

استخدام معاملات الحجم والموقع للتحكم في التدرج.

```css
#grad1 {
  background-image: radial-gradient(closest-side at 70% 60%, red, yellow, black);
}
#grad2 {
  background-image: radial-gradient(farthest-side at 70% 60%, red, yellow, black);
}
```

## تكرار التدرج الشعاعي

استخدام دالة repeating-radial-gradient لتكرار النمط.

```css
#grad {
  background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
}
```

## خلاصة الدرس

تجربة الأكواد هي أفضل وسيلة لإتقان CSS.

- استخدام radial-gradient للتدرجات الشعاعية
- التحكم في الشكل والحجم والموقع
- استخدام repeating-radial-gradient للتكرار
- قم بزيارة الرابط في الوصف لتجربة الأكواد
