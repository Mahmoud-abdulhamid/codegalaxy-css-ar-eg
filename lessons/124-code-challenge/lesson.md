# CSS Dropdowns Challenge

المصدر: https://www.w3schools.com/css/css_challenges_dropdowns.asp

## مقدمة في Dropdowns

مرحبا بكم في درس جديد من دورة CSS. اليوم سنحلل تحدي Dropdowns لنفهم كيف نبني قوائم منسدلة تظهر عند التفاعل مع عناصر صفحة الويب.

- التعرف على مفهوم الـ Dropdowns
- أهمية القوائم المنسدلة في واجهات المستخدم
- استخدام CSS للتحكم في حالة الظهور

## القواعد الأساسية للـ Dropdowns

لتنفيذ Dropdowns نحتاج إلى عنصر حاو للقائمة، وعنصر آخر للمحتوى المنسدل. نستخدم خاصية display مع قيمة none للإخفاء، ثم نغيرها إلى block عند حدث hover.

- استخدام display: none للإخفاء
- استخدام :hover لتفعيل الظهور
- تنسيق القائمة باستخدام position: absolute

## هيكل الكود البرمجي

نستخدم div بكلاس dropdown لتغليف الزر والقائمة. القائمة تكون بكلاس dropdown-content، وهي التي نتحكم في ظهورها واختفائها بواسطة CSS.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="dropdown">
      <button>Menu</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
      </div>
    </div>
  </body>
</html>
```

## منطق الـ CSS للتحكم

نضبط dropdown-content على position: absolute لتكون فوق العناصر الأخرى. نضبط display على none، وعند حدوث hover على dropdown، نحول display إلى block لتظهر القائمة.

```css
.dropdown-content {
  display: none;
  position: absolute;
}
.dropdown:hover .dropdown-content {
  display: block;
}
```

## معاينة النتيجة

عند تطبيق هذه الأكواد، سترى زرا في صفحة الويب. عند تحريك مؤشر الفأرة فوقه، ستنسدل القائمة المختفية أمامك بسهولة، وهذا هو المطلوب في تحدي CSS الخاص بنا.

```text
[Menu] 
(Hovering over Menu)
[Link 1]
[Link 2]
```

## أفضل الممارسات

احرصوا دائما على إضافة z-index لضمان ظهور القائمة فوق كل شيء. كما يفضل إضافة background-color و padding لتحسين مظهر القائمة وجعلها أكثر قابلية للقراءة والتفاعل.

- استخدام z-index للتحكم في الطبقات
- إضافة padding لتحسين المساحات
- تنسيق الألوان لتعزيز تجربة المستخدم

## خاتمة وتحدي

بهذا نكون قد أتممنا شرح تحدي Dropdowns. أدعوكم لتجربة الكود بأنفسكم عبر الرابط الموجود في وصف الفيديو، ومحاولة تطويره بإضافة تأثيرات حركية جديدة. إلى اللقاء في درس قادم.

- راجعوا الرابط في المصادر
- طبقوا الأكواد في محرركم الخاص
- استمروا في ممارسة CSS
