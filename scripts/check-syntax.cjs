// Parse-only check of every tracked .ts/.tsx file. The Claude Code type files
// are generated locally and git-ignored, so CI cannot run a full tsc.
const ts = require('typescript')
const fs = require('fs')
const { execSync } = require('child_process')

const files = execSync('git ls-files "*.ts" "*.tsx"').toString().split('\n').filter(Boolean)
let bad = 0
for (const f of files) {
  const kind = f.endsWith('x') ? ts.ScriptKind.TSX : ts.ScriptKind.TS
  const sf = ts.createSourceFile(f, fs.readFileSync(f, 'utf8'), ts.ScriptTarget.Latest, true, kind)
  for (const d of sf.parseDiagnostics) {
    bad++
    console.error(`${f}: ${ts.flattenDiagnosticMessageText(d.messageText, '\n')}`)
  }
  console.log(`ok ${f}`)
}
process.exit(bad ? 1 : 0)
