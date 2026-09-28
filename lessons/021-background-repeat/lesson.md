# CSS Background Image Repeat

المصدر: https://www.w3schools.com/css/css_background_repeat.asp

## مقدمة حول تكرار الخلفية

نتعرف اليوم على كيفية التحكم في تكرار صور الخلفية باستخدام خاصية background-repeat في CSS.

- التحكم في تكرار صور الخلفية
- استخدام قيم repeat-x و repeat-y
- منع تكرار الخلفية باستخدام no-repeat
- تحديد موضع الخلفية عبر background-position

## السلوك الافتراضي للخلفية

تتكرر صور الخلفية افتراضيا بشكل أفقي وعمودي، وقد نحتاج أحيانا لتغيير هذا السلوك.

```css
body {
  background-image: url("gradient_bg.png");
}
```

## التحكم في اتجاه التكرار

نستخدم repeat-x للتكرار الأفقي و repeat-y للتكرار العمودي للتحكم في مظهر الخلفية.

```css
body {
  background-image: url("gradient_bg.png");
  background-repeat: repeat-x;
}
```

## منع تكرار الخلفية

نستخدم القيمة no-repeat لعرض صورة الخلفية مرة واحدة فقط داخل العنصر.

```css
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
}
```

## تحديد موضع الخلفية

تستخدم خاصية background-position لتحديد نقطة بداية ظهور صورة الخلفية.

```css
body {
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
```

## خلاصة الدرس

قم بتجربة هذه الخصائص بنفسك لتحسين تصميم صفحات الويب الخاصة بك.

- background-repeat للتحكم في التكرار
- repeat-x و repeat-y للاتجاهات
- no-repeat لمنع التكرار
- background-position لتحديد الموقع
