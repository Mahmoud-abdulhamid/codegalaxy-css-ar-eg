# احتراف CSS Transitions وتغيير الخصائص بسلاسة

المصدر: https://www.w3schools.com/css/css3_transitions.asp

## مقدمة عن CSS Transitions

تعرف على ميزة CSS Transitions وكيفية تغيير قيم الخصائص بسلاسة عبر الزمن.

- تغيير قيم خصائص العناصر بسلاسة تامة
- تحديد مدة زمنية محددة لتنفيذ التأثير
- تحسين التفاعل البصري في صفحات الويب

## خصائص CSS Transition الأساسية

استخدام خاصية transition لتحديد الخاصية المستهدفة ومدة الانتقال الزمني.

- تحديد الخاصية المستهدفة بالتأثير الانتقالي
- تحديد مدة الانتقال بدقة بالثواني أو المللي ثانية
- خاصية transition تعتبر shorthand متكاملة

## مثال عملي على transition

تطبيق transition على خاصية width بمدة زمنية قدرها ثانيتان لعنصر div.

```css
div {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: width 2s;
}
```

## كيفية تفعيل Transition عبر Pseudo-classes

تفعيل الانتقال عند تغيير الخصائص باستخدام pseudo-class مثل hover.

```css
div:hover {
  width: 300px;
}
```

## تغيير قيم خصائص متعددة معا

يمكن تغيير خصائص متعددة في نفس الوقت بفصلها بالفواصل وتحديد مدة لكل منها.

```css
div {
  transition: width 2s, height 4s, background-color 3s;
}
```

## خلاصة الدرس ودعوة للاستمرار

خلاصة شاملة لمفهوم CSS Transitions وكيفية تطبيقها لاحتراف تصميم الويب.

- استخدام transition لتغيير الخصائص بسلاسة
- الاستفادة من hover لتفعيل الحركات التفاعلية
- تطبيق تأثيرات متعددة بمدد زمنية مختلفة
