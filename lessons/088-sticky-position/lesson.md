# CSS Sticky Positioning

المصدر: https://www.w3schools.com/css/css_positioning_sticky.asp

## مقدمة حول position: sticky

تسمح خاصية position: sticky للعنصر بالتبديل بين التموضع relative و fixed بناء على التمرير.

- تستخدم position: sticky للتحكم في سلوك العناصر أثناء التمرير
- يعمل العنصر كـ relative حتى يصل إلى نقطة معينة
- يتحول العنصر إلى fixed عند الوصول إلى تلك النقطة

## قواعد استخدام sticky

يجب تحديد خاصية واحدة على الأقل من top أو right أو bottom أو left ليعمل sticky.

## كود تطبيق sticky

مثال برمجي يوضح كيفية تطبيق position: sticky على عنصر div.

```css
div.sticky {
  position: sticky;
  top: 0;
  background-color: green;
  border: 2px solid #4CAF50;
}
```

## شرح تفصيلي للخصائص

شرح تفصيلي لخصائص CSS المستخدمة في مثال sticky.

- position: sticky: تفعيل التموضع اللاصق
- top: 0: نقطة الالتصاق عند الوصول لأعلى الصفحة
- background-color: green: لون خلفية العنصر
- border: 2px solid #4CAF50: إضافة إطار جمالي

## الفرق بين sticky و fixed

الفرق الجوهري بين التموضع sticky والتموضع fixed.

## أفضل الممارسات

أفضل الممارسات لاستخدام sticky في تصميم واجهات الويب.

- استخدم sticky للعناوين الجانبية
- مثالي لأشرطة التنقل العلوية
- اختبر التوافقية مع المتصفحات
- لا تنس تحديد خاصية top أو left

## خلاصة الدرس

خلاصة: تعلم كيفية استخدام position: sticky لإضافة تفاعلية لصفحات الويب.

- تم شرح مفهوم position: sticky
- تم توضيح متطلبات التفعيل
- تمت المقارنة بين sticky و fixed
- تم تقديم نصائح عملية للتطبيق
