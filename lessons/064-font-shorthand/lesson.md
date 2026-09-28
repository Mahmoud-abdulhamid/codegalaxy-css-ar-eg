# CSS Font Shorthand Property

المصدر: https://www.w3schools.com/css/css_font_shorthand.asp

## مقدمة حول CSS Font Shorthand

تعد خاصية font وسيلة فعالة لاختصار كتابة خصائص الخطوط المتعددة في إعلان واحد داخل CSS.

- خاصية font هي shorthand property
- تسمح بدمج خصائص الخط في سطر واحد
- تساعد في كتابة كود أنظف وأسرع

## القواعد الأساسية للخاصية

يجب دائما تحديد font-size و font-family كقيم أساسية عند استخدام خاصية font.

- القيم الإجبارية: font-size و font-family
- القيم الاختيارية: font-style, font-variant, font-weight
- يجب ترتيب القيم وفق معايير CSS

## مثال بسيط على font

تطبيق بسيط لخاصية font مع تحديد الحجم ونوع الخط.

```css
p.a {
  font: 20px Arial, sans-serif;
}
```

## إضافة خصائص الوزن والنمط

يمكن إضافة خصائص مثل italic و bold قبل تحديد الحجم والنوع.

```css
p.b {
  font: italic bold 16px Arial, sans-serif;
}
```

## استخدام line-height مع font

استخدام الرمز / لدمج line-height مع font-size.

```css
p.c {
  font: italic small-caps bold 15px/30px Georgia, serif;
}
```

## أفضل الممارسات

الالتزام بترتيب القيم هو مفتاح نجاح خاصية font.

- font-size و font-family هما الأهم
- استخدم / لربط line-height
- راجع دائما التوثيق الرسمي لـ CSS

## خلاصة الدرس

مارس كتابة الأكواد بنفسك لتتقن استخدام خاصية font.

- تم تغطية خاصية font المختصرة
- شرحنا ترتيب القيم والخصائص
- شجعنا على التطبيق العملي
