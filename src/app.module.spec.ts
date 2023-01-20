import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('AppModule', () => {
  let service: AppModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppModule],
    }).compile();

    service = module.get<AppModule>(AppModule);
  });

  it('AppModule - should be defined', () => {
    expect(service).toBeDefined();
  });
});
