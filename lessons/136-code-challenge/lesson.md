# CSS Form Styling Challenge

المصدر: https://www.w3schools.com/css/css_challenges_form_styling.asp

## مقدمة في تنسيق الـ Forms

مرحبا بكم في تحدي تنسيق الـ Forms باستخدام CSS لتطوير مهارات تصميم واجهات الويب.

- تنسيق الـ Forms يعزز تجربة المستخدم
- استخدام CSS للتحكم في مظهر الـ input والـ button
- تطبيق التحدي البرمجي لتعزيز الفهم

## القواعد الأساسية لتنسيق الـ Elements

نستخدم خصائص CSS مثل width و padding و border لتنسيق عناصر الـ input بشكل احترافي.

- استخدام width: 100 لجعل الـ input يملأ الحاوية
- إضافة padding للمساحة الداخلية
- تطبيق border-radius للزوايا المستديرة

## هيكل الـ HTML للنموذج

هيكل الـ HTML الأساسي للنموذج يتكون من عناصر الـ label والـ input داخل الـ form.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <form>
      <label>Name:</label>
      <input type="text" name="name">
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

## تطبيق الـ CSS على الـ Elements

تطبيق خصائص CSS على عناصر الـ input لتحسين المظهر العام للنموذج.

```css
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
}
```

## معاينة النتيجة في الـ Web Browser

النتيجة النهائية للنموذج بعد تطبيق تنسيقات CSS تظهر بشكل احترافي ومنظم.

```text
Name:
[______________________]
[ Submit Button ]
```

## أفضل الممارسات البرمجية

استخدام box-sizing واختبار التصميم على متصفحات مختلفة يضمن جودة واجهة الويب.

- استخدام box-sizing: border-box
- اختبار التوافقية مع Chrome و Edge
- الحفاظ على نظافة الكود وتنسيقه

## خلاصة الدرس

شكرا لمتابعتكم، نأمل أن تكونوا قد استفدتم من هذا التحدي العملي لتنسيق الـ Forms.

- تم تغطية أساسيات تنسيق الـ Forms
- تم شرح تطبيق CSS على الـ input
- نوصي بممارسة التحديات البرمجية بانتظام
