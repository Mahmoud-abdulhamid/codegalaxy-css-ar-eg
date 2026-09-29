# CSS Variables in Media Queries

المصدر: https://www.w3schools.com/css/css3_variables_mediaqueries.asp

## مقدمة حول CSS Variables في Media Queries

مرحبا بكم في درس CSS Variables داخل Media Queries لبناء صفحات ويب متجاوبة.

- استخدام CSS Variables لتخزين القيم
- تغيير قيم المتغيرات بناء على عرض الشاشة
- تحسين مرونة التصميم باستخدام Media Queries

## مفهوم المتغيرات في التصميم المتجاوب

تسمح Media Queries بتغيير قيم CSS Variables ديناميكيا حسب عرض الشاشة.

- تحديد قيم مختلفة للمتغيرات حسب عرض الشاشة
- استخدام media rule لتحديث المتغيرات
- تقليل تكرار الكود البرمجي

## تعريف المتغيرات الأساسية

تعريف المتغيرات العامة في :root لضمان اتساق الألوان في كامل الصفحة.

```css
:root {
  --primary-bg-color: #1e90ff;
  --primary-color: #ffffff;
}
```

## استخدام المتغيرات المحلية

تعريف واستخدام متغير محلي --fontsize داخل عنصر .container.

```css
.container {
  --fontsize: 20px;
  color: var(--primary-bg-color);
  font-size: var(--fontsize);
}
```

## تحديث المتغيرات في Media Queries

تحديث قيمة المتغير --fontsize داخل media rule عند عرض 450px فأكثر.

```css
@media screen and (min-width: 450px) {
  .container {
    --fontsize: 40px;
  }
}
```

## مثال متكامل

مثال متكامل يوضح تغيير المتغيرات العامة والمحلية داخل Media Queries.

```css
@media screen and (min-width: 450px) {
  .container {
    --fontsize: 40px;
  }
  :root {
    --primary-bg-color: lightblue;
  }
}
```

## معاينة المخرجات

تغير حجم الخط ولون الخلفية ديناميكيا بناء على عرض المتصفح.

```text
Screen < 450px: Font size 20px, Blue background
Screen >= 450px: Font size 40px, Lightblue background
```

## أفضل الممارسات

أفضل الممارسات: استخدم :root للمتغيرات العامة والمتغيرات المحلية للعناصر الخاصة.

- استخدم :root للمتغيرات العامة
- استخدم المتغيرات المحلية للعناصر المحددة
- حافظ على تنظيم الكود لسهولة الصيانة

## خاتمة الدرس

شكرا لمتابعتكم، جربوا الأكواد بأنفسكم عبر الرابط في الوصف.

- تمت تغطية دمج المتغيرات مع Media Queries
- تم شرح كيفية تحديث القيم ديناميكيا
- رابط المصدر متاح في الوصف للتطبيق العملي
