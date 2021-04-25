import { Test, TestingModule } from '@nestjs/testing';
import { RapidapiService } from './rapidapi.service';

describe('RapidapiService', () => {
  let service: RapidapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RapidapiService],
    }).compile();

    service = module.get<RapidapiService>(RapidapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
