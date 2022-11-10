const readButton = document.querySelector('.notifications__read-btn');
const notifications = document.querySelector('.notifications-wrapper');
const numberOfNotifications = document.querySelector('.notifications__number');
const notificationList = document.querySelectorAll('.notification');
const unreadIcons = document.querySelectorAll('.notification__unread-icon');

// When the user clicks markAsReadButton
readButton.addEventListener('click', () => {
  notifications.classList.add('no-unread-message');
  numberOfNotifications.textContent = 0;
  for (let notification of notificationList) {
    notification.classList.remove('unread-background');
  }
})

// When the user clicks notification button
notificationList.forEach((notification, index) => {
    notification.addEventListener('click', () => {
        notification.classList.remove('unread-background');
        unreadIcons[index].style.display = 'none';
        if (Number(numberOfNotifications.textContent) < 1) {
            numberOfNotifications.textContent = '0';
        } else {
            numberOfNotifications.textContent = String(numberOfNotifications.textContent - 1);
        }
  })
})

// Dark mode toggle
const lightModeIcon = document.querySelector('.icon--light-mode');
const darkModeIcon = document.querySelector('.icon--dark-mode');
const body = document.querySelector('body');

darkModeIcon.addEventListener('click', () => {
  body.classList.add('dark-mode');
})

lightModeIcon.addEventListener('click', () => {
  body.classList.remove('dark-mode')
})



