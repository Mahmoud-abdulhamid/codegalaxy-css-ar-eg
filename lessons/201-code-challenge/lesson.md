# CSS Tooltips Implementation

المصدر: https://www.w3schools.com/css/css_challenges_css_tooltip.asp

## مقدمة حول الـ Tooltips

تعد الـ Tooltips وسيلة فعالة لعرض معلومات إضافية للمستخدم عند التفاعل مع عناصر صفحة الويب.

- الـ Tooltips تعزز من تجربة المستخدم التفاعلية
- تعتمد بشكل أساسي على CSS و Pseudo-elements
- تظهر المعلومات عند التفاعل مع العنصر

## المفاهيم الأساسية للـ Tooltips

نستخدم position: relative للأب و position: absolute للـ Tooltip لضمان التموضع الصحيح.

- استخدام position: relative في الحاوية
- استخدام ::after لإنشاء محتوى الـ Tooltip
- تحديد الموقع باستخدام top و left و transform

## هيكلة الكود البرمجي

هيكل CSS الأساسي لإنشاء الـ Tooltip مع إخفاء العنصر افتراضيا.

```css
.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip::after {
  content: "Tooltip Text";
  visibility: hidden;
  position: absolute;
  background-color: black;
  color: white;
  padding: 5px;
}
```

## تفعيل الـ Tooltip عند الـ Hover

استخدام pseudo-class المسمى hover لإظهار الـ Tooltip عند تمرير الفأرة.

```css
.tooltip:hover::after {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s;
}
```

## معاينة النتيجة

النتيجة النهائية: ظهور الـ Tooltip بسلاسة عند تمرير الفأرة فوق العنصر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="tooltip">
      Hover over me
    </div>
  </body>
</html>
```

## أفضل الممارسات البرمجية

نصائح تقنية: استخدام z-index و transition لتحسين جودة وتجربة الـ Tooltip.

- استخدام z-index لضمان الترتيب الطبقي
- إضافة transition لتأثيرات بصرية ناعمة
- التأكد من التباين اللوني بين النص والخلفية

## خاتمة الدرس

شكرا لمتابعتكم! جربوا الأكواد بأنفسكم وطوروا مهاراتكم في CSS.

- راجعوا الكود المكتوب في الدرس
- جربوا إضافة خصائص CSS جديدة
- استمروا في ممارسة التحديات البرمجية
