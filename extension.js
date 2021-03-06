// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "calculator-on-command-palet" is now active!');
	let disposable = vscode.commands.registerCommand('calculator-on-command-palet.calculate',async function () {
	const expression = await vscode.window.showInputBox()
	let result = ''
	try{
	 result = eval(expression)
	}catch(error){
       result = 'please enter a valid expression'
	}
    vscode.window.showInformationMessage(String(result));
	});

//
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
