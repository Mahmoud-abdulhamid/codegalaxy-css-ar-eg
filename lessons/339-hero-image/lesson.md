# How TO - Hero Image

المصدر: https://www.w3schools.com/howto/howto_css_hero_image.asp

## مقدمة عن Hero Image

تعرف على كيفية إنشاء Hero Image في قمة صفحة الويب لجذب انتباه المستخدمين.

- ما هي فكرة الـ Hero Image
- أهمية استخدامها في أعلى صفحات الويب
- تحسين تجربة المستخدم بصئيا

## هيكل عناصر HTML

بناء هيكل HTML مع عناصر div والـ class المناسبة لتضمين النصوص والأزرار.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="hero-image">
      <div class="hero-text">
        <h1>I am John Doe</h1>
        <p>And I'm a Photographer</p>
        <button>Hire me</button>
      </div>
    </div>
  </body>
</html>
```

## تهيئة الحاوية الأساسية

تحديد ارتفاع عناصر body و html بنسبة مئوية كاملة لتهيئة صفحة الويب.

```css
body, html {
  height: 100%;
}
```

## تنسيق صورة الخلفية والتدرج اللوني

استخدام linear-gradient مع صورة الخلفية لتغميق الصورة وتحسين قراءة النص.

```css
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("photographer.jpg");
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
```

## خصائص التكيف والتوسيط

ضبط خصائص التكيف والموقع لضمان استجابة الصورة لجميع أحجام الشاشات.

- استخدام background-size بقيمة cover
- تثبيت مركز الصورة بـ background-position
- ضبط position على relative للحاوية

## توسيط النصوص داخل الحاوية

توسيط النصوص أفقيا وعموديا في منتصف الصورة باستخدام absolute و transform.

```css
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
```

## خلاصة الدرس وأفضل الممارسات

خلاصة إنشاء Hero Image متجاوبة مع نص متمركز وتأثير تدرج لوني احترافي.

- أهمية دمج linear-gradient مع الصور
- طرق التوسيط المتقدمة بواسطة transform
- بناء واجهات مستخدم احترافية
