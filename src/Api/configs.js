export const endpoints = {
  auth: {
    signup: '/Auth/RegisterEmployee',
    login: '/Auth/Login',
    forgotPassword: '/Auth/SendOtp',
    verifyCode: '/Auth/VerifyOtp/',
    resetPassword: '/Auth/ResetPassword',
    logout: '/user/logout',
  },
  general: {
    getCountries: '/user/get-countries',
  },
  chat: {
    send: '/user/send-message',
  },
  jobs: {
    jobs: '/Jobs',
  },
};

export const base_url =
  'http://portaldemo-001-site19.ctempurl.com/api/mobileapp';
export const web_url = 'https://dev124.onlinetestingserver.com/';
