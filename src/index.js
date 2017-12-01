// @flow

import config from 'config'

const a: number = 10
const b: string = config.get('appSecret')

export default a
export { b }
