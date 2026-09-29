# CSS Accessibility Styling

المصدر: https://www.w3schools.com/css/css_accessibility.asp

## مقدمة في CSS Accessibility

تصميم مواقع الويب يجب أن يضمن سهولة الوصول لجميع المستخدمين.

- أهمية Accessibility في تجربة المستخدم
- تحسين الوضوح البصري والتنقل
- تطبيق معايير التصميم الشامل

## أهمية تباين الألوان

استخدم تباين ألوان عال لضمان قابلية القراءة.

```css
/* Good Contrast */
body {
  background-color: #ffffff;
  color: #000000;
}
/* Bad Contrast */
body {
  background-color: #eeeeee;
  color: #cccccc;
}
```

## الخطوط والوحدات النسبية

استخدم وحدات rem بدلا من px لمرونة أكبر في التحكم بحجم الخط.

```css
body {
  font-family: Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}
```

## مؤشرات التركيز Focus

استخدم :focus لتحديد العناصر التفاعلية بوضوح.

```css
a:focus,
button:focus,
input:focus {
  outline: 2px solid orange;
}
```

## استخدام Semantic HTML

الهيكل الدلالي يساعد المتصفحات وأدوات المساعدة على فهم محتوى الصفحة.

```css
nav, aside {
  background-color: #333333;
  color: white;
}
```

## احترام تفضيلات المستخدم

احترم إعدادات المستخدم لتقليل الحركة عبر media queries.

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## خلاصة الدرس

اجعل الويب مكانا متاحا للجميع بتطبيق معايير Accessibility.

- التباين العالي للألوان
- استخدام الوحدات النسبية
- مؤشرات التركيز المرئية
- الهيكل الدلالي HTML
- احترام تفضيلات الحركة
