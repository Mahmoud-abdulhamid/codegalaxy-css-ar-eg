# تصميم Pagination احترافي باستخدام CSS

المصدر: https://www.w3schools.com/css/css3_pagination.asp

## مقدمة حول Pagination

سنتعلم اليوم كيفية إنشاء Pagination متجاوب لتحسين تجربة التنقل في مواقع الويب.

- Pagination هو سلسلة من الروابط للتنقل بين الصفحات
- يتم بناؤه عادة باستخدام القوائم غير المرتبة <ul>
- يحتوي على أرقام الصفحات وأزرار السابق والتالي

## الهيكل البرمجي لـ Pagination

نستخدم display flex لتوسيط العناصر ونزيل list style الافتراضي للقوائم.

```css
.pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0px;
}
.pagination li a {
  display: block;
  padding: 8px 12px;
  text-decoration: none;
  border: 1px solid gray;
  color: black;
  margin: 0 4px;
  border-radius: 5px;
}
```

## شرح الخصائص المستخدمة

تساعد الخصائص مثل padding و border-radius في تحسين المظهر الجمالي للأزرار.

- display: block يجعل الرابط يملأ مساحة العنصر li
- text-decoration: none لإزالة تسطير الروابط
- border-radius: 5px لإضافة حواف مستديرة

## إضافة حالة Active

نستخدم فئة active لتمييز الصفحة الحالية بصريا للمستخدم.

```css
.pagination li a.active {
  background-color: #4CAF50;
  color: white;
}
```

## تعطيل الأزرار بـ Disabled

نستخدم pointer-events: none لتعطيل التفاعل مع الزر.

```css
.pagination li a.disabled {
  color: #dddddd;
  cursor: not-allowed;
  pointer-events: none;
}
```

## معاينة المخرجات

هكذا يظهر الـ Pagination بعد تطبيق التنسيقات.

```text
«  1  2  3  4  5  »
```

## خلاصة الدرس

خلاصة: استخدم flexbox للتنظيم، وطبق فئات active و disabled لتحسين تجربة المستخدم.

- استخدام flexbox يسهل محاذاة العناصر
- فئة active ضرورية لتمييز الصفحة الحالية
- فئة disabled تمنع التفاعل غير المرغوب فيه
- جرب الأكواد بنفسك لتطوير مهاراتك
