const rootElement = document.querySelector(':root');
const fontSize = rootElement.querySelector(".settings__font-size");
const applyButton = rootElement.querySelector(".settings__apply-button");
const form = rootElement.querySelector(".settings__form");
const settingsCloseBtn = rootElement.querySelector(".settings__close");
const contentSetting = rootElement.querySelector(".content__settings");
const settingsElement = rootElement.querySelector(".settings");
const colorInput = rootElement.querySelector(".settings__font-color");
const settingsIntervalInput = rootElement.querySelector(".settings__interval");
const fontChangeSelect = rootElement.querySelector('.settings__font-change');
const text = rootElement.querySelectorAll(".text");
const settingsBackgroundColor = rootElement.querySelectorAll('.settings__back-color');

form.addEventListener("change", (event) => {
    console.log(fontChangeSelect.value);
    rootElement.style.fontFamily = `'${fontChangeSelect.value}', sans-serif`;
    rootElement.style.fontSize = fontSize.value + "px";
    rootElement.style.color = colorInput.value;

    text.forEach((item) => {
        item.style.lineHeight = settingsIntervalInput.value;
    });

    settingsBackgroundColor.forEach((item) => {
        if (item.checked) {
            rootElement.style.backgroundColor = item.value;
        }
    });
})


settingsCloseBtn.addEventListener('click', () => {
    if (contentSetting.classList.contains('content__settings_hide')) {
        contentSetting.classList.remove('content__settings_hide');
        settingsElement.classList.remove('settings_hide');
        settingsCloseBtn.classList.remove('settings__close_reverse');
    } else {
        contentSetting.classList.add('content__settings_hide');
        settingsElement.classList.add('settings_hide');
        settingsCloseBtn.classList.add('settings__close_reverse');
    }
});