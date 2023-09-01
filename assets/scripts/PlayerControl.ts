const { ccclass, property } = cc._decorator;
@ccclass
export default class PlayerControl extends cc.Component {

  @property(cc.Label)
  label: cc.Label = null

  @property(cc.Prefab)
  bulletPrefab: cc.Prefab = null

  @property(cc.Integer)
  emitRate = 0.4;

  protected onLoad(): void {
    // cc.resources.load<cc.SpriteAtlas>('textureTransparentPack', cc.SpriteAtlas, (err, atlas) => {
    //   this.scheduleOnce(() => {
    //     const ship02 = atlas.getSpriteFrame('ship02');
    //     this.node.getComponent(cc.Sprite).spriteFrame = ship02;
    //   }, 0.2)
    //   this.scheduleOnce(() => {
    //     const ship01 = atlas.getSpriteFrame('ship01');
    //     this.node.getComponent(cc.Sprite).spriteFrame = ship01;
    //     this.node.y += 14
    //   }, 0.4)
    // })
    cc.director.getCollisionManager().enabled = true;

    //    cc.assetManager
  }

  protected start(): void {
    this.node.on(cc.Node.EventType.TOUCH_MOVE, (e: cc.Event.EventTouch) => {
      console.log('touch move')
      this.node.setPosition(e.getLocation())
    })
    // 发射子弹
    this.schedule(() => {
      const bullet = cc.instantiate(this.bulletPrefab);
      bullet.setPosition(this.node.x, this.node.y + 50);
      this.node.parent.addChild(bullet);
    }, this.emitRate)
  }

  protected update(dt: number): void {

  }
  onCollisionEnter(other, self) {
    if (other.tag === 1) {
      this.node.destroy();
      // 输了
    }
    console.log('我被碰到了', other)
  }

}
