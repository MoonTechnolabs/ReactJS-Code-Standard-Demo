export const URLS = {}

// BASE_URL: '',
if (process.env.NODE_ENV === 'development') {
  Object.assign(URLS, {
    BASE_URL: '',
    PIC_URL: '',
  })
} else {
  Object.assign(URLS, {
    BASE_URL: '',
    PIC_URL: '',
    SOCKETURL: '',
  })
}
