import { ScopeCommentChecker } from "./commentChecker"
import fs from 'fs'
import path from "path"


describe('test all cases', () => {
  fs.readdirSync(path.resolve(__dirname, 'cases')).forEach(file => {
    it(`test for ${file}`, () => {
      const code = fs.readFileSync(path.resolve(__dirname, 'cases', file)).toString()
      const checker = new ScopeCommentChecker(code)
      // checker.setChecker(testScope)
      checker.checkAllComment()
    })
  })
})

