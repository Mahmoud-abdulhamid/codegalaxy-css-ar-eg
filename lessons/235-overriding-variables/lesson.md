# CSS Overriding Variables

المصدر: https://www.w3schools.com/css/css3_variables_overriding.asp

## مقدمة في CSS Variables

مرحبا بكم في درس CSS Overriding Variables. سنتعلم اليوم كيفية التحكم في المتغيرات وتجاوز قيمها.

- المتغيرات العالمية Global Variables متاحة في كامل المستند
- المتغيرات المحلية Local Variables محدودة بنطاق Selector معين
- تجاوز القيم يسمح بتخصيص أجزاء محددة من الصفحة

## مفهوم النطاق في المتغيرات

تعرف المتغيرات العالمية في :root بينما تعرف المتغيرات المحلية داخل محددات معينة.

## تعريف المتغيرات الأساسية

تعريف المتغيرات العامة في :root لتكون متاحة في كامل المستند.

```css
:root {
  --primary-bg-color: #1e90ff;
  --primary-color: #ffffff;
}
body {
  background-color: var(--primary-bg-color);
}
```

## تطبيق الـ Override

إعادة تعريف المتغير داخل .note يؤدي إلى تجاوز القيمة العالمية.

```css
.container .note {
  --primary-bg-color: red;
  border: 1px solid var(--primary-bg-color);
  padding: 10px;
}
```

## معاينة النتيجة

تظهر العناصر بحدود حمراء داخل .note بينما تستخدم العناصر الأخرى اللون الأزرق.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <h2>Title</h2>
      <p class="note">This is a note with red border.</p>
    </div>
  </body>
</html>
```

## استخدام متغير محلي جديد

يمكن تعريف متغير محلي جديد بدلا من تجاوز المتغير العام.

```css
.container .note {
  --note-border-color: red;
  border: 1px solid var(--note-border-color);
  padding: 10px;
}
```

## ملاحظات هندسية

أفضل الممارسات: استخدم أسماء واضحة وحافظ على نطاق المتغيرات ضيقا.

- أسماء المتغيرات حساسة لحالة الأحرف
- استخدم أسماء وصفية للمتغيرات
- قلل من التجاوزات غير الضرورية
- نظم المتغيرات في :root للقيم العامة

## خلاصة الدرس

شكرا لمتابعتكم. جربوا الأكواد بأنفسكم عبر الرابط في الوصف.

- تعلمنا كيفية تجاوز المتغيرات العالمية
- فهمنا الفرق بين النطاق العام والمحلي
- طبقنا أمثلة عملية على .note
- راجعوا الرابط في الوصف للتطبيق العملي
