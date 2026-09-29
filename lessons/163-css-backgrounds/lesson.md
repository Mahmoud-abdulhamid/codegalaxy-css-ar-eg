# CSS Multiple Backgrounds

المصدر: https://www.w3schools.com/css/css3_backgrounds.asp

## مقدمة في CSS Multiple Backgrounds

تسمح CSS بإضافة صور خلفية متعددة للعنصر الواحد باستخدام خاصية background-image.

- إضافة صور خلفية متعددة للعنصر
- استخدام خاصية background-image
- ترتيب الصور فوق بعضها البعض
- الصورة الأولى تكون الأقرب للمشاهد

## القواعد الأساسية للصور المتعددة

يتم الفصل بين صور الخلفية باستخدام الفواصل، وتترتب الصور فوق بعضها.

- الفصل بين الصور باستخدام الفاصلة (comma)
- الصورة الأولى تظهر في المقدمة
- الصور التالية تظهر في الخلفية
- إمكانية تحديد موقع وتكرار كل صورة على حدة

## استخدام الخصائص المنفصلة

استخدام الخصائص الفردية للتحكم في كل صورة خلفية على حدة.

```css
#example1 {
  background-image: url(img_flwr.gif), url(paper.gif);
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
}
```

## استخدام خاصية background المختصرة

استخدام خاصية background المختصرة لتحقيق نفس النتيجة بكود أقل.

```css
#example1 {
  background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
}
```

## معاينة المخرجات

تظهر النتيجة بدمج صورتين فوق بعضهما البعض في العنصر.

```text
Element Background:
- Layer 1: Flower (Right-Bottom, No-Repeat)
- Layer 2: Paper (Left-Top, Repeat)
```

## أفضل الممارسات

نصائح هامة للتعامل مع صور الخلفية المتعددة.

- الترتيب يحدد الطبقات (Layering)
- استخدام صور شفافة (PNG) للطبقات العليا
- التأكد من توافق المتصفحات الحديثة
- استخدام background المختصرة لتقليل حجم الملف

## خلاصة الدرس

لقد تعلمنا كيفية إضافة صور خلفية متعددة والتحكم بها.

- تمت تغطية خاصية background-image
- تم شرح خاصية background المختصرة
- تم توضيح كيفية ترتيب الصور
- تطبيق عملي للصور المتعددة
