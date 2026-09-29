# بناء معرض صور متجاوب باستخدام CSS Flexbox

المصدر: https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp

## مقدمة حول Responsive Image Grid

مرحبا بكم في درس بناء معرض صور متجاوب باستخدام تقنية Flexbox.

- إنشاء معرض صور احترافي ومتجاوب
- استخدام CSS Flexbox لتنظيم العناصر
- تغيير عدد الأعمدة بناء على حجم الشاشة
- تحسين تجربة المستخدم عبر مختلف الأجهزة

## الهيكل البرمجي للمعرض

الهيكل البرمجي يستخدم div كحاوية رئيسية row وأعمدة column تحتوي على عناصر img.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="row">
      <div class="column">
        <img src="wedding.jpg">
        <img src="rocks.jpg">
      </div>
      <div class="column">
        <img src="underwater.jpg">
        <img src="ocean.jpg">
      </div>
    </div>
  </body>
</html>
```

## تنسيق الشبكة باستخدام Flexbox

تنسيق الحاوية باستخدام display: flex وتحديد عرض الأعمدة بنسبة 25.

```css
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}
```

## تنسيق الصور داخل الأعمدة

تنسيق الصور لتأخذ كامل عرض العمود مع ضبط المحاذاة العمودية.

```css
.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}
```

## تطبيق التجاوب عبر Media Queries

استخدام Media Queries لتغيير عدد الأعمدة بناء على عرض الشاشة.

```css
@media screen and (max-width: 800px) {
  .column {
    flex: 50%; max-width: 50%;
  }
}
@media screen and (max-width: 600px) {
  .column {
    flex: 100%; max-width: 100%;
  }
}
```

## معاينة النتيجة النهائية

معاينة المعرض المتجاوب الذي يتكيف مع مختلف أحجام الشاشات.

```text
Desktop: 4 Columns
Tablet: 2 Columns
Mobile: 1 Column (Full Width)
```

## خلاصة الدرس

خلاصة: استخدمنا Flexbox و Media Queries لبناء معرض صور متجاوب.

- Flexbox يسهل توزيع العناصر
- Media Queries أساس التجاوب
- التصميم المتجاوب يحسن تجربة المستخدم
- جرب الكود بنفسك عبر الرابط في الوصف
