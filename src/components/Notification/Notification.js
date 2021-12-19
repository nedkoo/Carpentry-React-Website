import './Notification.css'
import { useNotificationContext } from '../../contexts/NotificationContext';


const Notification = () => {
    const { notification, hideNotification } = useNotificationContext();

    if (!notification.show) {
        return null;
    }

    return (
        <section className="note">
            <div id="error" className="notification">
                <h3 className="error">{notification.message}</h3>
            </div>
        </section>
    );
};


export default Notification;