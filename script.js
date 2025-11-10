<script>
  // قواميس/قوائم أساسية
  const sbtIntros = ["جرب","استخدم","تأكد","اختبر","راقب","ثبّت","نظّم","بسّط","قيّم","طوّر","وثّق","كرر","خطّط","قسّم","حلّل","حدّث","نظّف","بدّل","جمّع","راجع"];
  const sbtTopics = [
    "LED بمقاومة 220Ω","الأزرار مع مقاومات Pull-up","Breadboard قبل اللحام","التغذية 5V/3.3V حسب الحساس",
    "تأريض GND مشترك لكل الدوائر","المكتبة المناسبة للحساس","تنظيم الأسلاك لتفادي التماس","حماية العكس Diode للحركة",
    "محول مستوى مع I2C","تحديث التعاريف قبل الرفع","Serial.print للتتبع","حفظ البيانات في EEPROM","نموذج صغير للتجربة",
    "فيوز حماية للتيار","مبدّل جهد للمحركات","قياس الاستهلاك بالملتيميتر","تثبيت العناصر ميكانيكيًا","مكتبة FastLED",
    "فلترة الإشارة بمكثّفات","حساب قيمة المقاومة بالمخططات"
  ];
  const sbtContexts = [
    "في مشاريع Arduino","مع الحساسات الرقمية","قبل التشغيل الأول","عند وجود أخطاء عشوائية","لو الإشارة فيها ضوضاء",
    "في الروبوتات المتحركة","مع الشاشات I2C","عند الاتصال بالإنترنت","في قراءة المستشعرات","لو الأداء بطئ",
    "في حفظ السجلات","مع المحركات Servo/Stepper","في المشاريع التعليمية","لو الحرارة عالية",
    "مع وحدات ESP8266/ESP32","عند استخدام بطاريات","لو ظهر Reset مفاجئ","في معايرة القياس","لو بتبني نموذج MVP","عند اختبار الـ Serial"
  ];
  const sbtSpecifics = [
    "أعد معايرة القيم دوريًا","اكتب تعليقات مفيدة في الكود","احفظ نسخة احتياطية من الاسكيتش","جرّب زمن Debounce للأزرار",
    "استبدل delay بـ millis","قسّم المشروع لموديولات","استخدم وظائف صغيرة واضحة","اختبر كل جزء مستقلًا",
    "سجّل النتائج في ملف","راجع وصلات الجهد والأرضي","استعمل مقاومات ملائمة","اربط الأرضي في نقطة واحدة",
    "امنع الرجوع العكسي للتيار","استخدم مشتت حرارة","أعد ترتيب الأسلاك بعيدًا عن الضوضاء","حدّث المكتبات",
    "راجع إعدادات الـ Serial","استخدم خرائط الألوان بحذر","تأكد من اتجاه الدايودات","استخدم غلاف حماية للدوائر"
  ];

  function sbtBuildBaseTips() {
    const base = [];
    for (let i = 0; i < sbtIntros.length; i++) {
      for (let j = 0; j < sbtTopics.length; j++) {
        const intro = sbtIntros[i];
        const topic = sbtTopics[j];
        const ctx = sbtContexts[(i + j) % sbtContexts.length];
        const spec = sbtSpecifics[(i * 2 + j) % sbtSpecifics.length];
        base.push(`${intro} ${topic} ${ctx} — ${spec}.`);
      }
    }
    return base;
  }

  const sbtSensor = [
    "استخدم مقاومات Pull-up مع I2C لتثبيت القراءة.",
    "عاير حساس الحرارة قبل الاستعمال الميداني.",
    "فلتر إشارة الميكروفون بمكثّف صغير لتخفيف الضوضاء.",
    "جرّب متوسط قراءات متعدد لتقليل التذبذب.",
    "اضبط زمن العينة Sampling حسب الحاجة."
  ];
  const sbtCode = [
    "استبدل delay بـ millis للمشاريع التفاعلية.",
    "اكتب وظائف قصيرة بأسماء واضحة.",
    "سجّل الأخطاء باستخدام Serial بمستويات لوج.",
    "استخدم enums/structs لتنظيم البيانات.",
    "قسّم المشروع لملفات متعددة لتسهيل الصيانة."
  ];
  const sbtPower = [
    "تأكد من تيار التغذية الكافي للمحركات.",
    "استخدم Diode للحماية من الجهد العكسي في الأحمال الحثية.",
    "ثبت الأرضي جيدًا لتفادي فروق الجهد.",
    "احسب القدرة الحرارية للمكونات الساخنة.",
    "استخدم منظم جهد مع ترشيح مناسب."
  ];
  const sbtConnect = [
    "اختبر سرعة الـ baud في الـ Serial بما يناسب المشروع.",
    "راجع توصيلات TX/RX وتأكد من الأرضي المشترك.",
    "استخدم مكتبة موثوقة للـ MQTT مع إعادة اتصال تلقائية.",
    "جرّب WebSerial لمراقبة البيانات من المتصفح.",
    "استخدم مؤقتات Watchdog لمنع التعليق."
  ];
  const sbtProject = [
    "ابدأ بنموذج MVP ثم كبّر تدريجيًا.",
    "اكتب README يصف التوصيلات والخطوات.",
    "صوّر الأسلاك قبل الفك لتسهيل الإعادة.",
    "وثّق المكتبات المستخدمة وإصداراتها.",
    "ضع Checklist قبل التشغيل النهائي."
  ];

  function sbtBuildCategoryTips() {
    return [...sbtSensor, ...sbtCode, ...sbtPower, ...sbtConnect, ...sbtProject];
  }

  const sbtTemplates = [
    tip => `نصيحة سريعة: ${tip}`,
    tip => `إجراء مقترح: ${tip}`,
    tip => `للتحسين الفوري: ${tip}`,
    tip => `للاحترافية: ${tip}`,
    tip => `ركّز هنا: ${tip}`,
    tip => `تفصيلة مهمة: ${tip}`
  ];

  function sbtExpandTips(seed) {
    const expanded = [];
    for (const t of seed) for (const tpl of sbtTemplates) expanded.push(tpl(t));
    return expanded;
  }

  const sbtTips = (() => {
    const base = sbtBuildBaseTips();            // ~400
    const cats = sbtBuildCategoryTips();        // ~25
    const expandedBase = sbtExpandTips(base);   // 400*6 = 2400
    const expandedCats = sbtExpandTips(cats);   // 25*6 = 150
    const combined = [...expandedBase.slice(0, 600), ...expandedCats.slice(0, 80)];
    return combined;
  })();

  // ربط العناصر
  const sbtBox = document.getElementById("sbt-tip-box");
  const sbtBtn = document.getElementById("sbt-new-tip-btn");
  const sbtStatus = document.getElementById("sbt-status");
  const sbtCount = document.getElementById("sbt-count");

  function sbtRandomTip() {
    return sbtTips[Math.floor(Math.random() * sbtTips.length)];
  }
  function sbtUpdateCount() {
    sbtCount.textContent = `1/${sbtTips.length}`;
  }
  function sbtNewTip() {
    sbtStatus.textContent = "جارٍ التوليد…";
    const tip = sbtRandomTip();
    sbtBox.textContent = tip;
    sbtBox.classList.add("sbt-bump");
    setTimeout(() => sbtBox.classList.remove("sbt-bump"), 220);
    sbtStatus.textContent = "جاهز";
    sbtUpdateCount();
  }

  document.addEventListener("DOMContentLoaded", () => {
    sbtBox.textContent = sbtRandomTip();
    sbtUpdateCount();
    sbtBtn.addEventListener("click", sbtNewTip);
  });
</script>
