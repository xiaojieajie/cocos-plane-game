const { ccclass, property } = cc._decorator;
@ccclass
export default class EnemyBulletControl extends cc.Component {


  // @property(cc.Integer)
  speed: number = 1000;


  protected start(): void {
  }

  protected update(dt: number): void {
    this.node.y -= this.speed * dt;

    if (this.node.y <= -(cc.winSize.height + 50)) {
      this.node.destroy();
    }
  }

  public die() {
    this.node.destroy();
  }


}
