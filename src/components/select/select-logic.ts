export function initializeSelects() {
  document.querySelectorAll("[data-select]").forEach((selectContainer) => {
    const trigger = selectContainer.querySelector("[data-select-trigger]") as HTMLElement;
    const content = selectContainer.querySelector("[data-select-content]") as HTMLElement;
    const value = selectContainer.querySelector("[data-select-value]") as HTMLElement;
    const nativeSelect = selectContainer.querySelector("[data-select-native]") as HTMLSelectElement;
    const items = Array.from(content.querySelectorAll("[data-select-item]")) as HTMLElement[];

    if (!trigger || !content || !value || !nativeSelect || items.length === 0) return;

    let currentFocusIndex = -1;
    let isOpen = false;

    function showContent() {
      requestAnimationFrame(() => {
        content.style.visibility = "visible";
        content.style.opacity = "1";
      });
      trigger.setAttribute("aria-expanded", "true");
      trigger.classList.add("bg-gray-100");
      isOpen = true;
      currentFocusIndex = Math.max(
        0,
        items.findIndex((item) => item.getAttribute("aria-selected") === "true")
      );
      focusItem(currentFocusIndex);
    }

    function hideContent() {
      requestAnimationFrame(() => {
        content.style.visibility = "hidden";
        content.style.opacity = "0";
      });
      trigger.setAttribute("aria-expanded", "false");
      trigger.classList.remove("bg-gray-100");
      isOpen = false;
      trigger.focus();
    }

    function selectItem(item: HTMLElement) {
      const itemValue = item.dataset.value;
      const itemLabel = item.textContent;

      if (itemValue && itemLabel) {
        nativeSelect.value = itemValue;
        value.textContent = itemLabel;
        items.forEach((i) => i.setAttribute("aria-selected", "false"));
        item.setAttribute("aria-selected", "true");
        hideContent();
        nativeSelect.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }

    function focusItem(index: number) {
      items.forEach((item, i) => {
        item.classList.toggle("bg-indigo-100", i === index);
        if (i === index) {
          item.focus();
          item.scrollIntoView({ block: "nearest" });
        }
      });
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) {
        if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
          e.preventDefault();
          showContent();
        }
        return;
      }

      switch (e.key) {
        case "ArrowDown":
        case "ArrowUp":
          e.preventDefault();
          currentFocusIndex = (currentFocusIndex + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
          focusItem(currentFocusIndex);
          break;
        case "Home":
        case "End":
          e.preventDefault();
          currentFocusIndex = e.key === "Home" ? 0 : items.length - 1;
          focusItem(currentFocusIndex);
          break;
        case "Escape":
          e.preventDefault();
          hideContent();
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          selectItem(items[currentFocusIndex]);
          break;
      }
    }

    selectContainer.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      if (target === trigger || trigger.contains(target)) {
        e.preventDefault();
        isOpen ? hideContent() : showContent();
      } else if (target.hasAttribute("data-select-item")) {
        selectItem(target);
      }
    });

    content.addEventListener("mousemove", (e) => {
      const target = e.target as HTMLElement;
      if (target.hasAttribute("data-select-item")) {
        currentFocusIndex = items.indexOf(target);
        focusItem(currentFocusIndex);
      }
    });

    (selectContainer as HTMLElement).addEventListener("keydown", handleKeyDown);

    document.addEventListener("click", (e) => {
      if (!selectContainer.contains(e.target as Node)) {
        hideContent();
      }
    });
  });
}
