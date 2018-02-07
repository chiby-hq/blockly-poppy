
function getGlobalVariablesStatement(block, addLineReturn) {
  if(addLineReturn=== undefined) {
    addLineReturn = true;
  }
  // taken from blockly/blob/master/generators/python/procedures.js
  var globals = [];
  var workspace = block.workspace;
  var varName;
  var variables = workspace.getAllVariables() || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
      globals.push(Blockly.Python.variableDB_.getName(varName,
          Blockly.Variables.NAME_TYPE));
  }
  var globals = globals.length ? '  global ' + globals.join(', ') + (addLineReturn?'\n':'') : '';
  return globals;
}


