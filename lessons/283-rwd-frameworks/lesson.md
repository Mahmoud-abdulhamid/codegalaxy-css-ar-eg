# Responsive Web Design Frameworks

المصدر: https://www.w3schools.com/css/css_rwd_frameworks.asp

## مقدمة في CSS Frameworks

تساعد CSS Frameworks المطورين على بناء مواقع الويب المتجاوبة بكفاءة عالية.

- توفير الوقت والجهد في كتابة CSS
- ضمان التوافق مع مختلف أحجام الشاشات
- تقديم مكونات جاهزة للاستخدام
- دعم مبادئ Responsive Web Design

## استخدام إطار العمل W3.CSS

يعتبر W3.CSS إطار عمل سهل الاستخدام لجعل صفحات الويب تبدو جميلة على أي حجم شاشة.

- سهولة التطبيق والتعلم
- تصميم متجاوب تلقائيا
- لا يحتاج إلى ملفات JavaScript خارجية
- خفيف الوزن وسريع التحميل

## هيكل كود W3.CSS

يستخدم الكود Classes مثل w3-container و w3-third لإنشاء تخطيط متجاوب.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  </head>
  <body>
    <div class="w3-container w3-blue">
      <h1>W3Schools Demo</h1>
    </div>
    <div class="w3-row-padding">
      <div class="w3-third">
        <h2>London</h2>
        <p>London is the capital city of England.</p>
      </div>
    </div>
  </body>
</html>
```

## التعريف بإطار العمل Bootstrap

Bootstrap هو إطار عمل شهير يعتمد على نظام Grid لبناء تخطيطات متجاوبة.

- نظام Grid مرن وقوي
- مكونات UI جاهزة مثل الأزرار والقوائم
- دعم واسع للمتصفحات
- مجتمع كبير ومصادر تعليمية وفيرة

## مثال عملي على Bootstrap

استخدام Classes مثل container و row و col-sm-4 لتنظيم المحتوى.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-4">
          <h3>Column 1</h3>
          <p>Content goes here...</p>
        </div>
        <div class="col-sm-4">
          <h3>Column 2</h3>
          <p>Content goes here...</p>
        </div>
      </div>
    </div>
  </body>
</html>
```

## خلاصة الدرس

استخدام Frameworks مهارة أساسية لكل مطور ويب. جرب الأكواد بنفسك لتطوير مهاراتك.

- اختر الإطار المناسب لمشروعك
- مارس كتابة الأكواد بانتظام
- راجع التوثيق الرسمي لكل إطار
- استمر في التعلم مع CodeGalaxy
