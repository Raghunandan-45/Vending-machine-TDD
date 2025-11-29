/**
 * Calculate change to return to customer
 * @param {number} totalPayable - Amount to be paid in cents/pence
 * @param {number} cashPaid - Amount customer paid in cents/pence
 * @returns {number[]} Array of coins to return as change
 * @example
 * getChange(215, 300); // returns [50, 20, 10, 5]
 */
export const getChange = (totalPayable, cashPaid) => {
  let change = cashPaid - totalPayable;
  const coins = [100, 50, 20, 10, 5, 2, 1];
  let result = [];

  for (let coin of coins) {
    while (change >= coin) {
      result.push(coin);
      change -= coin;
    }
  }
  return result;
};