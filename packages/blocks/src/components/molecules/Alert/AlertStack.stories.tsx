import { Button } from '../../atoms/Button';
import { alertStack, AlertType } from './AlertStack';

export default {
  title: 'Molecules/AlertStack',
  argTypes: {},
}

export const AlertStackUtil = () => {
  const showAlertStack = (type: AlertType) =>
    alertStack[type]({
      message: 'This is an example of an alert message.',
      title: 'Alert title',
      onClose: () => {
        console.log('Close');
      },
    });

  return (
    <div className="flex space-x-5">
      <Button skin="secondary" onClick={() => showAlertStack('success')}>
        Show Success Notification
      </Button>
      <Button skin="secondary" onClick={() => showAlertStack('error')}>
        Show Error Notification
      </Button>
      <Button skin="secondary" onClick={() => showAlertStack('warning')}>
        Show Warning Notification
      </Button>
      <Button skin="secondary" onClick={() => showAlertStack('info')}>
        Show Info Notification
      </Button>

      <Button skin="danger-primary" onClick={alertStack.destroy}>
        Destroy Alert
      </Button>
    </div>
  );
}
