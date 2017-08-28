import Cache from './cache'

export function saveToken (token) {
  Cache.save({key: 'token', value: token})
}