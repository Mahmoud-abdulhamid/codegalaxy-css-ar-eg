# تصميم Pagination احترافي باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_pagination.asp

## مقدمة حول الـ Pagination

تعلم كيفية إنشاء Pagination احترافي لتنظيم المحتوى في صفحات الويب باستخدام CSS.

- الـ Pagination أداة أساسية لتنظيم البيانات
- يساعد في تحسين تجربة المستخدم
- يعتمد على HTML للهيكل وCSS للتنسيق

## هيكل الـ HTML للـ Pagination

هيكل HTML يتكون من div يحتوي على روابط a لتمثيل أرقام الصفحات.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a class="active" href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  </body>
</html>
```

## تنسيق الروابط الأساسي

تنسيق الروابط باستخدام float وpadding لجعلها تظهر في صف واحد.

```css
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color .3s;
}
```

## تنسيق الحالة النشطة

تخصيص الحالة النشطة active باستخدام ألوان مميزة لجذب انتباه المستخدم.

```css
.pagination a.active {
  background-color: dodgerblue;
  color: white;
}
```

## إضافة تأثير التفاعل

استخدام hover لإضافة تأثير بصري عند مرور الفأرة على الروابط.

```css
.pagination a:hover:not(.active) {
  background-color: #ddd;
}
```

## معاينة النتيجة

النتيجة النهائية للـ Pagination تظهر كشريط تنقل أفقي تفاعلي.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- النتيجة المرئية -->
    [ « ] [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] [ 6 ] [ » ]
  </body>
</html>
```

## خلاصة الدرس

خلاصة: Pagination هو أداة مرنة يمكن تخصيصها بسهولة لتناسب هوية موقعك البصرية.

- استخدم div كحاوية رئيسية
- استخدم a للروابط
- استخدم hover لتحسين التفاعل
- استخدم active لتمييز الصفحة الحالية
