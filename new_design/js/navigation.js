const header = document.querySelector("header");
const navigation = document.querySelector("header > nav");
const navigationParts = document.querySelectorAll("header nav > a");
const scrollButtons = document.querySelectorAll("[data-to]");
const logo = document.querySelector("header > img");
const main = document.querySelector("main");

const scrollTo = (element, to, duration) => {
    if (duration <= 0) {
        return;
    }

    const difference = to - element.scrollTop;
    const perTick = difference / duration * 10;

    setTimeout(() => {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) {
            return;
        }
        scrollTo(element, to, duration - 10);
    }, 1);
}

main.addEventListener("scroll", (event) => {
    const top = event.pageYOffset || main.scrollTop;

    if (top > 0)
        logo.classList.remove("large");
    else
        logo.classList.add("large");

    let current;
    for (let part of navigationParts) {
        const element = document.querySelector(part.getAttribute("data-to"));
        const fromTop = element.offsetTop;
        const fromTopTreshold = fromTop - window.innerHeight * 0.5;

        if (fromTopTreshold > top)
            break;

        current = part;
    }

    for (let part of navigationParts) {
        if (part == current)
            part.classList.add("active");
        else
            part.classList.remove("active");
    }
});

const handleClick = (event) => {
    const link = event.target.closest("a");
    const target = document.querySelector(link.getAttribute("data-to"));

    scrollTo(main, target.offsetTop - header.clientHeight, 500);
};

for (let part of scrollButtons) {
    part.addEventListener("click", handleClick);
}

window.addEventListener("load", (event) => {
    if (top > 0)
        logo.classList.remove("large");
});