import type { Options } from './types'
import unplugin from '.'

// TODO: some upstream lib failed to generate invalid dts, remove the any in the future
export default unplugin.rspack as (options?: Options) => any
