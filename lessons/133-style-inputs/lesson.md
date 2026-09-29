# Styling Form Inputs in CSS

المصدر: https://www.w3schools.com/css/css_form_inputs.asp

## مقدمة في تنسيق حقول الإدخال

تعلم كيفية تنسيق عناصر Form Inputs في لغة CSS لجعل صفحات الويب أكثر احترافية.

- تنسيق مختلف أنواع حقول الإدخال في لغة CSS
- التحكم الكامل في العرض والحشو والحدود والألوان
- تحسين تجربة المستخدم في نماذج الويب

## تنسيق عرض الحقول باستخدام width

تستخدم خاصية width لتحديد عرض حقل الإدخال وجعله يتمدد بالكامل.

```css
input {
  width: 100%;
}
```

## إضافة الحشو والموامسة عبر padding و margin

استخدام padding لإضافة مساحة داخلية و margin للفواصل بين الحقول.

```css
input[type=text] {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  box-sizing: border-box;
}
```

## أهمية خاصية box-sizing

خاصية box-sizing تضمن حساب الحشو والحدود ضمن الحجم الكلي للعنصر.

- منع تمدد الحقول خارج نطاق الحاوية بسبب الحشو
- تسهيل الحسابات الدقيقة لأبعاد العناصر
- تحقيق توافقية عالية مع مختلف الشاشات

## تنسيق الحدود وتدوير الزوايا

استخدام border و border-radius لتخصيص الحدود وتدوير الزوايا.

```css
input[type=text] {
  border: 2px solid red;
  border-radius: 8px;
}
```

## الحد السفلي فقط واستخدام border-bottom

إلغاء الحدود الكاملة واستخدام border-bottom لتصميم عصري وبسيط.

```css
input[type=text] {
  border: none;
  border-bottom: 1px solid red;
}
```

## ألوان الخلفية والنصوص

تخصيص لون الخلفية ولون النصوص الداخلية لحقول الإدخال.

```css
input[type=text] {
  background-color: #3CBC8D;
  color: white;
}
```

## خلاصة تنسيق النماذج وتجربتها

خلاصة شاملة لتنسيق حقول الإدخال في لغة CSS وكيفية تطبيقها.

- استخدام width لتحديد العرض و padding للحشو
- ضبط border و border-radius للتصميم الجمالي
- تطبيق الألوان وتجربة الأكواد بأنفسكم
