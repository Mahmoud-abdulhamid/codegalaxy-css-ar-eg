# CSS Outline Offset

المصدر: https://www.w3schools.com/css/css_outline_offset.asp

## مقدمة عن CSS Outline Offset

مرحبا بكم في درس جديد من دورة CSS لنتعلم كيفية استخدام خاصية outline-offset.

- نتعلم اليوم خاصية outline-offset في CSS
- إضافة مسافة بين الإطار outline والحدود border
- المسافة بين العنصر والإطار تكون شفافة تماما

## مفهوم المسافة الشفافة

تخلق خاصية outline-offset مسافة شفافة تقع بين حدود العنصر والإطار الخارجي.

- المسافة بين العنصر والإطار تكون شفافة
- تسمح بخروج الإطار الخارجي عن حدود border
- تمنح التصميم مظهرا احترافيا وجماليا

## الكود البرمجي الأول للمسافة الموجبة

نكتب كود CSS للفقرة مع تحديد الهوامش والحواف والإطار الخارجي.

```css
p {
  margin: 30px;
  padding: 5px;
  border: 1px solid black;
  outline: 3px solid red;
}
```

## تطبيق خاصية outline-offset

نضيف سطر outline-offset بقيمة 15px ليبتعد الإطار عن الحدود.

```css
p {
  margin: 30px;
  padding: 5px;
  border: 1px solid black;
  outline: 3px solid red;
  outline-offset: 15px;
}
```

## دمج الخلفية الصفراء مع الإطار

نضيف خلفية صفراء للعنصر لنرى بوضوح شفافية المسافة بين الحدود والإطار.

```css
p {
  margin: 30px;
  padding: 5px;
  background: yellow;
  border: 1px solid black;
  outline: 3px solid red;
  outline-offset: 15px;
}
```

## استخدام القيم السالبة Negative Value

نستطيع استخدام قيم سالبة لوضع الإطار الخارجي داخل حدود العنصر نفسه.

- تدعم الخاصية القيم السالبة negative values
- توضع الإطارات داخل حدود border عند استخدام السالب
- تمنح تأثيرات تصميمية فريدة وجديدة

## كود القيمة السالبة outline-offset

تطبيق قيمة سالب 5px يجعل الإطار الأحمر يظهر داخل حدود العنصر.

```css
p {
  margin: 30px;
  padding: 5px;
  background: yellow;
  border: 1px solid black;
  outline: 3px solid red;
  outline-offset: -5px;
}
```

## خلاصة الدرس وأفضل الممارسات

خلاصة درس outline-offset ودعوة لتجربة الأكواد وتطوير مهارات تصميم الويب.

- خاصية outline-offset تزيد جمال وتناسق التصميم
- إمكانية التحكم بالمسافة بكل مرونة وسهولة
- تابعوا الدورات والدروس القادمة على منصة CodeGalaxy
