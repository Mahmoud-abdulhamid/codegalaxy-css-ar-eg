# تصميم أزرار التحميل التفاعلية باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_loading_buttons.asp

## مقدمة حول أزرار التحميل

تعلم كيفية إنشاء أزرار تحميل تفاعلية باستخدام CSS لتحسين تجربة المستخدم في صفحات الويب.

- أهمية أزرار التحميل في تحسين تجربة المستخدم
- استخدام مكتبات الأيقونات الخارجية
- تطبيق تأثيرات الحركة باستخدام CSS
- تنسيق الأزرار لتناسب تصميم الموقع

## إعداد مكتبة الأيقونات

نستخدم مكتبة Font Awesome لإضافة أيقونات التحميل إلى عناصر button في صفحة الويب.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Styled Web Page</p>
  </body>
</html>
```

## هيكلة أزرار التحميل

نستخدم عنصر button مع أيقونات Font Awesome وفئة fa-spin لإنشاء تأثير الدوران.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <button class="buttonload">
      <i class="fa fa-spinner fa-spin"></i>Loading
      </button>
      <button class="buttonload">
        <i class="fa fa-circle-o-notch fa-spin"></i>Loading
        </button>
      </body>
    </html>
```

## تنسيق الأزرار بـ CSS

تنسيق فئة buttonload باستخدام خصائص CSS للتحكم في الألوان، الحواف، والمسافات الداخلية.

```css
.buttonload {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
}
```

## معاينة النتيجة

تظهر الأزرار بتصميم عصري مع أيقونات متحركة توضح حالة التحميل للمستخدم.

```text
[Loading ↻]  [Loading ↻]  [Loading ↻]
```

## ملاحظات تقنية

نصائح إضافية حول استخدام fa-spin وإمكانية بناء محركات تحميل مخصصة باستخدام CSS Animations.

- استخدم fa-spin لأي أيقونة من Font Awesome
- يمكنك تخصيص الألوان حسب هوية موقعك
- تأكد من تحميل مكتبة الأيقونات بشكل صحيح
- استكشف CSS Loader لإنشاء تأثيرات بدون مكتبات

## خاتمة الدرس

شكرا لمتابعتكم. جربوا الأكواد بأنفسكم وشاركوا نتائجكم في تطوير واجهات المستخدم.

- راجعوا دروس CSS Buttons للمزيد من التنسيقات
- جربوا تغيير الأيقونات في Font Awesome
- طبقوا الأكواد في مشاريعكم الخاصة
- تابعوا دورتنا التعليمية للمزيد من التقنيات
