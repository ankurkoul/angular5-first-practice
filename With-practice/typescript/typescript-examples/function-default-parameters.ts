let itGst = 18;
let GstObject = {
    IT: 18,
    Food: 5,
    Export: 3
}
function getGovtGstObject() {
    //REST Service call
    return 12;
}

function salesNetProfit1(cogs: number = 10000, expense: number, actualSales: number, gstPercentage: number = cogs * .002): number {
    let gstAmount = actualSales * gstPercentage / 100;
    return actualSales - (cogs + expense + gstAmount);
}

console.log(salesNetProfit1(undefined, 13000, 150000));
console.log(salesNetProfit1(12000, 13000, 150000, 5));