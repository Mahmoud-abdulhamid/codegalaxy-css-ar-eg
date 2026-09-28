# CSS Vertical Align Techniques

المصدر: https://www.w3schools.com/css/css_align_vertical.asp

## مقدمة في المحاذاة الرأسية

مرحبا بكم في درس المحاذاة الرأسية باستخدام CSS.

- المحاذاة الرأسية ضرورية لتصميم الويب
- استخدام تقنيات Flexbox و Grid
- استخدام Positioning و Transform

## المحاذاة باستخدام Flexbox

استخدام Flexbox لتوسيط العناصر أفقيا ورأسيا.

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 3px solid green;
}
```

## المحاذاة باستخدام CSS Grid

استخدام CSS Grid مع خاصية place-items للتوسيط.

```css
.center {
  display: grid;
  place-items: center;
  height: 200px;
  border: 3px solid green;
}
```

## المحاذاة باستخدام Absolute و Transform

استخدام position و transform لتوسيط العناصر ديناميكيا.

```css
.container p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## معاينة المخرجات

النتيجة النهائية: العنصر يظهر في مركز الحاوية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="center">
      <p>I am centered!</p>
    </div>
  </body>
</html>
```

## أفضل الممارسات

توصية: استخدم Flexbox و Grid كخيار أول.

- Flexbox و Grid هما المعيار الحديث
- تجنب استخدام Absolute إلا للضرورة
- اختبر التصميم على مختلف أحجام الشاشات

## خلاصة الدرس

شكرا لمتابعتكم، جربوا الأكواد بأنفسكم.

- تمت تغطية Flexbox
- تمت تغطية CSS Grid
- تمت تغطية Transform
- راجع الرابط في الوصف للتطبيق
