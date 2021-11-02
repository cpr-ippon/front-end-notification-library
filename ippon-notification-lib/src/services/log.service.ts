import { Notification } from '../interfaces/notification'

export class LogService {
  logInformation(notification: Notification): void {
    console.log(notification.title, notification.message)
  }
}
