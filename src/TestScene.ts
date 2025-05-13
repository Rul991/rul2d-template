import { GameScene } from 'rul2d';
import TestEntity from './TestEntity';

export default class TestScene extends GameScene {
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