# شرح مفصل لخصائص CSS Grid Items والتحكم في المساحات

المصدر: https://www.w3schools.com/css/css_grid_item.asp

## مقدمة عن عناصر Grid Items في CSS Grid

مرحبا بكم في درس CSS Grid Items سنتعرف على كيفية التحكم بعناصر grid container.

- تحتوي حاوية grid container على عنصر واحد أو أكثر من grid items
- تتحول جميع العناصر الابنية المباشرة للحاوية تلقائيا إلى عناصر grid items
- يمكننا التحكم بأبعاد ومواقع هذه العناصر بكل سهولة واحترافية

## مفهوم خطوط الأعمدة والصفوف Column and Row Lines

يعتمد تقسيم الشبكة على خطوط وهمية تسمى column-lines وrow-lines لتحديد أرقام المواقع.

- الخطوط الفاصلة بين الأعمدة تسمى column-lines
- الخطوط الفاصلة بين الصفوف تسمى row-lines
- نعتمد على أرقام الخطوط لوضع العناصر بدقة داخل الحاوية

## استخدام خاصيتي grid-column-start و grid-column-end

نستخدم grid-column-start وgrid-column-end لتحديد نقطة بداية ونهاية العنصر أفقيا.

```css
.item1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

## الاختصار السريع grid-column

تعتبر خاصية grid-column اختصارا يجمع خاصيتي البداية والنهاية مع كلمة span.

```css
.item1 {
  grid-column: 1 / span 2;
}
```

## التحكم في الصفوف عبر grid-row-start و grid-row-end

نستخدم grid-row-start وgrid-row-end للتحكم في امتداد العنصر عبر صفوف الشبكة.

```css
.item1 {
  grid-row-start: 1;
  grid-row-end: 3;
}
```

## اختصار الصفوف باستخدام grid-row

خاصية grid-row هي الاختصار المناسب لتحديد بداية الصفوف وعدد الصفوف الممتدة.

```css
.item1 {
  grid-row: 1 / span 2;
}
```

## دمج خصائص الأعمدة والصفوف معا

نستطيع دمج grid-column وgrid-row معا لجعل العنصر يمتد أفقيا ورأسيا.

```css
.item1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
}
```

## خلاصة وخاتمة الدرس

تعرفنا على كيفية التحكم بعناصر Grid Items وأتمنى لكم التوفيق في تطبيقاتكم.

- استخدام grid-column للاختصار الأفقي المتقدم
- استخدام grid-row للاختصار الرأسي المرن
- دمج الخصائص لتصميم تخطيطات ويب احترافية ومتجاوبة
- اشراف وتدريب المدرب محمود عبدالحميد
