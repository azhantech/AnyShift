export const endpoints = {
  auth: {
    signup: '/Auth/RegisterEmployee',
    login: '/Auth/Login',
    forgotPassword: '/Auth/SendOtp',
    verifyCode: '/Auth/VerifyOtp',
    resetPassword: '/Auth/ResetPassword',
    logout: '/user/logout',
    contactUs: '/Admin/ContactUs'
  },
  general: {
    getCountries: '/user/get-countries',
  },
  chat: {
    send: '/user/send-message',
  },
  jobs: {
    jobs: '/Jobs',
    applied: '/Jobs/Apply',
  },
  application: {
    jobApplication: '/JobApplications',
    reviewJobApplication: '/Companies/AddReview'
  },
};


export const employersEndpoints = {
  auth: {
    signup: '/Auth/RegisterEmployer',
    login: '/Auth/Login',
    forgotPassword: '/Auth/SendOtp',
    verifyCode: '/Auth/VerifyOtp/',
    resetPassword: '/Auth/ResetPassword',
    logout: '/user/logout',
  },
}
export const base_url =
  'https://portaldemo-001-site19.ctempurl.com/api/mobileapp';
export const web_url = 'https://dev124.onlinetestingserver.com/';
