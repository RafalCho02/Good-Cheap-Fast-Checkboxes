const $toggles = $(".toggle");
const $good = $("#good");
const $cheap = $("#cheap");
const $fast = $("#fast");
const $selectedOptions = $("#selected-options");

$toggles.on("change", function () {
  doTheTrick($(this));
  updateSelectedOptions();
});

function doTheTrick($clicked) {
  if (
    $good.prop("checked") &&
    $cheap.prop("checked") &&
    $fast.prop("checked")
  ) {
    if ($good.is($clicked)) {
      $fast.prop("checked", false);
    }

    if ($cheap.is($clicked)) {
      $good.prop("checked", false);
    }

    if ($fast.is($clicked)) {
      $cheap.prop("checked", false);
    }
  }
}

function updateSelectedOptions() {
  const selected = [];
  if ($good.prop("checked")) selected.push("Good");
  if ($cheap.prop("checked")) selected.push("Cheap");
  if ($fast.prop("checked")) selected.push("Fast");

  if (selected.length > 0) {
    $selectedOptions.text(selected.join(", "));
  } else {
    $selectedOptions.text("None");
  }
}
