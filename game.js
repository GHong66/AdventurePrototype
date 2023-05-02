class Room1 extends AdventureScene {
    constructor() {
        super("Room1", "First Room");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('door', 'door.png');
        this.load.image('down', 'down.png');
        this.load.image('gun', 'gun.png');
        this.load.image('hold', 'Hold.png');
        this.load.image('background', 'wallpaper.png');




    }

    onEnter() {
        
        // this.door1 = this.add.image(
        //         720,
        //         540,
        //         'background',
        //     )

        const roombg = this.add.image(0, 0, 'background');
        roombg.setOrigin(0);
        roombg.setDepth(0);

        

        //locked door
        // this.door1 = this.add.image(
        //     100,
        //     400,
        //     'door',
        // )
        // this.door1.setScale(.5) //resize
        // .setInteractive()
        // .on('pointerover', () => {
        //     if (this.hasItem("key")) {
        //         this.showMessage("You've got the key for this door.");
        //     } else {
        //         this.showMessage("It's locked. Can you find a key?");
        //     }
        // })
        // .on('pointerdown', () => {
        //     if (this.hasItem("key")) {
        //         //this.loseItem("key");
        //         this.showMessage("*squeak*");
        //         door.setText("unlocked door");
        //         this.gotoScene('Room2');
        //     }
        // })

        this.door1 = this.add.image(
            400,
            570,
            'door',
        )
        this.door1.setScale(.75) //resize
        .setInteractive()
        .on('pointerover', () => {
           this.showMessage("Left Door");

        })
        .on('pointerdown', () => {
                this.showMessage("*squeak*");
                this.gotoScene('Room2');
    
        })


        this.door1 = this.add.image(
            1040,
            570,
            'door',
        )
        this.door1.setScale(.75) //resize
        .setInteractive()
        .on('pointerover', () => {
           this.showMessage("Right Door");

        })
        .on('pointerdown', () => {
                this.showMessage("*squeak*");
                this.gotoScene('Room3');
    
        })



        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

            this.hold = this.add.image(
                1000,
                855,
                'hold',
            )
            this.hold.alpha = 0;

            this.gun = this.add.image(
                700,
                730,
                'gun',
            )

        
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A gun")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the gun.");
                this.gainItem('Gun');
                this.tweens.add({
                    targets: this.gun,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => this.gun.destroy()
                });
                this.tweens.add({
                    targets: this.hold,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 0, to: 1 },
                    duration: 500,
                });
            })

            

        
            if (this.hasItem("Gun")) {
                this.hold = this.add.image(
                    1000,
                    815,
                    'hold',
                )
                this.gun.destroy()
            }

        // let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("It's a nice key.")
        //     })
        //     .on('pointerdown', () => {
        //         this.showMessage("You pick up the key.");
        //         this.gainItem('key');
        //         this.tweens.add({
        //             targets: key,
        //             y: `-=${2 * this.s}`,
        //             alpha: { from: 1, to: 0 },
        //             duration: 500,
        //             onComplete: () => key.destroy()
        //         });
        //     })
            
        //     if (this.hasItem("key")) {
        //         key.destroy()
        //     }

        // let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         if (this.hasItem("key")) {
        //             this.showMessage("You've got the key for this door.");
        //         } else {
        //             this.showMessage("It's locked. Can you find a key?");
        //         }
        //     })
        //     .on('pointerdown', () => {
        //         if (this.hasItem("key")) {
        //             //this.loseItem("key");
        //             this.showMessage("*squeak*");
        //             door.setText("🚪 unlocked door");
        //             this.gotoScene('Room2');
        //         }
        //     })




    }
}

class Room2 extends AdventureScene {
    constructor() {
        super("Room2", "The second room has a long name (it truly does).");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('door', 'door.png');
        this.load.image('down', 'down.png');



    }
    onEnter() {

        this.down1 = this.add.image(
            700,
            950,
            'down',
        )
        this.down1.setScale(.25) //resize
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Go back");
        })
        .on('pointerdown', () => {
            this.gotoScene('Room1');
        });

        
        this.door2 = this.add.image(
            900,
            500,
            'door',
        )
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("wwwwkey")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    //this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('Room2');
                }
            })


        // this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("You've got no other choice, really.");
        //     })
        //     .on('pointerdown', () => {
        //         this.gotoScene('Room1');
        //     });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
    
}

class Room3 extends AdventureScene {
    constructor() {
        super("Room3", "Room 3");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('door', 'door.png');
        this.load.image('down', 'down.png');



    }
    onEnter() {

        this.down1 = this.add.image(
            700,
            950,
            'down',
        )
        this.down1.setScale(.25) //resize
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Go back");
        })
        .on('pointerdown', () => {
            this.gotoScene('Room1');
        });
    }
}

class Room4 extends AdventureScene {
    constructor() {
        super("Room4", "Room 4");
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('door', 'door.png');
        this.load.image('down', 'down.png');



    }
    onEnter() {

    }
}

class Room5 extends AdventureScene {
    constructor() {
        super("Room5", "Room 5).");
    }
    preload(){
        this.load.path = "./assets/";
        this.load.image('door', 'door.png');
        this.load.image('down', 'down.png');



    }
    onEnter() {

    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('Room1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Room1, Room2, Room3, Outro],
    title: "Adventure Game",
});

