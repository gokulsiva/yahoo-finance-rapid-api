import { Test, TestingModule } from '@nestjs/testing';
import { RapidapiController } from './rapidapi.controller';

describe('RapidapiController', () => {
  let controller: RapidapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RapidapiController],
    }).compile();

    controller = module.get<RapidapiController>(RapidapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
