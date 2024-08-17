function addCommas(num) {
    let str = num.toString();
    let arr = [...str];
    for (let i = arr.length - 3; i > 0; i -= 3) {
      arr.splice(i, 0, ',');
    }
    let newArr = arr.join('');
    return newArr;
  }
  
  module.exports = addCommas;