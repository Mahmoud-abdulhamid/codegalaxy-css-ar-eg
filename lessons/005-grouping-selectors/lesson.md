# CSS Grouping and Universal Selectors

المصدر: https://www.w3schools.com/css/css_selectors_grouping.asp

## مقدمة في CSS Selectors

مرحبا بكم في درس جديد من دورة CSS. سنتعلم اليوم كيفية التحكم في عناصر الويب بفعالية عالية عبر استخدام Universal Selector و Grouping Selector لتنظيم الأكواد.

- التحكم في عناصر HTML عبر CSS
- استخدام Universal Selector (*)
- استخدام Grouping Selector لتقليل التكرار

## شرح Universal Selector

نبدأ بـ Universal Selector الذي يرمز له بعلامة النجمة. هذا الـ Selector يقوم بتحديد كل عناصر HTML الموجودة في الصفحة دفعة واحدة.

```css
*
{
  text-align: center;
  color: blue;
}
```

## مفهوم Grouping Selector

بدلا من تكرار الكود لكل عنصر على حدة، نستخدم Grouping Selector لجمعها معا باستخدام الفاصلة.

- تجنب تكرار الكود
- استخدام الفاصلة (,) للفصل بين الـ Selectors
- تحسين أداء ملفات CSS

## الكود قبل التجميع

لاحظ هذا المثال، حيث نقوم بكتابة نفس التنسيقات لـ h1 و h2 و p. هذا الأسلوب يؤدي إلى زيادة حجم الكود دون داع.

```css
h1 {
  text-align: center; color: red;
}
h2 {
  text-align: center; color: red;
}
p {
  text-align: center; color: red;
}
```

## الكود بعد التجميع

باستخدام Grouping Selector، نقوم بفصل العناصر بفاصلة واحدة. هكذا نكتب التنسيقات مرة واحدة فقط.

```css
h1, h2, p {
  text-align: center;
  color: red;
}
```

## أفضل الممارسات

ينصح دائما بتجميع الـ Selectors التي تشترك في نفس الخصائص لتقليل حجم ملف CSS وتسريع تحميل الصفحة.

- تجميع الـ Selectors المشتركة
- تقليل حجم ملفات CSS
- تحسين سرعة تحميل الموقع

## خلاصة الدرس

تعلمنا اليوم كيفية استخدام Universal Selector و Grouping Selector. أدعوكم لتجربة هذه الأكواد بأنفسكم عبر الرابط الموجود في الوصف.

- Universal Selector (*) يستهدف الجميع
- Grouping Selector (,) يجمع العناصر
- كود أنظف وأداء أفضل
