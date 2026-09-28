# CSS Interactive Pseudo-classes

المصدر: https://www.w3schools.com/css/css_pseudo_classes_interactive.asp

## مقدمة في Interactive Pseudo-classes

تسمح Interactive Pseudo-classes بتطبيق تنسيقات CSS بناء على تفاعل المستخدم مع عناصر صفحة الويب.

- تستخدم لتغيير المظهر عند التفاعل
- تعتمد على حالة العنصر
- تضيف تجربة مستخدم تفاعلية

## تنسيق حالات الروابط

يجب مراعاة ترتيب Pseudo-classes عند تنسيق الروابط لضمان عملها بشكل صحيح.

```css
a:link {
  color: #FF0000;
}
a:visited {
  color: #00FF00;
}
a:hover {
  color: #FF00FF;
}
a:active {
  color: #0000FF;
}
```

## استخدام :hover مع div

يمكن استخدام :hover مع عناصر مثل div لتغيير خصائصها عند مرور مؤشر الفأرة.

```css
div:hover {
  background-color: blue;
}
```

## استخدام :focus مع input

يستخدم :focus لتنسيق حقل input عند النقر عليه أو التركيز فيه.

```css
input:focus {
  background-color: yellow;
}
```

## دمج Pseudo-classes مع HTML Classes

يمكن دمج Pseudo-classes مع HTML Classes لتخصيص عناصر معينة.

```css
a.highlight:hover {
  color: #ff0000;
}
```

## إنشاء Tooltip بسيط

يمكن إنشاء Tooltip بسيط بإخفاء عنصر p وإظهاره عند تمرير الفأرة فوق العنصر الأب.

```css
p {
  display: none; background-color: yellow;
}
div:hover p {
  display: block;
}
```

## خلاصة الدرس

تعلمنا كيفية إضافة التفاعلية لصفحات الويب باستخدام CSS. جرب الأكواد بنفسك!

- استخدام :hover و :focus
- ترتيب الروابط الصحيح
- دمج Classes مع Pseudo-classes
- إنشاء تأثيرات تفاعلية مثل Tooltip
