import { UnleashClient } from 'unleash-proxy-client'

export default (_, inject) => {
  const unleash = new UnleashClient({
    url: 'https://portal-unleash.digitalservice.id/api/frontend',
    clientKey: '*:development.e7e46aa3f4f148d6de12f5fb1795ba3aab2621d2a7c5bcacb5c0d9a5',
    refreshInterval: 15,
    appName: 'demo-unleash',
  })
  inject('unleash', unleash)

  // Start the background polling
  unleash.start()
  // unleash.setContextField('userId', 456)
}
