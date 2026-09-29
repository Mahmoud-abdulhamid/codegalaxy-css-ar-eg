# CSS Variables and var() Function

المصدر: https://www.w3schools.com/css/css3_variables.asp

## مقدمة في CSS Variables

مرحبا بكم في درس CSS Variables. سنتعلم اليوم كيفية استخدام المتغيرات لتنظيم قيم التصميم بفعالية.

- CSS Variables تسهل إدارة الألوان والقيم المتكررة
- تسمح بتغيير القيم في مكان واحد وتحديثها في كامل الصفحة
- تتميز بإمكانية الوصول إلى DOM وتغييرها عبر JavaScript

## قواعد تعريف المتغيرات

يجب أن يبدأ اسم المتغير بشرطتين --. يمكن تعريف المتغيرات عالميا عبر :root أو محليا داخل أي selector.

```css
:root {
  --primary-bg-color: green;
}
.note {
  --note-bg: yellow;
}
```

## استخدام دالة var()

تستخدم دالة var() لإدراج قيمة المتغير. الصيغة هي var(--name, value).

```css
/* الصيغة العامة */
property: var(--name, fallback-value);
```

## مثال عملي متكامل

نستخدم المتغيرات لتعريف الألوان الأساسية وتطبيقها على عناصر الصفحة.

```css
:root {
  --primary-bg-color: #1e90ff;
  --primary-color: #ffffff;
}
body {
  background-color: var(--primary-bg-color);
}
.container {
  color: var(--primary-bg-color);
  background-color: var(--primary-color);
}
```

## معاينة المخرجات

تظهر الصفحة بالألوان المحددة في المتغيرات، مما يسهل عملية التعديل الشامل.

```text
Background: #1e90ff (DodgerBlue)
Container Text: #1e90ff
Container Background: #ffffff
```

## أفضل الممارسات

استخدم المتغيرات للألوان والمسافات لضمان اتساق التصميم وسهولة الصيانة.

- استخدم أسماء واضحة ومعبرة للمتغيرات
- عرف المتغيرات العالمية في :root
- استخدم القيم الافتراضية في var() للحماية

## خلاصة الدرس

تعلمنا كيفية استخدام المتغيرات لتنظيم التصميم. جربوا الأكواد بأنفسكم لتطوير مهاراتكم.

- CSS Variables أداة قوية ومرنة
- سهولة التعديل عبر تغيير قيمة واحدة
- تكامل تام مع DOM و JavaScript
