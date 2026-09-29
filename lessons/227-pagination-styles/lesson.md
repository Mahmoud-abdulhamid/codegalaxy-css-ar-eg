# CSS Pagination Styles

المصدر: https://www.w3schools.com/css/css3_pagination_styles.asp

## مقدمة في Pagination

سنتعلم اليوم كيفية تصميم Pagination احترافي باستخدام CSS لتحسين تجربة المستخدم في مواقع الويب.

- تصميم عناصر التنقل بين الصفحات
- إضافة تأثيرات تفاعلية عند التمرير
- استخدام خاصية transition
- بناء نظام Breadcrumb

## تأثير Hover على الروابط

نستخدم selector المسمى hover لتغيير background-color عند مرور المؤشر فوق روابط Pagination.

```css
.pagination li a:hover:not(.active) {
  background-color: lightgray;
}
```

## خاصية Transition

نضيف خاصية transition لجعل التغيير في background-color ناعما وتدريجيا عند التفاعل.

```css
.pagination li a {
  display: block;
  padding: 8px 12px;
  text-decoration: none;
  border: 1px solid gray;
  color: black;
  margin: 0 4px;
  border-radius: 5px;
  transition: background-color 1s;
}
```

## مفهوم Breadcrumb

نظام Breadcrumb يساعد المستخدم في معرفة مساره الحالي داخل الموقع ويسهل التنقل.

- يستخدم لتوضيح التسلسل الهرمي
- يعتمد على قائمة ul و li
- يتم تنسيقه باستخدام display: inline
- يستخدم الرموز للفصل بين الروابط

## تنسيق Breadcrumb

تنسيق Breadcrumb باستخدام display: inline و Pseudo-element قبل كل عنصر.

```css
ul.breadcrumb {
  padding: 8px;
  list-style: none;
  background-color: #eee;
}
ul.breadcrumb li {
  display: inline;
}
ul.breadcrumb li a {
  color: green;
}
ul.breadcrumb li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}
```

## معاينة المخرجات

النتيجة النهائية: شريط تنقل تفاعلي ونظام مسار Breadcrumb احترافي.

```text
Home / Pictures / Summer 25

[1] [2] [3] [4] [5]
```

## خلاصة الدرس

قم بتجربة الأكواد وتعديل الخصائص لتناسب مشروعك الخاص.

- استخدم hover للتفاعل البصري
- استخدم transition للحركة الناعمة
- نظم المسارات باستخدام Breadcrumb
- جرب الأكواد من الرابط في الوصف
