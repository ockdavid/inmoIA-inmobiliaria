/* =========================================================================
   InmoIA — i18n (ES / EN / ZH). Patrón IIFE, sin dependencias.
   Traduce todos los elementos con [data-i18n] y los placeholders [data-i18n-ph].
   Recuerda el idioma elegido en localStorage.
   ⚠️ Traducciones EN/ZH generadas automáticamente: conviene una revisión nativa.
   ========================================================================= */
(function () {
  "use strict";

  var T = {
    es: {
      _title: "InmoIA · Vende tu casa en Madrid con valoración por IA en 24 h",
      skip: "Saltar al formulario de valoración",
      nav_como: "Cómo funciona", nav_porque: "Por qué InmoIA", nav_zonas: "Zonas",
      nav_opiniones: "Opiniones", nav_faq: "Preguntas", cta_header: "Valoración gratis",
      hero_eyebrow: "Inmobiliaria digital · Madrid zona prime",
      hero_title: "Vendemos tu vivienda en Madrid al <em>mejor precio</em>.",
      hero_sub: "Valoración con inteligencia artificial en 24 h y un agente que conoce tu zona. Gratis, sin compromiso, y solo cobramos si vendemos.",
      hero_p1: "Valoración con IA en 24 h", hero_p2: "0 € por adelantado", hero_p3: "Comisión solo si vendemos",
      form_title: "¿Cuánto vale tu casa? Hoy lo sabes.",
      f_nombre: "Nombre", f_telefono: "Teléfono", f_email: "Email", f_opcional: "(opcional)",
      f_zona: "Zona o dirección de la vivienda",
      ph_nombre: "Tu nombre", ph_email: "tucorreo@email.com", ph_zona: "Ej. calle Velázquez, Salamanca",
      check: 'He leído y acepto la <a href="privacidad.html" target="_blank" rel="noopener">política de privacidad</a>.',
      btn_pedir: "Pedir valoración gratis", btn_whatsapp: "Prefiero hablar por WhatsApp",
      form_foot: "Gratis y sin compromiso · Respondemos en menos de 24 h.",
      form_success: "¡Gracias! Te contactamos enseguida. Si quieres acelerar, escríbenos por WhatsApp.",
      stat1_t: "para tu valoración", stat2_t: "por adelantado",
      stat3_n: "Solo al vender", stat3_t: "cobramos comisión", stat4_n: "Agente local", stat4_t: "de tu propio barrio",
      proc_eyebrow: "El proceso", proc_title: "Vender tu casa, en tres pasos sencillos.",
      step1_h: "Pides tu valoración", step1_p: "Rellena tres datos. Nuestra IA cruza miles de operaciones reales de tu zona para estimar el precio de tu vivienda.",
      step2_h: "Afinamos en persona", step2_p: "Un agente local visita la vivienda, ajusta el precio al detalle y diseña contigo el plan de venta.",
      step3_h: "Vendemos y cobras", step3_p: "Publicamos, filtramos compradores y te acompañamos hasta la firma. Solo cobramos si vendes.",
      why_eyebrow: "Por qué InmoIA", why_title: "Datos que no se equivocan, criterio que sí entiende tu casa.",
      why_p: "La inteligencia artificial pone el precio justo desde el primer día: ni tan alto que tu casa se quede meses sin venderse, ni tan bajo que pierdas dinero. El agente local aporta lo que ningún algoritmo ve: el estado real, la luz, las vistas, el barrio.",
      why_f1: "Valoración con inteligencia artificial en 24 h", why_f2: "Fotografía y anuncios profesionales",
      why_f3: "Publicación en los principales portales", why_f4: "Filtrado de compradores reales",
      why_f5: "Acompañamiento legal hasta la firma", why_btn: "Quiero mi valoración",
      zonas_eyebrow: "Dónde trabajamos", zonas_title: "Especialistas en la zona prime de Madrid.",
      zonas_lead: "Conocemos cada calle, cada precio y cada tipo de comprador. Esa cercanía es la que vende tu casa antes y mejor.",
      zona1_p: "El lujo clásico de Madrid: alturas, fachadas señoriales y compradores exigentes.",
      zona2_p: "Edificios con historia y mucha demanda. Un barrio que no para de revalorizarse.",
      zona3_p: "Lo residencial y lo moderno se dan la mano. Familias y profesionales que buscan calidad.",
      zonas_extra: "También trabajamos en:",
      op_eyebrow: "Opiniones", op_title: "Propietarios que ya han vendido con nosotros.",
      op_note: "Ejemplos de muestra — sustitúyelos por testimonios reales a medida que cierres ventas.",
      testi1_q: "«Me dieron un precio realista desde el primer día y la casa se vendió en cinco semanas. Cero sustos.»",
      testi1_c: "Marta R. · Vendió en Chamberí",
      testi2_q: "«La valoración con IA me cuadró con lo que pagué después. Trato cercano y todo muy claro.»",
      testi2_c: "Javier L. · Vendió en Salamanca",
      testi3_q: "«Solo cobran si venden, así que iban a por todas. Lo recomiendo a cualquier vecino del barrio.»",
      testi3_c: "Carmen y Luis · Vendieron en Chamartín",
      faq_eyebrow: "Preguntas frecuentes", faq_title: "Lo que todo propietario quiere saber.",
      faq1_q: "¿Cuánto cuesta la valoración?", faq1_a: "Nada. Es totalmente gratuita y sin ningún compromiso. Te damos una primera estimación con IA en 24 h y, si quieres, la afinamos con una visita.",
      faq2_q: "¿Cuándo y cuánto cobráis?", faq2_a: "Solo cobramos si vendemos tu vivienda: una comisión sobre el precio final de venta. Cero euros por adelantado y cero riesgo para ti.",
      faq3_q: "¿Qué es exactamente la «valoración con IA»?", faq3_a: "Un modelo que analiza operaciones reales y las características de tu vivienda para estimar su precio de mercado. Después, un agente local lo ajusta en persona.",
      faq4_q: "¿En qué zonas trabajáis?", faq4_a: "En la zona prime de Madrid: Salamanca, Chamberí y Chamartín, además de sus alrededores. Si tu vivienda está cerca, escríbenos igualmente.",
      faq5_q: "¿Tengo que firmar exclusiva?", faq5_a: "Te explicamos todas las opciones. La exclusiva nos permite invertir más en vender tu casa (fotos, campaña, portales), pero la decisión siempre es tuya.",
      cta_title: "Da el primer paso hoy. La valoración es <em>gratis</em>.",
      cta_p: "En menos de 24 h sabrás cuánto vale tu casa en Madrid. Sin compromiso y sin coste.",
      cta_btn1: "Pedir valoración gratis", cta_btn2: "Hablar por WhatsApp",
      foot_tag: "Inmobiliaria digital en la zona prime de Madrid. Valoramos tu casa con inteligencia artificial.",
      foot_contacto: "Contacto", foot_madrid: "Madrid · Salamanca, Chamberí, Chamartín",
      foot_enlaces: "Enlaces", foot_l1: "Cómo funciona", foot_l2: "Zonas", foot_l3: "Preguntas frecuentes", foot_l4: "Valoración gratis",
      foot_legal1: "Aviso legal", foot_legal2: "Política de privacidad", foot_legal3: "Créditos fotográficos →"
    },

    en: {
      _title: "InmoIA · Sell your home in Madrid with an AI valuation in 24 h",
      skip: "Skip to the valuation form",
      nav_como: "How it works", nav_porque: "Why InmoIA", nav_zonas: "Areas",
      nav_opiniones: "Reviews", nav_faq: "FAQ", cta_header: "Free valuation",
      hero_eyebrow: "Digital estate agency · Prime Madrid",
      hero_title: "We sell your Madrid home at the <em>best possible price</em>.",
      hero_sub: "An AI-powered valuation in 24 h plus an agent who knows your area. Free, no obligation, and we only get paid when we sell.",
      hero_p1: "AI valuation in 24 h", hero_p2: "€0 upfront", hero_p3: "Commission only if we sell",
      form_title: "How much is your home worth? Find out today.",
      f_nombre: "Name", f_telefono: "Phone", f_email: "Email", f_opcional: "(optional)",
      f_zona: "Area or address of the property",
      ph_nombre: "Your name", ph_email: "you@email.com", ph_zona: "E.g. Calle Velázquez, Salamanca",
      check: 'I have read and accept the <a href="privacidad.html" target="_blank" rel="noopener">privacy policy</a>.',
      btn_pedir: "Get my free valuation", btn_whatsapp: "I'd rather chat on WhatsApp",
      form_foot: "Free and no obligation · We reply within 24 h.",
      form_success: "Thank you! We'll be in touch shortly. To speed things up, message us on WhatsApp.",
      stat1_t: "for your valuation", stat2_t: "upfront",
      stat3_n: "Only on a sale", stat3_t: "do we charge commission", stat4_n: "Local agent", stat4_t: "from your own area",
      proc_eyebrow: "The process", proc_title: "Selling your home, in three simple steps.",
      step1_h: "Request your valuation", step1_p: "Fill in three details. Our AI cross-checks thousands of real transactions in your area to estimate your home's price.",
      step2_h: "We refine it in person", step2_p: "A local agent visits the property, fine-tunes the price and designs the sales plan with you.",
      step3_h: "We sell, you get paid", step3_p: "We list it, filter buyers and guide you through to signing. We only get paid when you sell.",
      why_eyebrow: "Why InmoIA", why_title: "Data that doesn't get it wrong, judgment that understands your home.",
      why_p: "Artificial intelligence sets the right price from day one: not so high that your home sits unsold for months, not so low that you lose money. The local agent adds what no algorithm sees: the real condition, the light, the views, the neighbourhood.",
      why_f1: "AI-powered valuation in 24 h", why_f2: "Professional photography and listings",
      why_f3: "Publication on the leading portals", why_f4: "Screening of real buyers",
      why_f5: "Legal support all the way to signing", why_btn: "I want my valuation",
      zonas_eyebrow: "Where we work", zonas_title: "Specialists in prime Madrid.",
      zonas_lead: "We know every street, every price and every type of buyer. That closeness is what sells your home faster and better.",
      zona1_p: "Madrid's classic luxury: high ceilings, stately façades and discerning buyers.",
      zona2_p: "Buildings with history and strong demand. A district that keeps rising in value.",
      zona3_p: "Residential meets modern. Families and professionals looking for quality.",
      zonas_extra: "We also work in:",
      op_eyebrow: "Reviews", op_title: "Owners who have already sold with us.",
      op_note: "Sample examples — replace them with real testimonials as you close sales.",
      testi1_q: "“They gave me a realistic price from day one and the home sold in five weeks. No surprises.”",
      testi1_c: "Marta R. · Sold in Chamberí",
      testi2_q: "“The AI valuation matched what I paid afterwards. Friendly service and everything crystal clear.”",
      testi2_c: "Javier L. · Sold in Salamanca",
      testi3_q: "“They only get paid if they sell, so they went all in. I recommend them to any neighbour.”",
      testi3_c: "Carmen & Luis · Sold in Chamartín",
      faq_eyebrow: "Frequently asked questions", faq_title: "What every owner wants to know.",
      faq1_q: "How much does the valuation cost?", faq1_a: "Nothing. It's completely free and with no obligation. We give you a first AI estimate within 24 h and, if you wish, refine it with a visit.",
      faq2_q: "When and how much do you charge?", faq2_a: "We only charge if we sell your home: a commission on the final sale price. Zero upfront and zero risk for you.",
      faq3_q: "What exactly is the “AI valuation”?", faq3_a: "A model that analyses real transactions and your property's features to estimate its market price. Then a local agent adjusts it in person.",
      faq4_q: "Which areas do you cover?", faq4_a: "Prime Madrid: Salamanca, Chamberí and Chamartín, plus the surrounding areas. If your home is nearby, get in touch anyway.",
      faq5_q: "Do I have to sign an exclusive agreement?", faq5_a: "We explain all the options. An exclusive lets us invest more in selling your home (photos, campaign, portals), but the decision is always yours.",
      cta_title: "Take the first step today. The valuation is <em>free</em>.",
      cta_p: "In under 24 h you'll know what your Madrid home is worth. No obligation and no cost.",
      cta_btn1: "Get my free valuation", cta_btn2: "Chat on WhatsApp",
      foot_tag: "Digital estate agency in prime Madrid. We value your home with artificial intelligence.",
      foot_contacto: "Contact", foot_madrid: "Madrid · Salamanca, Chamberí, Chamartín",
      foot_enlaces: "Links", foot_l1: "How it works", foot_l2: "Areas", foot_l3: "FAQ", foot_l4: "Free valuation",
      foot_legal1: "Legal notice", foot_legal2: "Privacy policy", foot_legal3: "Photo credits →"
    },

    zh: {
      _title: "InmoIA · 24小时人工智能估价，助您在马德里出售房产",
      skip: "跳至估价表单",
      nav_como: "如何运作", nav_porque: "为什么选择 InmoIA", nav_zonas: "区域",
      nav_opiniones: "评价", nav_faq: "常见问题", cta_header: "免费估价",
      hero_eyebrow: "数字房产中介 · 马德里黄金地段",
      hero_title: "我们以<em>最优价格</em>出售您在马德里的房产。",
      hero_sub: "24小时人工智能估价，加上熟悉您所在区域的专业经纪人。免费、无义务，只有成交才收费。",
      hero_p1: "24小时人工智能估价", hero_p2: "无需预付费用", hero_p3: "只有成交才收取佣金",
      form_title: "您的房子值多少钱？今天就知道。",
      f_nombre: "姓名", f_telefono: "电话", f_email: "邮箱", f_opcional: "（选填）",
      f_zona: "房产所在区域或地址",
      ph_nombre: "您的姓名", ph_email: "you@email.com", ph_zona: "例如：Calle Velázquez, Salamanca",
      check: '我已阅读并接受<a href="privacidad.html" target="_blank" rel="noopener">隐私政策</a>。',
      btn_pedir: "获取免费估价", btn_whatsapp: "我更想通过 WhatsApp 沟通",
      form_foot: "免费且无义务 · 我们将在24小时内回复。",
      form_success: "谢谢！我们会尽快与您联系。想更快的话，请通过 WhatsApp 联系我们。",
      stat1_t: "完成估价", stat2_t: "预付费用",
      stat3_n: "成交才收费", stat3_t: "收取佣金", stat4_n: "本地经纪人", stat4_t: "来自您所在的街区",
      proc_eyebrow: "流程", proc_title: "出售房产，只需三个简单步骤。",
      step1_h: "申请估价", step1_p: "填写三项信息。我们的人工智能会比对您所在区域成千上万的真实成交，估算您房产的价格。",
      step2_h: "我们上门精修", step2_p: "本地经纪人实地查看房产，细化价格，并与您一起制定销售方案。",
      step3_h: "成交，您收款", step3_p: "我们发布房源、筛选买家，并陪伴您直到签约。只有成交我们才收费。",
      why_eyebrow: "为什么选择 InmoIA", why_title: "数据不会出错，判断真正懂您的房子。",
      why_p: "人工智能从第一天起就给出合理价格：不会高到让房子滞销数月，也不会低到让您亏钱。本地经纪人则补足算法看不到的部分：真实状况、采光、景观与街区。",
      why_f1: "24小时人工智能估价", why_f2: "专业摄影与房源制作",
      why_f3: "在主流门户网站发布", why_f4: "筛选真实买家",
      why_f5: "全程法律陪伴至签约", why_btn: "我要估价",
      zonas_eyebrow: "我们的服务区域", zonas_title: "专注马德里黄金地段。",
      zonas_lead: "我们熟悉每一条街、每一个价格和每一类买家。正是这种熟悉，让您的房子卖得更快、更好。",
      zona1_p: "马德里的经典奢华：高挑楼层、典雅外立面与挑剔的买家。",
      zona2_p: "富有历史感且需求旺盛的建筑。一个持续升值的街区。",
      zona3_p: "住宅与现代感兼具。寻求品质的家庭与专业人士。",
      zonas_extra: "我们同样服务于：",
      op_eyebrow: "评价", op_title: "已经通过我们成功售房的业主。",
      op_note: "示例样本——成交后请替换为真实评价。",
      testi1_q: "“他们从第一天就给出实在的价格，房子五周就卖掉了。毫无波折。”",
      testi1_c: "Marta R. · 售于 Chamberí",
      testi2_q: "“人工智能的估价与我后来成交的价格相符。服务亲切，一切都很清楚。”",
      testi2_c: "Javier L. · 售于 Salamanca",
      testi3_q: "“只有卖出才收费，所以他们全力以赴。我向街坊们推荐他们。”",
      testi3_c: "Carmen 与 Luis · 售于 Chamartín",
      faq_eyebrow: "常见问题", faq_title: "每位业主都想知道的事。",
      faq1_q: "估价收费吗？", faq1_a: "完全免费，毫无义务。我们会在24小时内给出人工智能初步估价；如果您愿意，还可上门进一步精修。",
      faq2_q: "你们何时收费、收多少？", faq2_a: "只有卖出您的房产我们才收费：按最终成交价收取佣金。无需预付，对您毫无风险。",
      faq3_q: "“人工智能估价”究竟是什么？", faq3_a: "一个分析真实成交与您房产特征以估算市场价格的模型。之后由本地经纪人进行实地调整。",
      faq4_q: "你们服务哪些区域？", faq4_a: "马德里黄金地段：Salamanca、Chamberí 和 Chamartín 及周边。如果您的房产在附近，也欢迎联系我们。",
      faq5_q: "我必须签独家委托吗？", faq5_a: "我们会向您说明所有选项。独家委托能让我们投入更多资源卖房（照片、推广、门户网站），但决定权始终在您。",
      cta_title: "今天就迈出第一步。估价<em>免费</em>。",
      cta_p: "不到24小时，您就能知道您在马德里的房子值多少钱。无义务、无费用。",
      cta_btn1: "获取免费估价", cta_btn2: "通过 WhatsApp 沟通",
      foot_tag: "马德里黄金地段的数字房产中介。我们用人工智能为您的房子估价。",
      foot_contacto: "联系", foot_madrid: "马德里 · Salamanca、Chamberí、Chamartín",
      foot_enlaces: "链接", foot_l1: "如何运作", foot_l2: "区域", foot_l3: "常见问题", foot_l4: "免费估价",
      foot_legal1: "法律声明", foot_legal2: "隐私政策", foot_legal3: "图片来源 →"
    }
  };

  function apply(lang) {
    if (!T[lang]) lang = "es";
    var dict = T[lang];
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph");
      if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
    var cur = document.querySelector("[data-lang-current]");
    if (cur) { cur.setAttribute("src", "assets/flags/" + lang + ".svg"); cur.setAttribute("alt", lang.toUpperCase()); }
    if (dict._title) document.title = dict._title;
    try { localStorage.setItem("inmoia_lang", lang); } catch (e) {}
  }

  function init() {
    var saved;
    try { saved = localStorage.getItem("inmoia_lang"); } catch (e) {}
    apply(saved || "es");

    var sw = document.querySelector("[data-lang-switch]");
    var toggle = document.querySelector("[data-lang-toggle]");
    function closeMenu() {
      if (!sw) return;
      sw.classList.remove("is-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    }
    if (toggle && sw) {
      toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = sw.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    document.addEventListener("click", function (e) {
      var b = e.target.closest("[data-lang]");
      if (b) {
        e.preventDefault();
        apply(b.getAttribute("data-lang"));
        closeMenu();
        return;
      }
      if (sw && !e.target.closest("[data-lang-switch]")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
