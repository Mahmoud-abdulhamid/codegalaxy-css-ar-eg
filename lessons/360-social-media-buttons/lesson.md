# تصميم أزرار التواصل الاجتماعي باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_social_media_buttons.asp

## مقدمة حول أزرار التواصل الاجتماعي

سنتعلم اليوم كيفية تصميم أزرار التواصل الاجتماعي بشكل احترافي وجذاب باستخدام CSS ومكتبة Font Awesome.

- استخدام CSS لتنسيق الأزرار
- دمج مكتبة Font Awesome
- تحسين تجربة المستخدم عبر التفاعل

## إعداد مكتبة الأيقونات

نربط مكتبة Font Awesome عبر Tag link، ثم نستخدم Tag a مع class مناسب لاستدعاء الأيقونات.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-twitter"></a>
  </body>
</html>
```

## تنسيق الأزرار باستخدام CSS

نستخدم CSS لتنسيق الأيقونات عبر ضبط padding وfont-size وtext-align وإلغاء التسطير.

```css
.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
}
```

## إضافة تأثيرات التفاعل

نستخدم pseudo-class المسمى hover لتغيير شفافية الزر عند مرور الفأرة.

```css
.fa:hover {
  opacity: 0.7;
}
```

## تخصيص الألوان لكل منصة

نخصص ألوان الخلفية لكل منصة اجتماعية باستخدام CSS.

```css
.fa-facebook {
  background: #3B5998;
  color: white;
}
.fa-twitter {
  background: #55ACEE;
  color: white;
}
```

## إنشاء أزرار دائرية

استخدم border-radius: 50 لتحويل الأزرار إلى شكل دائري.

```css
.fa {
  padding: 20px;
  font-size: 30px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
}
```

## خلاصة الدرس

لقد تعلمنا بناء أزرار تفاعلية. جربوا الأكواد بأنفسكم وراجعوا دروس CSS Buttons لمزيد من الاحترافية.

- استخدام مكتبة Font Awesome
- تطبيق تأثيرات hover
- تخصيص الألوان لكل علامة تجارية
- استخدام border-radius للأشكال الدائرية
