# بناء قائمة Dropdown تفاعلية باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_dropdown.asp

## مقدمة حول Dropdown

سنتعلم اليوم كيفية بناء قائمة Dropdown تفاعلية تظهر عند تحريك الفأرة فوق عنصر معين.

- قائمة Dropdown هي قائمة قابلة للتبديل
- تسمح للمستخدم باختيار قيمة من قائمة محددة
- تعتمد على CSS للتحكم في الظهور والإخفاء

## هيكل HTML للقائمة

نستخدم div كحاوية رئيسية تحتوي على زر الفتح ومحتوى القائمة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="dropdown">
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  </body>
</html>
```

## تنسيق الزر والحاوية

نستخدم position: relative للحاوية لضمان تموضع القائمة بشكل صحيح.

```css
.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}
.dropdown {
  position: relative;
  display: inline-block;
}
```

## إخفاء وإظهار المحتوى

يتم إخفاء القائمة افتراضيا وإظهارها عند تمرير الفأرة.

```css
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
```

## تنسيق الروابط

تنسيق الروابط داخل القائمة مع إضافة تأثير عند التمرير.

```css
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  background-color: #ddd;
}
```

## ملاحظات هندسية

استخدم z-index للتحكم في طبقات العناصر.

- استخدم box-shadow لإعطاء مظهر البطاقة
- استخدم z-index لترتيب العناصر فوق بعضها
- يمكنك تغيير min-width حسب الحاجة
- استخدم overflow: auto للتمرير في الشاشات الصغيرة

## خاتمة الدرس

لقد قمنا ببناء قائمة Dropdown احترافية. جربوا الأكواد بأنفسكم!

- راجعوا الكود كاملا في المصدر
- جربوا تغيير الألوان والأحجام
- طبقوا المفهوم في مشاريعكم
- تابعوا الدروس القادمة للمزيد
