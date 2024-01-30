const gtag = (type: string, name: string, data: Record<string, string | number | boolean>) => {
  console.log('gtag', type, name, data);
  (window as unknown as { gtag: typeof gtag }).gtag(type, name, data);
};

const sendGtagInputEvent = (name: string, ev: Event) => {
  const target = ev.target as HTMLInputElement;
  if (!target || target.tagName !== 'INPUT' || !target.dataset.gaid) return;
  gtag('event', name, {
    event_category: 'engagement',
    event_label: name,
    field_name: target.dataset.gaid,
    field_is_filled: !!target.value,
  });
};

document.addEventListener('focusin', (ev) => sendGtagInputEvent('text_field_focus', ev));
document.addEventListener('focusout', (ev) => sendGtagInputEvent('text_field_blur', ev));

document.addEventListener('click', (ev) => {
  const target = ev.target as HTMLButtonElement;
  if (!target || target.tagName !== 'BUTTON' || !target.dataset.gaid) return;
  gtag('event', 'button_click', {
    event_category: 'engagement',
    event_label: 'button_click',
    field_name: target.dataset.gaid,
  });
});

export {};
