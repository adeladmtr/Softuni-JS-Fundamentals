function isInChest(item, input) {
   if (input.includes(item)){
       return true
   } else return false;
}

console.log(isInChest('Gold', ["Wood","Gold","Silver","Bronze","Medallion","Cup"]))