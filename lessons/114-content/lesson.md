# CSS Pseudo-elements for Content

المصدر: https://www.w3schools.com/css/css_pseudo_elements_content.asp

## شرح Introduction to Pseudo-elements

مرحبا بكم في درس CSS Pseudo-elements المخصص لإدراج المحتوى وتنسيقه باحترافية.

- تعريف مفصل بـ Pseudo-elements المخصصة للمحتوى
- إدراج عناصر جديدة قبل أو بعد العناصر الأصلية
- تنسيق العلامات والخصائص التفاعلية بسهولة
- التحكم الكامل بتجربة المستخدم على صفحات الويب

## شرح The ::before Pseudo-element

يستخدم ::before لإدراج محتوى جديد قبل محتوى العنصر المحدد.

```css
h3::before {
  content: url(smiley.gif);
}
```

## شرح The ::after Pseudo-element

يستخدم ::after لإدراج المحتوى المخصص بعد نهاية محتوى العنصر المستهدف.

```css
h3::after {
  content: url(smiley.gif);
}
```

## شرح The Content Property

خاصية content ضرورية لتحديد نوع ومحتوى العنصر المضاف.

- تحديد النصوص المكتوبة مباشرة داخل خاصية content
- استدعاء الصور عبر دالة url المخصصة
- توليد عدادات تلقائية وترقيم العناصر بسهولة
- التحكم بالرموز التعبيرية والرموز الخاصة

## شرح The ::marker Pseudo-element

يستخدم ::marker لتنسيق وتغيير مظهر علامات وقوائم العناصر.

```css
::marker {
  color: red;
  font-size: 23px;
}
```

## شرح The ::selection Pseudo-element

يستخدم ::selection لتخصيص ألوان النص عند تحديده بواسطة المستخدم.

```css
::selection {
  color: red;
  background: yellow;
}
```

## شرح The ::backdrop Pseudo-element

يستخدم ::backdrop لتنسيق المساحة الخلفية وراء نوافذ الحوار والعناصر المنبثقة.

```css
dialog::backdrop {
  background-color: lightgreen;
}
```

## شرح Conclusion and Best Practices

خلاصة الدرس وأهمية تطبيق الممارسات الاحترافية لتصميم صفحات الويب.

- استخدام Pseudo-elements يقلل من الحاجة لتعديل ملفات HTML
- التحكم الكامل بالتصميم التفاعلي للمستخدم
- تحسين المظهر البصري لصفحات الويب باحترافية
- مراجعة المراجع الرسمية للاطلاع على المزيد من الخصائص
