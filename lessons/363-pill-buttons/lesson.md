# تصميم أزرار Pill Buttons باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_pill_button.asp

## مقدمة حول Pill Buttons

تعلم كيفية إنشاء Pill Buttons جذابة باستخدام CSS لتحسين تصميم واجهة المستخدم.

- ما هي Pill Buttons؟
- أهمية التصميم في واجهة المستخدم
- استخدام CSS للتحكم في الأشكال

## هيكل الزر في HTML

نبدأ بإنشاء عنصر button في HTML مع إعطائه class باسم button.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <button class="button">Pill Button</button>
  </body>
</html>
```

## تنسيق الزر الأساسي

تنسيق الخلفية والحدود ولون النص للزر باستخدام CSS.

```css
.button {
  background-color: #ddd;
  border: none;
  color: black;
  padding: 10px 20px;
}
```

## إضافة التباعد والمحاذاة

ضبط المحاذاة والمسافات الخارجية والداخلية لعنصر الزر.

```css
.button {
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
}
```

## سر الشكل البيضاوي

استخدام border-radius بقيمة 16px لإنشاء الحواف المستديرة للزر.

```css
.button {
  border-radius: 16px;
}
```

## معاينة النتيجة

النتيجة النهائية للزر بعد تطبيق كافة تنسيقات CSS.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <button class="button">Pill Button</button>
  </body>
</html>
```

## خلاصة الدرس

خلاصة: Pill Buttons تعتمد بشكل أساسي على border-radius. جرب تغيير القيم بنفسك!

- استخدام border-radius للتحكم في الانحناء
- تنسيق الأزرار يعزز تجربة المستخدم
- قم بزيارة الرابط لتجربة الكود مباشرة
