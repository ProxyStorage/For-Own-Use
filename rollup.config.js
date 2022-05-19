import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import { terser } from 'rollup-plugin-terser'

console.log(process.env.NODE_ENV)
const NODE_ENV = process.env.NODE_ENV
const plugins = [
  resolve(), // 查找和打包node_modules中的第三方模块
  commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
  typescript() // 解析TypeScript
]
if (NODE_ENV === 'production') {
  plugins.push(
    terser({
      module: false,
      compress: {
        drop_console: true
      }
    })
  )
}
export default {
  input: [
    'src/substore/common/rename.ts',
    'src/substore/common/fingerprint.ts'
  ], // 打包入口
  output: {
    dir: 'dist/substore/',
    strict: false,
    exports: 'none'
  },
  treeshake: false,
  plugins
}
