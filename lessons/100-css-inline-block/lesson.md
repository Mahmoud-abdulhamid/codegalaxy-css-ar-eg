# CSS display inline-block

المصدر: https://www.w3schools.com/css/css_inline-block.asp

## مقدمة عن CSS display inline-block

مرحبا بكم في درس جديد حول خاصية CSS display inline-block وكيفية دمج ميزات العناصر.

- دورة تطوير الويب الاحترافية
- فهم خصائص CSS display
- الدمج بين inline و block

## مفهوم inline-block الأساسي

يظهر عنصر inline-block على نفس السطر مع السماح بتعديل العرض والارتفاع والهوامش.

- الظهور على نفس السطر الأفقي
- إمكانية تعيين العرض والارتفاع
- التحكم الكامل في الهوامش العلوية والسفلية

## مثال مقارنة العرض والسلوك البرمجي

شرح الكود البرمجي لمقارنة سلوك inline و inline-block و block.

```css
span.a {
  display: inline;
  padding: 5px;
  border: 2px solid red;
}
span.b {
  display: inline-block;
  width: 100px;
  height: 35px;
  padding: 5px;
  border: 2px solid red;
}
```

## استكمال كود العنصر الثالث block

توضيح العنصر الثالث باستخدام display block.

```css
span.c {
  display: block;
  width: 100px;
  height: 35px;
  padding: 5px;
  border: 2px solid red;
}
```

## بناء قائمة التنقل الأفقية

استخدام display inline-block لإنشاء قائمة تنقل أفقية.

- تحويل القوائم الرأسية إلى أفقية
- تنظيم الروابط في الموقع الإلكتروني
- استخدام list-style-type و padding

## كود قائمة التنقل الأفقية

كود CSS لإنشاء قائمة التنقل الأفقية.

```css
.nav {
  background-color: lightgray;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.nav li {
  display: inline-block;
  font-size: 18px;
  padding: 15px;
}
```

## أفضل الممارسات والنصائح الهندسية

أفضل الممارسات للتعامل مع المسافات بين عناصر inline-block.

- الإنتباه لمسافات الفراغات بين Tags
- التحكم الدقيق في التخطيط والتصميم
- اختبار التجاوب على مختلف الشاشات

## خلاصة الدرس ودعوة للتطبيق

خلاصة الدرس ودعوة لتجربة الأكواد البرمجية.

- ملخص شامل لقوة inline-block
- تطبيق عملي لتصميم القوائم
- تابعوا دورة CSS على CodeGalaxy
