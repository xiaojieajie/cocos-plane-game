
const {ccclass, property} = cc._decorator;
@ccclass
export default class GremlinManage extends cc.Component {

    @property(cc.Prefab)
    leftOddballPrefab: cc.Prefab = null;

    @property(cc.Prefab)
    rightOddballPrefab: cc.Prefab = null;

    protected onLoad(): void {
        
    }

    protected start(): void {
      this.createOddball('left');
      setTimeout(() => {
        this.createOddball('right-ori');
      }, 2000)
      // this.schedule(this.createGremlin, 2);
    }
    createOddball(type: 'left' | 'right' | 'left-ori' | 'right-ori'): void {
      let oddballPrefab: cc.Node = null;
      if (type.includes('left')) {
        // z
        oddballPrefab = cc.instantiate(this.leftOddballPrefab);
      } else if (type.includes('right')) {
        oddballPrefab = cc.instantiate(this.rightOddballPrefab);
      }
      const interval = type.includes('ori') ? 0.7 : 0.4
      this.schedule(() => {
        const oddball = cc.instantiate(oddballPrefab);
        if (type.includes('right')) {
          oddball.x = 600
        }
        if (type.includes('ori')) {
          const comp = oddball.getComponent(type === 'left-ori' ? 'LeftOddball' : 'RightOddball')
          comp.yspeed = 0;
          oddball.rotation = type === 'left-ori' ? -90 : 90
        }
        this.node.addChild(oddball);
      }, interval, 4, 0)
    }


}
