# استخدام Bootstrap Icons في صفحات الويب

المصدر: https://www.w3schools.com/css/css_icons_bootstrap.asp

## مقدمة حول Bootstrap Icons

مرحبا بكم في درس اليوم حول كيفية إضافة Bootstrap Icons إلى صفحات الويب بسهولة واحترافية.

- سهولة دمج الأيقونات في مشاريع الويب
- لا يتطلب التحميل أو التثبيت المحلي
- يعتمد على ربط ملفات CSS عبر CDN
- يستخدم Element من نوع i لعرض الأيقونات

## إعداد الصفحة وربط المكتبة

يتم ربط مكتبة Bootstrap Icons داخل قسم head باستخدام Tag link مع تحديد مسار ملف CSS.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Styled Web Page</p>
  </body>
</html>
```

## استخدام Element من نوع i

نستخدم العنصر i مع كلاسات محددة من Bootstrap لعرض الأيقونات المختلفة داخل الصفحة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <i class="glyphicon glyphicon-cloud"></i>
    <i class="glyphicon glyphicon-user"></i>
    <i class="glyphicon glyphicon-envelope"></i>
  </body>
</html>
```

## الكود الكامل للمستند

الكود الكامل يوضح هيكلية الصفحة مع ربط المكتبة واستخدام الأيقونات المختلفة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  </head>
  <body>
    <i class="glyphicon glyphicon-cloud"></i>
    <i class="glyphicon glyphicon-remove"></i>
    <i class="glyphicon glyphicon-user"></i>
    <i class="glyphicon glyphicon-envelope"></i>
    <i class="glyphicon glyphicon-thumbs-up"></i>
  </body>
</html>
```

## معاينة الأيقونات في المتصفح

تظهر الأيقونات في المتصفح كرموز رسومية واضحة تعبر عن الوظائف المختلفة.

## ملاحظات تقنية هامة

تأكد دائما من توفر اتصال الإنترنت لضمان تحميل المكتبة، واستخدم الأيقونات بشكل متوافق مع كافة المتصفحات.

- تأكد من وجود اتصال إنترنت فعال
- استخدم CDN موثوق لتحميل المكتبة
- الأيقونات متوافقة مع Chrome وEdge وFirefox
- يمكن تنسيق الأيقونات باستخدام CSS إضافي

## خلاصة الدرس

لقد تعلمنا اليوم كيفية دمج الأيقونات، نرجو منكم تجربة الأكواد وتطوير مهاراتكم في التصميم.

- تم شرح دمج مكتبة Bootstrap Icons
- تم توضيح استخدام Tag i مع الكلاسات
- تم عرض الكود الكامل للمستند
- نوصي بتجربة الأكواد عبر الرابط المرفق
