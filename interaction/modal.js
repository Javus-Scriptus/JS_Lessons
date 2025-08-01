//TODO rules of handlers creation
// handleSubjectClick
// subjectEventHandler
// onSubjectEvent

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', callbackFn)
// targetBtn.addEventListener('click', handleTargetBtnClick);
// targetBtn.addEventListener('click', subjectEventHandler);
// targetBtn.addEventListener('click', onTargetBtnClick);

//TODO hadleClick
//handleSubjectClick

// function handleTargetBtnClick() {
//     console.log('click');
// }

//TODO subjectEvenHandler

// function subjectEventHandler() {
//     console.log('click');
// }

function onTargetBtnClick() {
  console.log('click');
}

addListenerBtn.addEventListener('click', () => {
  console.log('Добавляем слушателя событий');
  targetBtn.addEentListener('click', onTargetBtnClick);

  removeListenerBtn.addEventListener('click', () => {
    console.log('Клик по кнопке remove');
    targetBtn.removeEventListener('click', onTargetBtnClick);
  });
});

//TODO part 2
const form = document.querySelector('.js-register-form');
form.addEventListener('submit', onFromSubmit);

function onFromSubmit(event) {
  event.preventDefault();
  console.log(event);
  // console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.currentTargetarget);
  console.log(event.currentTarget.elements);
  console.log(event.currentTarget.elements.email);
  console.log(event.currentTarget.elements.email.value);
  console.log(event.currentTarget.elements.password.value);

  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;

  const password = formEl.password.value;

  const subscription = formEl.subscription.value;

  console.log(email);
  console.log(password);
  console.log(subscription);
}

onFromSubmit();

// const formData = {
//   email,
//   password,
//   subscription,
// }

console.log(formData)

const formData = new FormData(event.currentTarget) {
  console.log(FormData)
}

formData.forEach((value, name) => {
  console.log()})


//tip: always enable preventDefault
