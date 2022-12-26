import { OnModuleInit } from '@nestjs/common';
import { WebSocketGateway } from '@nestjs/websockets';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketServer,
} from '@nestjs/websockets/decorators';
import { Server } from 'socket.io';
import { EcgDataModel } from './model';

@WebSocketGateway()
export class EcgGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log('socketId ==> ', socket.id);
      console.log('connected');
    });
  }

  @SubscribeMessage('newData')
  onNewMessage(@MessageBody() body: EcgDataModel) {
    console.log(body);
    this.server.emit('onNewData', body);
  }
}
