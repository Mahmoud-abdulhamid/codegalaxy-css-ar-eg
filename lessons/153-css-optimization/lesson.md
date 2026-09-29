# CSS Performance Optimization

المصدر: https://www.w3schools.com/css/css_performance.asp

## مقدمة في تحسين أداء CSS

تحسين أداء CSS يجعل صفحات الويب أسرع وأكثر سلاسة للمستخدم.

- تحسين سرعة تحميل صفحات الويب
- تعزيز سلاسة التفاعل مع الموقع
- تحسين تجربة المستخدم النهائية

## استخدام Selectors بسيطة

تجنب Selectors المعقدة لتقليل وقت المعالجة.

```css
.button:hover {
  background-color: blue;
}
```

## تجنب Universal Selector

الاستخدام المفرط لـ Universal Selector يؤثر على أداء الصفحة.

```css
* {
  margin: 0;
  padding: 0;
}
```

## تجنب Inline Styles

Inline Styles تجعل ملفات HTML أكبر حجما وأصعب في الصيانة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div style="color: red;">Hello</div>
  </body>
</html>
```

## استخدام link بدلا من import

استخدم link في head لتحميل ملفات CSS بكفاءة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Styled Web Page</p>
  </body>
</html>
```

## استخدام Shorthand Properties

Shorthand Properties توفر المساحة وتسرع عملية المعالجة.

```css
margin: 10px 20px;
```

## تحسين Animations

استخدم خصائص مثل transforms و opacity لتحسين أداء Animations.

- إزالة Animations غير الضرورية
- استخدام transforms و opacity
- تجنب تغيير width و height في Animations

## خلاصة الدرس

تجميع الملفات وتفعيل Cache يساهمان في تحسين الأداء العام.

- تجميع ملفات CSS
- تصغير حجم الملفات Minify
- تفعيل Cache في إعدادات السيرفر
