import { Character } from "../src/RPG";

describe("The Character"),function () {
   var nori = new Character("Nori", "Ishi", "Entrepeneur extroardinaire", 9, 10, 3, 6, 4, 3);
    
    it("has all fields filled",function(){
        console.log(nori);
        expect(nori.firstname && nori.lastname && nori.might && nori.spryness && nori.spryness && nori.judgement && nori.magnetism && nori.fortune).toBeDefined();
    });
        it("has starting stats at or above the minimums", function () {
        
        expect(nori.might).toBeGreaterThanOrEqual(1);
        expect(nori.spryness).toBeGreaterThanOrEqual(1);
        expect(nori.judgement).toBeGreaterThanOrEqual(1);
        expect(nori.magnetism).toBeGreaterThanOrEqual(1);
        expect(nori.fortune).toBeGreaterThanOrEqual(1);
    });
    it("is or was at valid stat sum upon generation", function(){
        if(nori.generating){
            expect(nori.might + nori.spryness + nori.spryness + nori.judgement + nori.magnetism + nori.fortune).toBe(30);
        }
    });

}