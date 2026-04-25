// Reads the persisted audience choice from localStorage and applies it
// to <html data-audience> BEFORE React hydrates, so the palette is
// correct on first paint for returning visitors.
(function () {
  try {
    var raw = localStorage.getItem("n3m3sis-audience");
    if (!raw) return;
    var parsed = JSON.parse(raw);
    var a = parsed && parsed.state && parsed.state.audience;
    if (a) document.documentElement.setAttribute("data-audience", a);
  } catch (_) {}
})();
