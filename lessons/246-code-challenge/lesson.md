# CSS Flexbox Intro Challenge

المصدر: https://www.w3schools.com/css/css_challenges_flexbox_intro.asp

## مقدمة في CSS Flexbox

مرحبا بكم في درس CSS Flexbox، النظام الأقوى لتصميم صفحات الويب المرنة.

- Flexbox هو نظام تخطيط حديث في CSS
- يسمح بتوزيع المساحات بين العناصر بذكاء
- يحل مشاكل المحاذاة المعقدة في صفحات الويب

## المفاهيم الأساسية

نستخدم display: flex لتحويل العنصر إلى حاوية مرنة والتحكم في العناصر بداخله.

- استخدام display: flex لإنشاء الحاوية
- العناصر المباشرة تصبح Flex Items
- التحكم في المحاور الرئيسية والثانوية

## هيكل الكود البرمجي

هيكل HTML بسيط يحتوي على حاوية رئيسية وثلاثة عناصر فرعية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </div>
  </body>
</html>
```

## تطبيق خصائص CSS

تطبيق display: flex على الحاوية يجعل العناصر تترتب أفقيا بشكل افتراضي.

```css
.container {
  display: flex;
  background-color: #f1f1f1;
}
.container > div {
  background-color: dodgerblue;
  margin: 10px;
  padding: 20px;
}
```

## معاينة المخرجات

تظهر العناصر مصطفة أفقيا بفضل خاصية flex في الحاوية.

```text
[ Item 1 ] [ Item 2 ] [ Item 3 ]
```

## أفضل الممارسات

استخدم خصائص المحاذاة للتحكم الكامل في توزيع العناصر داخل الحاوية.

- استخدم justify-content للمحاذاة الأفقية
- استخدم align-items للمحاذاة الرأسية
- Flexbox مثالي للمكونات الصغيرة

## خلاصة الدرس

شكرا لمتابعتكم، جربوا الأكواد بأنفسكم لتطوير مهاراتكم في CSS.

- Flexbox يسهل تصميم صفحات الويب
- التطبيق العملي هو مفتاح التعلم
- راجعوا الرابط في الوصف لمزيد من التحديات
