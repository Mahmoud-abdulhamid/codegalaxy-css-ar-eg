# التحكم في CSS Variables باستخدام JavaScript

المصدر: https://www.w3schools.com/css/css3_variables_javascript.asp

## مقدمة حول التفاعل بين CSS و JavaScript

تسمح CSS Variables بالوصول إلى DOM، مما يتيح لنا تعديل قيمها برمجيا باستخدام JavaScript لجعل صفحات الويب أكثر تفاعلية.

- CSS Variables جزء من DOM
- إمكانية القراءة والتعديل عبر JavaScript
- تغيير التصميم ديناميكيا دون إعادة تحميل الصفحة

## الوصول إلى Root Element

نستخدم document.querySelector(':root') للوصول إلى المتغيرات المعرفة على مستوى المستند بالكامل.

```javascript
var r = document.querySelector(':root');
```

## قراءة قيم المتغيرات

تستخدم getComputedStyle لجلب الأنماط الحالية، ثم getPropertyValue لاستخراج قيمة المتغير المحدد.

```javascript
function myFunction_get() {
  var rs = getComputedStyle(r);
  alert("Value: " + rs.getPropertyValue('--primary-bg-color'));
}
```

## تعديل قيم المتغيرات

تعديل قيمة المتغير ديناميكيا باستخدام setProperty يؤدي إلى تحديث فوري في التصميم.

```javascript
function myFunction_set() {
  r.style.setProperty('--primary-bg-color', 'green');
}
```

## معاينة النتائج

تظهر الصورة كيف يتم تحديث المتغيرات وتأثيرها المباشر على عناصر الصفحة.

## أفضل الممارسات

نصائح برمجية: استخدم :root للمتغيرات العامة، والتزم بالبادئة -- لضمان عمل المتغيرات بشكل صحيح.

- استخدم :root للمتغيرات العامة
- تأكد من كتابة -- قبل اسم المتغير
- تحقق من توافق المتصفحات
- حافظ على نظافة الكود البرمجي

## خلاصة الدرس

لقد تعلمنا اليوم كيفية الربط بين CSS و JavaScript للتحكم في المتغيرات ديناميكيا. جرب الكود بنفسك لتطوير مهاراتك.

- تمت تغطية الوصول إلى DOM
- شرحنا قراءة المتغيرات بـ getComputedStyle
- شرحنا تعديل المتغيرات بـ setProperty
- نوصي بممارسة الكود عبر الرابط المرفق
