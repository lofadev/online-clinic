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
    LOGOUT: '/logout',
  },
  ADDRESS: {
    PREFECTURE: '/prefectures',
  },
  SERVICE: {
    FETCH: '/user/services',
  },
  APPOINTMENT: {
    RESERVATION_TIMETABLES: '/reservation-timetables',
    FETCH: '/user/appointments',
    PARAMS: '/user/appointments/:id',
  },
};

export default END_POINT;
