module.exports = function(babel) {
    let t = babel.types;
    return {
      visitor: {
        VariableDeclarator(path, state) {
          // VariableDeclarator 是要找的变量声明
          if (path.node.id.name == "c") {
           // 方式一：直接修改name
           path.node.id.name = 'b';
           // 方式二：把id是a的ast换成b的ast
           // path.node.id = t.Identifier("b"); 
          }
        }
      }
    };
  };