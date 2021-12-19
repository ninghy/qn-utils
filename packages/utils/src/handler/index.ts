/**
 * @description: 金额去单位
 * @param {string} money
 * @return {*}
 */
function dealMoney(money: string): string {
  return money.replace(/[^0-9.]/, '');
}

export default {
  dealMoney
};

