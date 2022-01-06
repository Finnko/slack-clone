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
      passwordMatch: 'Пароли должны совпадать',
      invalidUserName: 'От 3 до 20 символов',
      invalidUserPassword: 'Не менее 6 символов',
      userExists: 'Пользователь с таким логином существует',
    },
    notifications: {
      createChannel: {
        success: 'Канал успешно создан',
        error: 'Не удалось добавить канал',
      },
      renameChannel: {
        success: 'Канал успешно переименован',
        error: 'Не удалось добавить канал',
      },
      removeChannel: {
        success: 'Канал успешно удален',
        error: 'Не удалось добавить канал',
      },
      loadChannelsError: 'Не удалось получить информацию о каналах, попробуйте повторить запрос',
      loginError: 'Не удалось войти в приложение, попробуйте повторить запрос',
      registerError: 'Не удалось зарегистироваться, попробуйте повторить запрос',
      sendMessageError: 'Не удалось отправить сообщение, попробуйте снова',
    },
    ui: {
      form: {
        loginTitle: 'Войти',
        registerTitle: 'Зарегистрироваться',
        fieldUserName: 'Ваш ник',
        fieldNewUser: 'Имя пользователя',
        fieldPassword: 'Пароль',
        fieldPasswordConfirmation: 'Подтвердите пароль',
        fieldMessage: 'Введите сообщение...',
      },
      button: {
        login: 'Войти',
        register: 'Регистрация',
        logout: 'Выйти',
        send: 'Отправить',
        cancel: 'Отменить',
        remove: 'Удалить',
        rename: 'Переименовать',
      },
      modal: {
        newChannel: 'Добавить канал',
        removeChannel: 'Удалить канал',
        renameChannel: 'Переименовать канал',
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
