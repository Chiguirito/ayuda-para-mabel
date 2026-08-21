// Cifras de la campaña — editar solo aquí; las páginas se actualizan solas.
// OJO: tras CUALQUIER cambio en este archivo, subir el número de versión (?v=N)
// en las etiquetas <script src="data.js?v=N"> de las 4 páginas — mientras el
// Browser Cache TTL de Cloudflare siga en 4h, es la única forma de que los
// navegadores con caché vieja carguen el archivo nuevo. Versión actual: v=24 (v=16 y v=17 quedaron cacheados con contenido viejo en Cloudflare el 17-ago: alguien pidió las URLs versionadas antes del push).
window.CAMPAIGN = {
  raised: 60060000,             // COP recaudados (Colombia $41,12M + PayPal €3.775 + Wise A$780 + Wise £300 + transf. €370 + China ¥2.300) — 21-ago-2026, tasas frescas
  firstGoal: 89400000,          // meta = la deuda completa (reencuadre 14-ago; hitos de 15M y 30M superados)
  monthly: 1824000,             // cuota mensual COP (para la línea "cuotas cubiertas")
  copPerEur: 3597,              // tasa COP por EUR (verificada 21 ago 2026; revisar mensualmente)
  nextPaymentDue: "2026-08-15", // (ya no se muestra en la tarjeta desde el 17-ago; se conserva por si vuelve)
  // Metas en orden; la página elige automáticamente la primera que aún no se ha alcanzado.
  // Son fracciones neutras de la deuda (no prometen a qué crédito se aplica el dinero).
  milestones: [
    {amount: 44700000, label: {es: "la mitad de la deuda", en: "half of the debt", de: "zur Hälfte der Schuld"},
                       note:  {es: "1/2", en: "1/2", de: "1/2"}},
    {amount: 59600000, label: {es: "los dos tercios de la deuda", en: "two thirds of the debt", de: "zu zwei Dritteln der Schuld"},
                       note:  {es: "2/3", en: "2/3", de: "2/3"}},
    {amount: 74500000, label: {es: "los cinco sextos de la deuda", en: "five sixths of the debt", de: "zu fünf Sechsteln der Schuld"},
                       note:  {es: "5/6", en: "5/6", de: "5/6"}},
    {amount: 89400000, label: {es: "quedar libre de deuda", en: "clearing the whole debt", de: "Mabel schuldenfrei ist"},
                       note:  {es: "49 de 49 cuotas", en: "49 of 49 payments", de: "49 von 49 Raten"}}
  ]
};
