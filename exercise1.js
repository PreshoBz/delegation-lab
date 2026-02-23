// exercise1.js
const accordion = document.querySelector(".accordion");
if (!accordion) {
  console.error("Accordion class not found");
} else {
  console.log("Accordion class found");
}

accordion.addEventListener("click", function (event) {
  // 1. Find the closest trigger from event.target
  const trigger = event.target.closest(".accordion-trigger");
  //    If null, the click was not on a trigger - return early.
  if (!trigger) return;
  // 2. From the trigger, find the closest .accordion-item
  const clickedItem = trigger.closest(".accordion-item");
  // 3. Close ALL accordion items (querySelectorAll + forEach + remove class)
  const items = document.querySelectorAll(".accordion-item");
  items.forEach((item) => {
    if (item !== clickedItem) {
      item.classList.remove("open");
    }
  });
  // 4. Toggle .open on the clicked item only
  clickedItem.classList.toggle("open");
});
