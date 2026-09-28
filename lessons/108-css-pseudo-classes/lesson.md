# CSS Pseudo-classes

المصدر: https://www.w3schools.com/css/css_pseudo_classes.asp

## مقدمة في CSS Pseudo-classes

تستخدم CSS Pseudo-classes لتحديد تنسيق خاص لعنصر في حالة معينة.

- CSS Pseudo-classes هي كلمات مفتاحية تضاف للـ Selector
- تستخدم لتعريف نمط خاص لحالة معينة من الـ Element
- تزيد من تفاعلية صفحات الويب

## قواعد كتابة الـ Syntax

تكتب الـ Pseudo-classes باستخدام النقطة الرأسية (:) متبوعة باسم الحالة.

```css
selector:pseudo-class-name {
  CSS properties
}
```

## الـ Interactive Pseudo-classes

تطبق الـ Interactive Pseudo-classes التنسيقات بناء على تفاعل المستخدم.

- تعتمد على تفاعل المستخدم (User Interaction)
- تغير مظهر العنصر عند تمرير الماوس
- تستخدم بكثرة في الروابط والأزرار

## الـ Structural Pseudo-classes

تختار الـ Structural Pseudo-classes العناصر بناء على موقعها في الـ Document tree.

- تحدد العناصر بناء على موقعها في الـ Document tree
- تسهل تنسيق القوائم والجداول
- لا تتطلب إضافة Class إضافي

## مثال عملي على الـ Pseudo-classes

استخدام hover لتغيير لون الرابط عند تمرير الماوس.

```css
a:hover {
  color: red;
  font-weight: bold;
}
```

## أفضل الممارسات

نصائح هامة لاستخدام الـ Pseudo-classes بفعالية.

- استخدم الـ Pseudo-classes لتحسين تجربة المستخدم
- تأكد من ترتيب التنسيقات لتجنب التعارض
- راجع دائما الـ CSS Pseudo-classes Reference

## خلاصة الدرس

تعلمنا اليوم كيفية استخدام الـ Pseudo-classes لتطوير صفحات الويب.

- الـ Pseudo-classes تزيد من مرونة الـ CSS
- تغطي حالات تفاعلية وهيكلية
- قم بزيارة المرجع الرسمي لمزيد من التفاصيل
