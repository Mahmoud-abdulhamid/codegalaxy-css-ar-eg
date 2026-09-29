# CSS User Interface Properties Challenge

المصدر: https://www.w3schools.com/css/css_challenges_css3_user_interface.asp

## مقدمة في CSS User Interface

مرحبا بكم في درس CSS User Interface. سنتعلم اليوم كيفية تحسين تجربة المستخدم في صفحات الويب.

- تطوير واجهة المستخدم باستخدام CSS
- التحكم في خصائص العناصر التفاعلية
- تحسين تجربة المستخدم عبر User Interface properties

## المفاهيم الأساسية

نستخدم خاصية resize للتحكم في حجم العناصر، و outline-offset لضبط المسافة بين العنصر والإطار الخارجي.

- خاصية resize للتحكم في تغيير حجم العناصر
- خاصية outline-offset لضبط المسافة الخارجية
- تطبيق هذه الخصائص على العناصر التفاعلية

## كود تطبيق الخصائص

نطبق خاصية resize مع overflow لتفعيل تغيير الحجم، ونستخدم outline-offset لتنسيق الإطار.

```css
div {
  resize: both;
  overflow: auto;
  border: 2px solid black;
  outline: 2px solid red;
  outline-offset: 10px;
  width: 200px;
  height: 100px;
}
```

## شرح تفصيلي للكود

قيمة both تسمح بتغيير الحجم في الاتجاهين، و outline-offset تزيد المسافة بين العنصر والإطار.

- resize: both تسمح بالتغيير في الاتجاهين
- overflow: auto ضرورية لعمل خاصية resize
- outline-offset تزيد المسافة بين العنصر والإطار

## معاينة النتيجة

تظهر النتيجة عنصرا قابلا لتغيير الحجم مع إطار خارجي متباعد عن الحواف.

```text
Element with resize handle
Visible outline with 10px offset
Dynamic width and height
```

## أفضل الممارسات

تأكد من ضبط overflow بشكل صحيح، واختبر التصميم في متصفحات مختلفة لضمان التوافقية.

- تجنب overflow: visible مع resize
- اختبار التوافقية في المتصفحات
- استخدام وحدات قياس مناسبة

## خلاصة الدرس

تعلمنا التحكم في واجهة المستخدم. جربوا الأكواد بأنفسكم وتابعوا التحديات عبر الرابط في الوصف.

- تمت تغطية خصائص User Interface
- تم شرح resize و outline-offset
- رابط التحدي متاح في الوصف
