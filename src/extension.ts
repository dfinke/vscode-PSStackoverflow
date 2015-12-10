import * as vscode from 'vscode'; 

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vscode-PSStackoverflow" is now active!'); 

	var disposable = vscode.commands.registerCommand('PowerShell.SearchSO', () => {
		vscode.window.showInformationMessage('PowerShell.SearchSO!');
	});
	
	context.subscriptions.push(disposable);
}