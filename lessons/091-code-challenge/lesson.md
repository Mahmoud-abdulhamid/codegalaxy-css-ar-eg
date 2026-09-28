# CSS Position Offsets Mastery

المصدر: https://www.w3schools.com/css/css_challenges_position_offset.asp

## مقدمة في CSS Position Offsets

مرحبا بكم في درس CSS Position Offsets للتحكم في أماكن العناصر بدقة.

- فهم خاصية position في CSS
- استخدام top و bottom و left و right
- التحكم الكامل في تموضع العناصر

## مفاهيم التموضع الأساسية

نستخدم قيم position مثل relative و absolute مع خصائص الإزاحة للتحكم في مكان العنصر.

- position: relative يغير مكان العنصر بالنسبة لمكانه الأصلي
- position: absolute يغير مكانه بالنسبة لأقرب عنصر أب غير ثابت
- استخدام top, bottom, left, right للضبط

## تطبيق عملي على الكود

مثال برمجي يوضح استخدام position absolute مع قيم الإزاحة.

```css
.box {
  position: absolute;
  top: 50px;
  left: 30px;
  background-color: blue;
  width: 100px;
  height: 100px;
}
```

## شرح تفصيلي للخصائص

تسمح قيم الإزاحة الموجبة والسالبة بالتحكم الدقيق في تموضع العناصر.

## معاينة النتيجة

نتيجة تنفيذ الكود: العنصر يظهر في الموقع المحدد بالإزاحات.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="box">
      محتوى العنصر
    </div>
  </body>
</html>
```

## أفضل الممارسات

نصيحة: استخدم position relative للأب عند استخدام absolute للابن.

- تجنب الإفراط في استخدام absolute
- استخدم relative للأب لاحتواء الابن
- اختبر التصميم على أحجام شاشات مختلفة

## خلاصة الدرس

شكرا لمتابعتكم، جربوا الأكواد بأنفسكم عبر الرابط في الوصف.

- تمت تغطية position و offsets
- شرحنا الفرق بين relative و absolute
- رابط التحدي متاح في المصادر
