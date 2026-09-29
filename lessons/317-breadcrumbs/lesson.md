# تصميم Breadcrumb Navigation باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_breadcrumbs.asp

## مقدمة عن Breadcrumb Navigation

تعد Breadcrumb Navigation أداة تنقل أساسية تساعد المستخدم في تتبع موقعه داخل موقع الويب.

- تستخدم Breadcrumb Navigation لتحسين تجربة المستخدم
- توضح المسار الهرمي للموقع
- تعتمد على HTML و CSS

## هيكل HTML الخاص بـ Breadcrumb

نستخدم ul و li لبناء هيكل قائمة التنقل.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <ul class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">Pictures</a></li>
      <li><a href="#">Summer 15</a></li>
      <li>Italy</li>
    </ul>
  </body>
</html>
```

## تنسيق القائمة باستخدام CSS

تنسيق القائمة الأساسي لإزالة النقاط وترتيب العناصر أفقيا.

```css
ul.breadcrumb {
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;
}
ul.breadcrumb li {
  display: inline;
  font-size: 18px;
}
```

## إضافة الفواصل باستخدام pseudo-elements

استخدام pseudo-element لإضافة الفواصل بين عناصر القائمة.

```css
ul.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}
```

## تنسيق الروابط والتفاعل

تنسيق الروابط وإضافة تأثيرات التفاعل عند المرور.

```css
ul.breadcrumb li a {
  color: #0275d8;
  text-decoration: none;
}
ul.breadcrumb li a:hover {
  color: #01447e;
  text-decoration: underline;
}
```

## معاينة النتيجة النهائية

النتيجة النهائية: شريط تنقل احترافي وأنيق.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    Home / Pictures / Summer 15 / Italy
  </body>
</html>
```

## خلاصة الدرس

شكرا لمتابعتكم، لا تترددوا في تجربة الكود وتخصيصه.

- استخدام ul و li للهيكل
- استخدام display: inline للترتيب الأفقي
- استخدام pseudo-elements للفواصل
- تخصيص الألوان عبر CSS
