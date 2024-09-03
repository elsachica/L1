import readline from 'readline'
import { Welcome } from './src/welcome.js'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const welcome = new Welcome()

rl.question('Vad heter du? ', (name) => {
  welcome.greet(name)

  rl.close()
})
