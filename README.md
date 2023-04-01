# Augusha.github.io
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TaxCalculator.Tests
{
    [TestClass]
    public class TaxCalculatorTest
    {
        [TestMethod]
        public void TestCalculateTotalTax()
        {
            // Arrange
            double numberOfEmployees = 10;
            double hoursWorked = 160;
            double hourlyRate = 25;
            double taxRate = 15;
            double expectedNetPay = 34000;

            TaxCalculator calculator = new TaxCalculator();

            // Act
            double actualNetPay = calculator.CalculateTotalTax(numberOfEmployees, hoursWorked, hourlyRate, taxRate);

            // Assert
            Assert.AreEqual(expectedNetPay, actualNetPay);
        }
    }

    public class TaxCalculator
    {
        public double CalculateTotalTax(double numberOfEmployees, double hoursWorked, double hourlyRate, double taxRate)
        {
            double grossPay = numberOfEmployees * hoursWorked * hourlyRate;
            double totalTax = grossPay * (taxRate / 100);
            double netPay = grossPay - totalTax;
            return netPay;
        }
    }
}
