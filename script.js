const age = 18;
const isFemale = true;
const driverStatus = "bob";
const name = "Sarah";
const totalAmount = 58;

if(age=>18){
    console.log("Je mag naar binnen!");
} else {
    console.log("Je bent helaas te jong.");
}

if(age>=18 && age<=25){
    console.log("Je krijgt 50% korting!");
}

if(isFemale){
    console.log("Je mag naar ladiesnight!");
} else {
    console.log("Je mag helaas niet naar ladiesnight");
}

if(driverStatus=="bob"){
    console.log("Je bent de bob en mag rijden!");
} else {
    console.log("Je bhebt gedronken en moet een Uber bestellen...");
}

if(name==="Sarah" || name==="Abraham"){
    console.log("Gratis pils!");
}

if(totalAmount>25 && clearTimeout <=50){
    console.log("gratis botterballen!");
} else if(totalAmount>50 && totalAmount <=100){
    console.log("gratis nachos!");
} else if(totalAmount>100){
    console.log("gratis fles champagne!");
}

