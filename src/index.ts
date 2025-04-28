import {
  Camera,
  Color,
  Context,
  GameEntity,
  GameScene,
  GameWorld,
  Point,
  Rectangle,
  Size,
  VectorUtils,
} from 'rul2d';

class TestEntity extends GameEntity {
    private _rectangle: Rectangle
    private _direction: Point
    private _speed: number
    private _camera: Camera
    private _size: Size

    constructor (x?: number, y?: number) {
        super(x, y)

        this._direction = new Point(1)
        this._speed = 200
        this._size = new Size
        this._camera = new Camera

        this._rectangle = new Rectangle()

        this.create()
    }

    init({camera}: GameWorld): void {
        this._camera = camera
    }

    create(): void {
        this._rectangle = new Rectangle(1000, 500, 100)
        this._rectangle.setColor(Color.White)
        this.addObject(this._rectangle)
    }

    protected _draw(ctx: Context): void {
        super._draw(ctx)

        this._rectangle.stroke(ctx, Color.Black)
        this._camera.viewport.drawOutline(ctx, Color.Red)
    }

    protected _update(delta: number): void {
        let {x, y, bottom, right} = this._camera.viewport
        if(this._rectangle.x <= x || this._rectangle.right >= right) this._direction.x *= -1
        if(this._rectangle.y <= y || this._rectangle.bottom >= bottom) this._direction.y *= -1

        this.move(
            VectorUtils.multiplyOnNumber(this._direction, this._speed), 
            delta
        )
    }
}

class TestScene extends GameScene {
    private _test: TestEntity

    constructor () {
        super()
        this._test = new TestEntity()
        this.create()
    }

    create(): void {
        this.addObject(this._test)
    }
}

const world = new GameWorld()

Camera.addStandardWheelListener(world.camera)
world.addScene('test', new TestScene())
world.start()
world.log()