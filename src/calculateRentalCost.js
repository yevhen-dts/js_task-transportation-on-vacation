/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const discount = 20;
  const sevenDaysDiscount = 50;

  if (days < 3) {
    return days * rentCost;
  }

  if (days >= 3 && days <= 6) {
    return days * rentCost - discount;
  }

  if (days >= 7) {
    return days * rentCost - sevenDaysDiscount;
  }
}

module.exports = calculateRentalCost;
