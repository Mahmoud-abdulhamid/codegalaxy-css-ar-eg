# CSS Selectors Fundamentals

المصدر: https://www.w3schools.com/css/css_selectors.asp

## مقدمة في CSS Selectors

تستخدم CSS Selectors لتحديد عناصر HTML التي ترغب في تنسيقها.

- CSS Selectors هي وسيلة لاختيار عناصر HTML
- تسمح لنا بتطبيق أنماط CSS على عناصر محددة
- توجد أنواع متعددة من الـ Selectors الأساسية

## استخدام element selector

يقوم element selector باختيار عناصر HTML بناء على اسم العنصر.

```css
p
{
  text-align: center;
  color: red;
}
```

## التعامل مع id selector

يستخدم id selector لاستهداف عنصر واحد فريد باستخدام خاصية id.

```css
#para1
{
  text-align: center;
  color: red;
}
```

## قوة class selector

يستخدم class selector لاستهداف عناصر متعددة تشترك في نفس الـ class.

```css
.center {
  text-align: center;
  color: red;
}
```

## تخصيص class selector

يمكن تحديد class لعنصر معين أو دمج أكثر من class للعنصر الواحد.

```html
<p class="center large">
  هذه الفقرة تحمل كلاسين.
</p>
```

## خلاصة الدرس

تذكر دائما ممارسة كتابة الـ Selectors لتعزيز مهاراتك في CSS.

- element selector للاستهداف العام
- id selector للاستهداف الفريد
- class selector للاستهداف المتعدد
- لا تبدأ أسماء الـ id أو الـ class بأرقام
