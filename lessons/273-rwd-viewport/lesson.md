# Responsive Web Design - The Viewport

المصدر: https://www.w3schools.com/css/css_rwd_viewport.asp

## مقدمة حول الـ Viewport

مفهوم الـ Viewport هو المساحة المرئية من صفحة الويب التي تختلف باختلاف الجهاز المستخدم.

- الـ Viewport هي المساحة المرئية للمستخدم.
- تختلف أبعادها بين الهواتف وأجهزة الكمبيوتر.
- التحكم فيها ضروري لتصميم صفحات الويب المتجاوبة.

## إضافة الـ meta tag للـ Viewport

يجب إضافة meta tag داخل قسم head للتحكم في أبعاد الصفحة وتوسيعها.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Styled Web Page</p>
  </body>
</html>
```

## تحليل خصائص الـ meta tag

شرح خصائص width و initial-scale في الـ meta tag.

- width=device-width: يطابق عرض الصفحة مع عرض الشاشة.
- initial-scale=1.0: يضبط مستوى التكبير عند التحميل.
- هذه الإعدادات تضمن تجربة مستخدم أفضل على الهواتف.

## أهمية الـ Viewport في العرض

مقارنة مرئية توضح تأثير استخدام الـ viewport meta tag.

## قواعد تجنب التمرير الأفقي

تجنب التمرير الأفقي من خلال عدم استخدام عناصر ذات عرض ثابت كبير.

- لا تستخدم عناصر ذات عرض ثابت كبير.
- تجنب التمرير الأفقي تماما.
- اضبط الصور لتناسب عرض الـ viewport.

## نصائح تقنية إضافية

استخدم القيم النسبية و Media Queries لضمان مرونة المحتوى.

- استخدم القيم النسبية مثل width: 100.
- استخدم CSS Media Queries للتجاوب.
- احذر من قيم الـ absolute positioning الكبيرة.

## خلاصة الدرس

الخلاصة: الـ viewport هو مفتاح التصميم المتجاوب الناجح.

- الـ Viewport ضروري للتجاوب.
- استخدم meta tag دائما.
- التزم بالقيم النسبية في CSS.
