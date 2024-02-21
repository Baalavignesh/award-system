import middy from '@middy/core'
import httpEventNormalizer from '@middy/http-event-normalizer'
import jsonBodyParser from '@middy/http-json-body-parser'
import httpSecurityHeaders from '@middy/http-security-headers'
import secretsManager from '@middy/secrets-manager'
import { dbManager } from './dbManager'

interface optsType {
  validatorOpts?: object
  secretsManagerOpts?: object
  dbManagerOpts?: object
}

export const middyfy = (f: any, opts: optsType): middy.MiddyfiedHandler => {
  const _middy = middy(f)

  _middy.use(httpSecurityHeaders())
  _middy.use(httpEventNormalizer())
  _middy.use(jsonBodyParser())

  if (opts.secretsManagerOpts !== null) {
    _middy.use(
      secretsManager()
      // TODO
    )
  }

  if (opts.dbManagerOpts !== null) {
    console.log(opts)
    _middy.use(dbManager(opts.dbManagerOpts))
  }

  return _middy
}
