import { Character, Ability } from "../src/RPG";

describe("The Character",function () {
var cultist = new Character("Susan","Gorberson", "Sewn-up Corpseman", 3, 3, 5, 5, 1, 4);
   var nori = new Character("Nori", "Ishi", "Entrepeneur extroardinaire", 6, 9, 4, 5, 3, 3);
   var swipe = new Ability("Swipe", "Physical", "target.cHP -= self.mAtk;");
   nori.actions.push(swipe);
    nori.StPr();
    cultist.StPr();
    console.log(nori);
    nori.actions[0].Execute(nori, cultist);
    it("can use attack", function(){
    expect(cultist.cHP)
    });
Battle(nori, cultist);

    it("has all fields filled",function(){
        expect(nori.firstName && nori.lastName).toBeDefined();
    });
        it("has starting stats at or above the minimums", function () {
        expect(nori.might).toBeGreaterThanOrEqual(1);
        expect(nori.spryness).toBeGreaterThanOrEqual(1);
        expect(nori.judgment).toBeGreaterThanOrEqual(1);
        expect(nori.magnetism).toBeGreaterThanOrEqual(1);
        expect(nori.fortune).toBeGreaterThanOrEqual(1);
    });
    it("is or was at valid stat sum upon generation", function(){
        if(nori.generating){
            var horse = nori.might + nori.spryness + nori.echo + nori.judgment + nori.magnetism + nori.fortune;
            expect(horse).toBe(30);
        }
    });

});