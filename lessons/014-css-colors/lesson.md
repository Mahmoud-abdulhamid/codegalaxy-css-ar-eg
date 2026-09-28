# CSS Colors

المصدر: https://www.w3schools.com/css/css_colors.asp

## مقدمة في CSS Colors

تعد الألوان عنصرا جوهريا في تصميم وتجميل محتوى صفحات الويب وجذب انتباه المستخدم.

- تحديد الألوان باستخدام الأسماء
- استخدام قيم RGB و HEX و HSL
- تطبيق الألوان على الخلفيات والنصوص
- التحكم في شفافية الألوان

## استخدام أسماء الألوان

توفر لغة CSS مئة وأربعين اسما قياسيا للألوان يمكن استخدامها مباشرة في خصائص CSS.

- استخدام أسماء الألوان مثل Tomato و DodgerBlue
- سهولة القراءة والفهم للمطورين
- دعم كامل في جميع متصفحات الويب

## تطبيق لون الخلفية

نستخدم خاصية background-color لتغيير لون خلفية العناصر مثل h1 و p.

```html
<h1 style="background-color:DodgerBlue;">
  Hello World
</h1>
<p style="background-color:Tomato;">
  Lorem ipsum...
</p>
```

## تغيير لون النصوص

تستخدم خاصية color لتغيير لون النصوص داخل العناصر المختلفة.

```html
<h1 style="color:Tomato;">Hello</h1>
<p style="color:DodgerBlue;">
  Lorem ipsum...
</p>
<p style="color:MediumSeaGreen;">
  Ut wisi enim...
</p>
```

## تلوين الحدود

يمكن تلوين حدود العناصر باستخدام خاصية border مع تحديد السمك والنوع واللون.

```html
<h1 style="border:2px solid Tomato;">
  Hello World
</h1>
<h1 style="border:2px solid DodgerBlue;">
  Hello World
</h1>
```

## قيم الألوان المتقدمة

استخدام قيم RGB و HEX و HSL يمنح دقة أكبر، بينما توفر RGBA و HSLA تحكما في الشفافية.

```css
background-color: rgb(255, 99, 71);
background-color: #ff6347;
background-color: hsl(9, 100%, 64%);
background-color: rgba(255, 99, 71, 0.5);
```

## خلاصة الدرس

تعلمنا كيفية إضافة الحياة لصفحات الويب باستخدام الألوان. جربوا الأكواد بأنفسكم لاستكشاف المزيد.

- استخدام أسماء الألوان للسهولة
- استخدام RGB و HEX للدقة
- استخدام RGBA للشفافية
- تطبيق الألوان على الخلفية والنص والحدود
