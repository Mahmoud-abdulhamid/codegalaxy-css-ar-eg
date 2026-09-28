# CSS Fixed and Absolute Positioning

المصدر: https://www.w3schools.com/css/css_positioning_fixed_absolute.asp

## مقدمة في تحديد المواقع

سنتعلم اليوم كيفية التحكم في مواقع العناصر باستخدام position: fixed و position: absolute.

- التحكم الدقيق في أماكن العناصر
- فهم position: fixed للثبات أثناء التمرير
- فهم position: absolute بالنسبة للأب
- تأثير التموضع على تدفق الصفحة

## شرح position: fixed

العنصر الذي يستخدم position: fixed يبقى ثابتا في مكانه بالنسبة للـ viewport حتى عند التمرير.

```css
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}
```

## شرح position: absolute

يتموضع العنصر absolute بالنسبة لأقرب أب له يمتلك position غير static.

```css
div.relative {
  position: relative;
  width: 400px;
  height: 200px;
  border: 3px solid green;
}
div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid red;
}
```

## تأثير التموضع على التدفق

العناصر ذات position: absolute تخرج من تدفق المستند الطبيعي وقد تتداخل مع عناصر أخرى.

- العنصر يخرج من التدفق الطبيعي
- إمكانية التداخل مع عناصر أخرى
- يستخدم top و right و bottom و left للتحكم
- يجب تحديد position للأب للتحكم الدقيق

## معاينة المخرجات

تظهر العناصر في المتصفح بناء على قيم position المحددة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="relative">
      <div class="absolute">Absolute Element</div>
    </div>
    <div class="fixed">Fixed Element</div>
  </body>
</html>
```

## أفضل الممارسات

استخدم position: fixed للقوائم الثابتة، وكن حذرا مع position: absolute لتجنب التداخل.

- استخدم fixed للقوائم الثابتة
- استخدم relative للأب لاحتواء absolute
- اختبر التصميم على شاشات مختلفة
- تجنب الإفراط في استخدام absolute

## خلاصة الدرس

قم بتجربة الأكواد بنفسك عبر الرابط في الوصف لتطوير مهاراتك في CSS.

- تم شرح position: fixed
- تم شرح position: absolute
- تم توضيح الفرق بينهما
- راجع الرابط في الوصف للتطبيق العملي
