# CSS Units Code Challenge

المصدر: https://www.w3schools.com/css/css_challenges_units.asp

## مقدمة حول CSS Units

مرحبا بكم في درس CSS Units. سنتعرف اليوم على أهمية الوحدات في تصميم صفحات الويب ونخوض تحديا برمجيا.

- فهم كيفية تحديد الأبعاد في CSS
- الفرق بين Absolute Units و Relative Units
- تطبيق عملي على CSS Units

## أنواع الوحدات في CSS

تنقسم وحدات CSS إلى Absolute Units مثل px و Relative Units مثل em و rem و النسبة المئوية.

## هيكل الكود الأساسي

هيكل مستند HTML5 مع قسم head لتضمين التنسيقات وتحديد الأبعاد باستخدام px.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      .box {
        width: 200px;
        height: 100px;
        background: blue;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

## استخدام الوحدات النسبية

استخدام الوحدات النسبية مثل rem يجعل العناصر تتكيف مع حجم الخط الأساسي في المتصفح.

```css
.container {
  width: 50%;
  padding: 2rem;
  margin: 1em;
}
/* استخدام الوحدات النسبية */
```

## معاينة المخرجات

معاينة المخرجات في المتصفح تظهر كيف تتكيف العناصر مع أحجام الشاشات المختلفة.

```text
Box Width: 50% of parent
Padding: 32px (2rem)
Margin: 16px (1em)
```

## أفضل الممارسات

أفضل الممارسات: استخدم الوحدات النسبية للتجاوب، واستخدم px للأبعاد الثابتة فقط.

- استخدم rem للنصوص والمسافات
- استخدم للحاويات الرئيسية
- تجنب px في التصاميم المتجاوبة
- اختبر التصميم على متصفحات مختلفة

## خلاصة الدرس

تعلمنا اليوم التحكم في الأبعاد باستخدام CSS Units. جربوا الأكواد بأنفسكم عبر الرابط في الوصف.
