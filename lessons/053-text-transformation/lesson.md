# CSS Text Transformation

المصدر: https://www.w3schools.com/css/css_text_transformation.asp

## مقدمة في CSS Text Transformation

مرحبا بكم في درس CSS Text Transformation للتحكم في حالة أحرف النصوص.

- تستخدم خاصية text-transform للتحكم في حالة الأحرف
- تغيير مظهر النص دون التأثير على المحتوى الأصلي
- أداة أساسية في تنسيق نصوص صفحات الويب

## مفاهيم وقيم text-transform

تتيح خاصية text-transform تحويل النصوص إلى أحرف كبيرة أو صغيرة أو تنسيق الكلمات.

## تطبيق الكود - الجزء الأول

تطبيق قيمة uppercase لتحويل النص إلى أحرف كبيرة.

```css
p.uppercase {
  text-transform: uppercase;
}
```

## تطبيق الكود - الجزء الثاني

تطبيق قيمتي lowercase و capitalize لتنسيق النصوص.

```css
p.lowercase {
  text-transform: lowercase;
}
p.capitalize {
  text-transform: capitalize;
}
```

## شرح المخرجات المرئية

المتصفح يعرض النصوص بالتنسيق المطلوب مع الحفاظ على النص الأصلي.

- uppercase: يحول النص إلى أحرف كبيرة
- lowercase: يحول النص إلى أحرف صغيرة
- capitalize: يجعل الحرف الأول من كل كلمة كبيرا

## أفضل الممارسات

استخدم text-transform للتنسيق البصري فقط للحفاظ على جودة الكود.

- استخدام الخاصية للتنسيق البصري فقط
- عدم الاعتماد عليها لتغيير محتوى البيانات
- تحسين تجربة المستخدم عبر تنسيق النصوص

## خلاصة الدرس

تعلمنا اليوم التحكم في مظهر النصوص، جربوا الأكواد بأنفسكم عبر الرابط.

- تم شرح خاصية text-transform
- تم استعراض قيم uppercase و lowercase و capitalize
- تم التأكيد على أهمية الفصل بين التنسيق والمحتوى
