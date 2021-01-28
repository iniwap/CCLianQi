// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component } from 'cc';
import { LobbyEvent } from '../../Event/LobbyEvent';
import { Utils } from '../../Utils/Utils';
const { ccclass } = _decorator;

@ccclass('PackageView')
export class PackageView extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
    onEnable(){
        Utils.getGlobalController()?.On(LobbyEvent.EVENT[LobbyEvent.EVENT.UPDATE_PACKAGE],
            this.OnUpdatePackage.bind(this),this);
        this.OnUpdatePackage();// 打开界面时，主动显示
    }

    onDisable(){
        Utils.getGlobalController()?.Off(LobbyEvent.EVENT[LobbyEvent.EVENT.UPDATE_PACKAGE],
            this.OnUpdatePackage.bind(this),this);
    }
    public OnUpdatePackage() : void{

    }
}
