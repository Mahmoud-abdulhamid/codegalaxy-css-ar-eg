# شرح إنشاء وتنسيق Tooltip في CSS

المصدر: https://www.w3schools.com/css/css_tooltip.asp

## مقدمة عن CSS Tooltip

تعرف على كيفية إنشاء وتنسيق Tooltip لعرض معلومات إضافية عند تحويم المؤشر فوق عناصر الويب.

- تستخدم لغة CSS لتصميم عناصر Tooltip
- عرض معلومات إضافية عند تحويم المؤشر
- تحسين تجربة المستخدم في صفحات الويب

## إنشاء حاوية Tooltip الأساسية

إنشاء حاوية Tooltip باستخدام الكلاس الخاص وتحديد موقع العنصر وحجمه.

```css
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  cursor: pointer;
}
```

## تنسيق نص Tooltip المخفي

تنسيق نص Tooltip وإخفاؤه افتراضيا باستخدام visibility hidden وتحديد خصائص التموضع.

```css
.tooltiptext {
  visibility: hidden;
  width: 130px;
  background-color: black;
  color: #ffffff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
}
```

## إظهار Tooltip عند التحويم

استخدام محدد hover لإظهار نص Tooltip عند تحويم المؤشر فوق الحاوية.

```css
.tooltip:hover .tooltiptext {
  visibility: visible;
}
```

## معاينة Tooltip الأساسي في المتصفح

معاينة النتيجة المرئية لعنصر Tooltip بعد اكتمال التنسيق.

## محاذاة Tooltip لليمين واليسار

محاذاة Tooltip لليمين أو اليسار باستخدام خصائص التموضع والمسافات.

```css
.tooltiptext {
  top: -5px;
  left: 105%;
}
```

## محاذاة Tooltip للأعلى والأسفل

محاذاة Tooltip للأعلى أو الأسفل وتوسيطه باستخدام margin-left بالسالب.

```css
.tooltiptext {
  width: 130px;
  bottom: 100%;
  left: 50%;
  margin-left: -65px;
}
```

## إضافة تأثير التلاشي Fade-in

إضافة تأثير التلاشي والانتقال السلس باستخدام خصائص transition وopacity.

```css
.tooltiptext {
  opacity: 0;
  transition: opacity 2s;
}
.tooltip:hover .tooltiptext {
  opacity: 1;
}
```

## خلاصة الدرس

خلاصة درس CSS Tooltip وأهم ممارسات التصميم والتنسيق.

- إتقان بناء عناصر Tooltip بالكامل
- التحكم الكامل في اتجاهات ومواقع العنصر
- تطبيق تأثيرات الانتقال والتلاشي باحترافية
