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
        this.load.image('drawr', 'drawr.png');
        this.load.image('zom', 'zom.png');
        this.load.image('blood', 'blood.png');
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

        this.drawr = this.add.image(
            700,
            500,
            'blood',
        )
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Writing");

            })
            .on('pointerdown', () => {
                this.showMessage("R key... B... skull...");
            })

        //DRAWRS
        this.drawr = this.add.image(
            700,
            650,
            'drawr',
        )
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Drawer");

            })
            .on('pointerdown', () => {
                this.showMessage("Useless trash");
            })
        
        this.drawr = this.add.image(
            870,
            650,
            'drawr',
        )
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Drawer");

            })
            .on('pointerdown', () => {
                this.showMessage("Empty");
            })

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

        


        // let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => this.showMessage("Metal, bent."))
        //     .on('pointerdown', () => {
        //         this.showMessage("No touching!");
        //         this.tweens.add({
        //             targets: clip,
        //             x: '+=' + this.s,
        //             repeat: 2,
        //             yoyo: true,
        //             ease: 'Sine.inOut',
        //             duration: 100
        //         });
        //     });

            this.hold = this.add.image(
                1000,
                855,
                'hold',
            )
            this.hold.alpha = 0;

            this.gun = this.add.image(
                700,
                580,
                'gun',
            )

        
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A gun")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up an empty gun.");
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
        super("Room2", "Room 2");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('door', 'door.png');
        this.load.image('down', 'down.png');
        this.load.image('hold', 'Hold.png');
        this.load.image('doorb', 'doorB.png');
        this.load.image('blood1', 'blood1.png');
        this.load.image('background', 'wallpaper.png');



    }
    onEnter() {

        const roombg = this.add.image(0, 0, 'background');
        roombg.setOrigin(0);
        roombg.setDepth(0);

        this.drawr = this.add.image(
            600,
            770,
            'blood1',
        )
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Probably ketchup");

            })
            .on('pointerdown', () => {
                this.showMessage("R key... B... skull...");
            })

        this.drawr = this.add.image(
            400,
            650,
            'drawr',
        )
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Drawr");

            })
            .on('pointerdown', () => {
                this.gainItem('Red Key');
                
            })

        this.drawr = this.add.image(
            880,
            650,
            'drawr',
        )
        .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Drawr");

            })
            .on('pointerdown', () => {
                this.showMessage("Empty");
            })

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

        this.tweens.add({
                        targets: this.down1,
                        y: this.down1.y + 10 ,
                        duration: 1000,
                        yoyo: true,
                        repeat: -1,
                    });

        // game.add.tween(down1)
        // .to({ y: down1.y + 10 }, 1000, Phaser.Easing.Linear.None, true, 0, -1, true);

        
        this.door2 = this.add.image(
            600,
            560,
            'doorb',
        )
        this.door2.setScale(.5)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("Blue Key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("Blue Key")) {
                    //this.loseItem("key");
                    this.showMessage("Used blue key");
                    this.gotoScene('Room4');
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

    //     let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
    //         .setInteractive()
    //         .on('pointerover', () => {
    //             this.showMessage('*giggles*');
    //             this.tweens.add({
    //                 targets: finish,
    //                 x: this.s + (this.h - 2 * this.s) * Math.random(),
    //                 y: this.s + (this.h - 2 * this.s) * Math.random(),
    //                 ease: 'Sine.inOut',
    //                 duration: 500
    //             });
    //         })
    //         .on('pointerdown', () => this.gotoScene('outro'));

        if (this.hasItem("Gun")) {
            this.hold = this.add.image(
                1000,
                815,
                'hold',
            )
        }
    }
    
}


//////////////////////////////////////////////////////////////////////////////////////////
class Room3 extends AdventureScene {
    constructor() {
        super("Room3", "Room 3");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image('door', 'door.png');
        this.load.image('down', 'down.png');
        this.load.image('hold', 'Hold.png');
        this.load.image('doorR', 'doorR.png');
        this.load.image('background', 'wallpaper.png');



    }
    onEnter() {


        const roombg = this.add.image(0, 0, 'background');
        roombg.setOrigin(0);
        roombg.setDepth(0);

        this.drawr = this.add.image(
            400,
            650,
            'drawr',
        )
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Drawr");

            })
            .on('pointerdown', () => {
                this.gainItem('Blue Key');
                
            })

            this.drawr = this.add.image(
                400,
                550,
                'drawr',
            )
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("Drawr");
    
                })
                .on('pointerdown', () => {
                    this.showMessage("Nothing");
                    
                })

                this.door2 = this.add.image(
                    600,
                    560,
                    'doorR',
                )
                this.door2.setScale(.5)
                    .setInteractive()
                    .on('pointerover', () => {
                        if (this.hasItem("key")) {
                            this.showMessage("You've got the key for this door.");
                        } else {
                            this.showMessage("It's locked.");
                        }
                    })
                    .on('pointerdown', () => {
                        if (this.hasItem("Red Key")) {
                            //this.loseItem("key");
                            this.showMessage("Used red key");
                            this.gotoScene('Room5');
                        }
                    })

        

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

        this.tweens.add({
            targets: this.down1,
            y: this.down1.y + 10 ,
            duration: 1000,
            yoyo: true,
            repeat: -1,
        });
        
        if (this.hasItem("Gun")) {
            this.hold = this.add.image(
                1000,
                815,
                'hold',
            )
        }
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
        this.load.image('zom', 'zom.png');
        this.load.image('hole', 'hole.png');
        this.load.image('hold', 'Hold.png');
        this.load.image('background', 'wallpaper.png');



    }
    onEnter() {
        const roombg = this.add.image(0, 0, 'background');
        roombg.setOrigin(0);
        roombg.setDepth(0);

        this.door1 = this.add.image(
            400,
            570,
            'door',
        )
        this.door1.setScale(.75) //resize
        .setInteractive()
        .on('pointerover', () => {
            if (this.hasItem("Zkey")) {
                this.showMessage("Use Zkey");
            } else {
                this.showMessage("It's locked. You need to get away from this monster");
            }
        })
        .on('pointerdown', () => {
            if (this.hasItem("ZKey")) {
                this.showMessage("Used ZKey");
                this.gotoScene('Outro');
            }
        })

        this.hole = this.add.image(
            400,
            800,
            'hole',
        )
        this.hole.setScale(.25)
        .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Hole");

            })
            .on('pointerdown', () => {
                this.gotoScene('Outro1');
                
            })

        
        this.zom = this.add.image(
            950,
            815,
            'zom',
        )
        .setInteractive()
        .on('pointerover', () => {
            if (this.hasItem("Bullets")) {
                this.showMessage("Shoot");
            } else {
                this.showMessage("Its not friendly");
            }
        })
        .on('pointerdown', () => {
            if (this.hasItem("Bullets")) {
                this.gainItem('ZKey');
                this.showMessage("*Bang*");
                this.tweens.add({
                    targets: this.zom,
                    x: '+=' + this.s,
                    y: `-=${5 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,

                    onComplete: () => this.zom.destroy()
                });
                
            }else{
                this.tweens.add({
                                targets: this.zom,
                                x: '+=' + this.s,
                                repeat: 2,
                                yoyo: true,
                                ease: 'Sine.inOut',
                                duration: 100
                            });
            }
        })

        if (this.hasItem("Gun")) {
            this.hold = this.add.image(
                1000,
                815,
                'hold',
            )
        }
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
        this.load.image('hold', 'Hold.png');
        this.load.image('background', 'wallpaper.png');



    }
    onEnter() {
        const roombg = this.add.image(0, 0, 'background');
        roombg.setOrigin(0);
        roombg.setDepth(0);

        this.drawr = this.add.image(
            450,
            650,
            'drawr',
        )
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Drawer");

            })
            .on('pointerdown', () => {
                this.showMessage("You pick up a magazine and reloaded your gun.");
                this.gainItem('Bullets');
            })


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
                this.gotoScene('Room3');
            });

            this.tweens.add({
                targets: this.down1,
                y: this.down1.y + 10 ,
                duration: 1000,
                yoyo: true,
                repeat: -1,
            });


        if (this.hasItem("Gun")) {
            this.hold = this.add.image(
                1000,
                815,
                'hold',
            )
        }
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Rooms").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('Room1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('Outro');
    }
    create() {
        this.add.text(50, 50, "You escaped the cursed building.").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}

class Outro1 extends Phaser.Scene {
    constructor() {
        super('Outro1');
    }
    create() {
        this.add.text(50, 50, "Helpless, you fell deeper into the apocalypse.").setFontSize(50);
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
    scene: [Intro, Room1, Room2, Room3, Room4, Room5, Outro, Outro1],
    title: "Adventure Game",
});

