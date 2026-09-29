# CSS Grid Layout Module

المصدر: https://www.w3schools.com/css/css_grid.asp

## مقدمة في CSS Grid

نظام CSS Grid يوفر طريقة مرنة لبناء تخطيطات صفحات الويب باستخدام الصفوف والأعمدة.

- نظام تخطيط ثنائي الأبعاد
- يعتمد على الصفوف والأعمدة
- بديل عصري لتقنيات float و positioning
- يسهل تصميم واجهات متجاوبة

## الفرق بين CSS Grid و Flexbox

الفرق الجوهري هو أن CSS Grid ثنائي الأبعاد بينما Flexbox أحادي البعد.

## هيكل الكود البرمجي

تحديد display: grid على الحاوية هو الخطوة الأولى لتفعيل نظام الشبكة.

```css
.container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: dodgerblue;
  padding: 10px;
}
.container div {
  background-color: #f1f1f1;
  border: 1px solid black;
  padding: 10px;
  font-size: 30px;
  text-align: center;
}
```

## تطبيق عناصر HTML

عناصر div داخل الـ container تصبح تلقائيا Grid Items.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
  </body>
</html>
```

## معاينة النتيجة

تظهر العناصر مرتبة في شبكة بفضل خصائص CSS Grid.

## ملاحظات هندسية

استخدام gap يسهل التحكم في المسافات بين العناصر دون تعقيد.

- التمييز بين Grid Container و Grid Items
- استخدام خاصية gap للتحكم في المسافات
- تجنب استخدام float مع Grid
- التخطيط المسبق للأعمدة والصفوف

## خلاصة الدرس

CSS Grid أداة أساسية لكل مطور ويب عصري.

- CSS Grid يسهل التخطيط ثنائي الأبعاد
- يغني عن الطرق القديمة في التنسيق
- جرب الأكواد بنفسك عبر الرابط
- تابع الدروس القادمة للمزيد من التفاصيل
