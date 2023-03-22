let nikitaAttack = 21;
let yunaAttack = 40;

let nikitaHealth = 100;
let yunaHealth = 100;

let nikitaDefense = 25;
let yunaDefense = 25;

let nikitaRepair = 60;
let yunaRepair = 25

let threatLevel = 30;
let threat = nikitaHealth >threatLevel;
let death = 0;

if (nikitaAttack > yunaAttack){
    console.log(`Nikita is more powerfull`)
}else if (yunaAttack > nikitaAttack){
console.log(`Yuna's power is over 9000`)
}
else{
    console.log("Their powers have never seen an equal!!!!")
}

if (nikitaHealth <= yunaAttack){
    console.log("Nikita has fallen in glorious battle")
}else {
    nikitaHealth -= yunaAttack;
    console.log(`Nikita barely flinches under Yuna's attack! Her health is down to ${nikitaHealth}`)
}

if (nikitaHealth <= yunaAttack - nikitaDefense){
    console.log("Nikita has fallen in glorious battle")
}else{
    nikitaHealth -= yunaAttack - nikitaDefense;
    console.log(`Nikita's defensive sheild flickers with the impact of Yuna's mighty blow! Her health is down to ${nikitaHealth} -_-`)
}

if (nikitaHealth + nikitaRepair >= 100){
    nikitaHealth = 100;
    console.log(`Nikita has taken Gabapenmtin!!!`)
}else {
    nikitaHealth + nikitaRepair;
    console.log(`Nikita has taken Amantadine!!!`)
}

console.log(`Nikitas health is now ${nikitaHealth} :o`)

if (threat == true){
    console.log("Yuna will not let up!!")
}else{
    console.log(`Yuna will show great mercy this day on the old-timer`)
}

while(threat){
    yunaHealth -= nikitaAttack;
    nikitaHealth -= yunaAttack - nikitaDefense;
    if (nikitaHealth < 0){
        nikitaHealth = death;
    }else if (yunaHealth <0){
        yunaHealth = death;
    }
    console.log(`Yuna savagley attacks, Nikita's health is ${nikitaHealth}`)
    console.log(`Nikita screams a sonic blast and it hurts Yuna's soul, Her health is ${yunaHealth}`)
    threat = nikitaHealth > threatLevel && yunaHealth >= death;
    if (yunaHealth == death){
        console.log("Yuna has fallen in glorious battle!!!!")
    }else if (threat !== true){
        console.log(`Yuna will show great mercy this day on the old-timer`)
    }
}


