# CSS Grid Container

المصدر: https://www.w3schools.com/css/css_grid_container.asp

## مقدمة حول CSS Grid Container

مرحبا بكم في درس CSS Grid Container، وهو نظام تخطيط قوي لتنظيم عناصر صفحات الويب.

- CSS Grid هو نظام تخطيط ثنائي الأبعاد
- يسمح بترتيب العناصر في صفوف وأعمدة
- يتحكم في توزيع المساحات بدقة عالية

## مفهوم Grid Container و Grid Items

يتحول أي عنصر مباشر داخل الـ Grid Container إلى Grid Item بشكل تلقائي.

## استخدام display: grid

نستخدم display: grid لتحويل العنصر إلى حاوية شبكية من نوع block-level.

```css
.container {
  display: grid;
}
```

## استخدام display: inline-grid

تستخدم display: inline-grid لجعل الحاوية تظهر كعنصر inline داخل الصفحة.

```css
.container {
  display: inline-grid;
}
```

## معاينة المخرجات

تظهر الحاوية كـ block-level مع display: grid وكـ inline مع display: inline-grid.

```text
Grid Container (Block) -> Full Width
Grid Container (Inline) -> Content Width
```

## ملاحظات هندسية

يعد تعريف display: grid الخطوة الأولى لتفعيل كافة خصائص الـ Grid الأخرى.

- تفعيل الـ Grid هو شرط أساسي
- استخدام gap للتحكم في المسافات
- تحديد الأعمدة عبر grid-template-columns

## خلاصة الدرس

تعلمنا اليوم كيفية إنشاء Grid Container، جربوا الأكواد بأنفسكم عبر الرابط في الوصف.

- display: grid للتحكم الكامل
- display: inline-grid للمرونة
- تطبيق عملي عبر الرابط المرفق
