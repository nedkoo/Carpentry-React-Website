import './Notification.css'
import { useNotificationContext } from '../../contexts/NotificationContext';


const Notification = () => {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }
    console.log(notification.type)

    return (
        <section className="note">
            <div id="error" className="notification">
                <h3 className={ notification.type==='error'
                            ? 'error'
                            : 'info'
                        }>{notification.message}</h3>
            </div>
        </section>
    );
};


export default Notification;