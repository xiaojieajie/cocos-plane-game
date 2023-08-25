const {ccclass, property} = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null

    // @property(cc.Integer)
    speed: number = 500;

    protected onLoad(): void {
        
    }

    protected start(): void {

    }

    protected update(dt: number): void {
        this.node.y += this.speed * dt;
        // if (this.node.y >= )
    }

    public die() {
        this.node.destroy();
    }

}
