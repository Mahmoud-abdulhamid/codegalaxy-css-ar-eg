# CSS Grid Tracks

المصدر: https://www.w3schools.com/css/css_grid_tracks.asp

## مقدمة في CSS Grid Tracks

مرحبا بكم في درس CSS Grid Tracks. سنتعلم اليوم كيفية التحكم في هيكل الصفحة عبر تحديد عدد وأحجام الأعمدة والصفوف داخل grid container.

- تحديد عدد وحجم الأعمدة والصفوف
- استخدام grid-template-columns
- استخدام grid-template-rows
- التحكم الكامل في تخطيط الويب

## خاصية grid-template-columns

تستخدم خاصية grid-template-columns لتحديد عدد وعرض الأعمدة. عند كتابة auto ثلاث مرات، نحصل على ثلاثة أعمدة متساوية العرض.

```css
.container {
  display: grid;
  grid-template-columns: auto auto auto;
}
```

## وحدة fr للتقسيم المرن

تعد وحدة fr اختصارا لـ fraction، وهي تقسم المساحة المتاحة إلى أجزاء نسبية. 1fr توزع المساحة بالتساوي، بينما 2fr تجعل العمود ضعف حجم الأعمدة الأخرى.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

## دوال repeat و minmax

نستخدم دالة repeat لتكرار الأعمدة. أما دالة minmax فتساعدنا في تحديد نطاق حجم مرن، حيث لا يقل العمود عن حجم معين ولا يزيد عن حجم آخر.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* أو */
  grid-template-columns: minmax(80px, 1fr) 150px 150px;
}
```

## خاصية grid-template-rows

نستخدم خاصية grid-template-rows لتحديد ارتفاع الصفوف. الصف الأول 80px، والثاني 200px، والصفوف التالية تأخذ قيمة auto تلقائيا.

```css
.container {
  display: grid;
  grid-template-rows: 80px 200px;
}
```

## خلاصة الدرس

تعلمنا اليوم كيفية بناء هيكل الويب باستخدام CSS Grid. أدعوكم لتجربة هذه الخصائص عبر رابط المصدر الموجود في وصف الفيديو.

- استخدام grid-template-columns للتحكم في الأعمدة
- استخدام grid-template-rows للتحكم في الصفوف
- استخدام وحدات fr و repeat و minmax
- تجربة الأكواد عبر الرابط المرفق
