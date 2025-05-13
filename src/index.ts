import {
  Camera,
  GameWorld,
  Logging,
  LoggingLevel,
} from 'rul2d';
import TestScene from './TestScene.js';

Logging.debugLevel = LoggingLevel.EngineWarn

const world = new GameWorld()

Camera.addStandardWheelListener(world.camera)
world.addScene('test', new TestScene())
world.start()
world.log()