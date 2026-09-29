# CSS supports Rule

المصدر: https://www.w3schools.com/css/css_supports_rule.asp

## مقدمة حول supports

تسمح قاعدة supports بالتحقق من دعم المتصفح لخصائص CSS وتوفير بدائل عند عدم الدعم.

- التحقق من دعم المتصفح لخصائص CSS
- تطبيق Fallback Styles للمتصفحات القديمة
- تحسين تجربة المستخدم عبر التوافقية
- استخدام منطق برمجي داخل ملفات CSS

## الصيغة الأساسية لـ supports

تعتمد الصيغة على التحقق من (property: value) داخل أقواس.

```css
@supports (display: grid) {
  .container {
    display: grid;
  }
}
```

## تطبيق عملي مع Flexbox

توفير تنسيق بديل باستخدام float للمتصفحات التي لا تدعم flex.

```css
.container {
  float: left;
  width: 100%;
}
@supports (display: flex) {
  .container {
    display: flex;
  }
}
```

## استخدام Grid مع Fallback

استخدام display: table كبديل عند عدم دعم grid.

```css
.container {
  display: table;
  width: 90%;
}
@supports (display: grid) {
  .container {
    display: grid;
    grid-gap: 10px;
  }
}
```

## استخدام المعامل not

استخدام not لتطبيق أنماط عند عدم دعم الميزة.

```css
@supports not (display: grid) {
  .warning {
    background-color: pink;
    border: 1px solid red;
  }
}
```

## دمج الشروط

يمكن دمج الشروط باستخدام and و or.

```css
@supports (display: grid) and (gap: 10px) {
  .container {
    display: grid;
    gap: 10px;
  }
}
```

## خلاصة الدرس

دائما وفر بدائل للمتصفحات القديمة خارج قاعدة supports.

- استخدم supports للتحقق من الميزات
- وفر دائما Fallback Styles
- استخدم not و and للتحكم الدقيق
- اختبر التصميم في متصفحات مختلفة
