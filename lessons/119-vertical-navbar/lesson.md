# CSS Vertical Navigation Bar

المصدر: https://www.w3schools.com/css/css_navbar_vertical.asp

## مقدمة عن Vertical Navigation Bar

تستخدم Vertical Navigation Bar لترتيب روابط التنقل بشكل عمودي على جانب صفحة الويب.

- تعتمد على القوائم غير المرتبة ul
- تحتوي على عناصر li وروابط a
- توضع عادة على جانبي صفحة الويب
- تسهل تجربة المستخدم في التنقل

## تنسيق القائمة الأساسية

نستخدم CSS لإزالة التنسيق الافتراضي للقائمة وضبط أبعادها.

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}
```

## تنسيق الروابط والتفاعل

تحويل الروابط إلى block يسهل النقر عليها وتنسيقها.

```css
li a {
  display: block;
  color: black;
  padding: 8px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: #555555;
  color: white;
}
```

## حالة العنصر النشط

استخدام class باسم active لتمييز الرابط الحالي.

```css
.active {
  background-color: #04AA6D;
  color: white;
}
```

## إضافة الحدود والمحاذاة

إضافة حدود وتوسيط النصوص لتحسين التصميم البصري.

```css
ul {
  border: 1px solid #555555;
}
li {
  text-align: center;
  border-bottom: 1px solid #555555;
}
li:last-child {
  border-bottom: none;
}
```

## القائمة الثابتة

استخدام position: fixed لإنشاء قائمة جانبية ثابتة.

```css
ul {
  height: 100%;
  position: fixed;
  overflow: auto;
}
```

## خلاصة الدرس

تطبيق ما تعلمناه لبناء قوائم تنقل احترافية.

- استخدام ul و li للهيكل
- تنسيق الروابط بـ display: block
- تفعيل hover و active
- استخدام position: fixed للثبات
