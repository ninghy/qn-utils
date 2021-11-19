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

let city_list:any[] = []

export function getAreaCodeByCityName(cityName: string): string {
  for (let item of city_list) {
    for (let i = 0; i < item.city.length; i++) {
      if (item.city[i].name === cityName) {
        return item.city[i].area_code
      }
    }
  }
}