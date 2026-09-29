# شرح CSS Attribute Selectors بالتفصيل

المصدر: https://www.w3schools.com/css/css_attribute_selectors.asp

## مقدمة عن Attribute Selectors في CSS

مرحبا بكم في درس جديد من دورة CSS لتعلم استخدام Attribute Selectors.

- تستخدم Attribute Selectors لاستهداف عناصر HTML حسب Attributes
- يتم وضع هذه المحددات داخل أقواس مربعة
- تتيح لك التحكم الدقيق في التصميم دون الحاجة لإضافات Classes إضافية

## شرح محدد attribute

محدد attribute يستخدم لاختيار العناصر التي تحتوي على Attribute معينة بغض النظر عن قيمتها.

```css
a[target] {
  background-color: yellow;
}
```

## محدد القيمة الدقيقة attribute="value"

محدد attribute="value" يستهدف العناصر ذات القيمة المطابقة تماما للقمة المحددة.

```css
a[target="_blank"] {
  background-color: yellow;
}
```

## محدد احتواء الكلمة attribute="value"

محدد attribute="value" يختار العناصر التي تحتوي قيمة سمتها على كلمة معينة ضمن قائمة مفصولة بمسافات.

```css
[title~="flower"] {
  border: 5px solid yellow;
}
```

## محدد الشرطة العمودية attribute="value"

محدد attribute="value" يختار العناصر التي تبدأ قيمتها بالكلمة المحددة أو تليها مباشرة شرطة.

```css
[class|="top"] {
  background: yellow;
}
```

## حساسية حالة الأحرف في Attribute Selectors

المحددات حساسة لحالة الأحرف افتراضيا، ويمكن إضافة الحرف i لجعل المطابق غير حساس.

- المحددات حساسة لحالة الأحرف case-sensitive بشكل افتراضي
- أضف حرف i قبل قوس الإغلاق لإجراء مطابقة غير حساسة لحالة الأحرف
- مثال توضيحي للاستخدام: attribute="value" i

## خلاصة وخاتمة الدرس

خلاصة استخدام Attribute Selectors في تنسيق عناصر صفحات الويب بمرونة واحترافية.

- تمنحك Attribute Selectors مرونة هائلة في استهداف العناصر
- اختر المحدد المناسب حسب شكل وطبيعة قيمة Attributes المطلوبة
- تابع معنا بقية دروس دورة CSS لتطوير مهاراتك التصميمية
