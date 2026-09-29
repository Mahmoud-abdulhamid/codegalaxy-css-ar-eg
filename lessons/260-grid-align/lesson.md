# CSS Grid Container - Align Grid Content

المصدر: https://www.w3schools.com/css/css_grid_align.asp

## مقدمة في محاذاة محتوى Grid

مرحبا بكم في درس محاذاة محتوى Grid في CSS.

- التحكم في توزيع العناصر داخل Grid Container
- استخدام justify-content للمحاذاة الأفقية
- استخدام align-content للمحاذاة الرأسية
- استخدام place-content كخاصية مختصرة

## الخاصية justify-content

تستخدم justify-content لمحاذاة المحتوى أفقيا على main-axis.

```css
.container {
  display: grid;
  justify-content: space-evenly;
}
```

## قيم justify-content

قيم justify-content تشمل space-evenly و center و start و end.

## الخاصية align-content

تستخدم align-content للمحاذاة الرأسية على cross-axis.

```css
.container {
  display: grid;
  height: 300px;
  align-content: center;
}
```

## الخاصية المختصرة place-content

استخدم place-content كاختصار لدمج align-content و justify-content.

```css
.container {
  display: grid;
  height: 300px;
  place-content: center;
}
```

## معاينة النتائج

توسيط العناصر أفقيا ورأسيا باستخدام place-content.

```text
Container (300px height)
+-----------------------+
|                       |
|     Grid Content      |
|                       |
+-----------------------+
```

## خلاصة الدرس

خلاصة: استخدم الخصائص الثلاث للتحكم الكامل في محاذاة Grid.

- justify-content للمحاذاة الأفقية
- align-content للمحاذاة الرأسية
- place-content للدمج والاختصار
- جرب الأكواد بنفسك عبر الرابط في الوصف
