# استخدام Google Fonts في CSS

المصدر: https://www.w3schools.com/css/css_font_google.asp

## مقدمة حول Google Fonts

توفر Google Fonts أكثر من 1000 خط مجاني لاستخدامها في تصميم صفحات الويب بدلا من الخطوط التقليدية.

- Google Fonts توفر خطوطا مجانية
- أكثر من 1000 خط للاختيار من بينها
- سهولة الربط والاستخدام في CSS

## طريقة ربط الخطوط

يتم ربط الخطوط عبر Tag link في head، ثم استخدام font-family في CSS مع تحديد خط بديل.

```html
<head>
<link rel="stylesheet" 
  href="https://fonts.googleapis.com/
  css?family=Sofia">
<style>
body {
  font-family: "Sofia", 
  sans-serif;
}
</style>
</head>
```

## استخدام خطوط متعددة

يمكن دمج عدة خطوط باستخدام رمز ، مع مراعاة تأثير ذلك على سرعة تحميل الصفحة.

```html
<link rel="stylesheet" 
  href="https://fonts.googleapis.com/
  css?family=Audiowide|Sofia">
<style>
h1.a {font-family: "Audiowide", 
  sans-serif;}
h1.b {font-family: "Sofia", 
  sans-serif;}
</style>
```

## تنسيق الخطوط بـ CSS

يمكنك استخدام خصائص CSS مثل font-size و text-shadow لتنسيق خطوط Google Fonts.

```css
body {
  font-family: "Sofia", 
  sans-serif;
  font-size: 30px;
  text-shadow: 3px 3px 3px 
  #ababab;
}
```

## تفعيل تأثيرات الخطوط

لتفعيل تأثيرات الخط، أضف اسم التأثير للرابط واستخدم class يبدأ بـ font-effect-.

```html
<link rel="stylesheet" 
  href="https://fonts.googleapis.com/
  css?family=Sofia&effect=fire">
<h1 class="font-effect-fire">
  Sofia on Fire
</h1>
```

## تأثيرات متعددة

يمكن دمج تأثيرات متعددة للخطوط باستخدام رمز في رابط Google API.

```html
<link rel="stylesheet" 
  href="https://fonts.googleapis.com/
  css?family=Sofia&effect=neon|outline">
<h1 class="font-effect-neon">
  Neon Effect
</h1>
```

## خاتمة الدرس

جربوا استخدام Google Fonts في مشاريعكم القادمة لتطوير مهاراتكم في تصميم الويب.

- استخدام Google Fonts يثري التصميم
- الالتزام بـ fallback font ضروري
- تجنب الإفراط في طلب الخطوط
- استكشاف تأثيرات الخطوط المتاحة
