# شرح CSS Combinators بالتفصيل

المصدر: https://www.w3schools.com/css/css_combinators.asp

## مقدمة عن CSS Combinators

تعرف على مفهوم CSS Combinators وكيفية تحديد العناصر بدقة في صفحات الويب.

- تحدد CSS Combinators العلاقة بين selectors
- تساعد في إنشاء تخصيصات دقيقة للعناصر
- تتضمن أربعة أنواع رئيسية في CSS

## شرح Descendant Combinator

يستخدم Descendant Combinator مسافة فارغة لاختيار جميع العناصر التابعة داخل العنصر الأب.

```css
div p {
  background-color: yellow;
}
```

## شرح Child Combinator

يستخدم Child Combinator الرمز > لاختيار العناصر التي تعتبر أبناء مباشرين فقط.

```css
div > p {
  background-color: yellow;
}
```

## شرح Next Sibling Combinator

يستخدم Next Sibling Combinator الرمز + لاختيار العنصر التالي مباشرة.

```css
div + p {
  background-color: yellow;
}
```

## شرح Subsequent-sibling Combinator

يستخدم Subsequent-sibling Combinator الرمز لاختيار جميع العناصر اللاحقة ضمن نفس الأب.

```css
div ~ p {
  background-color: yellow;
}
```

## جدول مقارنة Combinators

جدول يوضح ملخص الرموز المستخدمة في CSS Combinators ووظيفة كل منها.

## خلاصة الدرس

ملخص شامل لأنواع CSS Combinators وأهمية استخدامها في تنسيق صفحات الويب.

- مفهوم Descendant uses space
- مفهوم Child uses > symbol
- مفهوم Next sibling uses + symbol
- مفهوم Subsequent sibling uses symbol
