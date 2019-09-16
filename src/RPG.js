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
            this.leveling = true;
            
        }
        //process stats

        StPr() {

            this.tHp  = (this.might * 1.5);
            //when you level up you receive the difference in health (WIP)
            this.cHP  =(this.generating) ? this.tHp : this.cHP;
            //melee attacks are calculated using might and spryness.
            //How fast you can swing is secondary to your ability to Follow Through on your attack.
            this.atk  = (might * 1.5) + (spryness * .5);
            //ranged attacks are based on the stability of your hands (pulling the drawstring, accounting for recoil),
            // plus your ability to load your equipment efficiently (the quickness of your hands)
            this.rAtk = (spryness * 1.5) + (might * .5);
            //magic attacks are equal parts being able to remember an incantation 
            //and the raw intellect of being able to process said spells in the first place.
            //Magnetism is essential to making sure your pronunciation is convincing 
            //to the entities you draw power from.
            this.mAtk = ((judgment + echo) / 2) + ( this.magnetism*.5 );
            //judgment decides which parts your character decides to defend,
            //spryness decides how fast your character is to defend vital areas
            //might decides how much raw force your character can take generally
            this.defense = (judgment / 2  )+ (spryness + might / 2);
            //Luck is the opportunities you find 
            //and the ability you have to recognize those opportunities for what they are.
            this.luck = (judgment + fortune / 2);
        }

    }