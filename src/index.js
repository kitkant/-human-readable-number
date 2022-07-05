module.exports = function toReadable (number) {
let resolt
const arr = String(number).split('')
     
  const num = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
    100: "hundred"
  }

switch (arr.length){
    case 1:
        resolt = num[arr[0]]
        break
    case 2:
        if(arr[0] + arr[1] in num)
            resolt = num[arr[0] + arr[1]]
        else
            resolt = `${num[arr[0]+ 0]} ${num[arr[1]]}`
        break
    case 3: 
        if(number % 100 === 0)
            resolt = `${num[arr[0]]} ${num[100]}` 
        else if(Number(arr[1] + arr[2]) in num)
            resolt = `${num[arr[0]]} ${num[100]} ${num[Number(arr[1] + arr[2])]}`
        else
            resolt = `${num[arr[0]]} ${num[100]} ${num[arr[1] + 0]} ${num[arr[2]]}`
        break
}

return resolt
}
