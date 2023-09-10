import { getRangeRandom } from "../../utils/index";

const {ccclass, property} = cc._decorator;
@ccclass
export default class GremlinManage extends cc.Component {

    @property(cc.Prefab)
    gremlinPrefab: cc.Prefab = null;

    protected onLoad(): void {
        
    }

    protected start(): void {
      this.schedule(this.createGremlin, 2);
    }
    private createGremlin(): void {
      const gremlin = cc.instantiate(this.gremlinPrefab);
      gremlin.x = getRangeRandom(-180, 180);
      this.node.addChild(gremlin);
    }

}
