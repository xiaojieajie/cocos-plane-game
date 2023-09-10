const {ccclass, property} = cc._decorator;

export class AircraftImmplements {
    public die(): void {
        
    }

}

@ccclass
export default class Aircraft extends cc.Component implements AircraftImmplements {

    speed: number = 100

    public update(dt: number): void {
        
    }

    public onCollisionEnter(other: cc.Collider, self: cc.Collider): void {
        
    }

    public die(): void {
        this.node.destroy()
    }
}
