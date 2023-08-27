const {ccclass, property} = cc._decorator;
@ccclass
export default class BgControl extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null

    @property(cc.Integer)
    speed: number = 500;

    

    protected onLoad(): void {
        console.log(this.node);
        console.log(this.node.position.y) 
        // this.initialY = this.node.position.y;
    }

    protected start(): void {

    }

    protected update(dt: number): void {
        this.node.y -= this.speed * dt;
        if (this.node.y <= (-this.node.height / 2)) {
            // this.node.y = this.node.height / 2;
            this.node.y = 0
        }
        // console.log(this.node.position.y)

    }

}
