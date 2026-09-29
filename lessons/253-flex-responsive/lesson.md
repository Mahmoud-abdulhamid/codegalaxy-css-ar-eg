# Responsive Flexbox Layouts

المصدر: https://www.w3schools.com/css/css3_flexbox_responsive.asp

## مقدمة في Responsive Flexbox

مرحبا بكم في درس Responsive Flexbox، حيث نتعلم بناء تخطيطات متجاوبة باستخدام CSS.

- استخدام Flexbox لبناء هيكل مرن
- تطبيق Media Queries لتغيير التخطيط
- التحكم في flex-direction و flex property
- ضمان تجاوب العناصر مع مختلف الشاشات

## تغيير التخطيط باستخدام Media Queries

نستخدم Media Queries لتغيير flex-direction من row إلى column عند الوصول إلى breakpoint محدد.

```css
@media (max-width: 600px) {
  .flex-container {
    flex-direction: column;
  }
}
```

## مثال عملي على التخطيط المرن

مثال يوضح تحويل التخطيط من صف إلى عمود باستخدام Media Queries و flex-direction.

```css
.flex-container {
  display: flex;
  flex-direction: row;
}
.flex-item {
  width: 100%;
  padding: 10px;
}
@media (max-width: 600px) {
  .flex-container {
    flex-direction: column;
  }
}
```

## استخدام خاصية flex للتحكم بالعرض

استخدام flex property مع flex-wrap: wrap لإنشاء تخطيطات مرنة تتكيف مع أحجام الشاشات.

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}
.flex-item {
  flex: 33.3%;
}
@media (max-width: 600px) {
  .flex-item {
    flex: 100%;
  }
}
```

## معاينة المخرجات

المخرجات: العناصر تتكيف ديناميكيا مع عرض الشاشة بفضل flex و Media Queries.

```text
Large Screen: [Item 1] [Item 2] [Item 3]
Small Screen: [Item 1]
              [Item 2]
              [Item 3]
```

## أفضل الممارسات

أفضل الممارسات: استخدم breakpoints مناسبة و flex-wrap لضمان مرونة التصميم.

- استخدم flex-wrap لتجنب تداخل العناصر
- حدد breakpoints بناء على محتوى الموقع
- اختبر التصميم على أحجام شاشات مختلفة
- حافظ على بساطة التنسيق في الشاشات الصغيرة

## خلاصة الدرس

خلاصة: تعلمت كيفية بناء تخطيطات متجاوبة. جرب الأكواد بنفسك لتطوير مهاراتك.

- Flexbox هو أداة قوية للتصميم المتجاوب
- Media Queries تمنحك تحكما كاملا في التخطيط
- التجربة العملية هي مفتاح الإتقان
- راجع الرابط في الوصف للمزيد من التمارين
