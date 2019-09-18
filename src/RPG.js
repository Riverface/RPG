import $ from 'jquery';
import 'bootstrap';
export class Character {
    constructor(
        firstName,
        lastName,
        altname,
        might,
        spryness,
        judgment,
        echo,
        magnetism,
        fortune
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.altname = altname;
        this.might = might;
        this.spryness = spryness;
        this.judgment = judgment;
        this.echo = echo;
        this.magnetism = magnetism;
        this.fortune = fortune;
        this.mightMin = 1;
        this.sprynessMin = 1;
        this.judgmentMin = 1;
        this.echoMin = 1;
        this.magnetismMin = 1;
        this.fortuneMin = 1;
        this.generating = true;
        this.leveling = false;
        // this.head;
        // this.torso;
        // this.arms;
        // this.legs;
        // this.feet;
        this.mainhand;
        this.offhand;
        // this.accessory;
        // this.abilities;
        this.actions = [];
        this.cHP = 0;
        this.atk = 0;
        this.rAtk = 0;
        this.mAtk = 0;
        this.defense = 0;
        this.luck = 0;
        this.speed = 0;
        this.turnprog = 0;
        this.level = 1;
        this.drops = [];
        this.inventory = [];
        this.invid = 0;
    }
    //process stats
    levelUp() {
        this.leveling = true;
        this.StPr();
        this.level++;
        console.log(`${this.firstName} reached level ${this.level}! `);
    }
    StPr() {
        if (this.leveling == true) {

            this.might = Math.round(this.might * 1.25);
            this.spryness = Math.round(this.spryness * 1.25);
            this.judgment = Math.round(this.judgment * 1.25);
            this.echo = Math.round(this.echo * 1.25);
            this.magnetism = Math.round(this.magnetism * 1.25);
            this.fortune = Math.round(this.fortune * 1.25);

        }
        this.tHp = (this.might * 1.5);
        //when you level up you receive the difference in health (WIP)
        this.cHP = this.tHp;
        //melee attacks are calculated using might and spryness.
        //How fast you can swing is secondary to your ability to Follow Through on your attack.
        this.atk = (this.might * 1.5) + (this.spryness * .5);
        console.log(`Current Attack: ${this.atk}`);
        if (this.mainhand != null) {

            this.atk += this.mainhand.atk;
            console.log(`Current Attack WITH WEAPON: ${this.atk}`);
        }
        //ranged attacks are based on the stability of your hands (pulling the drawstring, accounting for recoil),
        // plus your ability to load your equipment efficiently (the quickness of your hands)
        this.rAtk = (this.spryness * 1.5) + (this.might * .5);
        //magic attacks are equal parts being able to remember an incantation 
        //and the raw intellect of being able to process said spells in the first place.
        //Magnetism is essential to making sure your pronunciation is convincing 
        //to the entities you draw power from.
        this.mAtk = ((this.judgment + this.echo) / 2) + (this.magnetism * .5);
        //judgment decides which parts your character decides to defend,
        //spryness decides how fast your character is to defend vital areas
        //might decides how much raw force your character can take generally
        this.defense = (this.judgment / 2) + (this.spryness + this.might / 2);
        //Luck is the opportunities you find 
        //and the ability you have to recognize those opportunities for what they are.
        this.luck = (this.judgment + this.fortune / 2);
        this.speed = (this.spryness * 1.5) + (this.fortune * 1.5) / 2;
        this.turnprog = 0;
        this.generating = false;
        this.leveling = false;

    }
    Equip(item) {
        item.id = null;
        this.mainhand = item;
        this.inventory.splice(item.id - 1, item.id - 1);
        this.invid--;
        this.StPr();
    }
    Unequip(item) {
        if(item != null){

            item.id = this.invid;
            this.invid++;
            this.inventory.push(item);
            this.mainhand = null;
            this.StPr();
        }
    }
    GainItem(item) {
        item.id = this.invid;
        this.invid++;
        this.inventory.push(item);
    }
    LoseItem(item) {
        this.inventory.splice(item.id - 1, item.id - 10);
        this.invid--;
    }
    // SheetPrint(){
    //     this.StPr();
    //     var printing = "";
    //     printing+="<div id='confirmname'>" + this.firstName + " '" + this.altname + "' "+ this.lastName + "</div>"; 

    //     printing+="";
    //     console.log(printing);
    //         $("#charsheet").append(printing);
    // }
}

export function battle(char1, char2) {
    var turnTime = 100;
    console.log(char1);
    console.log(char2);
    console.log("running");
    while (char1.cHP > 0 && char2.cHP > 0) {
        char1.turnprog += char1.speed;
        char2.turnprog += char2.speed;
        console.log(`${char1.firstName} turn progress: ${char1.turnprog} \n ${char2.firstName} turn progress: ${char2.turnprog}`);
        console.log(char1.cHP);
        console.log(char2.cHP);
        if (char1.turnprog >= turnTime) {
            console.log(char1.firstName + " attacks!");
            char2.cHP -= char1.mAtk;
            char1.turnprog -= turnTime;
        }
        if (char2.turnprog >= turnTime) {
            console.log(char2.firstName + " attacks!");
            char1.cHP -= char1.mAtk;
            char2.turnprog -= turnTime;
        }
        if (char2.cHP <= 0) {
            char1.levelUp();
            char2.Unequip(char2.mainhand);
            char2.inventory.forEach(function (item) {
                char2.LoseItem(item);
                console.log(`${char2.firstName} lost ${item.name}!`);
                char1.GainItem(item);
                console.log(`${char1.firstName} gained ${item.name}!`);
            });
            return `${char1.firstName} ${char1.lastName} wins!`;
        } else if (char1.cHP <= 0) {
            char2.levelUp();
            char1.Unequip(char2.mainhand);
            char1.inventory.forEach(function (item) {
                char1.LoseItem(item);
                console.log(`${char1.firstName} lost ${item.name}!`);
                char2.GainItem(item);
                console.log(`${char2.firstName} gained ${item.name}!`);
            });
            return `${char2.firstName} ${char2.lastName} wins!`;
        }
    }
}