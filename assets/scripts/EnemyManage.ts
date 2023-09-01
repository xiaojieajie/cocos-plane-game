// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { getRangeRandom } from "./utils/index";


const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    enemyPrefab: cc.Prefab = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.createEnemy();
        this.schedule(() => {
            this.createEnemy();
        }, 2)
    }
    public createEnemy() {
        const enemyPrefab = cc.instantiate(this.enemyPrefab);
        enemyPrefab.x = Math.random() * (cc.winSize.width - enemyPrefab.width);
        const y = getRangeRandom(-250, -160)
        cc.tween(enemyPrefab).to(1.5, { y }).start();
        this.node.addChild(enemyPrefab);
    }

    // update (dt) {}
}
