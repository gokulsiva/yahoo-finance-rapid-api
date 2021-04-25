import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RapidapiController } from './rapidapi.controller';
import { RapidapiService } from './rapidapi.service';

@Module({
  imports: [
    ConfigModule,
    HttpModule
  ],
  controllers: [RapidapiController],
  providers: [RapidapiService]
})
export class RapidapiModule {}
