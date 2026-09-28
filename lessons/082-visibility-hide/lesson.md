# إخفاء العناصر باستخدام CSS

المصدر: https://www.w3schools.com/css/css_display_hide.asp

## مقدمة حول إخفاء العناصر

سنتعلم اليوم كيفية إخفاء العناصر في صفحة الويب والفرق بين display: none و visibility: hidden.

- إخفاء العناصر هو جزء أساسي من تصميم واجهات الويب
- استخدام CSS للتحكم في ظهور العناصر
- دمج JavaScript لإضافة تفاعلية ديناميكية

## استخدام display: none

خاصية display: none تزيل العنصر تماما من تدفق المستند ولا تترك له أي مساحة.

```css
#panel {
  display: none;
}
```

## التفاعل مع JavaScript

استخدام JavaScript لتغيير قيمة display إلى block عند النقر.

```javascript
function myFunction() {
  document.getElementById("panel")
  .style.display = "block";
}
```

## منطق التبديل بين الإخفاء والإظهار

استخدام جملة if للتبديل بين حالتي الإخفاء والإظهار.

```javascript
var x = document.getElementById("panel");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
```

## الفرق مع visibility: hidden

خاصية visibility: hidden تخفي العنصر مع الاحتفاظ بمساحته في الصفحة.

```css
h1.hidden {
  visibility: hidden;
}
```

## خلاصة الدرس

خلاصة: اختر display: none للإزالة التامة، وvisibility: hidden للحفاظ على المساحة.
