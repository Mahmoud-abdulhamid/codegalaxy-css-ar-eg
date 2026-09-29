# تصميم Split Button باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_button_split.asp

## مقدمة حول Split Button

تعلم كيفية إنشاء Split Button احترافي باستخدام CSS.

- الـ Split Button يجمع بين الزر والقائمة المنسدلة
- يعتمد على التفاعل مع الـ mouse hover
- يستخدم CSS للتحكم في التموضع والمظهر

## الهيكل البرمجي للـ Split Button

استخدام div كحاوية رئيسية لتنظيم الزر والقائمة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="dropdown">
      <button class="btn">Button</button>
      <button class="btn" style="border-left:1px solid navy">
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
      </div>
    </div>
  </body>
</html>
```

## تنسيق الزر والقائمة

تنسيق الزر وإخفاء القائمة المنسدلة افتراضيا.

```css
.btn {
  background-color: #2196F3; color: white; padding: 16px;
}
.dropdown {
  position: absolute; display: inline-block;
}
.dropdown-content {
  display: none; position: absolute; background-color: #f1f1f1;
}
```

## تفعيل القائمة عند الـ Hover

استخدام hover لإظهار القائمة المنسدلة.

```css
.dropdown:hover .dropdown-content {
  display: block;
}
.btn:hover, .dropdown:hover .btn {
  background-color: #0b7dda;
}
```

## معاينة النتيجة

النتيجة النهائية: قائمة منسدلة تظهر عند التفاعل.

```text
[ Button ] [ v ]
----------------
| Link 1       |
| Link 2       |
----------------
```

## ملاحظات هندسية

نصائح لتحسين تجربة المستخدم وتنسيق القوائم.

- استخدم z-index للتحكم في طبقات العناصر
- أضف hover effect لروابط القائمة
- تأكد من توافق الألوان مع هوية الموقع

## خلاصة الدرس

خلاصة: قم بتجربة الكود وتخصيصه لمشروعك.

- تم شرح هيكلية HTML للـ Split Button
- تم تطبيق CSS للتحكم في التموضع والظهور
- تم توضيح كيفية استخدام hover للتفاعل
