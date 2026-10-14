import { Test, TestingModule } from '@nestjs/testing';
import { BonjourController } from './bonjour.controller.js';

describe('BonjourController', () => {
  let controller: BonjourController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BonjourController],
    }).compile();

    controller = module.get<BonjourController>(BonjourController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
