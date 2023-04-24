// DROP DOWN MENU
const RevealMenu = document.querySelector(`#js-triggers li:first-child a`);
const Menu = document.querySelector(`nav`);
let Menuvisibility = false;

// Reveals the menu after clicking the specific element
RevealMenu.addEventListener(`click`, () => {
    // These tasks right here tell the computer how to operate when the page size has completly changed. For example on the regualr page. The menu would be in the middle and come down after clicking the Show Menu option.
    // When the browser page is collapsed into a smaller page, the menu will slide out though the left side.
    // Once you are done the menu option will slide to the right once you leave the menu option on the collapsed page. While on the regualr page, the menu option will just slide up
    if (Menuvisibility)
    {
        if (window.innerWidth > 736)
        {
            Menu.style.top =`0`;
            Menu.style.left = `50%`;
            Menu.style.transform = `translateX(-50)`;

        }
        else if (window.innerWidth <= 736)
        {
            Menu.style.left = `-200px`;
            Menu.style.top = `100px`;

        }

    }
    else
    {
        if (window.innerWidth > 736)
        {
            Menu.style.top = `100px`;
        }
        else if (window.innerWidth <= 736)
        {
            Menu.style.left = `100px`;
        }
    }
    Menuvisibility = !Menuvisibility;
});

window.addEventListener(`resize`, () =>{
    if (window.innerWidth > 736)
    {
        Menu.style.top = `0`;
        Menu.style.left = `50`;
        Menu.style.transform =`translateX(-50)`;

    }
    else
    {
        Menu.style.left = `-200px`;
        Menu.style.top = `100px`;
    }
    Menuvisibility = false;
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
