

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    start () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onMouseMove, this);
    }

    private onMouseMove(event: cc.Event.EventMouse) {
        this.node.setPosition(event.getLocation())
    }

}
