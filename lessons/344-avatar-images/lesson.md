# تصميم صور الـ Avatar باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_image_avatar.asp

## مقدمة حول صور الـ Avatar

مرحبا بكم في درس اليوم حول إنشاء صور Avatar احترافية باستخدام CSS.

- الـ Avatar هو صورة رمزية تمثل المستخدم
- نستخدم CSS للتحكم في شكل وأبعاد الصورة
- سنقوم بتحويل الصور المربعة إلى دائرية

## هيكل الـ HTML للـ Avatar

نستخدم عنصر img مع class باسم avatar لربط الصورة بتنسيقات CSS.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <img src="avatar.png" alt="Avatar" class="avatar">
  </body>
</html>
```

## تنسيق الـ Avatar باستخدام CSS

نستخدم border-radius بنسبة 50 لجعل الصورة دائرية تماما.

```css
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
```

## شرح الخصائص المستخدمة

تساعد vertical-align في المحاذاة، بينما border-radius تتحكم في تدوير الزوايا.

## معاينة النتيجة

تظهر الصورة بشكل دائري أنيق بعد تطبيق كود CSS.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- النتيجة في المتصفح -->
    <img src="avatar.png" class="avatar">
  </body>
</html>
```

## أفضل الممارسات

استخدم صورا مربعة الأصل لضمان أفضل نتيجة عند التدوير.

- استخدم صورا ذات أبعاد متساوية
- تأكد من ضغط الصور لسرعة التحميل
- استخدم class موحد للـ Avatar في كامل الموقع

## خلاصة الدرس

شكرا لمتابعتكم، جربوا الأكواد بأنفسكم لتطوير مهاراتكم في CSS.

- تم شرح هيكل HTML للصور
- تم شرح خصائص CSS للتدوير
- تم توضيح أهمية المحاذاة
- راجعوا الرابط في الوصف للتطبيق العملي
