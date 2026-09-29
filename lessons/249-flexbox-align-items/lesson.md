# CSS Flexbox align-items and align-content

المصدر: https://www.w3schools.com/css/css3_flexbox_container_align.asp

## مقدمة حول محاذاة عناصر Flexbox

مرحبا بكم في درس جديد من دورة CSS لتعلم محاذاة عناصر Flexbox عبر align-items و align-content.

- تعلم خصائص المحاذاة في Flexbox
- استخدام align-items للمحاذاة العمودية
- استخدام align-content للخطوط المتعددة
- تحقيق التمركز التام True Centering

## استخدام خاصية align-items مع قيمة center

تستخدم خاصية align-items للمحاذاة العمودية، ومع قيمة center تتوسط العناصر الحاوية تماما.

```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: center;
}
```

## قيم flex-start و flex-end في align-items

يمكن محاذاة العناصر في أعلى الحاوية بـ flex-start أو في أسفلها بـ flex-end.

```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: flex-start;
}
```

## قيمة stretch لتمدد العناصر

قيمة stretch تمدد العناصر لملء الحاوية عموديا وهي القيمة الافتراضية.

```css
.flex-container {
  display: flex;
  height: 200px;
  align-items: stretch;
}
```

## خاصية align-content لمحاذاة خطوط Flex

خاصية align-content تتعامل مع خطوط متعددة عند تفعيل flex-wrap داخل الحاوية.

```css
.flex-container {
  display: flex;
  height: 400px;
  flex-wrap: wrap;
  align-content: center;
}
```

## توزيع الخطوط بـ space-between

قيمة space-between توزع المسافات بالتساوي بين خطوط الحاوية.

```css
.flex-container {
  display: flex;
  height: 400px;
  flex-wrap: wrap;
  align-content: space-between;
}
```

## التمركز التام True Centering في Flexbox

لتحقيق True Centering نضبط justify-content و align-items على center معا.

```css
.flex-container {
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
}
```

## خلاصة درس محاذاة Flexbox

خلاصة الدرس: استخدام align-items و align-content و justify-content لاحتراف محاذاة عناصر الويب.

- استخدم align-items للمحاذاة العمودية المفردة
- استخدم align-content لخطوط الحاوية المتعددة
- ادمج الخاصيتين مع justify-content للتمركز التام
- تابع دورة CSS على منصة CodeGalaxy للمزيد
