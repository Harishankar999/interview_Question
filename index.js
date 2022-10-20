// Developer Assignment

// This is some data for testing the code
var data = [
  {
    date: "2019-01-01",
    sku: "Death by Chocolate",
    price: 180,
    quantity: 5,
    total: 900,
  },
  {
    date: "2019-02-01",
    sku: "Cake Fudge",
    price: 150,
    quantity: 1,
    total: 150,
  },
  {
    date: "2019-02-01",
    sku: "Cake Fudge",
    price: 150,
    quantity: 1,
    total: 150,
  },
  {
    date: "2019-02-01",
    sku: "Cake Fudge",
    price: 150,
    quantity: 1,
    total: 150,
  },
  {
    date: "2019-02-01",
    sku: "Cake Fudge",
    price: 150,
    quantity: 1,
    total: 150,
  },
  {
    date: "2019-01-01",
    sku: "Cafe Caramel",
    price: 160,
    quantity: 5,
    total: 800,
  },
  {
    date: "2019-01-01",
    sku: "Vanilla Single Scoop",
    price: 50,
    quantity: 4,
    total: 200,
  },
  {
    date: "2019-01-01",
    sku: "Trilogy",
    price: 160,
    quantity: 5,
    total: 800,
  },
];

// Que. 01 (Total sales of the store.) ------------------------------------------------

// Ans:
let result = data.reduce((curr, el) => {
  return el.total + curr;
}, 0);
console.log(result);

// Que. 02(Month wise sales totals.) ------------------------------------------------
// In this question user have to input the month. i.e Which month user wants to find the total sales.
// Ex: Like if user wants to find the total sales of "january" month.
// just pass the month name in 109 line.

// Ans:
const findTotalSalesInMonth = (monthInput) => {
  let allMonth = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  for (let i = 0; i < allMonth.length; i++) {
    if (allMonth[i] === monthInput) {
      monthInput = i + 1;
    }
  }
  let totalSales = [];
  for (let i = 0; i < data.length; i++) {
    let split = data[i].date.trim().split("-");
    let month = split[1];
    if (monthInput == month) {
      totalSales.push(data[i].total);
    }
  }

  let sum = 0;
  for (let i = 0; i < totalSales.length; i++) {
    sum += totalSales[i];
  }
  return sum;
};

console.log(findTotalSalesInMonth("january"));

// Que. 03 (Most popular item (most quantity sold) in each month.)
// In this question User have to input the month.
// i.e. which month you have to find the most popular item.
// It will give you the all popular items of the month.
// Just pass the month in 159 line.

// Ans:
const findmostPopularItems = (inputMonth) => {
  let allMonth = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  for (let i = 0; i < allMonth.length; i++) {
    if (allMonth[i] === inputMonth) {
      inputMonth = i + 1;
    }
  }
  let max = -Infinity;
  for (let i = 0; i < data.length; i++) {
    let split = data[i].date.trim().split("-");
    let month = split[1];
    if (month == inputMonth) {
      if (max < data[i].quantity) {
        max = data[i].quantity;
      }
    }
  }
  let popularItem = [];
  for (let i = 0; i < data.length; i++) {
    let split = data[i].date.trim().split("-");
    let month = split[1];
    if (month == inputMonth && max == data[i].quantity) {
      popularItem.push(data[i].sku);
    }
  }
  return popularItem;
};

console.log(findmostPopularItems("january"));

// Que. 04 (Items generating most revenue in each month.) ----------------------------------------------
// This also similar kind of question.
// for this question i am finding most revenue item for the month.
// also if you want i can do this thing in the above code. because of question partition doing separate.
// if there is too many item giving the same revenue it will listed all the item for the month.

const mostRevenueItems = (inputMonth) => {
  let allMonth = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  for (let i = 0; i < allMonth.length; i++) {
    if (allMonth[i] === inputMonth) {
      inputMonth = i + 1;
    }
  }
  let max = -Infinity;
  for (let i = 0; i < data.length; i++) {
    let split = data[i].date.trim().split("-");
    let month = split[1];
    if (month == inputMonth) {
      if (max < data[i].total) {
        max = data[i].total;
      }
    }
  }
  let revenueItem = [];
  for (let i = 0; i < data.length; i++) {
    let split = data[i].date.trim().split("-");
    let month = split[1];
    if (month == inputMonth && max == data[i].total) {
      revenueItem.push(data[i].sku);
    }
  }
  return revenueItem;
};

console.log(mostRevenueItems("january"));

// Que. 05 (For the most popular item, find the min, max and average number of orders each month.)---------------------------------------------
// This is the function for finding most popular item

// For this question first i am finding all popular items of the month.
// The mostPopularItems function returns me a array of all popular items of the month.
// After that in the second function i am finding the minimum, maximum and average num.
// Just client have to pass the month name in line no 277. client will get the ans.

const mostPopularItems = (inputMonth) => {
  let allMonth = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  for (let i = 0; i < allMonth.length; i++) {
    if (allMonth[i] === inputMonth) {
      inputMonth = i + 1;
    }
  }
  let max = -Infinity;
  for (let i = 0; i < data.length; i++) {
    let split = data[i].date.trim().split("-");
    let month = split[1];
    if (month == inputMonth) {
      if (max < data[i].quantity) {
        max = data[i].quantity;
      }
    }
  }
  let popularItem = [];
  for (let i = 0; i < data.length; i++) {
    let split = data[i].date.trim().split("-");
    let month = split[1];
    if (month == inputMonth && max == data[i].quantity) {
      popularItem.push(data[i]);
    }
  }
  return popularItem;
};

function findMinMax(month) {
  let popularItem = mostPopularItems(month);
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < popularItem.length; i++) {
    if (popularItem[i].total > max) {
      max = popularItem[i].total;
    }
    if (popularItem[i].total < min) {
      min = popularItem[i].total;
    }
  }
  let sum = 0;
  for (let i = 0; i < popularItem.length; i++) {
    sum += popularItem[i].quantity;
  }
  let avg = (sum / popularItem.length).toFixed(2);
  console.log(max, min, avg);
}
findMinMax("january");
