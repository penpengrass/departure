const now = /* @__PURE__ */ new Date();
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
window.L_hour = hour;
window.L_min = min;
`${hour}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
