import { MessagingProtocol } from './interfaces/messaging-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(arg0: string) {
    console.log(`Msg: ${arg0}`);
  }
}
