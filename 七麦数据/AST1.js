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
let ast_code = parse.parse(jscode);

console.time("处理完毕，耗时");


console.log('======================================================================')
try {
    ast = Constant_calculations(ast_code)//字符串拼接
    console.log('常量计算结束,共处理', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
try {
    ast = String_deobfuscation(ast_code)//字符串解混淆
    console.log('字符串解混淆结束,共处理', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
try {
    ast = Large_array_decryption(ast_code)//大数组还原
    console.log('大数组还原结束,共处理:', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
try {
    ast = String_deobfuscation(ast_code)//字符串解混淆
    console.log('字符串解混淆结束,共处理', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
try {
    ast = Constant_calculations(ast_code)//字符串拼接
    console.log('常量计算结束,共处理', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
try {
    ast = Replace_the_variable(ast_code)//替换已经定义的变量
    console.log('替换已经定义的变量结束,共处理', ast["count"]);
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
    var DecryptFuncName_assignment = [];//解密函数以及被赋值解密函数的值
    let end = 1;//切片需要处理的代码块
    let newAst = parse.parse('');//新建ast
    decrypt_code = ast.program.body.slice(0, end);//切片
    newAst.program.body = decrypt_code;// 将前3个节点替换进新建ast
    let stringDecryptFunc = generator(newAst, {compact: true},).code;//转为js
    eval(stringDecryptFunc);//执行三部分的代码
    let stringDecryptFuncAst = ast.program.body[end - 1];// 拿到解密函数所在的节点
    var DecryptFuncName = 'n'
    DecryptFuncName_assignment.push(DecryptFuncName);
    console.log('解密函数名称为:', DecryptFuncName);//打印
    traverse(ast, {
        CallExpression(path) {//回调表达式匹配--替换加密数组为对应的值

            if (path.node.arguments.length < 15) {
                if (types.isIdentifier(path.node.callee, {name: DecryptFuncName})) {       //当变量名与解密函数名相同时，就执行相应操作
                    try {
                        path.replaceWith(types.valueToNode(eval(path.toString())));      // 值替换节点
                        count += 1;
                    } catch (e) {
                    }
                }
            }
        },
    });
    return {ast, count};
}

//===================================================================================//
//字符串解混淆
function String_deobfuscation(ast) {
    count = 0//计数
    traverse(ast, {
        'StringLiteral|NumericLiteral|DirectiveLiteral'(path) {
            node_raw = path.node.extra.raw
            if (/\\[x]/gi.test(node_raw)) {
                try {
                    node_value = decodeURIComponent(encodeURI(node_raw).replace(/5Cx/g, ''));
                    path.node.value = node_value.toString()
                    delete path.node.extra
                } catch (e) {
                    node_value = '';
                }
            } else {
                node_value = path.node.extra.rawValue
                delete path.node.extra
            }
            count += 1
        }
    });
    return {ast, count};
}

//===================================================================================//
//常量计算
function Constant_calculations(ast) {
    let count = 0//计数
    console.log('开始常量计算');
    traverse(ast, {
        "BinaryExpression|UnaryExpression|LogicalExpression": eval_constant,
    });

    function eval_constant(path) {
        // 常量计算

        if (path.type === "UnaryExpression") {//!![]类型的计算
            const {operator, argument} = path.node;
            if (operator !== "!") return;//判断
            if (!types.isUnaryExpression(argument) && !types.isLogicalExpression(argument) && !types.isBinaryExpression(argument) && !types.isArrayExpression(argument) && !types.isNumericLiteral(argument) && !types.isStringLiteral(argument)) return;
        }
        if (path.type === "LogicalExpression") {//true||false && 与或非的运算
            if (!types.isUnaryExpression(path.node.left) && !types.isLogicalExpression(path.node.left) && !types.isBinaryExpression(path.node.left) && !types.isNumericLiteral(path.node.left) && !types.isBooleanLiteral(path.node.left) && !types.isStringLiteral(path.node.left)) return;//逻辑符左侧既不是数字类型也不是布尔类型，返回
            if (!types.isUnaryExpression(path.node.right) && !types.isLogicalExpression(path.node.right) && !types.isBinaryExpression(path.node.right) && !types.isNumericLiteral(path.node.right) && !types.isBooleanLiteral(path.node.right) && !types.isStringLiteral(path.node.left)) return;//逻辑符左侧既不是数字类型也不是布尔类型，返回
        }
        if (path.type === "BinaryExpression") {//+-*/ << >> 计算
            /*不做任何处理，下面的做出了限定，发现存在部分不能计算的问题，因此不在做限制，但是不做限制范围过大，会处理回调表达式*/
            if (!types.isUnaryExpression(path.node.left) && !types.isLogicalExpression(path.node.left) && !types.isBinaryExpression(path.node.left) && !types.isNumericLiteral(path.node.left) && !types.isBooleanLiteral(path.node.left) && !types.isStringLiteral(path.node.left)) return;//逻辑符左侧既不是数字类型也不是布尔类型也不是字符串类型，返回
            if (!types.isUnaryExpression(path.node.right) && !types.isLogicalExpression(path.node.right) && !types.isBinaryExpression(path.node.right) && !types.isNumericLiteral(path.node.right) && !types.isBooleanLiteral(path.node.right) && !types.isStringLiteral(path.node.right)) return;//逻辑符左侧既不是数字类型也不是布尔类型也不是字符串类型，返回
        }
        try {
            let value = eval(path.toString())
            // 无限计算则退出，如1/0与-(1/0)
            if (value === Infinity || value === -Infinity)
                return;
            path.replaceWith(types.valueToNode(value));
            count += 1
        } catch (e) {
        }

    }

    return {ast, count}
}

//===================================================================================//
//替换已经定义的变量
function Replace_the_variable(ast) {
    let count = 0//计数
    console.log('开始替换已经定义的变量');
    data = {}
    traverse(ast, {
        "AssignmentExpression"(path) {
            if (path.node.right && path.node.right.type === 'StringLiteral') {
                data[path.node.left.name] = path.node.right.value
            }
        }
    });
    for (let key in data) {
        traverse(ast, {
            "MemberExpression"(path) {
                if (path.node.property && path.node.property.type === 'Identifier') {
                    if (path.node.property.name === key) {
                        path.node.property = types.valueToNode(data[key])
                        console.log(key, '=>', data[key])
                        count += 1
                    }
                }
            }
        });
    }
    return {ast, count}
}



