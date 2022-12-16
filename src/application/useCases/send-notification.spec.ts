import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    // Inversão de dependências, quem chama o send está passando como deve ser persistido o dado
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      content: 'Esta é uma notificação de teste',
      category: 'example',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
