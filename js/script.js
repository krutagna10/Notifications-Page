const readButton = document.querySelector('.notifications__read-btn');
const notificationsBody = document.querySelector('.notifications-wrapper');
const numberOfNotificationsElement = document.querySelector('.notifications__number');
const notifications = document.querySelectorAll('.notification.notification--unread-background');
const unreadIcons = document.querySelectorAll('.notification__unread-icon');
const notificationNumberElement = document.querySelector('.notifications__number');

// When the user clicks markAsReadButton
readButton.addEventListener('click', () => {
  notificationNumberElement.style.display = 'none';
  notifications.forEach((notification, index) => {
      notification.classList.remove('notification--unread-background');
      unreadIcons[index].style.display = 'none';
  });
})


// When the user clicks notification button
let numberOfNotifications = 3;
notifications.forEach((notification, index) => {
    notification.addEventListener('click', () => {
        notification.classList.remove('notification--unread-background');
        unreadIcons[index].style.display = 'none';

        numberOfNotifications = numberOfNotifications - 1;
        if (numberOfNotifications > 0) {
            numberOfNotificationsElement.textContent = numberOfNotifications;
        } else  {
            notificationNumberElement.style.display = 'none';
        }
  })
})

// Dark mode toggle
const lightModeIcon = document.querySelector('.notifications__icon--light');
const darkModeIcon = document.querySelector('.notifications__icon--dark');
const body = document.querySelector('body');

darkModeIcon.addEventListener('click', () => {
  body.classList.add('dark-mode');
})

lightModeIcon.addEventListener('click', () => {
  body.classList.remove('dark-mode')
})



