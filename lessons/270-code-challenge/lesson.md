# CSS supports Rule Challenge

المصدر: https://www.w3schools.com/css/css_challenges_supports_rule.asp

## مقدمة حول supports

مقدمة حول استخدام قاعدة supports في CSS للتحقق من دعم المتصفح للخصائص.

- قاعدة supports تسمح بكتابة كود مشروط
- تساعد في توفير بدائل عند عدم دعم خاصية معينة
- تزيد من استقرار وتوافقية تصميم صفحات الويب

## بنية supports البرمجية

شرح البنية البرمجية لقاعدة supports وكيفية كتابة الشروط داخلها.

```css
@supports (display: grid) {
  .container {
    display: grid;
  }
}
```

## استخدام المعاملات المنطقية

استخدام المعاملات المنطقية مثل and و or و not داخل supports.

```css
@supports (display: grid) and (gap: 20px) {
  .grid-layout {
    display: grid;
    gap: 20px;
  }
}
```

## تحدي البرمجة

تحدي عملي لاستخدام supports للتحقق من دعم display: flex.

```css
/* التحدي: تحقق من دعم flex */
@supports (display: flex) {
  .box {
    display: flex;
    justify-content: center;
  }
}
```

## معاينة المخرجات

معاينة كيفية تعامل المتصفح مع كود supports.

```text
Browser supports flex: Apply styles
Browser does not support flex: Skip styles
```

## أفضل الممارسات

أفضل الممارسات البرمجية عند استخدام supports في مشاريع CSS.

- استخدم التنسيقات الأساسية كـ Fallback
- ضع التحسينات المتقدمة داخل supports
- اختبر الكود على متصفحات مختلفة
- لا تبالغ في تعقيد الشروط المنطقية

## خاتمة الدرس

خاتمة الدرس ودعوة للممارسة العملية.

- راجع مفاهيم supports بانتظام
- طبق التحدي البرمجي في الرابط
- استمر في تطوير مهاراتك في CSS
