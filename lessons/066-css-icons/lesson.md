# CSS Icons with Font Awesome

المصدر: https://www.w3schools.com/css/css_icons.asp

## مقدمة حول استخدام الأيقونات

مقدمة حول استخدام مكتبات الأيقونات مثل Font Awesome في صفحات الويب.

- الأيقونات تعزز تجربة المستخدم في صفحات الويب
- استخدام مكتبات الأيقونات يوفر الوقت والجهد
- Font Awesome هي واحدة من أشهر المكتبات
- الأيقونات هي متجهات يمكن تخصيصها بـ CSS

## مفاهيم أساسية للتعامل مع الأيقونات

استخدام عناصر HTML مثل <i> و <span> لإدراج الأيقونات عبر الـ class.

- استخدام <i> أو <span> لإدراج الأيقونة
- إضافة اسم الـ class المناسب للأيقونة
- إمكانية التحكم في الحجم واللون عبر CSS
- لا حاجة لتحميل ملفات إضافية عند استخدام الـ CDN

## إعداد Font Awesome في الـ head

إدراج رابط مكتبة Font Awesome داخل قسم <head>.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  </body>
</html>
```

## كتابة كود الأيقونات في الـ body

إضافة الأيقونات داخل قسم <body> باستخدام عنصر <i>.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <i class="fas fa-cloud"></i>
    <i class="fas fa-heart"></i>
    <i class="fas fa-car"></i>
    <i class="fas fa-bars"></i>
  </body>
</html>
```

## المستند الكامل

هيكل مستند HTML كامل مع دمج مكتبة Font Awesome.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <i class="fas fa-cloud"></i>
    <i class="fas fa-heart"></i>
    <i class="fas fa-car"></i>
  </body>
</html>
```

## معاينة الأيقونات في المتصفح

تظهر الأيقونات كرسوم متجهة عالية الجودة في المتصفح.

```text
☁  ♥  🚗  ≡
```

## تخصيص الأيقونات بـ CSS

تخصيص الأيقونات باستخدام خصائص CSS مثل اللون والحجم.

```css
.fas {
  font-size: 30px;
  color: blue;
}
```

## خلاصة الدرس

خلاصة: استخدام Font Awesome يسهل إضافة أيقونات احترافية وقابلة للتخصيص.

- استخدم مكتبات الأيقونات لتعزيز واجهة المستخدم
- اربط المكتبة في الـ <head> عبر الـ CDN
- استخدم <i> لإدراج الأيقونة في الـ <body>
- تحكم في مظهر الأيقونة باستخدام CSS
