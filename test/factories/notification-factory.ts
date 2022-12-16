// COMO EU FIZ

// import { Content } from '@application/entities/content';
// import { Notification } from '@application/entities/notification';

// interface makeNotificationProps {
//   category: string;
//   content: string;
//   recipientId: string;
// }

// export function makeNotification(override: makeNotificationProps) {
//   return new Notification({
//     category: override.category ? override.category : 'social',
//     content: new Content(override.content ? override.content : 'Nova solicitação de amizade'),
//     recipientId: override.recipientId ? override.recipientId : 'test',
//   });
// }

// Diego
import { Content } from '@application/entities/content';
import { Notification, NotificationProps } from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Nova solicitação de amizade'),
    recipientId: 'test',
    ...override,
  });
}
