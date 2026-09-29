# CSS Dropdowns

المصدر: https://www.w3schools.com/css/css_dropdowns.asp

## مقدمة في CSS Dropdowns

تستخدم CSS Dropdowns لعرض قائمة خيارات عند التفاعل مع عنصر معين مثل الزر أو الرابط.

- تستخدم CSS Dropdowns لتحسين تجربة المستخدم
- تعتمد على عنصر محفز Trigger Element
- تظهر المحتوى المخفي عند التفاعل
- تعتبر جزءا أساسيا من واجهات الويب الحديثة

## المفاهيم الأساسية

تعتمد القوائم المنسدلة على خصائص position للتحكم في تموضع العناصر داخل الصفحة.

- position: relative للعنصر الأب
- position: absolute للعنصر المنسدل
- display: none لإخفاء المحتوى افتراضيا
- display: block لإظهار المحتوى عند hover

## كود CSS Dropdown بسيط

مثال برمجي بسيط لإنشاء قائمة منسدلة تظهر عند تمرير الماوس.

```css
.dropdown {
  position: relative;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 130px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
}
.dropdown:hover .dropdown-content {
  display: block;
}
```

## هيكل HTML للقائمة

هيكل HTML يتكون من حاوية رئيسية تحتوي على المحتوى المرئي والمحتوى المخفي.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="dropdown">
      <span>Mouse over me!</span>
      <div class="dropdown-content">
        <p>Hello World!</p>
      </div>
    </div>
  </body>
</html>
```

## إنشاء قائمة منسدلة متقدمة

يمكن تطوير القائمة المنسدلة لتشمل أزرارا وروابط تفاعلية.

```css
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  cursor: pointer;
}
.dropdown-content a {
  display: block;
  padding: 12px 16px;
  text-decoration: none;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
}
```

## أفضل الممارسات

استخدام الظلال وتحديد العرض الأدنى يعزز من جمالية القائمة المنسدلة.

- استخدم box-shadow لإضافة عمق بصري
- حدد min-width لضمان استقرار العرض
- استخدم cursor: pointer للأزرار التفاعلية
- تأكد من وضوح الروابط داخل القائمة

## خاتمة الدرس

شكرا لمتابعتكم، جربوا الأكواد بأنفسكم لتطوير مهاراتكم في CSS.

- تمت تغطية مفاهيم position و display
- تم إنشاء قائمة منسدلة بسيطة وأخرى متقدمة
- تم توضيح أهمية التفاعل عبر hover
- راجع الرابط في الوصف لمزيد من التفاصيل
