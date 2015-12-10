/// <reference path="../typings/open/open.d.ts" />`

import * as vscode from 'vscode'; 
import open = require('open');

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "vscode-PSStackoverflow" is now active!'); 

	var disposable = vscode.commands.registerCommand('PowerShell.SearchSO', () => {
		
		const editor = vscode.window.activeTextEditor;        
        var text = editor.document.getText(editor.selection);
						 
		var url = 'http://stackoverflow.com/search?q=powershell]+'+text;		 
		 
		open(url);
	});
	
	context.subscriptions.push(disposable);
}