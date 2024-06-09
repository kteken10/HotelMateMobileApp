export default interface MessageModel {
  id: string;
  body: string;
  sender: string;
  recipient: string;
  createdAt: string;
  readAt?: string;
}
