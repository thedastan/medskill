export const GOOGLE_ADS_ID = "AW-17579381903";

// Conversion: «Интерактивные номера телефонов» (Google Ads).
// Создан в кабинете, навешивается на каждый клик по номеру телефона.
export const PHONE_CONVERSION_TARGET = "AW-17579381903/LxqBCKry_6wcEI-pwL5B";

type EventParams = Record<string, string | number | boolean | undefined>;

export const trackEvent = (name: string, params?: EventParams) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params ?? {});
};

// Конверсия + навигация на tel:/wa.me/... Возвращает false, чтобы можно было
// использовать прямо в onClick={(e) => { e.preventDefault(); reportPhoneConversion(href); }}.
export const reportPhoneConversion = (url?: string) => {
  const navigate = () => {
    if (typeof window !== "undefined" && typeof url === "string") {
      window.location.href = url;
    }
  };

  if (typeof window === "undefined" || !window.gtag) {
    navigate();
    return false;
  }

  let navigated = false;
  const once = () => {
    if (navigated) return;
    navigated = true;
    navigate();
  };

  window.gtag("event", "conversion", {
    send_to: PHONE_CONVERSION_TARGET,
    value: 1.0,
    currency: "USD",
    event_callback: once,
  });

  // Подстраховка — если gtag не ответит за 1.2с, не теряем клиента.
  setTimeout(once, 1200);
  return false;
};
