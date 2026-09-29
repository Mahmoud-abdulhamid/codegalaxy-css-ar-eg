# CSS Horizontal Navigation Bar

المصدر: https://www.w3schools.com/css/css_navbar_horizontal.asp

## مقدمة حول شريط التنقل الأفقي

شريط التنقل الأفقي هو عنصر أساسي في تصميم صفحات الويب ويتم بناؤه باستخدام عناصر القوائم.

- شريط التنقل الأفقي يوضع عادة في أعلى الصفحة
- يعتمد الهيكل الأساسي على <ul> و <li> و <a>
- يمكن استخدام <nav> كحاوية رئيسية لشريط التنقل

## استخدام خاصية Float

تعتبر خاصية float وسيلة تقليدية لترتيب عناصر القائمة بشكل أفقي بجانب بعضها البعض.

```css
ul li {
  float: left;
}
ul li a {
  display: block;
  padding: 14px 16px;
  text-decoration: none;
}
```

## استخدام تقنية Flexbox

تعد تقنية Flexbox الطريقة الحديثة والأكثر كفاءة لتصميم أشرطة التنقل المرنة.

```css
ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  background-color: #333;
}
```

## إضافة حالة Active وتنسيق الروابط

استخدام class باسم active و pseudo-class باسم hover يعزز من تفاعلية شريط التنقل.

```css
ul li a.active {
  background-color: #04AA6D;
}
ul li a:hover {
  background-color: #111;
}
```

## تثبيت شريط التنقل

يمكن التحكم في تموضع شريط التنقل باستخدام خصائص position مثل fixed و sticky.

```css
ul {
  position: sticky;
  top: 0;
  width: 100%;
}
```

## خلاصة الدرس

تطبيق ما تعلمته اليوم سيساعدك في بناء واجهات مستخدم احترافية وعصرية.

- استخدم Flexbox للتصاميم الحديثة
- استخدم Float للتوافق مع المتصفحات القديمة
- لا تنس إضافة حالة Hover لتحسين التفاعل
- جرب استخدام Position لتثبيت القائمة
