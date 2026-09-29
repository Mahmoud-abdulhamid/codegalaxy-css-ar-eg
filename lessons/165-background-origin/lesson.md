# CSS background-origin Property

المصدر: https://www.w3schools.com/css/css3_background_origin.asp

## مقدمة حول background-origin

تستخدم خاصية background-origin لتحديد نقطة بداية موضع صورة الخلفية داخل عناصر الويب.

- تتحكم في موضع صورة الخلفية
- تعتمد على صندوق العنصر
- تؤثر في التصميم المرئي

## قيم الخاصية background-origin

تتوفر ثلاث قيم رئيسية للخاصية وهي padding-box و border-box و content-box.

## تطبيق عملي باستخدام CSS

نطبق قيم background-origin المختلفة على ثلاثة عناصر div لتوضيح الفروقات.

```css
#div1 {
  border: 2px solid black; padding: 35px; background-origin: padding-box;
}
#div2 {
  border: 2px solid black; padding: 35px; background-origin: border-box;
}
#div3 {
  border: 2px solid black; padding: 35px; background-origin: content-box;
}
```

## شرح تفصيلي للخصائص

نستخدم background-image و background-repeat لضبط مظهر الخلفية بجانب background-origin.

- background-image لتحديد الصورة
- background-repeat لمنع التكرار
- padding يحدد مساحة الحشو

## المعاينة المرئية

تظهر النتائج بوضوح حيث تتغير نقطة بداية الصورة بناء على القيمة المختارة.

```text
div1: Background starts at padding edge
div2: Background starts at border edge
div3: Background starts at content edge
```

## ملاحظة تقنية هامة

ملاحظة: لا تعمل background-origin إذا كانت background-attachment مضبوطة على fixed.

- تنبيه تقني هام
- تأثير background-attachment
- تجنب تعارض الخصائص

## خلاصة الدرس

تعلمنا التحكم في موضع الخلفية. جربوا الأكواد بأنفسكم من الرابط في الوصف.

- التحكم الكامل في موضع الخلفية
- تطبيق القيم الثلاث
- مراجعة الرابط في الوصف
