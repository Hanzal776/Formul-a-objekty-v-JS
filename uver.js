document.getElementById("calculate").addEventListener("click", function () {
  const loanAmount = parseFloat(document.getElementById("loan").value);
  const annualRate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);
  if (
    isNaN(loanAmount) ||
    isNaN(annualRate) ||
    isNaN(years) ||
    loanAmount <= 0 ||
    annualRate <= 0 ||
    years <= 0
  ) {
    alert("Zadejte prosím platné kladné hodnoty.");
    return;
  }
  const monthlyRate = annualRate / 100 / 12;
  const totalPayments = years * 12;
  const monthlyPayment =
    (loanAmount * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -totalPayments));
  const resultDiv = document.getElementById("result");
  document.getElementById("monthlyPayment").textContent =
    monthlyPayment.toFixed(2);
  resultDiv.classList.remove("d-none");
});
