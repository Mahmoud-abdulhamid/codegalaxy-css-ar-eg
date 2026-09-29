# CSS box-shadow Property

المصدر: https://www.w3schools.com/css/css3_shadows_box.asp

## مقدمة حول box-shadow

تستخدم خاصية box-shadow لإضافة تأثيرات الظل للعناصر في صفحات الويب.

- خاصية box-shadow تضفي عمقا على التصميم
- يمكن تطبيق ظل واحد أو عدة ظلال
- تتحكم في المظهر البصري للعناصر

## التحكم في إزاحة الظل

تحديد الإزاحة الأفقية والرأسية للظل باستخدام box-shadow.

```css
div {
  box-shadow: 10px 10px;
}
```

## تخصيص اللون وتأثير Blur

إضافة اللون وتأثير Blur لزيادة واقعية الظل.

```css
div {
  box-shadow: 10px 10px 5px lightblue;
}
```

## نصف قطر الانتشار و inset

استخدام spread للتحكم في حجم الظل و inset للظل الداخلي.

```css
div {
  box-shadow: 10px 10px 5px 12px lightblue inset;
}
```

## تعدد الظلال

يمكن دمج عدة ظلال في عنصر واحد باستخدام الفاصلة.

```css
div {
  box-shadow: 5px 5px 8px blue, 10px 10px 8px red;
}
```

## خاتمة وتطبيق

جرب تطبيق box-shadow بنفسك لتعزيز مهاراتك في تصميم واجهات الويب.

- box-shadow أداة أساسية للتصميم الحديث
- جرب قيم مختلفة للـ blur والـ spread
- استخدم rgba للتحكم في شفافية الظل
- راجع الرابط في الوصف للتطبيق العملي
