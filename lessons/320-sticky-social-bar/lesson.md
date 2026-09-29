# بناء شريط أيقونات التواصل الاجتماعي الثابت Sticky Social Bar

المصدر: https://www.w3schools.com/howto/howto_css_sticky_social_bar.asp

## مقدمة حول شريط الأيقونات الثابت

سنتعلم اليوم كيفية بناء شريط أيقونات التواصل الاجتماعي الثابت الذي يبقى ظاهرا على جانب صفحة الويب أثناء التمرير.

- إنشاء شريط أيقونات ثابت Sticky Social Bar
- استخدام CSS للتحكم في التموضع
- إضافة أيقونات تفاعلية باستخدام Font Awesome

## هيكلة شريط الأيقونات في HTML

نبدأ بتضمين مكتبة Font Awesome ثم ننشئ Element باسم icon-bar يحتوي على روابط a لكل منصة تواصل اجتماعي.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
    <div class="icon-bar">
      <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
      <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
      <a href="#" class="google"><i class="fa fa-google"></i></a>
      <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
      <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
    </div>
  </body>
</html>
```

## ضبط التموضع باستخدام CSS

نستخدم position: fixed مع top: 50 و transform: translateY(-50) لضبط التمركز العمودي للشريط في منتصف الشاشة.

```css
.icon-bar {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}
```

## تنسيق الروابط والأيقونات

نحول الروابط إلى display: block مع توسيط النص وإضافة padding، ونستخدم transition لجعل تأثير hover سلسا.

```css
.icon-bar a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 20px;
}
.icon-bar a:hover {
  background-color: #000;
}
```

## تخصيص ألوان المنصات

نقوم بتعريف background-color لكل Class مثل facebook أو twitter ليعكس هوية كل منصة تواصل اجتماعي.

```css
.facebook {
  background: #3B5998;
}
.twitter {
  background: #55ACEE;
}
.google {
  background: #dd4b39;
}
.linkedin {
  background: #007bb5;
}
.youtube {
  background: #bb0000;
}
```

## معاينة النتيجة النهائية

يظهر شريط الأيقونات ثابتا على جانب الشاشة، مما يوفر وصولا سريعا للمستخدم أثناء التمرير.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- النتيجة: شريط أيقونات عمودي ثابت -->
    <div class="icon-bar">
      <a class="facebook">f</a>
      <a class="twitter">t</a>
    </div>
  </body>
</html>
```

## نصائح برمجية هامة

تذكر ضبط margin-left للحاوية الرئيسية لتجنب تداخل المحتوى، واختبر التصميم دائما على الشاشات الصغيرة.

- ضبط الهوامش لتجنب تداخل المحتوى
- اختبار التجاوب على الهواتف
- استخدام وحدات قياس مرنة
- تحسين الأداء بتحميل الأيقونات

## خاتمة الدرس

لقد أتممنا بناء شريط أيقونات احترافي. جربوا الكود بأنفسكم عبر الرابط في الوصف، ولا تترددوا في طرح أسئلتكم.

- تم الانتهاء من بناء الشريط
- راجعوا الرابط في الوصف للتجربة
- استعدوا للدرس القادم
