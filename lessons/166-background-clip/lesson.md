# CSS background-clip Property

المصدر: https://www.w3schools.com/css/css3_background_clip.asp

## مقدمة حول background-clip

مرحبا بكم في درس CSS الجديد حول خاصية background-clip للتحكم في مساحة انتشار الخلفية.

- تحدد خاصية background-clip مدى امتداد الخلفية
- تدعم الألوان والصور والتدرجات اللونية
- تتحكم في كيفية ظهور الخلفية بالنسبة للحدود والمسافات

## قيم خاصية background-clip

تتضمن القيم الرئيسية: border-box، وpadding-box، وcontent-box للتحكم الدقيق في مساحة الخلفية.

## تطبيق background-clip مع الصور

تطبيق عملي لاستخدام background-clip مع الصور وتأثيرها على الحدود والحشو.

```css
#div1 {
  border: 5px dotted black; padding: 35px; background-clip: border-box;
}
#div2 {
  border: 5px dotted black; padding: 35px; background-clip: padding-box;
}
#div3 {
  border: 5px dotted black; padding: 35px; background-clip: content-box;
}
```

## تطبيق background-clip مع الألوان

استخدام background-clip مع الألوان يوضح الفرق في الامتداد بين الحدود والحشو والمحتوى.

```css
#div1 {
  background-color: lightblue; background-clip: border-box;
}
#div2 {
  background-color: lightblue; background-clip: padding-box;
}
#div3 {
  background-color: lightblue; background-clip: content-box;
}
```

## معاينة المخرجات

تظهر المعاينة كيف تختلف مساحة الخلفية بناء على القيمة المختارة للخاصية.

```text
div1: Background covers border area.
div2: Background stops at padding.
div3: Background limited to content only.
```

## أفضل الممارسات

استخدم background-clip مع الحدود الشفافة للحصول على تأثيرات بصرية احترافية.

- جرب القيم مع border شفافة
- استخدمها لإنشاء تأثيرات بصرية فريدة
- تأكد من توافق المتصفحات الحديثة

## خلاصة الدرس

تعلمنا اليوم التحكم في مساحة الخلفية. جربوا الأكواد بأنفسكم عبر الرابط في الوصف.

- تم شرح background-clip بالتفصيل
- تم استعراض القيم الثلاث الأساسية
- تم تطبيق أمثلة عملية على الألوان والصور
- شجعنا على التطبيق العملي عبر الرابط
