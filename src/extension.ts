'use strict';
import * as vscode from 'vscode';

/**
 * Registers commands for zooming the editor font. The built-in zoom applies
 * to the entire window. The font size changes are reflected in settings.json, 
 * and are thus persistent.
 */
export function activate(context: vscode.ExtensionContext) {

    console.log('Editor Zoom activated');

    let disposableIn = vscode.commands.registerCommand('extension.editorZoomIn', () => {        
        let fontSize: number = vscode.workspace.getConfiguration('').get('editor.fontSize');
        vscode.workspace.getConfiguration('').update('editor.fontSize', fontSize + 1, true)
    });

    let disposableOut = vscode.commands.registerCommand('extension.editorZoomOut', () => {
        let fontSize: number = vscode.workspace.getConfiguration('').get('editor.fontSize');
        vscode.workspace.getConfiguration('').update('editor.fontSize', fontSize > 4 ? fontSize - 1 : fontSize, true)
    });

    context.subscriptions.push(disposableIn);
    context.subscriptions.push(disposableOut);    
}

export function deactivate() {
    console.log('Editor Zoom deactivated');
}