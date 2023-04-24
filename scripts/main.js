// DROP DOWN MENU
//Tasks of the Menu
// These tasks right here tell the computer how to operate when the page size has completly changed.
//For example on the regualr page. The menu would be in the middle and come down after clicking the Show Menu option.
// When the browser page is collapsed into a smaller page, the menu will slide out though the left side.
// Once you are done the menu option will slide to the right once you leave the menu option on the collapsed page.
//While on the regualr page, the menu option will just slide up
const RevealMenu = document.querySelector(`#js-triggers li:first-child a`);
const Menu = document.querySelector(`nav`);
let Menuvisibility = false;
const revealMenuButton = document.querySelector(`#js-triggers li:first-child a`);
const menu = document.querySelector(`nav`);

// Set the initial visibility of the menu to false
let MenuVisibility = false;

// Add a click event listener to the "Show Menu" button
revealMenuButton.addEventListener(`click`, () => {
    MenuVisibility = !MenuVisibility;

    // Check the size of the browser window and set the menu position accordingly
    if (window.innerWidth > 736) {
        if (MenuVisibility) {
            Menu.style.top = `0`;
            Menu.style.left = `50%`;
            Menu.style.transform = `translateX(-50%)`;}
        else {
            Menu.style.top = `100px`; }
    }
    else {
        if (MenuVisibility) {
            Menu.style.left = `0`;}
        else {
            Menu.style.left = `-200px`;
            Menu.style.top = `100px`;}
}
});

// Add a resize event listener to the window
window.addEventListener(`resize`, () => {
// Check the size of the browser window and set the menu position accordingly
    if (window.innerWidth > 736) {
        Menu.style.top = `0`;
        Menu.style.left = `50%`;
        Menu.style.transform = `translateX(-50%)`;}
    else {
        menu.style.left = `-200px`;
        menu.style.top = `100px`;
    }
// Set the menu visibility flag to false
    MenuVisibility = false;
});


//MODAL

const showModalButton = document.querySelector(`#js-triggers li:last-child a`);
const modal = document.querySelector(`.modal-panel`);
// This will display the modal
showModalButton.addEventListener(`click`, () => {
    modal.style.display = `flex`;
});

// When the escape key is pressed, this will hide the modal and return the user back to the regular page
document.addEventListener(`keydown`, event => {
    if (event.code === `Escape`) {
        modal.style.display = `none`;}
});

// The background will be blocked out.
modal.addEventListener(`click`, event => {
    if (event.target === modal) {
        modal.style.display = `none`;}
});
