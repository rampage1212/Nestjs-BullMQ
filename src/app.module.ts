import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageConsumer } from './message-consumer';
import { MessageProducerService } from './message-producer/message-producer.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      }
    }),
    BullModule.registerQueue({
      name: 'message-queue',
    })
  ],
  controllers: [AppController],
  providers: [AppService, MessageProducerService, MessageConsumer],
})
export class AppModule {}
