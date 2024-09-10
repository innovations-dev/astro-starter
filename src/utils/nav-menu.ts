export function setupNavMenu() {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const trigger = target.closest("[aria-expanded]");

    if (trigger) {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", (!expanded).toString());
      const content = trigger.nextElementSibling as HTMLElement;
      content.classList.toggle("hidden", expanded);
    } else {
      document.querySelectorAll('[aria-expanded="true"]').forEach((trigger) => {
        trigger.setAttribute("aria-expanded", "false");
        const content = trigger.nextElementSibling as HTMLElement;
        content.classList.add("hidden");
      });
    }
  });
}
