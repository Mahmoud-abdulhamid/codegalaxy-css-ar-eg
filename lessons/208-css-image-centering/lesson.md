# CSS Centering Images Techniques

المصدر: https://www.w3schools.com/css/css3_image_center.asp

## مقدمة في توسيط الصور

مرحبا بكم في درس توسيط الصور باستخدام CSS. سنتعلم تقنيات التوسيط الأفقي والعمودي.

- توسيط الصور أفقيا باستخدام margin auto
- استخدام display flex للتوسيط
- تحقيق التوسيط الكامل باستخدام flexbox و grid

## التوسيط الأفقي باستخدام margin auto

نستخدم margin: auto لتوسيط الصور أفقيا، مع ضرورة تحويل العنصر إلى block وتحديد عرض مناسب.

```css
img {
  display: block;
  margin: auto;
  width: 50%;
}
```

## التوسيط الأفقي باستخدام display flex

استخدام display: flex على الحاوية الأب لتوسيط الصورة أفقيا بمرونة عالية.

```css
div {
  display: flex;
  justify-content: center;
}
img {
  width: 50%;
}
```

## التوسيط الكامل باستخدام flexbox

التوسيط الكامل يتطلب استخدام align-items و justify-content معا داخل حاوية ذات ارتفاع محدد.

```css
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
}
img {
  width: 50%;
}
```

## التوسيط باستخدام CSS grid

تعتبر خاصية place-items: center في CSS grid الطريقة الأسهل والأكثر اختصارا للتوسيط الكامل.

```css
div {
  display: grid;
  place-items: center;
  height: 600px;
}
img {
  width: 50%;
}
```

## خلاصة الدرس

خلاصة: استخدم margin: auto للبساطة، و flexbox أو grid للتصاميم المتقدمة. استمروا في التجربة!

- margin: auto يتطلب display: block
- flexbox يوفر تحكما مرنا في المحاذاة
- grid هو الأفضل للتوسيط السريع والسهل
- دائما حدد عرضا للصورة أصغر من الحاوية
