# تصميم نافذة Modal Images تفاعلية باستخدام CSS و JavaScript

المصدر: https://www.w3schools.com/howto/howto_css_modal_images.asp

## مقدمة الدرس وأهمية Modal Images

مرحبا بكم في درس تصميم Modal Images لتفاعل أفضل للصور في مواقع الويب.

- عرض الصور بحجم كبير عبر Modal منبثق
- تحسين تجربة المستخدم على متصفحات الويب
- دمج CSS و JavaScript لتفاعل كامل

## هيكل HTML الخاص بعنصر الصورة والمودال

نكتب كود HTML المتضمن للصورة المصغرة وdiv المودال وزر الإغلاق.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <!-- Trigger the Modal -->
    <img id="myImg" src="img_snow.jpg" alt="Snow" style="width:100%;max-width:300px">
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="img01">
      <div id="caption"></div>
    </div>
  </body>
</html>
```

## تنسيق الصورة المحفزة وتصميم خلفية المودال

نضيف تنسيقات CSS للصورة وتصميم خلفية المودال الثابتة والشفافة.

```css
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
#myImg:hover {
  opacity: 0.7;
}
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0; top: 0;
  width: 100%; height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.9);
}
```

## تنسيق محتوى الصورة داخل المودال ونص الوصف

ننسق عرض الصورة المكبرة ونصوص الوصف لتطابق التصميم المتجاوب.

```css
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}
```

## إضافة تأثيرات الحركة والانتقال وزر الإغلاق

نضيف تأثير zoom الحركي وزر الإغلاق الأنيق في أعلى النافذة.

```css
.modal-content, #caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}
@keyframes zoom {
  from {
    transform:scale(0)
  }
  to {
    transform:scale(1)
  }
}
.close {
  position: absolute;
  top: 15px; right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}
```

## برمجة التفاعل باستخدام JavaScript

نكتب كود JavaScript للتحكم بفتح المودال وتمرير مصدر الصورة والنص.

```javascript
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
```

## برمجة زر الإغلاق والتوافقية مع الشاشات الصغيرة

نكمل كود إغلاق النافذة ونضيف التجاوب للشاشات الصغيرة عبر media query.

```javascript
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
// Media query for smaller screens
/*
   @media only screen and (max-width: 700px) {
   .modal-content {
   width: 100%;
   }
   }
   */
```

## خلاصة الدرس ودعوة للتجربة

خلاصة الدرس: إنشاء Modal Images متجاوبة باستخدام CSS و JavaScript.

- تصميم احترافي ومتجاوب لعرض الصور
- استخدام CSS Animations للتأثيرات البصرية
- ربط الأحداث بـ JavaScript للتحكم الكامل
