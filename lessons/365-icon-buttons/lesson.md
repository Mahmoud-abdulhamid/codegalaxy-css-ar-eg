# تصميم أزرار الأيقونات باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_icon_buttons.asp

## مقدمة حول أزرار الأيقونات

تعلم كيفية تصميم أزرار الأيقونات الاحترافية باستخدام CSS ودمج مكتبات الأيقونات الخارجية.

- أهمية الأيقونات في تحسين تجربة المستخدم
- استخدام مكتبات الأيقونات مثل Font Awesome
- تطبيق CSS لتنسيق الأزرار بشكل جذاب

## إعداد مكتبة الأيقونات

ربط مكتبة Font Awesome داخل قسم head في مستند HTML باستخدام Tag link.

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

## هيكلة أزرار الأيقونات

استخدام Tag button مع Tag i لإضافة الأيقونات، مع إمكانية دمج النصوص.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <button class="btn">
      <i class="fa fa-home"></i> Home
      </button>
      <button class="btn">
        <i class="fa fa-trash"></i> Trash
        </button>
      </body>
    </html>
```

## تنسيق الأزرار بـ CSS

تطبيق تنسيقات CSS الأساسية للتحكم في مظهر الأزرار وحجمها وتفاعلها.

```css
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}
```

## تأثير التفاعل عند التمرير

استخدام hover لتغيير لون الزر عند مرور مؤشر الفأرة فوقه.

```css
.btn:hover {
  background-color: RoyalBlue;
}
```

## خلاصة الدرس

خلاصة الدرس: تم بناء أزرار أيقونات تفاعلية. جرب الأكواد بنفسك وراجع دروس CSS Buttons.

- دمج مكتبة Font Awesome
- استخدام Tag button و i
- تنسيق الأزرار بـ CSS
- إضافة تأثير hover للتفاعل
