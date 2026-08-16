// Cifras de la campaña — editar solo aquí; las páginas se actualizan solas.
// OJO: tras CUALQUIER cambio en este archivo, subir el número de versión (?v=N)
// en las etiquetas <script src="data.js?v=N"> de las 4 páginas — mientras el
// Browser Cache TTL de Cloudflare siga en 4h, es la única forma de que los
// navegadores con caché vieja carguen el archivo nuevo. Versión actual: v=13.
window.CAMPAIGN = {
  raised: 36035000,             // COP recaudados (Colombia $20,2M + PayPal €3.409,39 + Wise A$700 + transf. €250 + China ¥2.100)
  firstGoal: 89400000,          // meta = la deuda completa (reencuadre 14-ago; hitos de 15M y 30M superados)
  monthly: 1824000,             // cuota mensual COP (para la línea "cuotas cubiertas")
  copPerEur: 3630,              // tasa COP por EUR (verificada 13 ago 2026; revisar mensualmente)
  nextPaymentDue: "2026-08-15", // fecha de la próxima cuota (YYYY-MM-DD)
  // Hitos en orden; la página elige automáticamente el primero que aún no se ha alcanzado.
  milestones: [
    {amount: 44700000, label: {es: "la mitad de la deuda", en: "half of the debt", de: "zur Hälfte der Schuld"},
                       note:  {es: "24 de 49 cuotas", en: "24 of 49 payments", de: "24 von 49 Raten"}},
    {amount: 60000000, label: {es: "cubrir el crédito grande completo", en: "covering the larger loan in full", de: "der große Kredit komplett gedeckt ist"},
                       note:  {es: "33 de 49 cuotas", en: "33 of 49 payments", de: "33 von 49 Raten"}},
    {amount: 89400000, label: {es: "quedar libre de deuda", en: "clearing the whole debt", de: "Mabel schuldenfrei ist"},
                       note:  {es: "49 de 49 cuotas", en: "49 of 49 payments", de: "49 von 49 Raten"}}
  ]
};
