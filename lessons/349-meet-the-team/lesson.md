# بناء صفحة فريق العمل باحترافية باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_team.asp

## مقدمة صفحة فريق العمل

مرحبا بكم في درس تصميم صفحة Meet The Team باستخدام CSS لعرض أعضاء الشركة باحترافية.

- تصميم صفحة Meet The Team استجابة للشاشات المختلفة
- عرض معلومات الموظفين وطرق التواصل بداخل بطاقات جذابة
- استخدام لغة CSS لبناء تخطيط مرن واحترافي

## هيكل HTML الخاص بالبطاقات

هيكل HTML يعتمد على عناصر row و column و card لكل موظف في الفريق.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="row">
      <div class="column">
        <div class="card">
          <img src="img1.jpg" alt="Jane" style="width:100%">
          <div class="container">
            <h2>Jane Doe</h2>
            <p class="title">CEO &amp; Founder</p>
            <p>Some text that describes me.</p>
            <p>example@example.com</p>
            <p><button class="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

## تنسيق الأعمدة وتوزيعها

نستخدم خاصية float لعرض الأعمدة بجانب بعضها بنسبة عرض متساوية.

```css
.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 8px;
}
```

## إضافة تأثير البطاقات والظلال

نضيف تأثير الظلال باستخدام box-shadow لتبدو البطاقات بارزة وجميلة.

```css
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.container {
  padding: 0 16px;
}
```

## إدارة عناصر الـ Float وتنظيفها

نستخدم الخصائص الوهمية after لتنظيف عناصر ال float ومنع التداخل.

```css
.container::after,
.row::after {
  content: "";
  clear: both;
  display: table;
}
```

## تنسيق الأزرار والمسميات الوظيفية

ننسق الأزرار والمسميات الوظيفية لتكون جذابة وتتفاعل مع حركة الماوس.

```css
.title {
  color: grey;
}
.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}
.button:hover {
  background-color: #555;
}
```

## التجاوب مع الشاشات الصغيرة باستخدام Media Queries

نستخدم Media Query لتغيير عرض الأعمدة إلى مئة بالمئة على الشاشات الصغيرة.

```css
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
```

## خلاصة الدرس

تعلمنا تصميم صفحة Meet The Team باحترافية وتجاوب كامل مع كافة الشاشات.

- تلخيص خطوات بناء صفحة Meet The Team الاستجابية
- استخدام الـ Float والـ Flexbox والـ Media Queries
- تطبيق الظلال والأزرار التفاعلية لتجربة مستخدم ممتازة
