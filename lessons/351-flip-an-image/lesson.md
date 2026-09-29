# تصميم تأثير قلب الصور باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_flip_image.asp

## مقدمة حول تأثير قلب الصور

سنتعلم اليوم كيفية إضافة تأثير قلب الصور باستخدام خصائص CSS المتقدمة.

- استخدام CSS لتحويل العناصر
- إضافة تأثيرات بصرية جذابة
- تحسين تفاعل المستخدم مع الصور

## تأثير القلب البسيط باستخدام scaleX

نستخدم خاصية transform مع scaleX(-1) لقلب الصورة أفقيا عند تمرير الفأرة.

```css
img:hover {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}
```

## هيكلة حاوية القلب 3D

نستخدم حاوية flip-box و flip-box-inner لتنظيم المحتوى الأمامي والخلفي.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <img src="paris.jpg">
        </div>
        <div class="flip-box-back">
          <h2>Paris</h2>
          <p>Amazing city!</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

## إعدادات المنظور والتحويل

نستخدم perspective لإضافة العمق و preserve-3d للحفاظ على الأبعاد الثلاثية.

```css
.flip-box {
  perspective: 1000px;
}
.flip-box-inner {
  transform-style: preserve-3d;
  transition: transform 0.8s;
}
```

## تفعيل حركة القلب عند التمرير

نستخدم rotateY(180deg) لتدوير الحاوية عند تمرير الفأرة.

```css
.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}
```

## إخفاء الوجه الخلفي

خاصية backface-visibility: hidden تضمن عدم ظهور الجانب الخلفي للعنصر.

```css
.flip-box-front, .flip-box-back {
  position: absolute;
  backface-visibility: hidden;
}
```

## معاينة النتيجة النهائية

النتيجة: تأثير قلب ثلاثي الأبعاد عند تمرير الفأرة فوق الحاوية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    /* عند التمرير: */
    [ الصورة تنقلب 180 درجة ]
    [ يظهر النص: Paris - Amazing city ]
  </body>
</html>
```

## خلاصة الدرس

خلاصة: استخدمنا transform و transition لإنشاء تأثيرات بصرية احترافية.

- استخدام transform للقلب والتدوير
- تفعيل العمق عبر perspective
- التحكم في الرؤية عبر backface-visibility
- تجربة الأكواد متاحة عبر الرابط في الوصف
