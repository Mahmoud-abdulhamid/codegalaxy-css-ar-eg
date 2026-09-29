# CSS Tooltip Arrows

المصدر: https://www.w3schools.com/css/css_tooltip_arrows.asp

## مقدمة تصميم Tooltip Arrows

تعلم كيفية إضافة أسهم جذابة لعناصر Tooltip لتشبه فقاعات الحوار.

- بناء أسهم المؤشرات باستخدام CSS
- تحويل المؤشرات إلى فقاعات حوار
- استخدام العناصر الوهمية class::after

## استخدام pseudo-element و content

استخدام class::after مع خاصية content لإنشاء محتوى السهم.

- استخدام class::after لإضافة محتوى وهمي
- الاعتماد على خاصية content الفارغة
- رسم السهم باستخدام الخصائص البصرية للحدود

## كود Bottom Arrow

كود CSS لإنشاء سهم في أسفل Tooltiptext.

```css
.tooltiptext::after {
  content: " ";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}
```

## شرح خصائص الحدود والحجم

ضبط حجم السهم ومحافظته على التمركز باستخدام margin-left.

- border-width يحدد سمك وحجم السهم
- margin-left بنصف القيمة السالبة يحافظ على التمركز
- استخدام الألوان الشفافة لقص شكل المثلث

## كود Top Arrow

كود CSS لإضافة سهم في أعلى Tooltiptext.

```css
.tooltiptext::after {
  content: " ";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}
```

## كود Left Arrow

كود CSS لإضافة سهم على يسار Tooltiptext.

```css
.tooltiptext::after {
  content: " ";
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent black transparent transparent;
}
```

## كود Right Arrow

كود CSS لإضافة سهم على يمين Tooltiptext.

```css
.tooltiptext::after {
  content: " ";
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent black;
}
```

## خلاصة تصميم Tooltip Arrows

خلاصة درس تصميم أسهم المؤشرات بجميع الاتجاهات.

- استخدام الحدود الملونة لقص المثلثات
- التحكم الكامل بالاتجاهات الأربعة
- تطبيق ممارسات CSS المتقدمة باحترافية
