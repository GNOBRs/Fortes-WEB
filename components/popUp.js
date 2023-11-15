function TogglePopUp() {
    const popUp = document.querySelector(`#pop`);
    while (document.querySelector(`#pop`).children.length > 1) {
        popUp.removeChild(popUp.lastChild);
    }
    document.querySelector(`#pop`).classList.toggle("abrePopUp");
}

export default TogglePopUp;