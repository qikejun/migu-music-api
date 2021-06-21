/*
 * @Descripttion: 
 * @Author: pengpeng
 * @Date: 2021-06-21 08:35:41
 * @LastEditors: pengpeng
 * @LastEditTime: 2021-06-21 08:35:49
 */
const colors = require('colors');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'white',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

module.exports = colors;