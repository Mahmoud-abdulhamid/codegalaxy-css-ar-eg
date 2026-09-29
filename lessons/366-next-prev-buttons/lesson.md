# انشاء أزرارالتنقل Next و Previous باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_next_prev.asp

## مقدمة الدرس

تعلم كيفية إنشاء أزرار التنقل Next و Previous باستخدام CSS.

- تصميم أزرار التنقل لزيادة تفاعل المستخدم
- استخدام لغة CSS لتنسيق عناصر الروابط
- تحسين تجربة تصفح صفحات الويب

## هيكل عناصر HTML

استخدام عناصر HTML مع كلاسات مخصصة لتحديد أزرار التنقل.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <a href="#" class="previous">&laquo; Previous</a>
    <a href="#" class="next">Next &raquo;</a>
    <a href="#" class="previous round">&#8249;</a>
    <a href="#" class="next round">&#8250;</a>
  </body>
</html>
```

## تنسيق الروابط الأساسية

تنسيق عناصر a الأساسية بإلغاء التسطير وتحديد الخصائص العامة.

```css
a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}
```

## تأثير مرور المؤشر Hover

إضافة تأثير hover لتغيير الألوان عند مرور الماوس.

```css
a:hover {
  background-color: #ddd;
  color: black;
}
```

## تخصيص أزرار Previous و Next

تحديد ألوان الخلفية والنصوص لكل منprevious و next.

```css
.previous {
  background-color: #f1f1f1;
  color: black;
}
.next {
  background-color: #04AA6D;
  color: white;
}
```

## إنشاء الأزرار الدائرية Round

استخدام border-radius بقيمة 50 بالمائة لتكوين أزرار دائرية.

```css
.round {
  border-radius: 50%;
}
```

## مراجعة الكود الكامل

عرض الكود الكامل المدمج لتنسيق أزرار Next و Previous.

```css
a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}
a:hover {
  background-color: #ddd;
  color: black;
}
.previous {
  background-color: #f1f1f1;
  color: black;
}
.next {
  background-color: #04AA6D;
  color: white;
}
.round {
  border-radius: 50%;
}
```

## الخلاصة والمحاكاة

خلاصة الدرس ودعوة لتجربة الأكواد بأنفسكم.

- تلخيص مهارات تنسيق الروابط والأزرار
- أهمية تطبيق border-radius للأشكال الدائرية
- تجربة الأكواد وتطبيقها العملي
