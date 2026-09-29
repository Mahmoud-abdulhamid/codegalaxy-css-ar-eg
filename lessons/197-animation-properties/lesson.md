# CSS Animation Properties Direction and Fill Mode

المصدر: https://www.w3schools.com/css/css3_animations_properties.asp

## مقدمة خصائص الحركة

تعرف على خصائص CSS animation direction و fill mode والمختصرة لتصميم حركات احترافية.

- تغطية خصائص اتجاه وحالة الحركات
- استخدام animation-direction للتحكم بالمسار
- ضبط القيم النهائية والمبدئية عبر animation-fill-mode
- كتابة أكواد أقصر باستخدام الكود المختصر

## خاصية animation-direction

تحدد خاصية animation-direction ما إذا كان يجب تشغيل الحركة للأمام أو للخلف أو بشكل تبادلي.

- تحديد اتجاه تشغيل الحركة للأمام أو للخلف
- دعم دورات تبادلية سلسة وجذابة
- توجيه العناصر بدقة حسب الحاجة التصميمية
- التحكم الكامل في مسار الأنميشن

## كود استخدام alternate

مثال عملي لاستخدام القيمة alternate لجعل الحركة تعمل للأمام أولا ثم للخلف.

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 4s;
  animation-direction: reverse;
}
```

## استخدام alternate-reverse

تشغيل الحركة للخلف أولا ثم للأمام باستخدام alternate-reverse.

```css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-direction: alternate-reverse;
}
```

## خاصية animation-fill-mode

تحدد خاصية animation-fill-mode تنسيق العنصر قبل بدء الحركة أو بعد نهايتها.

- تجاوز السلوك الافتراضي قبل وبعد الحركة
- الاحتفاظ بقيم الإطار الرئيسي الأخير
- تطبيق قيم الإطار الأول أثناء فترة التأخير
- دمج الحالتين معا باستخدام قيمة both

## قيم animation-fill-mode

استخدام قيم forwards و backwards للتحكم بحالة العنصر قبل وبعد تنفيذ الحركة.

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  animation-name: myAnimation;
  animation-duration: 3s;
  animation-delay: 2s;
  animation-fill-mode: both;
}
```

## الخاصية المختصرة animation

يمكن اختصار جميع خصائص الحركة في سطر برمجي واحد باستخدام خاصية animation.

```css
div {
  animation: myAnimation 5s linear 2s infinite alternate;
}
```

## خلاصة الدرس

خلاصة خصائص الحركات في CSS وكيفية استخدامها باحترافية.

- التحكم الكامل باتجاه الحركات عبر animation-direction
- ضبط الحالات قبل وبعد الحركة باستخدام animation-fill-mode
- كتابة أكواد نظيفة وسريعة بالخاصية المختصرة animation
- متابعة دورة CSS لتطوير مهاراتكم البرمجية مع محمود عبدالحميد
