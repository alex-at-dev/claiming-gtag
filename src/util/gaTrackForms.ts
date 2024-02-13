type GaVal = string | number | boolean;

/** Debug proxy for gtag to log sent data to browser console. TODO remove in prod. */
const gtag = (type: string, name: string, data: Record<string, GaVal>) => {
  console.table(data);
  (window as unknown as { gtag: typeof gtag }).gtag(type, name, data);
};

/** event cache. Used to send unique events only once per minute. */
const oneMinuteCache = new Set<string>();

/**
 * Checks if the given {@link cacheName} was already cached (i.e. the given event was sent) during the last minute.
 * @param cacheName name to check and cache
 * @returns true if cache-hit, false if not
 */
const cacheIfNotAlreadyDone = (cacheName: string) => {
  if (oneMinuteCache.has(cacheName)) return true;
  oneMinuteCache.add(cacheName);
  setTimeout(() => oneMinuteCache.delete(cacheName), 60 * 1000);
};

/**
 * Sends a gtag input event. Used to track input_focus & input_blur events.
 * Only sends if {@link ev.target} is an <input> & has a data-gaid property.
 * @param evName ga event name
 * @param ev native DOM Event
 */
const sendGtagInputEvent = (evName: string, ev: Event) => {
  const target = ev.target as HTMLInputElement;
  if (!target || target.tagName !== 'INPUT' || !target.dataset.gaid) return;

  const gtagData: Record<string, GaVal> = {
    event_category: 'engagement',
    event_label: evName,
    field_name: target.dataset.gaid,
    field_is_filled: !!target.value,
  };
  if (!gtagData.field_is_filled) delete gtagData.field_is_filled; // makes it easier to track

  const cacheName = JSON.stringify(gtagData);
  const cacheHit = cacheIfNotAlreadyDone(cacheName);
  if (cacheHit) return;

  gtag('event', evName, gtagData);
};

/**
 * Sends a gtag button event. Used to track button_click events.
 * Only sends if {@link ev.target} is a <button> & has a data-gaid property.
 * @param ev native DOM Event
 */
const sendGtagButtonEvent = (ev: Event) => {
  const evName = 'button_click';
  const target = ev.target as HTMLButtonElement;
  if (!target || target.tagName !== 'BUTTON' || !target.dataset.gaid) return;

  const gtagData = {
    event_category: 'engagement',
    event_label: evName,
    field_name: target.dataset.gaid,
  };

  const cacheName = JSON.stringify(gtagData);
  const cacheHit = cacheIfNotAlreadyDone(cacheName);
  if (cacheHit) return;

  gtag('event', evName, gtagData);
};

// add global listeners
document.addEventListener('focusin', (ev) => sendGtagInputEvent('text_field_focus', ev));
document.addEventListener('focusout', (ev) => sendGtagInputEvent('text_field_blur', ev));
document.addEventListener('click', sendGtagButtonEvent);

// make the file an ESM
export {};
