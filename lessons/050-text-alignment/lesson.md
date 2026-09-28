# CSS Text Alignment and Direction

المصدر: https://www.w3schools.com/css/css_text_align.asp

## مقدمة في محاذاة النصوص

مرحبا بكم في درس CSS الجديد حول التحكم في محاذاة النصوص واتجاهها داخل صفحات الويب.

- التحكم في المحاذاة الأفقية للنصوص
- ضبط محاذاة السطر الأخير من الفقرة
- تنسيق المحاذاة الرأسية للعناصر
- تحديد اتجاه الكتابة في المستند

## المحاذاة الأفقية باستخدام text-align

تستخدم خاصية text-align لتحديد المحاذاة الأفقية للنص، وتدعم قيم مثل left وright وcenter وjustify.

```css
h1 { text-align: center; }
h2 { text-align: left; }
h3 { text-align: right; }
div { text-align: justify; }
```

## التحكم في السطر الأخير

تسمح خاصية text-align-last بالتحكم في محاذاة السطر الأخير من الفقرة بشكل مستقل.

```css
p.a { text-align-last: right; }
p.b { text-align-last: center; }
p.c { text-align-last: justify; }
```

## المحاذاة الرأسية للعناصر

تستخدم خاصية vertical-align لضبط المحاذاة الرأسية للعناصر مثل الصور داخل النصوص.

```css
img.a { vertical-align: baseline; }
img.b { vertical-align: text-top; }
img.d { vertical-align: sub; }
img.e { vertical-align: super; }
```

## ضبط اتجاه الكتابة

تستخدم خاصية direction مع unicode-bidi للتحكم في اتجاه الكتابة داخل عناصر الويب.

```css
p {
  direction: rtl;
  unicode-bidi: bidi-override;
}
```

## خلاصة الدرس

تعلمنا اليوم كيفية التحكم في محاذاة النصوص واتجاهها. جربوا الأكواد بأنفسكم لتعزيز مهاراتكم.

- استخدام text-align للمحاذاة الأفقية
- استخدام text-align-last للسطر الأخير
- استخدام vertical-align للمحاذاة الرأسية
- استخدام direction لضبط اتجاه النص
