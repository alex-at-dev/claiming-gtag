type GaVal = string | number | boolean;

const gtag = (type: string, name: string, data: Record<string, GaVal>) => {
  console.table(data);
  (window as unknown as { gtag: typeof gtag }).gtag(type, name, data);
};

const oneMinuteCache = new Set<string>();

const cacheIfNotAlreadyDone = (cacheName: string) => {
  if (oneMinuteCache.has(cacheName)) return true;
  oneMinuteCache.add(cacheName);
  setTimeout(() => oneMinuteCache.delete(cacheName), 60 * 1000);
};

const sendGtagInputEvent = (name: string, ev: Event) => {
  const target = ev.target as HTMLInputElement;
  if (!target || target.tagName !== 'INPUT' || !target.dataset.gaid) return;

  const cacheName = `${name}_${target.dataset.gaid}`;
  const cacheHit = cacheIfNotAlreadyDone(cacheName);
  if (cacheHit) return;

  const gtagData: Record<string, GaVal> = {
    event_category: 'engagement',
    event_label: name,
    field_name: target.dataset.gaid,
    field_is_filled: !!target.value,
  };
  if (!gtagData.field_is_filled) delete gtagData.field_is_filled;
  gtag('event', name, gtagData);
};

document.addEventListener('focusin', (ev) => sendGtagInputEvent('text_field_focus', ev));
document.addEventListener('focusout', (ev) => sendGtagInputEvent('text_field_blur', ev));

document.addEventListener('click', (ev) => {
  const target = ev.target as HTMLButtonElement;
  if (!target || target.tagName !== 'BUTTON' || !target.dataset.gaid) return;

  const cacheName = `${name}_${target.dataset.gaid}`;
  const cacheHit = cacheIfNotAlreadyDone(cacheName);
  if (cacheHit) return;

  gtag('event', 'button_click', {
    event_category: 'engagement',
    event_label: 'button_click',
    field_name: target.dataset.gaid,
  });
});

export {};
