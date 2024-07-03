const END_POINT = {
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    TOKEN: '/email-verification',
    GET_ME: '/user',
    PROFILE: '/user',
    ADDRESSES: 'user/addresses',
    UPDATE_ADDRESSES: 'user/addresses',
    CHANGE_PASSWORD: '/change-password/update',
    SEND_MAIL_RESTORE: '/change-password/email-confirm',
  },

  ADDRESS: {
    PREFECTURE: '/prefectures',
  },
  SERVICE: {
    FETCH: '/user/services',
  },
  APPOINTMENT: {
    RESERVATION_TIMETABLES: '/reservation-timetables',
  },
};

export default END_POINT;
