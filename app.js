const btnForm = document.querySelector(".hotel-search__button");
const form = document.querySelector(".hotel-search-form");
const toggleForm = function () {
  form.classList.toggle("hide-form");
};

btnForm.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleForm();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_form = target == form || form.contains(target);
  const its_btnForm = target == btnForm;
  const form_is_active = !form.classList.contains("hide-form");

  if (!its_form && !its_btnForm && form_is_active) {
    toggleForm();
  }
});
