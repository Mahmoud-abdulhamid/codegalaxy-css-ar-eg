# إنشاء أزرار الإشعارات المتقدمة باستخدام CSS

المصدر: https://www.w3schools.com/howto/howto_css_notification_button.asp

## مقدمة عن أزرار الإشعارات في الويب

مرحبا بكم في درس إنشاء أزرار الإشعارات المتقدمة باستخدام CSS وتصميم شارات التنبيه.

- أهمية أزرار الإشعارات في واجهات المستخدم
- كيفية دمج HTML مع CSS لتصميم تفاعلي
- عرض عدد الرسائل غير القراءة بشكل أنيق

## هيكل HTML الخاص بزر الإشعارات

نبدأ ببناء العنصر باستخدام عنصر a مع ك notification وعناصر span داخلية.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <a href="#" class="notification">
      <span>Inbox</span>
      <span class="badge">3</span>
    </a>
  </body>
</html>
```

## تنسيق الزر الأساسي بخصائص CSS

ننسق كلاس notification بتحديد لون الخلفية والنص وإزالة التسطير وإضافة الحشو.

```css
.notification {
  background-color: #555;
  color: white;
  text-decoration: none;
  padding: 15px 26px;
  position: relative;
  display: inline-block;
  border-radius: 2px;
}
```

## ضبط وضعية الزر والتفاعل بالمرور

نستخدم position بنسبة relative ونضيف تأثير hover لتغيير الخلفية إلى اللون الأحمر.

```css
.notification:hover {
  background: red;
}
```

## تنسيق شارة الإشعارات badge

ننسق شارة الإشعارات باستخدام position بوضع absolute وتحديد الإحداثيات العلوية واليمنى.

```css
.notification .badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background: red;
  color: white;
}
```

## الممارسات البرمجية وأفضل الحلول

أفضل الممارسات لضبط تمركز العناصر المتداخلة باستخدام position و absolute في CSS.

- استخدام position relative للعنصر الأب
- استخدام position absolute للعنصر الابن badge
- ضبط border-radius بنسبة خمسين بالمئة لشكل دائري

## خلاصة الدرس ودعوة للتجربة

خلاصة درس أزرار الإشعارات مع دعوة لتجربة الأكواد وتطوير المهارات البرمجية.

- تم تطبيق أكواد HTML و CSS بنجاح
- فهم آلية التموضع Absolute و Relative
- يمكنكم تجربة الكود عبر روابط المصدر في الوصف
