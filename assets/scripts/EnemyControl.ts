import BulletControl from "./bullet/PlayerBullet";


const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyControl extends cc.Component {
    @property(cc.Prefab)
    bulletPrefab: cc.Prefab = null
    
    protected start(): void {
        
        this.schedule(() => {
            const bullet = cc.instantiate(this.bulletPrefab);
            bullet.setPosition(this.node.x, this.node.y - 50);
            // cc.resources.load<cc.SpriteAtlas>('textureOpaquePack', cc.SpriteAtlas, (err, atlas) => {
            //     const w2 = atlas.getSpriteFrame('W2');
            //     bullet.getComponent(cc.Sprite).spriteFrame = w2;
            // })
            this.node.parent.addChild(bullet);
        }, 1, cc.macro.REPEAT_FOREVER, 1.8)
    }

    onCollisionEnter(other, self) {
        if (other.tag === 2) {
            // 玩家子弹打到了
            this?.die?.();
            other?.getComponent?.(BulletControl)?.die?.();
        };
    }
    
    public die() {
        cc.resources.load<cc.SpriteAtlas>('boom', cc.SpriteAtlas, (err, atlas) => {
            const hit = atlas.getSpriteFrame('1');
            const sprite = this.node.getComponent(cc.Sprite);
            sprite.spriteFrame = hit;
            this.node.width = 60;
            this.node.height = 60;
            cc.tween(this.node).to(0.3, { scale: 2 }).start();
        });
        this.scheduleOnce(() => {
            this.node.destroy();
        }, 0.3)
        
    }
    // update (dt) {}
}
