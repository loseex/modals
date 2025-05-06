const modal = document.getElementById("modal");
const modal_secondary = document.getElementById("modal-secondary");
const modal_three = document.getElementById("modal-three");
const trigger = document.getElementById("trigger");

const trigger_secondary = document.getElementById("trigger-secondary");
const trigger_three = document.getElementById("trigger-three");

trigger.addEventListener("click", () => {
  Modal.open(modal);
});

trigger_secondary.addEventListener("click", () => {
  Modal.open(modal_secondary);
});

trigger_three.addEventListener("click", () => {
  Modal.open(modal_three);
});

class Modal {
  static key = "aria-hidden";

  static open(node) {
    if (typeof node !== "object") {
      throw TypeError();
    }
    node.setAttribute(this.key, "false");

    this.#subscribe_to_close(node);
  }

  static #subscribe_to_close(node) {
    if (typeof node !== "object") {
      throw TypeError();
    }

    const closeButton = node.querySelector("#close");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        this.close(node);
      });
    }
  }

  static close(node) {
    if (typeof node !== "object") {
      throw TypeError();
    }
    node.setAttribute(this.key, "true");
  }
}
