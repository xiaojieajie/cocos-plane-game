import Aircraft from "../Aircraft";

const {ccclass, property} = cc._decorator;
@ccclass
export default class RightrOddball extends Aircraft {

    xspeed: number = 140
    yspeed: number = 140
    public onLoad(): void {
        
    }

    public start(): void {

    }

    public update(dt: number): void {
      super.update(dt);
      this.node.y += this.yspeed * dt;
      this.node.x -= this.xspeed * dt;
      console.log(this.node.x)
      if (this.node.y >= 350 || this.node.x <= -cc.winSize.width) {
        this.die()
      }
    }

}
