# CSS Responsive Modal Images

المصدر: https://www.w3schools.com/css/css3_images_modal.asp

## مقدمة حول Modal Images

تتيح Modal Image للمستخدم عرض نسخة مكبرة من الصورة دون مغادرة صفحة الويب الحالية.

- عرض الصور بحجم كبير داخل نافذة منبثقة
- تحسين تجربة المستخدم دون التنقل بين الصفحات
- استخدام CSS لإخفاء وإظهار النافذة
- استخدام JavaScript للتحكم في التفاعل

## المفاهيم الأساسية

نعتمد على CSS لتصميم النافذة المنبثقة وJavaScript لإدارة أحداث النقر.

- استخدام position: fixed لإنشاء خلفية النافذة
- استخدام display: none لإخفاء الـ Modal افتراضيا
- استخدام JavaScript لتغيير الـ display إلى flex
- تطبيق Responsive Design باستخدام Media Queries

## هيكل الكود البرمجي

هيكل الكود الأساسي الذي يجمع بين HTML وCSS وJavaScript.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        background-color: rgba(0,0,0,0.8);
      }
      .modal.show {
        display: flex;
      }
    </style>
  </head>
  <body>
    <div class="gallery">
      <img src="img.jpg" onclick="openModal('m1')">
    </div>
  </body>
</html>
```

## منطق JavaScript

دوال JavaScript للتحكم في ظهور وإخفاء النافذة المنبثقة.

```javascript
function openModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.add("show");
}
function closeModal(modalId) {
  let modal = document.getElementById(modalId);
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}
```

## معاينة النتيجة

النتيجة النهائية: معرض صور متجاوب مع نافذة منبثقة تفاعلية.

## أفضل الممارسات

نصائح تقنية لتحسين أداء وتصميم الـ Modal.

- استخدام z-index مرتفع للنافذة المنبثقة
- إضافة transition للتحكم في سرعة الظهور
- استخدام box-sizing: border-box لتنظيم الأبعاد
- التأكد من توافق التصميم مع الهواتف الذكية

## خلاصة الدرس

شكرا لمتابعتكم، جربوا الكود وطوروا مهاراتكم في CSS.

- تم شرح كيفية إنشاء Modal Image
- تم دمج HTML وCSS وJavaScript
- تم تطبيق Responsive Design
- شجعنا على التجربة العملية للأكواد
