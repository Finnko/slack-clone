export default {
  translation: {
    title: 'Hexlet Chat',
    error: {
      required: 'Обязательное поле',
      invalidCredentials: 'Неверные имя пользователя или пароль',
      unknown: 'Произошла неизвестная ошибка, перезагрузите страницу и попробуйте снова',
      channelMinLength: 'Минимальная длина имени канала - 3 символа',
      channelMaxLength: 'Максимальная длина имени канала - 20 символов',
      channelAlreadyExists: 'Канал с таким именем уже существует',
    },
    ui: {
      form: {
        loginTitle: 'Войти',
        fieldUserName: 'Ваш ник',
        fieldPassword: 'Пароль',
        fieldMessage: 'Введите сообщение...',
      },
      button: {
        login: 'Войти',
        logout: 'Выйти',
        send: 'Отправить',
        cancel: 'Отменить',
        remove: 'Удалить',
        rename: 'Переименовать',
      },
      modal: {
        newChannel: 'Добавить канал',
        removeChannel: 'Удалить канал',
      },
      link: {
        register: 'Регистрация',
      },
      text: {
        noAccount: 'Нет аккаунта?',
        channels: 'Каналы',
        areYouSure: 'Уверены?',
      },
      aria: {
        newMessage: 'Новое сообщение',
      },
    },
    plural: {
      messageWithCount_0: '{{count}} сообщение',
      messageWithCount_1: '{{count}} сообщения',
      messageWithCount_2: '{{count}} сообщений',
    },
  },
};
