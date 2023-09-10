const {ccclass, property} = cc._decorator;
@ccclass
export default class BgControl extends cc.Component {


    @property(cc.Integer)
    speed: number = 100;


    protected update(dt: number): void {
        this.node.y -= this.speed * dt;
        if (this.node.y <= (-this.node.height / 2)) {
            // this.node.y = this.node.height / 2;
            this.node.y = 0
        }
        // console.log(this.node.position.y)

    }

}
