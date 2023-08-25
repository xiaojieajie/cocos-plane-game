const {ccclass, property} = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null

    protected onLoad(): void {
    //    cc.loader.loadRes('textureTransparentPack', cc.SpriteAtlas, (err, atlas) => {
    //        console.log(atlas.getSpriteFrame('ship02'))
    //        const ship02 = atlas.getSpriteFrame('ship03');
    //        this.node.getComponent(cc.Sprite).spriteFrame = ship02;
    //    })
       cc.resources.load<cc.SpriteAtlas>('textureTransparentPack', cc.SpriteAtlas, (err, atlas) => {
        // console.log(atlas.getSpriteFrame)
        this.scheduleOnce(() => {
            const ship02 = atlas.getSpriteFrame('ship02');
            this.node.getComponent(cc.Sprite).spriteFrame = ship02;
        }, 0.2)
        this.scheduleOnce(() => {
            const ship01 = atlas.getSpriteFrame('ship01');
            this.node.getComponent(cc.Sprite).spriteFrame = ship01;
            this.node.y += 14
        }, 0.4)
       })
    //    cc.assetManager
    }

    protected start(): void {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (e: cc.Event.EventTouch) => {
            console.log('touch move')
            this.node.setPosition(e.getLocation())
        })
    }

    protected update(dt: number): void {

    }

}
