# CSS User Interface Properties

المصدر: https://www.w3schools.com/css/css3_user_interface.asp

## مقدمة في CSS User Interface

مرحبا بكم في درس CSS User Interface للتحكم في تفاعل المستخدم مع عناصر الويب.

- التحكم في تغيير حجم العناصر باستخدام resize
- إضافة مسافة بين الحدود و outline باستخدام outline-offset
- تحسين تجربة المستخدم في صفحات الويب

## خاصية resize

تسمح خاصية resize للمستخدم بتغيير حجم العنصر، بشرط ضبط overflow على auto أو scroll.

- resize: horizontal (تغيير العرض فقط)
- resize: vertical (تغيير الارتفاع فقط)
- resize: both (تغيير العرض والارتفاع)
- resize: none (تعطيل تغيير الحجم)

## أمثلة على خاصية resize

أمثلة برمجية توضح كيفية التحكم في اتجاه تغيير حجم العناصر.

```css
div {
  resize: horizontal; overflow: auto;
}
div {
  resize: vertical; overflow: auto;
}
textarea {
  resize: none;
}
```

## خاصية outline-offset

تضيف outline-offset مسافة شفافة بين border و outline دون التأثير على أبعاد العنصر.

- outline-offset يضيف مساحة شفافة
- outline لا يؤثر على أبعاد العنصر
- يمكن أن يتداخل outline مع المحتوى الآخر

## كود outline-offset

تطبيق عملي لاستخدام outline-offset مع border و outline.

```css
div.ex1 {
  border: 1px solid black;
  outline: 4px solid red;
  outline-offset: 15px;
}
```

## معاينة المخرجات

نتيجة تنفيذ الكود: عنصر قابل لتغيير الحجم مع مسافة outline واضحة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="ex1">هذا العنصر له حدود و outline</div>
  </body>
</html>
```

## خلاصة الدرس

خلاصة: استخدم resize للتحكم في الحجم و outline-offset لتنسيق الخطوط الخارجية.

- resize تتحكم في قابلية تغيير حجم العنصر
- outline-offset تضيف مسافة شفافة بين border و outline
- تذكر دائما ضبط overflow عند استخدام resize
