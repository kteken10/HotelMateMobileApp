import DoctorModel from './doctor';
import MessageModel from './message';
import RecordModel from './record';

export default interface ChatModel {
  interlocutor: DoctorModel | RecordModel;
  messages: MessageModel[];
}
