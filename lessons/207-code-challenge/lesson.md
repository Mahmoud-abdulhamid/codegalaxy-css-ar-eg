# CSS Image Modal Challenge

المصدر: https://www.w3schools.com/css/css_challenges_imagemodal.asp

## مقدمة حول Image Modal

مرحبا بكم في درس CSS الجديد. سنتعلم اليوم كيفية بناء Image Modal احترافي لعرض الصور بحجمها الكامل عند النقر عليها.

- تعريف الـ Image Modal في صفحات الويب
- أهمية التفاعل مع الصور لتحسين تجربة المستخدم
- استخدام CSS للتحكم في ظهور العناصر

## المفاهيم الأساسية للـ Modal

نحتاج لفهم خاصية display وتقنيات الـ Positioning مثل fixed لتثبيت الـ Modal فوق المحتوى مع استخدام z-index.

- استخدام display: none لإخفاء الـ Modal
- استخدام position: fixed لتغطية الشاشة
- استخدام z-index للتحكم في طبقات العناصر

## هيكلة الكود الأساسي

نستخدم div لتمثيل الـ Modal، ونضع داخله img للصورة و span للإغلاق لضمان سهولة التحكم.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div id="myModal" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="img01">
    </div>
  </body>
</html>
```

## تنسيق الـ Modal باستخدام CSS

نضبط display على none، ونحدد position بقيمة fixed مع تعيين الأبعاد لتغطية الشاشة بخلفية شفافة.

```css
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
}
```

## تفعيل التفاعل

نغير قيمة display إلى block عند النقر باستخدام JavaScript بسيطة لتغيير الـ style للعنصر.

```javascript
modal.style.display = "block";
modalImg.src = this.src;
// للإغلاق
modal.style.display = "none";
```

## أفضل الممارسات

تذكروا ضبط z-index لتجنب تداخل العناصر، وأضيفوا transition لجعل ظهور الـ Modal أكثر نعومة.

- استخدام z-index بحذر
- إضافة transition لتأثيرات سلسة
- اختبار التجاوب مع مختلف الشاشات

## خاتمة الدرس

أتممنا تحدي الـ Image Modal. أدعوكم لتجربة الكود وتطويره. شكرا لمتابعتكم، وإلى اللقاء في درس قادم.

- راجعوا الكود كاملا من الرابط
- طبقوا التحدي بأنفسكم
- استعدوا للدرس القادم
