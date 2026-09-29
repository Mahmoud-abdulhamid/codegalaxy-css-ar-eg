# إنشاء Dropup Menu باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_dropup.asp

## مقدمة عن Dropup Menu

مرحبا بكم في درس إنشاء Dropup Menu باستخدام CSS لتوفير خيارات تفاعلية.

- تعريف Dropup Menu وقوائم الاختيار
- أهمية القوائم التفاعلية في تصميم الويب
- استخدام CSS للتحكم في ظهور المحتوى

## هيكل HTML للقائمة

بناء هيكل القائمة باستخدام عناصر div و button وروابط a داخل HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="dropup">
      <button class="dropbtn">Dropup</button>
      <div class="dropup-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  </body>
</html>
```

## تنسيق زر Dropup Button

تنسيق الزر الرئيسي بتحديد لون الخلفية والحشو وإزالة الحدود.

```css
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}
```

## إعداد الحاوية الرئيسية position relative

استخدام position relative للعنصر الحاوية لتثبيت موضع القائمة بدقة.

```css
.dropup {
  position: relative;
  display: inline-block;
}
```

## تنسيق محتوى القائمة المخفي

إخفاء المحتوى افتراضيا وتحديد موضع الظهور باستخدام absolute و bottom.

```css
.dropup-content {
  display: none;
  position: absolute;
  bottom: 50px;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
```

## تنسيق الروابط وتأثير hover

تنسيق الروابط الداخلية وتطبيق تأثير hover لتغيير الخلفية عند التمرير.

```css
.dropup-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropup-content a:hover {
  background-color: #ddd;
}
```

## إظهار القائمة وتغيير لون الزر

استخدام hover لإظهار القائمة وتحديث لون زر التفعيل.

```css
.dropup:hover .dropup-content {
  display: block;
}
.dropup:hover .dropbtn {
  background-color: #2980B9;
}
```

## خلاصة الدرس

خلاصة درس إنشاء Dropup Menu واحتراف خصائص CSS التفاعلية.

- بناء هيكل HTML للقوائم المنسدلة للأعلى
- استخدام position absolute و relative للتحكم في الموضع
- تفعيل القائمة وإظهارها باستخدام hover selector
