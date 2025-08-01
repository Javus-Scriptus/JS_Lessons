// const input = document.querySelector('.js-input')
// const licenseCheckbox = document.querySelector('.js-button')

// const nameLabel = document.querySelector('.js-button <span></span>')

const refs = {
  receiveEl: document.querySelector('.js-input'),
  licenseCheckbox: document.querySelector('.js-button'),
  nameLabel: document.querySelector('.js-button'),
};

refs.receiveEl.addEventListener('input', onReceiveElInput);
refs.licenseCheckbox.addEventListener('change', onLiceseCheckboxChange);

function onLiceseCheckboxChange() {
    console.log(event.currentTarget.checked);
    refs.btn.disabled = !event.currentTarget.checked
}

function onReceiveElInput(event) {
  console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;
  refs.btn.disabled = !event.currentTarget.checked;
}

onReceiveElInput();
