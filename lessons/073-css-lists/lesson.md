# تنسيق القوائم باستخدام CSS

المصدر: https://www.w3schools.com/css/css_list.asp

## مقدمة في تنسيق القوائم

تعد القوائم جزءا أساسيا من صفحات الويب، وتوفر CSS أدوات قوية للتحكم في مظهرها وتنسيقها.

- فهم أنواع القوائم في HTML
- تطبيق خصائص CSS على <ul> و <ol>
- التحكم في الـ markers والـ layout

## تغيير شكل علامات القائمة

تسمح الخاصية list-style-type بتغيير شكل الـ marker الخاص بكل عنصر في القائمة.

```css
ul.a {
  list-style-type: circle;
}
ul.b {
  list-style-type: disc;
}
ul.c {
  list-style-type: square;
}
ol.d {
  list-style-type: upper-roman;
}
ol.g {
  list-style-type: decimal;
}
```

## استخدام الصور كعلامات للقائمة

يمكن استخدام الصور كعلامات للقائمة عبر list-style-image مع توفير خيار احتياطي.

```css
ul {
  list-style-image: url('sqpurple.gif');
  list-style-type: square;
}
```

## التحكم في موقع العلامات

تتحكم الخاصية list-style-position في تموضع الـ bullet points بالنسبة لعنصر القائمة.

```css
ul.a {
  list-style-position: outside;
}
ul.b {
  list-style-position: inside;
}
```

## إزالة علامات القائمة

لإزالة العلامات تماما، نستخدم list-style-type: none مع تصفير الهوامش.

```css
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```

## الخاصية المختصرة list-style

تسمح الخاصية المختصرة list-style بضبط جميع خصائص القائمة في إعلان واحد.

```css
ul {
  list-style: square inside url('sqpurple.gif');
}
```

## تنسيق القوائم بالألوان

يمكن تحسين مظهر القوائم باستخدام الألوان والـ padding والـ margin.

```css
ol {
  background: salmon;
  padding: 20px;
}
ol li {
  background: mistyrose;
  color: darkred;
  padding: 10px;
}
```

## خلاصة الدرس

لقد غطينا اليوم أهم خصائص CSS لتنسيق القوائم. استمروا في التطبيق العملي!

- list-style-type للتحكم في الـ markers
- list-style-image للصور المخصصة
- list-style-position للموقع
- list-style للاختصار
