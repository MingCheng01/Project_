const fs = require("fs");//文件读写
const parse = require("@babel/parser"); //解析为ast
const traverse = require('@babel/traverse').default;//遍历节点
const types = require('@babel/types');//类型
const generator = require('@babel/generator').default;//ast解析为代码

const jscode = fs.readFileSync(
    './2.js', {
        encoding: 'utf-8'
    }
);
let ast_code = parse.parse(jscode);//转换为ast

console.time("处理完毕，耗时");
console.log('======================================================================')
try {
    ast = Large_array_decryption(ast_code)//大数组还原
    console.log('大数组还原结束,共处理:', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
js_code = generator(ast_code).code
fs.writeFile('./3.js', js_code, (err) => {
});
console.log('文件保存结束');
console.log('======================================================================')
console.timeEnd("处理完毕，耗时");

//===================================================================================//
//大数组解混淆
function Large_array_decryption(ast) {
    let count = 0;//计数
    console.log('开始大数组解混淆');
    let end = 3;//切片需要处理的代码块
    let newAst = parse.parse('');//新建ast
    decrypt_code = ast.program.body.slice(0, end);//切片
    newAst.program.body = decrypt_code;// 将前3个节点替换进新建ast
    let stringDecryptFunc = generator(newAst, {compact: true},).code;//转为js
    eval(stringDecryptFunc);//执行三部分的代码
    let stringDecryptFuncAst = ast.program.body[end - 1];// 拿到解密函数所在的节点
    if (stringDecryptFuncAst.type === 'VariableDeclaration') {
        var DecryptFuncName = stringDecryptFuncAst.declarations[0].id.name;//拿到解密函数的名字
    } else if (stringDecryptFuncAst.type === 'FunctionDeclaration') {
        DecryptFuncName = stringDecryptFuncAst.id.name;//拿到解密函数的名字
    } else {
        throw '未匹配到解密函数';
    }
    console.log('解密函数名称为:', DecryptFuncName);//打印
    traverse(ast, {
        CallExpression(path) {//回调表达式匹配--替换加密数组为对应的值
            if (path.node.arguments && path.node.arguments.length === 2 && path.node.arguments[0].type === 'NumericLiteral' && path.node.arguments[0].type === 'NumericLiteral' && path.node.arguments[1].type === 'StringLiteral' && path.node.arguments[1].value.length === 4) {       //当变量名与解密函数名相同时，就执行相应操作
                if (path.node.callee && path.node.callee.type === 'Identifier' && path.node.callee.name) {
                    try {
                        // paths_sums = 0
                        // paths = path.scope.getBinding(path.node.callee.name).referencePaths
                        // paths.map(function (refer_path) {
                        //     console.log(refer_path.node.name)
                        //     paths_sums = 1;
                        // });
                        // if (paths_sums === 1) {
                        path_str1 = path.toString()
                        path.node.callee.name = DecryptFuncName
                        path_str2 = path.toString()
                        eval_str = eval(path_str2)
                        console.log('已将' + path_str1 + '转换为' + path_str2 + ',执行后结果为:' + eval_str)
                        path.replaceWith(types.valueToNode(eval_str));      // 值替换节点
                        count += 1;
                        // }

                    } catch (e) {
                        console.log(e)
                    }
                }
            }
        },
    });
    return {ast, count};
}