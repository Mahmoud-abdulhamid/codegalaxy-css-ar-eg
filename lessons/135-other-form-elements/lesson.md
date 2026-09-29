# CSS Form Elements Styling

المصدر: https://www.w3schools.com/css/css_form_elements.asp

## مقدمة في تنسيق عناصر النماذج

مرحبا بكم في درس تنسيق عناصر النماذج باستخدام CSS لجعل صفحات الويب أكثر احترافية.

- تنسيق textarea
- تنسيق select
- تنسيق أزرار النماذج
- تصميم نماذج متجاوبة

## تنسيق textarea

يمكن التحكم في حجم textarea وإزالة أداة التحجيم باستخدام خاصية resize.

```css
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  resize: none;
}
```

## تنسيق عناصر select

تنسيق القوائم المنسدلة select لجعلها تبدو أكثر عصرية.

```css
select {
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
}
```

## تنسيق أزرار النماذج

تنسيق أزرار النماذج باستخدام CSS لجعلها تفاعلية وجذابة.

```css
input[type=button], input[type=submit] {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 16px 32px;
  cursor: pointer;
}
```

## التصميم المتجاوب

استخدام Media Queries لضمان تجاوب النموذج مع مختلف أحجام الشاشات.

```css
@media screen and (max-width: 600px) {
  input, select, textarea {
    width: 100%;
    margin-top: 0;
  }
}
```

## معاينة المخرجات

معاينة مخرجات التنسيق في المتصفح.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- نموذج منسق -->
    <form>
      <input type='text' placeholder='Name'>
      <textarea>Message</textarea>
      <input type='submit' value='Send'>
    </form>
  </body>
</html>
```

## خلاصة الدرس

خلاصة: CSS يمنحك تحكما كاملا في مظهر عناصر النماذج وتجاوبها.

- استخدم resize: none لـ textarea
- استخدم border-radius لتنعيم الزوايا
- استخدم Media Queries للتجاوب
- جرب الأكواد بنفسك عبر الرابط
