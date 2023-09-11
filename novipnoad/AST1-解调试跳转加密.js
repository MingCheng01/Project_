const fs = require("fs");//文件读写
const parse = require("@babel/parser"); //解析为ast
const traverse = require('@babel/traverse').default;//遍历节点
const types = require('@babel/types');//类型
const generator = require('@babel/generator').default;//ast解析为代码

const jscode = fs.readFileSync(
    './1.js', {
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
// try {
//     ast = Return_simplified(ast_code)//return简化
//     console.log('return简化结束,共处理:', ast["count"]);
//     ast_code = parse.parse(generator(ast['ast']).code);
// } catch (e) {
//     console.log('失败', e)
// }
// console.log('======================================================================')
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
    ast = Split_object_merging(ast_code)//拆分对象合并
    console.log('拆分对象合并结束,共处理', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
try {
    ast = Object_expression_string_merging(ast_code)//对象表达式字符串合并
    console.log('对象表达式字符串合并结束,共处理', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
try {
    ast = Flower_instruction_culling(ast_code)//花指令剔除
    console.log('花指令剔除结束,共处理', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
try {
    ast = Control_leveling(ast_code)//控制流平坦化
    console.log('控制流平坦化结束,共处理', ast["count"]);
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
try {
    ast = Constant_calculations(ast_code)//字符串拼接
    console.log('常量计算结束,共处理', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
try {
    ast = If_simplified(ast_code)//替换条件确定的 if 判断或条件表达式代码
    console.log('替换条件确定的 if 判断或条件表达式代码结束,共处理', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
console.log('======================================================================')
try {
    ast = Delete_unused(ast_code)//删除未被使用的function,var,let,count
    console.log('删除未被使用的function,var,let,count结束,共处理', ast["count"]);
    ast_code = parse.parse(generator(ast['ast']).code);
} catch (e) {
    console.log('失败', e)
}
// console.log('======================================================================')
// try {
//     ast = Braces_unobfucate(ast_code)//中括号解混淆
//     console.log('中括号解混淆结束,共处理', ast["count"]);
//     ast_code = parse.parse(generator(ast['ast']).code);
// } catch (e) {
//     console.log('失败', e)
// }
console.log('======================================================================')
js_code = generator(ast_code).code
fs.writeFile('./demoNew233.js', js_code, (err) => {
});
console.log('文件保存结束');
console.log('======================================================================')
console.timeEnd("处理完毕，耗时");

//===================================================================================//
//return函数简化
function Return_simplified(ast) {
    let count = 0;//计数
    console.log('开始return函数简化');
    var Rerurn_sum = 3;//return简化执行的次数-函数花指令嵌套几层，这里设置几层
    let delete_return = false;//return删除标志符
    function FunToRetu(path) {
        // return函数简化
        let node = path.node;//获取路径节点
        if (!types.isBlockStatement(node.body)) return;//块语句判定
        if (!types.isReturnStatement(node.body.body[0]) && node.body.body.length === 1) return;//return 语句判定
        let funName = node.id.name;//函数名称

        let retStmt = node.body.body[0];//定位到returnStatement
        let paramsName = node.params //函数参数列表

        let scope = path.scope;//获取路径的作用域
        let binding = scope.getBinding(funName);//获取绑定

        if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
            return;
        }
        let paths = binding.referencePaths;//绑定引用的路径
        let paths_sums = 0;//路径计数

        paths.map(function (refer_path) {
            let bindpath = refer_path.parentPath;//父路径
            let binnode = bindpath.node;//父路径的节点
            if (!types.isCallExpression(binnode)) return;//回调表达式判断
            if (!types.isIdentifier(binnode.callee)) return;//不是标识符则退出
            if (funName !== binnode.callee.name) return;//函数名不等于回调函数名称则退出
            let args = bindpath.node.arguments;//获取节点的参数
            if (paramsName.length !== args.length) return;//形参与实参数目不等，退出
            let strA = generator(retStmt.argument).code//return ast语句转js语句
            let tmpAst = parse.parse(strA);//重新解析为ast
            for (var a = 0; a < args.length; a++) {//遍历所有的实参
                let name = paramsName[a].name;//形参
                let strB = generator(args[a]).code//实参
                traverse(tmpAst, {//函数内部
                    Identifier: function (_p) {//调用表达式匹配
                        if (_p.node.name === name) {//return中的形参与传入的形参一致
                            _p.node.name = strB;//实参替换形参
                            count += 1
                        }
                    }
                })
            }
            bindpath.replaceWith(types.Identifier(generator(tmpAst).code.replaceAll(';', '')))//子节点信息替换
            paths_sums += 1;//路径+1
        });

        if (paths_sums === paths.length && delete_return) {//若绑定的每个路径都已处理 ，则移除当前路径
            path.remove();//删除路径
            count += 1
        }
    }

    ast = parse.parse(generator(ast).code);//刷新ast
    for (var a = 1; a < Rerurn_sum; a++) {
        if (a === Rerurn_sum - 1) delete_return = true;//return删除标志符
        traverse(ast, {FunctionDeclaration: {exit: [FunToRetu]},});
        ast = parse.parse(generator(ast).code);//刷新ast
    }
    return {ast, count};
}

//===================================================================================//
//大数组解混淆
function Large_array_decryption(ast) {
    let count = 0;//计数
    console.log('开始大数组解混淆');
    var DecryptFuncName_assignment = [];//解密函数以及被赋值解密函数的值
    let end = 4;//切片需要处理的代码块
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
    DecryptFuncName_assignment.push(DecryptFuncName);
    console.log('解密函数名称为:', DecryptFuncName);//打印
    rest_code = ast.program.body.slice(end); // 剩下的节点
    ast.program.body = rest_code;//剩下的节点替换
    traverse(ast, {
        NumericLiteral(path) {
            if (path.node.extra && /^0[obx]/i.test(path.node.extra.raw)) {
                path.node.extra = undefined;
            }
        },
    });
    for (j = 0; j < DecryptFuncName_assignment.length; j++) {
        DecryptFunc = DecryptFuncName_assignment[j];
        traverse(ast, {
            AssignmentExpression(path) {//赋值表达式匹配--替换加密数组为对应的值
                if (path.node.right.name === DecryptFunc) {       //当变量名与解密函数名相同时，就执行相应操作
                    DecryptFuncName_assignment.push(path.node.left.name);
                    path.remove();
                }
            },
            VariableDeclarator(path) {//赋值表达式匹配--替换加密数组为对应的值
                try {
                    if (path.node.init.name === DecryptFunc) {       //当变量名与解密函数名相同时，就执行相应操作
                        DecryptFuncName_assignment.push(path.node.id.name);
                        path.remove();
                    }
                } catch (e) {
                }
            },
        });
    }
    for (i = 0; i < DecryptFuncName_assignment.length; i++) {
        DecryptFunc = DecryptFuncName_assignment[i];
        if (DecryptFunc !== DecryptFuncName) {
            traverse(ast, {
                CallExpression(path) {//回调表达式匹配--替换加密数组为对应的值
                    if (types.isIdentifier(path.node.callee, {name: DecryptFunc})) {       //当变量名与解密函数名相同时，就执行相应操作
                        path.node.callee.name = DecryptFuncName;      // 值替换节点
                    }
                },
            });
        }
        traverse(ast, {
            CallExpression(path) {//回调表达式匹配--替换加密数组为对应的值
                if (types.isIdentifier(path.node.callee, {name: DecryptFuncName})) {       //当变量名与解密函数名相同时，就执行相应操作
                    try {
                        path.replaceWith(types.valueToNode(eval(path.toString())));      // 值替换节点
                        count += 1;
                    } catch (e) {

                    }
                }
            },
        });
    }
    return {ast, count};

}

//===================================================================================//
//字符串解混淆
function String_deobfuscation(ast) {
    let count = 0//计数
    console.log('开始字符串解混淆');
    traverse(ast, {
        'NumericLiteral|StringLiteral'(path) {
            delete path.node.extra//直接删掉，简单粗暴
            count += 1
        }
    })
    return {ast, count}
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
    traverse(ast, {
        "Identifier|BinaryExpression|CallExpression|ConditionalExpression"(path) {
            try {
                let {confident, value} = path.evaluate();
                if (confident) {
                    path.replaceInline(types.valueToNode(value))
                    count += 1
                }
            } catch (e) {
            }
        }
    });
    return {ast, count}
}

//===================================================================================//
//拆分对象合并
function Split_object_merging(ast) {
    let count = 0//计数
    console.log('开始拆分对象合并');

    function merge_object(path) {
        // 将拆分的对象重新合并
        const {id, init} = path.node;//提取节点指定的值

        if (!types.isObjectExpression(init))//如果指定属性不是对象表达式，退出
            return;
        let name = id.name;//获取id的名称
        let properties = init.properties;//获取初始属性数组
        let scope = path.scope;//获取路径的作用域
        let binding = scope.getBinding(name);//

        if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
            return;
        }
        let paths = binding.referencePaths;//绑定引用的路径
        paths.map(function (refer_path) {

            let bindpath = refer_path.parentPath;//父路径
            if (!types.isVariableDeclarator(bindpath.node)) return;//变量声明
            let bindname = bindpath.node.id.name;//获取变量节点声明的值

            let tmpbinding = scope.getBinding(bindname);//

            if (!tmpbinding || tmpbinding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
                return;
            }
            if (count < 1) console.log(bindname, name, bindpath.scope.block)
            bindpath.scope.rename(bindname, name, bindpath.scope.block);//变量名重命名，传作用域参数
            bindpath.remove();//删除节点
        });
        let dict_key = [];//存在字典的key值，避免字典中出现相同的值，重复声明

        scope.traverse(scope.block, {

            AssignmentExpression: function (_path) {//赋值表达式

                const left = _path.get("left");//节点路径左侧信息
                const right = _path.get("right");//节点路径右侧信息
                if (!left.isMemberExpression())//左侧是否为成员表达式
                    return;
                const object = left.get("object");//获取左侧信息的对象
                const property = left.get("property");//获取左侧信息的属性
                //a={},a['b']=5；合并后a={'b':5}
                if (dict_key.indexOf(property.node.value) > -1) {
                    count += 1
                    _path.remove();
                    return;//如果已存在，则跳过
                }
                if (object.isIdentifier({name: name}) && property.isStringLiteral() && _path.scope === scope) {
                    properties.push(types.ObjectProperty(types.valueToNode(property.node.value), right.node));
                    count += 1
                    _path.remove();
                    dict_key.push(property.node.value)
                }
                //a={},a.b=5；合并后a={'b':5}
                if (object.isIdentifier({name: name}) && property.isIdentifier() && _path.scope === scope) {
                    properties.push(types.ObjectProperty(types.valueToNode(property.node.name), right.node));
                    count += 1
                    _path.remove();
                    dict_key.push(property.node.value)
                }
            }
        })
    }

    traverse(ast, {VariableDeclarator: {exit: [merge_object]}});
    return {ast, count}
}

//===================================================================================//
//对象表达式字符串合并
function Object_expression_string_merging(ast) {
    let count = 0//计数
    console.log('开始对象表达式字符串合并');

    function AddObjPro(path) {
        if (types.isBinaryExpression(path.node.value)) {
            let BinNode = path.node.value;//属性节点
            if (!types.isBinaryExpression(BinNode)) return;//二相式表达式验证
            try {
                path.node.value = types.StringLiteral(eval(generator(BinNode).code));
                count += 1
            } catch (e) {
            }
        }
    }

    traverse(ast, {ObjectProperty: {exit: [AddObjPro]}});
    return {ast, count}
}

//===================================================================================//
//花指令剔除
function Flower_instruction_culling(ast) {
    let count = 0//计数
    console.log('开始花指令剔除');

    // 花指令剔除
    function callToStr(path) {
        // 将对象进行替换
        try {
            var node = path.node;//获取路径节点

            if (!types.isObjectExpression(node.init))//不是对象表达式则退出
                return;

            var objPropertiesList = node.init.properties;    // 获取对象内所有属性
            if (objPropertiesList.length === 0) // 对象内属性列表为0则退出
                return;
            var objName = node.id.name;   // 对象名

            let scope = path.scope;//获取路径的作用域
            let binding = scope.getBinding(objName);//

            if (!binding || binding.constantViolations.length > 0) {//检查该变量的值是否被修改--一致性检测
                return;
            }

            let paths = binding.referencePaths;//绑定引用的路径
            let paths_sums = 0;//路径计数

            objPropertiesList.forEach(prop => {
                var key = prop.key.value;//属性名

                if (types.isFunctionExpression(prop.value))//属性值为函数表达式
                {
                    var retStmt = prop.value.body.body[0];//定位到ReturnStatement


                    path.scope.traverse(path.scope.block, {

                        CallExpression: function (_path) {//调用表达式匹配

                            let _path_binding = _path.scope.getBinding(objName);//当前作用域获取绑定
                            if (_path_binding !== binding) return;//两者绑定对比
                            if (!types.isMemberExpression(_path.node.callee))//成员表达式判定
                                return;
                            var _node = _path.node.callee;//回调函数节点
                            if (!types.isIdentifier(_node.object) || _node.object.name !== objName)//非标识符检测||节点对象名全等验证
                                return;
                            if (!(types.isStringLiteral(_node.property) || types.isIdentifier(_node.property)))//节点属性非可迭代字符验证||节点属性标识符验证
                                return;
                            if (!(_node.property.value === key || _node.property.name === key))//节点属性值与名称等于指定值验证
                                return;
                            var args = _path.node.arguments;//获取节点的参数
                            // 二元运算
                            if (types.isBinaryExpression(retStmt.argument) && args.length === 2)//二进制表达式判定且参数为两个
                            {
                                _path.replaceWith(types.binaryExpression(retStmt.argument.operator, args[0], args[1]));//二进制表达式替换当前节点
                                count += 1
                            }
                            // 逻辑运算
                            else if (types.isLogicalExpression(retStmt.argument) && args.length === 2)//与二元运算一样
                            {
                                _path.replaceWith(types.logicalExpression(retStmt.argument.operator, args[0], args[1]));
                                count += 1
                            }
                            // 函数调用
                            else if (types.isCallExpression(retStmt.argument) && types.isIdentifier(retStmt.argument.callee))//回调函数表达式判定及回调参数部分判定
                            {
                                _path.replaceWith(types.callExpression(args[0], args.slice(1)))
                                count += 1
                            }
                            paths_sums += 1;//删除计数标志
                        }
                    })
                } else if (types.isStringLiteral(prop.value)) {//属性值为可迭代字符类型
                    retStmt = prop.value.value;//属性值的值即A:B中的B部分
                    path.scope.traverse(path.scope.block, {
                        MemberExpression: function (_path) {//成员表达式
                            let _path_binding = _path.scope.getBinding(objName);//当前作用域获取绑定
                            if (_path_binding !== binding) return;//两者绑定对比
                            var _node = _path.node;
                            if (!types.isIdentifier(_node.object) || _node.object.name !== objName)//节点对象标识符验证|节点对象名验证
                                return;
                            if (!(types.isStringLiteral(_node.property) || types.isIdentifier(_node.property)))//节点属性可迭代字符验证|标识符验证
                                return;
                            if (!(_node.property.value === key || _node.property.name === key))//节点属性值与名称等于指定值验证
                                return;
                            _path.replaceWith(types.stringLiteral(retStmt))//节点替换
                            paths_sums += 1;//删除计数标志
                            count += 1
                        }
                    })
                }
            });
            if (paths_sums === paths.length) {//若绑定的每个路径都已处理 ，则移除当前路径
                path.remove();//删除路径
                count += 1
            }
        } catch (e) {
        }


    }

    traverse(ast, {VariableDeclarator: {exit: [callToStr]},});  // 对象替换
    return {ast, count}
}

//===================================================================================//
//控制流平坦化
function Control_leveling(ast) {
    let count = 0;//计数
    console.log('开始控制流平坦化');

    function replaceWhile(path) {
        // 反控制流平坦化
        try {
            var node = path.node;//路径节点
            // 判断是否是目标节点
            if (!(types.isBooleanLiteral(node.test) || types.isUnaryExpression(node.test)))
                // 如果while中不为true或!![]
                return;
            if (!(node.test.prefix || node.test.value))
                // 如果while中的值不为true
                return;
            if (!types.isBlockStatement(node.body))
                return;
            var body = node.body.body;
            if (!types.isSwitchStatement(body[0]) || !types.isMemberExpression(body[0].discriminant) || !types.isBreakStatement(body[1]))
                return;

            // 获取数组名及自增变量名
            var swithStm = body[0];
            var arrName = swithStm.discriminant.object.name;
            var argName = swithStm.discriminant.property.argument.name
            let arr = [];

            // 找到path节点的前一个兄弟节点，即数组所在的节点，然后获取数组
            let all_presibling = path.getAllPrevSiblings();
            all_presibling.forEach(pre_path => {
                const {declarations} = pre_path.node;
                let {id, init} = declarations[0]
                if (arrName === id.name) {
                    // 数组节点
                    arr = init.callee.object.value.split('|');
                    pre_path.remove()
                    count += 1
                }
                if (argName === id.name) {
                    // 自增变量节点
                    pre_path.remove()
                    count += 1
                }
            })

            // SwitchCase节点集合
            var caseList = swithStm.cases;
            // 存放按正确顺序取出的case节点
            var resultBody = [];
            arr.map(targetIdx => {
                var targetBody = caseList[targetIdx].consequent;
                // 删除ContinueStatement块(continue语句)
                if (types.isContinueStatement(targetBody[targetBody.length - 1]))
                    targetBody.pop();
                resultBody = resultBody.concat(targetBody)
            });
            path.replaceInline(resultBody);
            count += 1
        } catch (e) {
        }

    }

    traverse(ast, {WhileStatement: {exit: [replaceWhile]}});
    return {ast, count}
}

//===================================================================================//
//删除未被使用的function,var,let,count
function Delete_unused(ast) {
    let count = 0//计数
    console.log('开始删除未被使用的function,var,let,count');
    traverse(ast, {
        VariableDeclarator(path) {
            try {
                const {id} = path.node;
                let binding = path.scope.getBinding(id.name);

                if (binding.referenced) {
                    return;
                }
                path.remove();
                count += 1
                path.scope.crawl();
            } catch (e) {

            }
        },
        //易出问题，勿开
        // FunctionDeclaration(path) {
        //     try {
        //         const {id} = path.node;
        //         // 防止函数中存在变量与函数名相同，且该变量在函数中使用，导致未去除未使用函数
        //         let binding = path.scope.parent.getBinding(id.name);
        //
        //         if (binding.referenced) {
        //             return;
        //         }
        //         path.remove();
        //         count += 1
        //         // 手动更新 scope ，防止影响下个插件使用
        //         path.scope.crawl();
        //     } catch (e) {
        //
        //     }
        // }

    })
    return {ast, count}
}

//===================================================================================//
//替换条件确定的 if 判断或条件表达式代码
function If_simplified(ast) {
    let count = 0//计数
    console.log('开始替换条件确定的 if 判断或条件表达式代码');
    traverse(ast, {
        'IfStatement': {
            exit(path) {
                try {
                    let Ifnode = path.node;//路径的节点
                    if (!types.isBooleanLiteral(Ifnode.test) && !types.isNumericLiteral(Ifnode.test)) {//布尔类型判断
                        return;
                    }
                    if (Ifnode.test.value) {//布尔值为真
                        if (types.isReturnStatement(Ifnode.consequent)) {
                            path.replaceInline(Ifnode.consequent);
                            count += 1
                        } else {
                            path.replaceInline(Ifnode.consequent.body);
                            count += 1
                        }
                    } else {//布尔值为假
                        if (Ifnode.alternate) {
                            if (types.isReturnStatement(Ifnode.alternate)) {
                                path.replaceInline(Ifnode.alternate);
                                count += 1
                            } else {
                                path.replaceInline(Ifnode.alternate.body);
                                count += 1
                            }
                        } else {
                            path.remove()
                        }
                    }
                } catch (e) {
                }
            }
        }
    })
    return {ast, count}
}

//===================================================================================//
//中括号解混淆
function Braces_unobfucate(ast) {
    let count = 0
    console.log('开始中括号解混淆');
    traverse(ast, {
            MemberExpression(path) {
                let {computed} = path.node;
                // 获取 path property 子路径
                let property = path.get('property');
                if (computed && types.isStringLiteral(property)) {
                    property.replaceWith(types.identifier(property.node.value));
                    path.node.computed = false;
                    count += 1
                }
            }
        }
    )
    return {ast, count}
}

