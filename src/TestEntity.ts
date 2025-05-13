import {
  Camera,
  Circle,
  Color,
  DrawableObject,
  GameEntity,
  GameWorld,
  Point,
  VectorUtils,
} from 'rul2d';

export default class TestEntity extends GameEntity {
    private _circle: Circle
    private _direction: Point
    private _speed: number
    private _camera: Camera

    constructor (x?: number, y?: number) {
        super(x, y)

        this._direction = new Point(1)
        this._speed = 200
        this._camera = new Camera
        this._circle = new Circle()
    }

    protected _init({camera}: GameWorld): void {
        this._camera = camera
    }

    protected _create(): DrawableObject[] {
        this._circle = new Circle(0, 0, 100)
        this._circle.setColor(Color.random())
        
        return [
            this._circle
        ]
    }

    protected _update(delta: number): void {
        let {x, y, bottom, right} = this._camera.viewport
        if(this._circle.x <= x || this._circle.right >= right) this._direction.x *= -1
        if(this._circle.y <= y || this._circle.bottom >= bottom) this._direction.y *= -1

        this.move(
            VectorUtils.multiplyOnNumber(this._direction, this._speed), 
            delta
        )
    }
}