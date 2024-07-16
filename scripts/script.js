"use strict";
window.onload = () => {
    const header = document.getElementsByTagName("header").item(0);
    const main = document.getElementsByTagName("main").item(0);
    if (header === null || main === null)
        throw new Error("The page is missing either a header or its main body.");
};
