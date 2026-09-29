# CSS Flex Items Properties

المصدر: https://www.w3schools.com/css/css3_flexbox_items.asp

## مقدمة حول Flex Items

مرحبا بكم في درس خصائص Flex Items والعناصر الفرعية المباشرة داخل Flex Container.

- العناصر الفرعية المباشرة تصبح تلقائيا Flex Items
- إمكانية التحكم الكامل في سلوك ومظهر وتوزيع كل عنصر
- استخدام الخصائص المتقدمة لتخصيص التخطيط المرن

## خاصية order للتحكم في الترتيب

خاصية order تحدد ترتيب عرض Flex Items داخل الحاوية بغض النظر عن ترتيب كود المصدر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="flex-container">
      <div style="order: 3">1</div>
      <div style="order: 2">2</div>
      <div style="order: 4">3</div>
      <div style="order: 1">4</div>
    </div>
  </body>
</html>
```

## خاصية flex-grow للنمو

خاصية flex-grow تحدد مقدار نمو العنصر بالنسبة لبقية العناصر وبقيمة افتراضية تساوي صفر.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="flex-container">
      <div style="flex-grow: 1">1</div>
      <div style="flex-grow: 1">2</div>
      <div style="flex-grow: 4">3</div>
    </div>
  </body>
</html>
```

## خاصية flex-shrink للتقلص

خاصية flex-shrink تحدد مقدار انكماش العنصر نسبة لبقية العناصر بقيمة افتراضية واحد.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div style="flex-shrink: 2">3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </div>
  </body>
</html>
```

## خاصية flex-basis والطول الابتدائي

خاصية flex-basis تحدد الطول الابتدائي للعنصر قبل تطبيق آليات المرونة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div style="flex-basis: 250px">3</div>
      <div>4</div>
    </div>
  </body>
</html>
```

## خاصية flex المختصرة

خاصية flex هي صيغة مختصرة تجمع خصائص flex-grow و flex-shrink و flex-basis.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div style="flex: 1 0 150px">3</div>
      <div>4</div>
    </div>
  </body>
</html>
```

## خاصية align-self للمحاذاة الفردية

خاصية align-self تتيح محاذاة عنصر محدد بشكل مستقل وتتجاوز إعدادات الحاوية العامة.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    <div class="flex-container">
      <div>1</div>
      <div style="align-self: flex-start">2</div>
      <div style="align-self: flex-end">3</div>
      <div>4</div>
    </div>
  </body>
</html>
```

## خلاصة خصائص Flex Items

خلاصة شاملة لجميع خصائص Flex Items ودعوة لتجربة الأكواد بأنفسكم.

- order لتغيير ترتيب ظهور العناصر
- flex-grow و flex-shrink للتحكم في مرونة المساحة
- flex-basis لتحديد الطول الأولي
- align-self للمحاذاة الفردية الدقيقة
