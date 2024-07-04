let lastMonthUnit = prompt("Enter Last Month Unit Number "); //last Month Reading unit
let currentMonthUnit = prompt("Enter Current Unit Number "); //Current Reading unit
const meterFees = 500; //   meter   fees
const extra200Cost = 125;
const between200_150Cost = 120;
const between150_100Cost = 110;
const between100_75Cost = 90;
const between75_50Cost = 70 ;
const between50_30Cost = 50;
const below30Cost = 35;

let consumed_Units = currentMonthUnit - lastMonthUnit; //Units Consumed    
let checkUnit =0 ;
let extra200 = 0;
let between200_150 = 0;
let between150_100 = 0;
let between100_75 = 0;
let between75_50 = 0;
let between50_30 = 0;
let below30     =   0;
function calculateBetweenUnits(consumed_Units, extraUnits) {
    return consumed_Units = consumed_Units - extraUnits; //Units between Range
}

if (consumed_Units > 200){
    if (consumed_Units > 200) {
        //Above 200 Units
        extra200 = (consumed_Units - 200);
    } 
    
    checkUnit = calculateBetweenUnits(consumed_Units,extra200); //for extra units between 200 and 150 
    if (checkUnit <= 200 && checkUnit > 150) {
        between200_150 = checkUnit-150;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between200_150);
    if (checkUnit<=150 && checkUnit > 100) {
        between150_100 = checkUnit-100;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between150_100);
    if (checkUnit<=100 && checkUnit > 75) {
        between100_75 = checkUnit-75;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between100_75);
    if (checkUnit<=75 && checkUnit>50){
        between75_50 = checkUnit-50;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between75_50);
    if (checkUnit<=50 && checkUnit>30) {
        between50_30 = checkUnit-30;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between50_30);
    if (checkUnit<=30 && checkUnit>0){
        below30 = checkUnit;
    }
console.log("Above 200 unit " + extra200 + " Units. ");
console.log("Between 200 and 150 unit " + between200_150 + " Units. ");
console.log("Between 150 and 100 unit " + between150_100 + " Units. ");
console.log("Between 100 and 75 unit " + between100_75 + " Units. ");
console.log("Between 75 and 50 Unit " + between75_50 + " Units. ");
console.log("Between 50 and 30 Unit " + between50_30 + " Units. ");
console.log("Below 30 Unit " + below30 + " Units. ");

}else if (consumed_Units <= 200 && consumed_Units >150){
    if (consumed_Units <= 200 && consumed_Units >150){
        between200_150 = consumed_Units-150;
    }   
    checkUnit = calculateBetweenUnits(consumed_Units,between200_150);
    if (checkUnit<=150 && checkUnit > 100) {
        between150_100 = checkUnit-100;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between150_100);
    if (checkUnit<=100 && checkUnit > 75) {
        between100_75 = checkUnit-75;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between100_75);
    if (checkUnit<=75 && checkUnit>50){
        between75_50 = checkUnit-50;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between75_50);
    if (checkUnit<=50 && checkUnit>30) {
        between50_30 = checkUnit-30;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between50_30);
    if (checkUnit<=30 && checkUnit>0){
        below30 = checkUnit;
    }

    console.log("Between 200 and 150 unit " + between200_150 + " Units. ");
    console.log("Between 150 and 100 unit " + between150_100 + " Units. ");
    console.log("Between 100 and 75 unit " + between100_75 + " Units. ");
    console.log("Between 75 and 50 Unit " + between75_50 + " Units. ");
    console.log("Between 50 and 30 Unit " + between50_30 + " Units. ");
    console.log("Below 30 Unit " + below30 + " Units. ");

}else if (consumed_Units <= 150 && consumed_Units >100) {
    if (consumed_Units<=150 && consumed_Units > 100) {
        between150_100 = consumed_Units-100;
    }
    
    checkUnit = calculateBetweenUnits(consumed_Units,between150_100);
    if (checkUnit<=100 && checkUnit > 75) {
        between100_75 = checkUnit-75;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between100_75);
    if (checkUnit<=75 && checkUnit>50){
        between75_50 = checkUnit-50;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between75_50);
    if (checkUnit<=50 && checkUnit>30) {
        between50_30 = checkUnit-30;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between50_30);
    if (checkUnit<=30 && checkUnit>0){
        below30 = checkUnit;
    }

    console.log("Between 150 and 100 unit " + between150_100 + " Units. ");
    console.log("Between 100 and 75 unit " + between100_75 + " Units. ");
    console.log("Between 75 and 50 Unit " + between75_50 + " Units. ");
    console.log("Between 50 and 30 Unit " + between50_30 + " Units. ");
    console.log("Below 30 Unit " + below30 + " Units. ");

} else if (consumed_Units <= 100 && consumed_Units>75) {
    if (consumed_Units<=100 && consumed_Units > 75) {
        between100_75 = consumed_Units-75;
    }
    
    checkUnit = calculateBetweenUnits(consumed_Units,between100_75);
    if (checkUnit<=75 && checkUnit>50){
        between75_50 = checkUnit-50;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between75_50);
    if (checkUnit<=50 && checkUnit>30) {
        between50_30 = checkUnit-30;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between50_30);
    if (checkUnit<=30 && checkUnit>0){
        below30 = checkUnit;
    }
    console.log("Between 100 and 75 unit " + between100_75 + " Units. ");
    console.log("Between 75 and 50 Unit " + between75_50 + " Units. ");
    console.log("Between 50 and 30 Unit " + between50_30 + " Units. ");
    console.log("Below 30 Unit " + below30 + " Units. ");

    
} else if (consumed_Units <= 75 && consumed_Units>50) {
       
    if (consumed_Units<=75 && consumed_Units>50){
        between75_50 = consumed_Units-50;
    }
    
    checkUnit = calculateBetweenUnits(consumed_Units,between75_50);
    if (checkUnit<=50 && checkUnit>30) {
        between50_30 = checkUnit-30;
    }
    
    checkUnit = calculateBetweenUnits(checkUnit,between50_30);
    if (checkUnit<=30 && checkUnit>0){
        below30 = checkUnit;
    }
    console.log("Between 75 and 50 Unit " + between75_50 + " Units. ");
    console.log("Between 50 and 30 Unit " + between50_30 + " Units. ");
    console.log("Below 30 Unit " + below30 + " Units. ");
    
} else if (consumed_Units <= 50 && consumed_Units>30) {
  
    if (consumed_Units<=50 && consumed_Units>30) {
        between50_30 = consumed_Units-30;
    }
    
    checkUnit = calculateBetweenUnits(consumed_Units,between50_30);
    if (checkUnit<=30 && checkUnit>0){
        below30 = checkUnit;
    }
    console.log("Between 50 and 30 Unit " + between50_30 + " Units. ");
    console.log("Below 30 Unit " + below30 + " Units. ");

} else if (consumed_Units <= 30 && consumed_Units>0) {
       
    if (consumed_Units<=30 && consumed_Units>0){
        below30 = consumed_Units;
    }
    console.log("Below 30 Unit " + below30 + " Units. ");
} else {
    console.log("Invalid Error !!!");
}
