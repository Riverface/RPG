import { Character, battle} from "../src/RPG";
import { Item } from "../src/Item";
import { Ability } from "../src/Abilities";

describe("Nori",function () {
var cultist = new Character("Susan","Gorberson", "Sewn-up Corpseman", 3, 3, 5, 5, 1, 4);
   var nori = new Character("Nori", "Ishi", "Entrepeneur extroardinaire", 6, 9, 4, 5, 3, 3);
   var francois = new Character("Francois", "Thompson", "Fist your sister", 10,10,10,10,10,10);
var swipe = new Ability("Swipe", "Physical", "target.cHP -= self.mAtk;");
   nori.actions.push(swipe);
    nori.StPr();
    cultist.StPr();
    var knux = new Item("Spiked Knuckles");
    knux.atk = 5;
    cultist.GainItem(knux);
    cultist.Equip(cultist.inventory[0]);

    it("has all Character Sheet fields filled",function(){
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
    francois.StPr();
    console.log(nori);
    console.log(nori.cHP, cultist.cHP);
        // console.log(battle(nori, cultist));
        var battleresult = battle(nori, cultist);
        it("beat the Cultist!", function(){
            
            expect(battleresult).toBe("Nori Ishi wins!");
    });
    it("has the spiked knuckles!",function(){
        expect(nori.inventory[0].name).toBe("Spiked Knuckles");
    });
    var baseatk = nori.atk;
    console.log(baseatk);
    nori.Equip(nori.inventory[0]);
    it("gained the benefit of the Spiked Knuckles!",function(){
        expect(nori.atk).toBe(baseatk+5);
    });
    var battleresult2 = battle(nori,francois);
    it("Cannot win against francois!", function(){
        expect(battleresult2).toBe("Francois Thompson wins!");
    });

});