const incomes = [500, 600, 500, 600, 500, 600, 500, 600, 500, 600, 500, 600];
const expenses = [100, 200, 100, 200, 100, 200, 100, 200, 100, 200, 100, 200];
const expensesType = ["Food", "Clothes", "Gas", "Other", "Food", "Clothes", "Gas", "Other", "Food", "Clothes", "Gas", "Other"];
const categories = ["Food", "Clothes", "Gas", "Other"];
const catTotals = [];
const budgets = [50, 250, 50, 250, 50, 250, 50, 250, 50, 250, 50, 250];

// Max For Maximum Length
function arrMax(array){
    let max = Math.max(array[0], array[1]);
    for(let i = 2; i < array.length; i++){
        max = Math.max(max, array[i]);    
    }
    return max;
}
const maxValues = [arrMax(incomes), arrMax(expenses), arrMax(budgets)];
let axisVal = Math.ceil(arrMax(maxValues)/1000)*1000;

// Total Income
let totIncome = 0;
for(let i = 0; i < incomes.length; i++){
    totIncome += incomes[i];
}
// Category Totals
for(let i = 0; i < categories.length; i++){
    let cat = categories[i];
    let catTotal = 0;
    for(let i = 0; i < expenses.length; i++){
        if(cat === expensesType[i]){
            catTotal += expenses[i];
        }
    }
    catTotals.push(catTotal);
}
// Total Saved
let totSpent = 0;
for(let i = 0; i < expenses.length; i++){
    totSpent += expenses[i];
}
let totSaved = totIncome - totSpent;
catTotals.push(totSaved);
let colors = ["Orange", "Blue", "Yellow", "Purple"];
if(totSaved > 0){
    categories.push("Saved");
    colors.push("LightGreen");
}
else if(totSaved < 0){
    categories.push("Overspent")
    colors.push("Red");
    totSaved *= -1;
}

export {incomes, expenses, budgets, axisVal, categories, catTotals, colors, totSaved};


// Get user information and store it here