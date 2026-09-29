# CSS Accessibility Code Challenge

المصدر: https://www.w3schools.com/css/css_challenges_accessibility.asp

## مقدمة حول Accessibility

مرحبا بكم في تحدي CSS الخاص بمفاهيم Accessibility لجعل مواقع الويب أكثر شمولية.

- Accessibility تضمن وصول الجميع للمحتوى
- استخدام CSS لتحسين تجربة المستخدم
- تحدي عملي لتطبيق المعايير القياسية

## القواعد الأساسية لـ Accessibility

تعتمد Accessibility على تباين الألوان وتوفير مؤشرات بصرية واضحة للتنقل عبر لوحة المفاتيح.

- تباين الألوان العالي High Contrast
- مؤشرات التركيز Focus Indicators
- سهولة القراءة عبر الخطوط المناسبة

## هيكل الكود البرمجي

نبدأ بهيكل HTML و CSS مع التركيز على استخدام Selectors لدعم معايير الويب.

```css
button:focus {
  outline: 3px solid blue;
}
.text-content {
  color: #333;
  font-size: 16px;
}
```

## شرح خاصية Focus

استخدام Pseudo-class التي تسمى focus يحدد مظهر العنصر عند التنقل، وهو أمر ضروري لمستخدمي لوحة المفاتيح.

```css
/* تحسين التركيز */
button:focus {
  outline: 3px solid #005fcc;
  background-color: #eef;
}
```

## معاينة المخرجات

تظهر المعاينة تغير شكل الزر عند التركيز، مما يعزز تجربة المستخدم ومبدأ Accessibility.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <button>Click Me</button>
  </body>
</html>
```

## أفضل الممارسات

احرص دائما على تباين الألوان وتجنب الاعتماد الكلي على اللون لإيصال المعلومات.

- استخدام تباين ألوان كاف
- توفير نصوص بديلة للصور
- اختبار الموقع باستخدام لوحة المفاتيح

## خلاصة الدرس

تعلمنا أساسيات Accessibility في CSS. ندعوكم لتجربة الأكواد وتطوير مهاراتكم لبناء مواقع ويب شاملة.

- Accessibility مسؤولية كل مطور
- CSS أداة قوية لتحسين الوصول
- استمر في ممارسة التحديات البرمجية
