module.exports = {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    // require `super()` calls in constructors
    'constructor-super': [ 'error' ],
    // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
    'for-direction': [ 'error' ],
    // 强制 getter 函数中出现 return 语句
    'getter-return': [ 'error' ],
    // 禁止使用异步函数作为 Promise executor
    'no-async-promise-executor': [ 'error' ],
    // disallow reassigning class members
    'no-class-assign': [ 'error' ],
    // 禁止与 -0 进行比较
    'no-compare-neg-zero': [ 'error' ],
    // 禁止条件表达式中出现赋值操作符
    'no-cond-assign': [ 'error', 'always' ],
    // disallow reassigning `const` variables
    'no-const-assign': [ 'error' ],
    // 禁止在条件中使用常量表达式
    'no-constant-condition': [ 'error' ],
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': [ 'error' ],
    // 禁用 debugger 建议：禁止使用，错误的提交源码会导致程序中止
    'no-debugger': [ 'error' ],
    // 禁止 function 定义中出现重名参数
    'no-dupe-args': [ 'error' ],
    // 禁止对象字面量中出现重复的 key
    'no-dupe-keys': [ 'error' ],
    // 禁止出现重复的 case 标签
    'no-duplicate-case': [ 'error' ],
    // 禁止出现空语句块
    'no-empty': [ 'error' ],
    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': [ 'error' ],
    // 禁止对 catch 子句的参数重新赋值
    'no-ex-assign': [ 'error' ],
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': [ 'error' ],
    // 禁止不必要的分号
    'no-extra-semi': [ 'error' ],
    // 禁止对 function 声明重新赋值
    'no-func-assign': [ 'error' ],
    // 禁止在嵌套的块中出现变量声明或 function 声明
    'no-inner-declarations': [ 'error' ],
    // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-invalid-regexp': [ 'error' ],
    // 禁止不规则的空白
    'no-irregular-whitespace': [ 'error' ],
    // 不允许在字符类语法中出现由多个代码点组成的字符
    'no-misleading-character-class': [ 'error' ],
    // 止把全局对象作为函数调用
    'no-obj-calls': [ 'error' ],
    // 禁止直接调用 Object.prototypes 的内置属性
    'no-prototype-builtins': [ 'error' ],
    // 禁止正则表达式字面量中出现多个空格
    'no-regex-spaces': [ 'error' ],
    // 禁用稀疏数组
    'no-sparse-arrays': [ 'error' ],
    // 禁止出现令人困惑的多行表达式
    'no-unexpected-multiline': [ 'error' ],
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': [ 'error' ],
    // 禁止在 finally 语句块中出现控制流语句
    'no-unsafe-finally': [ 'error' ],
    // 禁止对关系运算符的左操作数使用否定操作符
    'no-unsafe-negation': [ 'error' ],
    // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
    'require-atomic-updates': [ 'error' ],
    // 要求使用 isNaN() 检查 NaN
    'use-isnan': [ 'error' ],
    // 强制 typeof 表达式与有效的字符串进行比较
    'valid-typeof': [ 'error' ],
    // 不允许在 case 子句中使用词法声明
    'no-case-declarations': [ 'error' ],
    // 禁止使用空解构模式
    'no-empty-pattern': [ 'error' ],
    // 禁止 case 语句落空
    'no-fallthrough': [ 'error' ],
    // 禁止对原生对象或只读的全局对象进行赋值
    'no-global-assign': [ 'error' ],
    // 禁用八进制字面量
    'no-octal': [ 'error' ],
    // 禁止多次声明同一变量
    'no-redeclare': [ 'error' ],
    // 禁止自我赋值
    'no-self-assign': [ 'error' ],
    // 禁用出现未使用过的标
    'no-unused-labels': [ 'error' ],
    // 禁用不必要的转义字符
    'no-useless-escape': [ 'error' ],
    // 禁用 with 语句
    'no-with': [ 'error' ],
    // 禁止删除变量
    'no-delete-var': [ 'error' ],
    // 禁止将标识符定义为受限的名字
    'no-shadow-restricted-names': [ 'error' ],
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': [ 'error' ],
    // 禁止出现未使用过的变量
    'no-unused-vars': [ 'error' ],
    // 不允许重复的类成员
    'no-dupe-class-members': [ 'error' ],
    // 禁止 if-else-if 链中的重复条件
    'no-dupe-else-if': [ 'error' ],
    // 不允许分配给导入的绑定
    'no-import-assign': [ 'error' ],
    // 不允许失去精度的文字数字
    'no-loss-of-precision': [ 'error' ],
    // 禁止带有 `Symbol` 对象的 `new` 运算符
    'no-new-symbol': [ 'error' ],
    // 在构造函数中调用 `super()` 之前禁止 `this`/`super`
    'no-this-before-super': [ 'error' ],
    // 不允许在不允许使用 `undefined` 值的上下文中使用可选链接
    'no-unsafe-optional-chaining': [ 'error' ],


    // 禁止带有仅允许一次迭代的主体的循环
    'no-unreachable-loop': [ 'error' ],
    // disallow duplicate module imports
    'no-duplicate-imports': [ 'error' ],
    // disallow returning value from constructor
    'no-constructor-return': [ 'error' ],
    // 禁止在循环中出现 await 建议：使用 Promise.all()
    'no-await-in-loop': [ 'error' ],
    // 禁用 console 建议：允许使用，打包时自动删除
    'no-console': [ 'off' ],
    // 禁止不必要的括号
    'no-extra-parens': [ 'error' ],
    // 禁止在常规字符串中出现模板字面量占位符语法
    'no-template-curly-in-string': [ 'error' ],
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': [ 'error' ],
    // 强制数组方法的回调函数中有 return 语句
    'array-callback-return': [ 'error' ],
    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': [ 'error' ],
    // 强制类方法使用 this
    'class-methods-use-this': [ 'error' ],
    // 指定程序中允许的最大环路复杂度
    complexity: [ 'error', { max: 2 } ],
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': [ 'error' ],
    // 强制所有控制语句使用一致的括号风格
    curly: [ 'error' ],
    // 要求 switch 语句中有 default 分支
    'default-case': [ 'error' ],
    // 强制在点号之前和之后一致的换行
    'dot-location': [ 'error', 'property' ],
    // 强制尽可能地使用点号
    'dot-notation': [ 'error' ],
    // 要求使用 === 和 !==
    eqeqeq: [ 'error' ],
    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': [ 'error' ],
    // 强制每个文件中包含的的类的最大数量
    'max-classes-per-file': [ 'error', 1 ],
    // 禁用 alert、confirm 和 prompt
    'no-alert': [ 'error' ],
    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': [ 'error' ],
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-div-regex': [ 'error' ],
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': [ 'error' ],
    // 禁止出现空函数
    'no-empty-function': [ 'error' ],
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eq-null': [ 'error' ],
    // 禁用 eval()
    'no-eval': [ 'error', { allowIndirect: true } ],
    // 禁止扩展原生类型
    'no-extend-native': [ 'error' ],
    // 禁止不必要的 .bind() 调用
    'no-extra-bind': [ 'error' ],
    // 禁用不必要的标签
    'no-extra-label': [ 'error' ],
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': [ 'error' ],
    // 禁止使用短符号进行类型转换
    'no-implicit-coercion': [ 'error' ],
    // 禁止在全局范围内使用变量声明和 function 声明
    'no-implicit-globals': [ 'error' ],
    // 禁止使用类似 eval() 的方法
    'no-implied-eval': [ 'error' ],
    // 禁止 this 关键字出现在类和类对象之外
    'no-invalid-this': [ 'error' ],
    // 禁用 __iterator__ 属性
    'no-iterator': [ 'error' ],
    // 禁用标签语句
    'no-labels': [ 'error' ],
    // 禁用不必要的嵌套块
    'no-lone-blocks': [ 'error' ],
    // 禁止在循环语句中出现包含不安全引用的函数声明
    'no-loop-func': [ 'error' ],
    // 禁用魔术数字
    'no-magic-numbers': [ 'off' ],
    // 禁止使用多个空格
    'no-multi-spaces': [ 'error' ],
    // 禁止使用多行字符串
    'no-multi-str': [ 'error' ],
    // 禁止使用 new 以避免产生副作用
    'no-new': [ 'error' ],
    // 禁止对 Function 对象使用 new 操作符
    'no-new-func': [ 'off' ],
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': [ 'error' ],
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': [ 'error' ],
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': [ 'error' ],
    // 禁用 __proto__ 属性
    'no-proto': [ 'error' ],
    // 禁止使用对象的某些属性
    'no-restricted-properties': [ 'off' ],
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': [ 'error' ],
    // 禁用不必要的 return await
    'no-return-await': [ 'error' ],
    // 禁止使用 javascript: url
    'no-script-url': [ 'error' ],
    // 禁止自身比较
    'no-self-compare': [ 'error' ],
    // 禁用逗号操作符
    'no-sequences': [ 'error' ],
    // 禁止抛出异常字面量
    'no-throw-literal': [ 'error' ],
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': [ 'error' ],
    // 禁止出现未使用过的表达式
    'no-unused-expressions': [ 'error' ],
    // 禁止不必要的 .call() 和 .apply()
    'no-useless-call': [ 'error' ],
    // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-concat': [ 'error' ],
    // 禁止多余的 return 语句
    'no-useless-return': [ 'error' ],
    // 禁用 void 操作符
    'no-void': [ 'error' ],
    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': [ 'off' ],
    // 建议在正则表达式中使用命名捕获组
    'prefer-named-capture-group': [ 'off' ],
    // 要求使用 Error 对象作为 Promise 拒绝的原因
    'prefer-promise-reject-errors': [ 'error' ],
    // 强制在 parseInt() 使用基数参数
    radix: [ 'error', 'as-needed' ],
    // 禁止使用不带 await 表达式的 async 函数
    'require-await': [ 'error' ],
    // 强制在 RegExp 上使用 u 标志
    'require-unicode-regexp': [ 'off' ],
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': [ 'error' ],
    // 要求 IIFE 使用括号括起来
    'wrap-iife': [ 'error', 'inside' ],
    // 要求或禁止 “Yoda” 条件
    yoda: [ 'error', 'never' ],
    // 要求或禁止使用严格模式指令
    strict: [ 'error' ],
    // 要求或禁止 var 声明中的初始化
    'init-declarations': [ 'error' ],
    // 不允许标签与变量同名
    'no-label-var': [ 'error' ],
    // 禁用特定的全局变量
    'no-restricted-globals': [ 'error' ],
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': [ 'error' ],
    // 禁止将变量初始化为 undefined
    'no-undef-init': [ 'error' ],
    // 禁止将 undefined 作为标识符
    'no-undefined': [ 'error' ],
    // 禁止在变量定义之前使用它们
    'no-use-before-define': [ 'error' ],

    /**
     * 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的
     */

    // 强制数组方法的回调函数中有 return 语句
    'callback-return': [ 'error' ],
    // 要求 require() 出现在顶层模块作用域中
    'global-require': [ 'error' ],
    // 要求回调函数中有容错处理
    'handle-callback-err': [ 'error' ],
    // 禁用 Buffer() 构造函数
    'no-buffer-constructor': [ 'error' ],
    // 禁止混合常规变量声明和 require 调用
    'no-mixed-requires': [ 'error' ],
    // 禁止调用 require 时使用 new 操作符
    'no-new-require': [ 'error' ],
    // 禁止对 __dirname 和 __filename 进行字符串连接
    'no-path-concat': [ 'error' ],
    // 禁用 process.env
    'no-process-env': [ 'off' ],
    // 禁用 process.exit()
    'no-process-exit': [ 'off' ],
    // 禁用通过 require 加载的指定模块
    'no-restricted-modules': [ 'off' ],
    // 禁用同步方法
    'no-sync': [ 'off' ],

    /**
     * 这些规则是关于风格指南的，而且是非常主观的
     */
    // 在数组开括号后和闭括号前强制换行
    'array-bracket-newline': [ 'error', 'consistent' ],
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': [ 'error', 'always' ],
    // 强制数组元素间出现换行
    'array-element-newline': [ 'off' ],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': [ 'error' ],
    // 强制在代码块中使用一致的大括号风格
    'brace-style': [ 'error', '1tbs' ],
    // 强制使用骆驼拼写法命名约定
    camelcase: [ 'error' ],
    // 强制或禁止对注释的第一个字母大写
    'capitalized-comments': [ 'off' ],
    // 要求或禁止末尾逗号
    'comma-dangle': [ 'error', 'always-multiline' ],
    // 强制在逗号前后使用一致的空格
    'comma-spacing': [ 'error' ],
    // 强制使用一致的逗号风格
    'comma-style': [ 'error', 'last' ],
    // 强制在计算的属性的方括号中使用一致的空格
    'computed-property-spacing': [ 'error' ],
    // 当获取当前执行环境的上下文时，强制使用一致的命名
    'consistent-this': [ 'error', 'self' ],
    // 要求或禁止文件末尾存在空行
    'eol-last': [ 'error', 'always' ],
    // 要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': [ 'error' ],
    // 要求函数名与赋值给它们的变量名或属性名相匹配
    'func-name-matching': [ 'error', 'always' ],
    // 要求或禁止使用命名的 function 表达式
    'func-names': [ 'off' ],
    // 强制一致地使用 function 声明或表达式
    'func-style': [ 'error', 'declaration' ],
    // 强制在函数括号内使用一致的换行
    'function-paren-newline': [ 'error' ],
    // 禁用指定的标识符
    'id-blacklist': [ 'off' ],
    // 强制标识符的最小和最大长度
    'id-length': [ 'off' ],
    // 要求标识符匹配一个指定的正则表达式
    'id-match': [ 'off' ],
    // 强制隐式返回的箭头函数体的位置
    'implicit-arrow-linebreak': [ 'off' ],
    // 强制使用一致的缩进
    indent: [ 'error', 2 ],
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': [ 'error', 'prefer-double' ],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': [ 'error' ],
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': [ 'error' ],
    // 强制行注释的位置
    'line-comment-position': [ 'error' ],
    // 强制使用一致的换行风格
    'linebreak-style': [ 'error', 'unix' ],
    // 要求在注释周围有空行
    'lines-around-comment': [ 'error' ],
    // 要求或禁止类成员之间出现空行
    'lines-between-class-members': [ 'error' ],
    // 强制可嵌套的块的最大深度
    'max-depth': [ 'error', { max: 3 } ],
    // 强制一行的最大长度
    'max-len': [ 'off' ],
    // 强制函数最大代码行数
    'max-lines': [ 'off' ],
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': [ 'error', { max: 3 } ],
    // 强制函数定义中最多允许的参数数量
    'max-params': [ 'error', { max: 3 } ],
    // 强制函数块最多允许的的语句数量
    'max-statements': [ 'off' ],
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': [ 'error' ],
    // 强制对多行注释使用特定风格
    'multiline-comment-style': [ 'error' ],
    // 要求或禁止在三元操作数中间换行
    'multiline-ternary': [ 'error', 'never' ],
    // 要求构造函数首字母大写
    'new-cap': [ 'error', { capIsNew: false } ],
    // 强制或禁止调用无参构造函数时有圆括号
    'new-parens': [ 'error' ],
    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': [ 'error' ],
    // 禁用 Array 构造函数
    'no-array-constructor': [ 'error' ],
    // 禁用按位运算符
    'no-bitwise': [ 'off' ],
    // 禁用 continue 语句
    'no-continue': [ 'off' ],
    // 禁止在代码后使用内联注释
    'no-inline-comments': [ 'error' ],
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': [ 'error' ],
    // 禁止混合使用不同的操作符
    'no-mixed-operators': [ 'error' ],
    // 禁止空格和 tab 的混合缩进
    'no-mixed-spaces-and-tabs': [ 'error' ],
    // 禁止连续赋值
    'no-multi-assign': [ 'error' ],
    // 禁止出现多行空行
    'no-multiple-empty-lines': [ 'error' ],
    // 禁用否定的表达式
    'no-negated-condition': [ 'off' ],
    // 禁用嵌套的三元表达式
    'no-nested-ternary': [ 'error' ],
    // 禁用 Object 的构造函数
    'no-new-object': [ 'error' ],
    // 禁用一元操作符 ++ 和 --
    'no-plusplus': [ 'off' ],
    // 禁用特定的语法
    'no-restricted-syntax': [ 'off' ],
    // 禁用 tab
    'no-tabs': [ 'error' ],
    // 禁用三元操作符
    'no-ternary': [ 'off' ],
    // 禁用行尾空格
    'no-trailing-spaces': [ 'error' ],
    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': [ 'off' ],
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': [ 'error' ],
    // 禁止属性前有空白
    'no-whitespace-before-property': [ 'error' ],
    // 强制单个语句的位置
    'nonblock-statement-body-position': [ 'error' ],
    // 强制大括号内换行符的一致性
    'object-curly-newline': [ 'error' ],
    // 强制在大括号中使用一致的空格
    'object-curly-spacing': [ 'error', 'always' ],
    // 强制将对象的属性放在不同的行上
    'object-property-newline': [ 'error', {
      allowAllPropertiesOnSameLine: false,
    } ],
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': [ 'error', 'never' ],
    // 要求或禁止在变量声明周围换行
    'one-var-declaration-per-line': [ 'error', 'always' ],
    // 要求或禁止在可能的情况下使用简化的赋值操作符
    'operator-assignment': [ 'error' ],
    // 强制操作符使用一致的换行符
    'operator-linebreak': [ 'error', 'after' ],
    // 要求或禁止块内填充
    'padded-blocks': [ 'error', 'never' ],
    // 要求或禁止在语句间填充空行
    'padding-line-between-statements': [ 'error' ],
    // 禁止使用以对象字面量作为第一个参数的 Object.assign，优先使用对象扩展。
    'prefer-object-spread': [ 'error' ],
    // 要求对象字面量属性名称用引号括起来
    'quote-props': [ 'error', 'as-needed' ],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [ 'error', 'single' ],
    // 要求或禁止使用分号代替 ASI
    semi: [ 'error', 'always' ],
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': [ 'error' ],
    // 强制分号的位置
    'semi-style': [ 'error', 'last' ],
    // 要求对象属性按序排列
    'sort-keys': [ 'off' ],
    // 要求同一个声明块中的变量按顺序排列
    'sort-vars': [ 'off' ],
    // 强制在块之前使用一致的空格
    'space-before-blocks': [ 'error' ],
    // 强制在 function的左括号之前使用一致的空格
    'space-before-function-paren': [ 'error', 'never' ],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': [ 'error', 'never' ],
    // 要求操作符周围有空格
    'space-infix-ops': [ 'error' ],
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': [ 'error' ],
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': [ 'error' ],
    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': [ 'error' ],
    // 要求或禁止在模板标记和它们的字面量之间有空格
    'template-tag-spacing': [ 'error' ],
    // 要求或禁止 Unicode 字节顺序标记 (BOM)
    'unicode-bom': [ 'error', 'never' ],
    // 要求正则表达式被括号括起来
    'wrap-regex': [ 'off' ],

    /**
     * 这些规则只与 ES6 有关, 即通常所说的 ES2015
     */
    // 要求箭头函数体使用大括号
    'arrow-body-style': [ 'error', 'as-needed' ],
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': [ 'error', 'as-needed' ],
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': [ 'error' ],
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': [ 'error' ],
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': [ 'error' ],
    // 禁止使用指定的 import 加载的模块
    'no-restricted-imports': [ 'off' ],
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': [ 'error' ],
    // 禁用不必要的构造函数
    'no-useless-constructor': [ 'error' ],
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': [ 'error' ],
    // 要求使用 let 或 const 而不是 var
    'no-var': [ 'error' ],
    // 要求或禁止对象字面量中方法和属性使用简写语法
    'object-shorthand': [ 'error', 'consistent-as-needed' ],
    // 要求回调函数使用箭头函数
    'prefer-arrow-callback': [ 'error' ],
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': [ 'error' ],
    // 优先使用数组和对象解构
    'prefer-destructuring': [ 'error' ],
    // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    'prefer-numeric-literals': [ 'off' ],
    // 要求使用剩余参数而不是 arguments
    'prefer-rest-params': [ 'error' ],
    // 要求使用扩展运算符而非 .apply()
    'prefer-spread': [ 'error' ],
    // 要求使用模板字面量而非字符串连接
    'prefer-template': [ 'error' ],
    // 要求 generator 函数内有 yield
    'require-yield': [ 'error' ],
    // 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': [ 'error' ],
    // 强制模块内的 import 排序
    'sort-imports': [ 'off' ],
    // 要求 symbol 描述
    'symbol-description': [ 'error' ],
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': [ 'error' ],
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': [ 'error' ],
  },
};
