# فهم تدرج الأولوية في CSS Specificity Hierarchy

المصدر: https://www.w3schools.com/css/css_specificity_hierarchy.asp

## مقدمة حول تدرج الأولوية في CSS

مرحبا بكم في درس جديد حول تدرج الأولوية Specificity Hierarchy وكيفية تطبيق التنسيقات.

- تتعدد محددات CSS وتختلف أوزانها
- يحدد نظام Specificity الأولوية لأي عنصر
- فهم الأوزان يحل مشاكل تعارض التنسيقات

## فهم تدوينة الأوزان X-Y-Z

تستخدم تدوينة الأوزان ثلاثة أرقام X-Y-Z حيث يمثل الرقم الأيسر القيمة الأعلى ويقارن اليسار أولا.

- الرقم الأول X يخص ID selectors
- الرقم الأوسط Y يخص Classes و Attributes و Pseudo-classes
- الرقم الأيمن Z يخص Element selectors و Pseudo-elements

## مثال عملي على حساب الأوزان

دراسة مثال عملي يوضح تدرج الأوزان بين محددات ID والعناصر المختلفة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      #demo {
        color: blue;
      } /* weight: 1-0-0 */
      p#demo {
        color: orange;
      } /* weight: 1-0-1 WINS! */
      .test {
        color: green;
      } /* weight: 0-1-0 */
      p {
        color: red;
      } /* weight: 0-0-1 */
    </style>
  </head>
  <body>
    <p id="demo" class="test">Hello World!</p>
  </body>
</html>
```

## تساوي الأولوية والقاعدة الأخيرة

في حالة تساوي الأولوية بين قاعدتين، فإن القاعدة الأحدث أو المكتوبة لاحقا هي التي تفوز.

```css
h1 {
  background-color: yellow;
}
h1 {
  background-color: red;
}
```

## مقارنة بين ID selectors و Attribute selectors

محددات ID تتفوق دائما على محددات الخصائص Attribute selectors نظرا لقوتها.

```css
#myDiv {
  background-color: yellow;
}
div[id=myDiv] {
  background-color: blue;
}
```

## تفوق Class selectors على Element selectors

محددات الفئات Class selectors تتفوق على محددات العناصر الفردية مثل h1 و p.

```css
.intro {
  background-color: yellow;
}
h1 {
  background-color: red;
}
```

## المحدد العام والمحددات المضمنة Inline styles

المحدد العام ليس له وزن، بينما الأنماط المضمنة Inline styles تمتلك أعلى أولوية مطلقة.

```css
* {
  background-color: yellow;
}
h1 {
  background-color: red;
}
```

## خلاصة قواعد أولوية CSS

خلاصة شاملة لفهم تدرج الأولوية وكيفية تجنب تعارض التنسيقات في مشاريع الويب.

- Inline styles لها الأولوية القصوى
- ID selectors تأتي في المرتبة التالية
- Classes و Attributes تأتي ثالثا
- Elements والعلامة النجمية تأتي أخيرا
