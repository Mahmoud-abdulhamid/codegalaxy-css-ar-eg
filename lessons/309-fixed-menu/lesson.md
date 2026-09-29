# تصميم قائمة تنقل ثابتة باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_fixed_menu.asp

## مقدمة حول القوائم الثابتة

سنتعلم اليوم كيفية بناء قائمة تنقل ثابتة Fixed Menu تبقى ظاهرة أثناء التمرير في صفحة الويب.

- القائمة الثابتة تبقى في مكانها أثناء التمرير
- تستخدم خاصية position: fixed
- تعتبر عنصرا أساسيا في تصميم تجربة المستخدم

## القواعد البرمجية الأساسية

نستخدم خاصية position بقيمة fixed لجعل العنصر ثابتا، مع تحديد top أو bottom لضبط موقعه.

- position: fixed يثبت العنصر في الشاشة
- top: 0 يثبت القائمة في الأعلى
- bottom: 0 يثبت القائمة في الأسفل
- width: 100 لضمان تغطية العرض بالكامل

## هيكل HTML للقائمة

نستخدم div بكلاس navbar للروابط و div بكلاس main للمحتوى الرئيسي.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="navbar">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="main">
      <p>Some text here..</p>
    </div>
  </body>
</html>
```

## تنسيق القائمة الثابتة

نقوم بتنسيق navbar وتحديد position: fixed، مع إضافة margin-top للمحتوى لتجنب التداخل.

```css
.navbar {
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
}
.main {
  margin-top: 30px;
}
.navbar a {
  float: left;
  padding: 14px 16px;
  text-decoration: none;
  color: #f2f2f2;
}
```

## إنشاء قائمة سفلية

للقائمة السفلية نستخدم bottom: 0 ونضيف margin-bottom للمحتوى.

```css
.navbar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.main {
  margin-bottom: 30px;
}
```

## خلاصة الدرس

تعلمنا التحكم في مواقع العناصر باستخدام position وتجنب التداخل باستخدام margin.

- استخدام position: fixed للتثبيت
- ضبط top أو bottom للموقع
- استخدام margin لتجنب تداخل المحتوى
- تجربة الأكواد هي مفتاح الإتقان
