# CSS Navigation Bars

المصدر: https://www.w3schools.com/css/css_navbar.asp

## مقدمة حول Navigation Bars

تعد Navigation Bars عنصرا حيويا في تصميم الويب لتسهيل التنقل بين صفحات الموقع.

- Navigation Bars تسهل تجربة المستخدم
- توضع عادة في أعلى أو جانب صفحة الويب
- تعتمد على HTML Elements مثل ul و li

## الهيكل البرمجي للقائمة

نستخدم عناصر ul و li لإنشاء هيكل القائمة الأساسي.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <ul>
      <li><a href="default.asp">Home</a></li>
      <li><a href="news.asp">News</a></li>
      <li><a href="contact.asp">Contact</a></li>
      <li><a href="about.asp">About</a></li>
    </ul>
  </body>
</html>
```

## تنسيق القائمة باستخدام CSS

نستخدم CSS لإزالة التنسيقات الافتراضية للقوائم.

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```

## شرح الخصائص المستخدمة

تساعد هذه الخصائص في تهيئة القائمة للتنسيق اللاحق.

## معاينة النتيجة

هكذا تظهر القائمة بعد إزالة التنسيقات الافتراضية.

## ملاحظات هندسية

استخدم هذا الكود كقاعدة أساسية لتطوير تصميمات أكثر تعقيدا.

- استخدم دائما ul و li للقوائم
- ابدأ دائما بتصفير margin و padding
- هذا الكود هو الأساس لكل من Vertical و Horizontal Navbars

## خلاصة الدرس

تعلمنا اليوم أساسيات بناء وتنسيق Navigation Bars.

- تم شرح هيكل HTML
- تم شرح تنسيق CSS الأساسي
- تم توضيح أهمية إزالة التنسيقات الافتراضية
- جاهزون للدروس القادمة حول القوائم الأفقية والعمودية
