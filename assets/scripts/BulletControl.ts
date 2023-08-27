const {ccclass, property} = cc._decorator;
@ccclass
export default class BulletControl extends cc.Component {

    @property()
    type = 'player';

    // @property(cc.Integer)
    speed: number = 1000;


    protected start(): void {
        // console.log(this.node.y)
    } 

    protected update(dt: number): void {
        const strategy = {
            'player': this.playerMove.bind(this),
            'enemy': this.enemyMove.bind(this),
        }
        strategy[this.type]?.(dt);
    }

    private playerMove(dt: number) {
        this.node.y += this.speed * dt;
        if (this.node.y >= cc.winSize.height + 50) {
            this.node.destroy();
        }
    }
    private enemyMove(dt: number) {
        this.node.y -= this.speed * dt;
        // if (this.node.y <= -50) {
        //     this.node.destroy();
        // }
    }

    public die() {
        this.node.destroy();
    }
    

}
