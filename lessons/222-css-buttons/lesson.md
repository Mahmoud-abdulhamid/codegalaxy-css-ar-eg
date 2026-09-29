# CSS Styling Buttons

المصدر: https://www.w3schools.com/css/css3_buttons.asp

## مقدمة في تنسيق الأزرار

مرحبا بكم في درس تنسيق الأزرار باستخدام CSS. سنتعلم اليوم كيفية تحويل عناصر HTML إلى أزرار جذابة لتحسين تجربة المستخدم في صفحة الويب.

- استخدام CSS لتنسيق عناصر button و input و a
- التحكم الكامل في المظهر المرئي للأزرار
- تحسين تفاعل المستخدم مع عناصر الويب

## تنسيق الأزرار الأساسي

نستخدم خصائص CSS مثل background-color و border و padding لتصميم زر أساسي، مع ضبط cursor ليكون pointer عند التفاعل.

```css
.button {
  background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}
```

## ألوان الأزرار

استخدام خاصية background-color لتغيير ألوان الأزرار، وخاصية color لتغيير لون النص داخل الزر.

```css
.button1 {
  background-color: #04AA6D;
}
.button2 {
  background-color: #008CBA;
}
.button3 {
  background-color: #f44336;
}
.button4 {
  background-color: #e7e7e7; color: black;
}
```

## أحجام الأزرار

التحكم في حجم الزر باستخدام font-size للنص، و padding لضبط المساحة الداخلية.

```css
.button1 {
  font-size: 10px; padding: 10px 24px;
}
.button3 {
  font-size: 16px; padding: 14px 40px;
}
.button5 {
  font-size: 24px; padding: 16px;
}
```

## الأزرار الدائرية

استخدام خاصية border-radius لإضافة زوايا دائرية للأزرار، مع إمكانية استخدام 50 للحصول على شكل بيضاوي.

```css
.button3 {
  border-radius: 8px;
}
.button5 {
  border-radius: 50%;
}
```

## حدود الأزرار

استخدام خاصية border لتحديد نمط وسمك حدود الزر، مثل solid أو dotted أو dashed.

```css
.button1 {
  border: 2px solid #04AA6D;
}
.button2 {
  border: 2px dotted #008CBA;
}
.button3 {
  border: 2px dashed #f44336;
}
```

## خلاصة الدرس

خلاصة: تعلمنا تصميم أزرار احترافية باستخدام CSS. جربوا الأكواد بأنفسكم عبر الرابط في الوصف.

- استخدام background-color و color للألوان
- ضبط الحجم عبر font-size و padding
- تجميل الزوايا بـ border-radius
- تخصيص الحدود باستخدام border
