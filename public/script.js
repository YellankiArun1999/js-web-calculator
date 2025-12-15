function calculate(op) {
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;

  fetch(`/${op}?a=${a}&b=${b}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerText =
        "Result: " + data.result;
    });
}

