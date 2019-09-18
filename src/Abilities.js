
export class Ability {
    constructor(name, type, effect) {
        this.name = name;
        this.type = type;
        this.effect = effect;
    }
    Execute(self, target) {
        eval(this.effect);
    }

}
