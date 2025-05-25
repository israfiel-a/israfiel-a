"use strict";

window.onload = () => {
    const collapsibles = document.querySelectorAll("button");
    for (const collapsible of collapsibles) {
        collapsible.addEventListener("click", (ev) => {
            const element = ev.currentTarget;
            const body = element.nextElementSibling;
            if (body.classList.contains("opened")) {
                body.classList.remove("opened");
                element.lastChild.classList.remove("fa-caret-down");
                element.lastChild.classList.add("fa-caret-left");
            }
            else {
                body.classList.add("opened");
                element.lastChild.classList.remove("fa-caret-left");
                element.lastChild.classList.add("fa-caret-down");
            }
        });
    }
}