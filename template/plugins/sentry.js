
export default ({ app }) => {
  if (process.env.NODE_ENV !== 'production') return
  Raven.config('https://xxxxxxxxxxxxx@sentry.io/yyyyyyy').install();
}