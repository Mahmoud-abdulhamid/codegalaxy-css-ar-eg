# CSS Box Sizing

المصدر: https://www.w3schools.com/css/css3_box-sizing.asp

## شرح Introduction to CSS Box Sizing

سنتعرف اليوم على خاصية box-sizing في CSS وكيفية تأثيرها على حساب أبعاد العناصر بدقة.

- مفهوم CSS Box Sizing الأساسي
- طريقة حساب العرض والارتفاع للعناصر
- أهمية التحكم في حجم الصندوق البرمجي

## شرح The Default Box Model Problem

افتراضيا، يضيف المتصفح قيم padding و border إلى العرض والارتفاع المحدد للعنصر.

```css
.div1 {
  width: 300px;
  height: 100px;
  border: 1px solid blue;
}
.div2 {
  width: 300px;
  height: 100px;
  padding: 50px;
  border: 1px solid red;
}
```

## شرح Comparing Element Dimensions

مقارنة بين حجم العنصرين يوضح كيف يؤثر padding على الحجم النهائي الفعلي.

## شرح The box-sizing: border-box Solution

تسمح لنا قيمة border-box بتضمين padding و border داخل العرض والارتفاع الكلي المحدد.

## شرح Code with border-box Applied

عند تطبيق border-box، يتساوى حجم العنصرين تماما على الشاشة رغم اختلاف padding.

```css
.div1 {
  width: 300px;
  height: 100px;
  border: 1px solid blue;
  box-sizing: border-box;
}
.div2 {
  width: 300px;
  height: 100px;
  padding: 50px;
  border: 1px solid red;
  box-sizing: border-box;
}
```

## شرح Global Box Sizing Reset

تطبيق border-box بشكل عام على جميع العناصر يعتبر ممارسة آمنة وذكية.

```css
* {
  box-sizing: border-box;
}
```

## شرح Best Practices & Summary

اجعل border-box خيارك الافتراضي دائما لتجنب مشاكل التصميم غير المتوقعة.

- تسهيل حسابات أبعاد العناصر وتصميم الصفحات
- تجنب تمدد العناصر بسبب padding أو border
- استخدام المحدد العام لتصفير وتوحيد سلوك المتصفحات
