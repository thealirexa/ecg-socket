import { Module } from '@nestjs/common';
import { EcgGateway } from './gateway';

@Module({
  providers: [EcgGateway],
})
export class GatewayModule {}
