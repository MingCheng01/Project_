const fs = require('fs');
const parse = require("@babel/parser");
var FILE_PATH = './out1.js'
code = ``

function decode_eval(code) {
    ast_code = parse.parse(code)
    if (ast_code.program.body.length !== 1 || ast_code.program.body[0].type !== 'ExpressionStatement') return;
    if (!ast_code.program.body[0].expression || !ast_code.program.body[0].expression.callee) return;
    if (ast_code.program.body[0].expression.type !== 'CallExpression' || ast_code.program.body[0].expression.callee.type !== 'Identifier') return;
    if (ast_code.program.body[0].expression.callee.name !== 'eval') return;
    var i = /^ *eval *\(/ig
    code = eval(code.replace(i, "(function(){ return (") + "})()").replace('\n', '').replace(' ', '')
    fs.writeFile(FILE_PATH, code, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('eval解混淆成功');
            return 'success'
        }
    });

}

decode_eval(code)