# CSS HSL and HSLA Colors

المصدر: https://www.w3schools.com/css/css_colors_hsl.asp

## مقدمة حول نظام الألوان HSL

نظام الألوان HSL يوفر طريقة مرنة لتحديد الألوان في صفحات الويب عبر ثلاث قيم أساسية.

- HSL اختصار لـ Hue و Saturation و Lightness
- يوفر تحكما دقيقا في خصائص اللون
- يستخدم في CSS لتنسيق العناصر

## مكونات نظام HSL

تتكون صيغة hsl(hue, saturation, lightness) من ثلاث قيم رئيسية للتحكم في اللون.

## كتابة كود HSL

مثال على استخدام HSL في CSS لتحديد لون النص.

```css
h1 {
  color: hsl(0, 100%, 50%);
}
p {
  color: hsl(120, 100%, 50%);
}
```

## درجات الرمادي

يمكن إنشاء درجات الرمادي عبر ضبط Hue و Saturation على 0 وتغيير Lightness.

- مفهوم Hue = 0
- مفهوم Saturation = 0
- Lightness = 0 (أسود)
- Lightness = 100 (أبيض)

## نظام HSLA والشفافية

نظام HSLA يضيف قناة Alpha للتحكم في شفافية العنصر.

```css
div {
  background-color: hsla(240, 100%, 50%, 0.3);
}
```

## خلاصة الدرس

نظام HSL و HSLA أدوات أساسية لتصميم واجهات ويب احترافية.

- HSL يسهل فهم الألوان
- HSLA يضيف الشفافية
- تطبيقات عملية واسعة في CSS
