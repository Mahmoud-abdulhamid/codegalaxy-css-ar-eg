# CSS 3D Transforms Perspective

المصدر: https://www.w3schools.com/css/css3_3dtransforms_perspective.asp

## مقدمة حول الفضاء ثلاثي الأبعاد وperspective

مرحبا بكم في درس CSS الجديد. سنتعرف كيف نفعل فضاء ثلاثي الأبعاد باستخدام مفهوم perspective لتحديد المسافة بين المشاهد والعنصر.

- تفعيل الفضاء الثلاثي الأبعاد يتطلب استخدام perspective
- يحدد perspective المسافة بين المستخدم والعنصر
- بدون perspective ستظهر التحويلات بشكل مسطح

## تأثير القيم المختلفة على تأثير 3D

القيم المنخفضة تعطي تأثيرا قويا لثلاثي الأبعاد بينما القيم العالية تعطي تأثيرا خفيفا وهادئا.

- القيمة perspective: 200px تخلق تأثيرا قويا وقريبا
- القيمة perspective: 2000px تخلق تأثيرا خفيفا وبعيدا
- الغياب التام للخاصية يجعل العناصر تبدو ثنائية الأبعاد

## استخدام خاصية perspective على العنصر الأب

الطريقة الأولى هي استخدام خاصية perspective على العنصر الأب لتتشارك جميع العناصر الأبناء نفس الفضاء.

- توضع الخاصية perspective على الـ parent element
- تتشارك جميع الـ children نفس الفضاء الثلاثي الأبعاد
- تضمن توحيد نقطة الرؤية لجميع الأبناء معا

## الكود الأول: خاصية perspective على الأب

نحدد خاصية perspective بقيمة 500 بكسل على العنصر الحاضن container ونطبق rotateY على العنصر الفرعي.

```css
.container {
  width: 180px;
  height: 180px;
  border: 1px solid lightgray;
  margin: 30px;
  perspective: 500px;
}
.box {
  width: 100%;
  height: 100%;
  background-color: green;
  transform: rotateY(45deg);
}
```

## استخدام دالة perspective داخل transform

الطريقة الثانية هي استخدام دالة perspective() مباشرة داخل خاصية transform لتطبيقه على عنصر مفرد.

- تكتب الدالة بالشكل perspective(500px)
- توضع مباشرة ضمن قيم خاصية transform
- تؤثر على العنصر الفردي ولا تشترك مع الأبناء الآخرين

## الكود الثاني: دالة perspective داخل transform

نكتب دالة perspective داخل خاصية transform مع rotateY لنحصل على نفس النتيجة البصرية تماما.

```css
.container {
  width: 180px;
  height: 180px;
  border: 1px solid lightgray;
  margin: 30px;
}
.box {
  width: 100%;
  height: 100%;
  background-color: green;
  transform: perspective(500px) rotateY(45deg);
}
```

## مقارنة هندسية وخلاصة شاملة

الخاصية للأب تتشاركها جميع العناصر، بينما الدالة تخص عنصرا منفردا. شكرا لحسن متابعتكم.

- الخاصية للـ parent توفر فضاء مشتركا لجميع الأبناء
- الدالة perspective() مخصصة لعنصر فردي مستقل
- كلا الطريقتين تنتجان تأثيرا بصريا متطابقا ودقيقا
