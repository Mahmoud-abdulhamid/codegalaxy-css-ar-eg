# CSS Backgrounds and Transparency

المصدر: https://www.w3schools.com/css/css_background.asp

## مقدمة في CSS Backgrounds

تستخدم خصائص CSS Backgrounds لإضافة تأثيرات بصرية جذابة لعناصر صفحة الويب.

- التحكم في ألوان الخلفية باستخدام background-color
- ضبط الشفافية باستخدام خاصية opacity
- استخدام قيم RGBA للتحكم الدقيق في شفافية الخلفية

## استخدام background-color

تحدد خاصية background-color اللون الخاص بخلفية العنصر.

```css
body {
  background-color: lightblue;
}
```

## تطبيق الألوان على عناصر مختلفة

يمكن تخصيص ألوان خلفية مختلفة لكل عنصر HTML على حدة.

```css
h1 { background-color: green; }
div { background-color: lightblue; }
p { background-color: yellow; }
```

## فهم خاصية opacity

تتحكم خاصية opacity في شفافية العنصر بالكامل بما في ذلك محتوياته.

```css
div {
  background-color: green;
  opacity: 0.3;
}
```

## الشفافية باستخدام RGBA

تسمح قيم RGBA بضبط شفافية الخلفية فقط دون التأثير على شفافية النص.

```css
div {
  background: rgba(0, 128, 0, 0.3);
}
```

## ملاحظات هندسية

استخدم RGBA بدلا من opacity عندما ترغب في شفافية الخلفية فقط.

- opacity تؤثر على العنصر وجميع أبنائه
- RGBA توفر تحكما مستقلا لشفافية اللون
- استخدم CSS Color Values لاختيار الألوان المناسبة

## خاتمة الدرس

جرب الأكواد بنفسك لتطوير مهاراتك في تصميم صفحات الويب.

- راجع توثيق CSS Backgrounds
- طبق الأمثلة في محرر الأكواد
- استمر في التعلم مع CodeGalaxy
