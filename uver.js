document.getElementById("calculate").addEventListener("click", function () {
  const LoanCalculator = {
    loanAmount: parseFloat(document.getElementById("loan").value),
    annualRate: parseFloat(document.getElementById("rate").value),
    years: parseInt(document.getElementById("years").value),
    validateInputs() {
      return (
        !isNaN(this.loanAmount) &&
        !isNaN(this.annualRate) &&
        !isNaN(this.years) &&
        this.loanAmount > 0 &&
        this.annualRate > 0 &&
        this.years > 0
      );
    },
    calculateMonthlyPayment() {
      const monthlyRate = this.annualRate / 100 / 12;
      const totalPayments = this.years * 12;
      return (
        (this.loanAmount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -totalPayments))
      );
    },
  };

  if (!LoanCalculator.validateInputs()) {
    alert("Zadejte prosím platné kladné hodnoty.");
    return;
  }

  const monthlyPayment = LoanCalculator.calculateMonthlyPayment();
  const resultDiv = document.getElementById("result");
  document.getElementById("monthlyPayment").textContent =
    monthlyPayment.toFixed(2);
  resultDiv.classList.remove("d-none");
});
