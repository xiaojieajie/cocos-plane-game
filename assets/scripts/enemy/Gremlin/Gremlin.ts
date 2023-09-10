import Aircraft from "../Aircraft";

const {ccclass, property} = cc._decorator;
@ccclass
export default class EnemyControl extends Aircraft {
    @property(cc.Integer)
    speed: number = 100

    protected onLoad(): void {
        
    }

    protected start(): void {
    }

    public update(dt: number): void {
        super.update(dt);
        this.node.y -= this.speed * dt;
        if (this.node.y <= (-860)) {
            this.die()
        }
    }



}
