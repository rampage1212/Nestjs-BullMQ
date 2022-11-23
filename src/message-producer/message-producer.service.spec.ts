import { Test, TestingModule } from '@nestjs/testing';
import { MessageProducerService } from './message-producer.service';

describe('MessageProducerService', () => {
  let service: MessageProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageProducerService],
    }).compile();

    service = module.get<MessageProducerService>(MessageProducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
