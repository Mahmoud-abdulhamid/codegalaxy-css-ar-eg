# CSS Pagination Design

المصدر: https://www.w3schools.com/css/css_challenges_css3_pagination.asp

## مقدمة في CSS Pagination

مرحبا بكم في درس CSS Pagination لتنظيم المحتوى على صفحات الويب.

- نظام Pagination يسهل التنقل بين صفحات الموقع
- يستخدم CSS لتنسيق الروابط كأزرار جذابة
- يعزز من سهولة الوصول للمعلومات

## الهيكل البرمجي للـ Pagination

نستخدم عنصر div لتغليف الروابط وعناصر a لتمثيل أرقام الصفحات.

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
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">&raquo;</a>
    </div>
  </body>
</html>
```

## تنسيق الروابط بـ CSS

تنسيق الروابط باستخدام padding وإزالة التسطير لجعلها تبدو كأزرار.

```css
.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}
```

## إضافة تأثيرات التفاعل

استخدام hover لتغيير لون الخلفية عند مرور الفأرة فوق الزر.

```css
.pagination a:hover {
  background-color: #ddd;
}
```

## تحديد الصفحة النشطة

استخدام كلاس active لتمييز الصفحة الحالية بلون مختلف.

```css
.pagination a.active {
  background-color: #4CAF50;
  color: white;
}
```

## معاينة النتيجة النهائية

النتيجة النهائية لنظام Pagination التفاعلي في المتصفح.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- النتيجة في المتصفح -->
    < 1 2 3 >
  </body>
</html>
```

## خلاصة الدرس

خلاصة: Pagination الفعال يعزز تجربة المستخدم. جرب تعديل الأكواد بنفسك.

- استخدام div لتنظيم الروابط
- تطبيق hover للتفاعل
- استخدام active لتمييز الحالة
- التجربة هي مفتاح الإتقان
