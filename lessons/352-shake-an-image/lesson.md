# تصميم تأثير الاهتزاز المتحرك للصور باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_shake_image.asp

## مقدمة الدرس

مرحبا بكم في درس تصميم تأثير الاهتزاز المتحرك للصور باستخدام لغة CSS وتفاعل المؤشر.

- التعرف على طريقة اهتزاز الصور
- استخدام تأثيرات الـ CSS animations
- تحسين تجربة المستخدم على صفحة الويب

## المفاهيم الأساسية

نستخدم محدد العناصر مع حالة hover لبدء دالة الحركة عند مرور المؤشر فوق الصورة.

- تفعيل التأثير عند مرور المؤشر hover
- استخدام خصائص animation و transform
- تحديد مدة زمنية دقيقة للحركة

## كتابة قاعدة hover

كتابة قاعدة img hover لتحديد مدة الانيميشن والتكرار اللانهائي.

```css
img:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}
```

## تعريف keyframes الجزء الأول

تعريف keyframes shake وتغيير الإحداثيات والدوران في النسب الأولى.

```css
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
}
```

## تعريف keyframes الجزء الثاني

استكمال مراحل keyframes shake من 30 بالمئة حتى 60 بالمئة.

```css
@keyframes shake {
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
}
```

## اكتمال كود keyframes

الوصول إلى نهاية keyframes shake عند مئة بالمئة واستقرار التأثير.

```css
@keyframes shake {
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
```

## خلاصة الدرس

خلاصة درس تصميم اهتزاز الصور باستخدام animations و transform في CSS.

- استخدام keyframes لتحديد تفاصيل الحركة
- ضبط تكرار الانيميشن بشكل لا نهائي
- تطبيق التأثيرات عند مرور المؤشر hover
