import Aircraft from "../Aircraft";

const {ccclass, property} = cc._decorator;
@ccclass
export default class LeftOddball extends Aircraft {

  xspeed: number = 140
  yspeed: number = 140
    public onLoad(): void {
        
    }

    public start(): void {
    }

    public update(dt: number): void {
      super.update(dt);
      this.node.y += this.xspeed * dt;
      this.node.x += this.yspeed * dt;
      // console.log(this.node.x, cc.game.canvas.width)
      if (this.node.y >= 350 || this.node.x >= cc.winSize.width) {
        this.die()
      }
    }

}
