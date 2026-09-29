# بناء قائمة تنقل أفقية قابلة للتمرير باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_menu_horizontal_scroll.asp

## مقدمة حول القوائم الأفقية

سنتعلم اليوم كيفية إنشاء قائمة تنقل أفقية قابلة للتمرير باستخدام CSS لتحسين تجربة المستخدم في صفحات الويب.

- إنشاء قائمة تنقل أفقية احترافية
- تحسين تجربة المستخدم في صفحات الويب
- استخدام تقنيات CSS الحديثة

## القواعد الأساسية للتمرير

نستخدم خاصية overflow: auto للسماح بالتمرير، وخاصية white-space: nowrap لمنع العناصر من الالتفاف لأسطر جديدة.

- overflow: auto لتفعيل شريط التمرير
- white-space: nowrap لمنع التفاف العناصر
- تنسيق العناصر كـ inline-block

## هيكل HTML للقائمة

نستخدم عنصر div مع class باسم scrollmenu لاحتواء روابط القائمة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="scrollmenu">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
  </body>
</html>
```

## تنسيق القائمة بـ CSS

نطبق التنسيقات اللازمة على div.scrollmenu والروابط بداخلها لضمان المظهر المطلوب.

```css
div.scrollmenu {
  background-color: #333;
  overflow: auto;
  white-space: nowrap;
}
div.scrollmenu a {
  display: inline-block;
  color: white;
  padding: 14px;
  text-decoration: none;
}
div.scrollmenu a:hover {
  background-color: #777;
}
```

## معاينة النتيجة

تظهر القائمة بشكل أفقي مع شريط تمرير تلقائي عند الحاجة.

```text
[ Home ] [ News ] [ Contact ] [ About ] [ Support ] [ Blog ] ...
```

## أفضل الممارسات

استخدام display: inline-block ضروري لترتيب العناصر أفقيا، مع مراعاة التباين اللوني.

- استخدام display: inline-block للروابط
- اختيار ألوان ذات تباين عال
- اختبار القائمة على أحجام شاشات مختلفة

## خاتمة الدرس

شكرا لمتابعتكم، جربوا الكود بأنفسكم وشاركوا نتائجكم.

- قم بتجربة الكود وتعديله
- راجع دروس CSS Navbar لمزيد من التفاصيل
- تابعونا في الدروس القادمة
