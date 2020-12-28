// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node } from 'cc';
import { LobbyEvent } from '../Event/LobbyEvent';
import { Utils } from '../Utils/Utils';
const { ccclass, property } = _decorator;

@ccclass('SignInLuckDrawView')
export class SignInLuckDrawView extends Component {
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
        let e : string = LobbyEvent.EVENT[LobbyEvent.EVENT.UPDATE_SIGNIN];
        Utils.getGlobalController()?.On(e,this.OnUpdateSignIn.bind(this));

        let e2 : string = LobbyEvent.EVENT[LobbyEvent.EVENT.UPDATE_LUCKDRAW];
        Utils.getGlobalController()?.On(e2,this.OnUpdateLuckDraw.bind(this));

        //this.OnUpdateSignIn();// 打开界面时，主动显示
    }

    onDisable(){
        let e : string = LobbyEvent.EVENT[LobbyEvent.EVENT.UPDATE_SIGNIN];
        Utils.getGlobalController()?.Off(e,this.OnUpdateSignIn.bind(this));

        let e2 : string = LobbyEvent.EVENT[LobbyEvent.EVENT.UPDATE_LUCKDRAW];
        Utils.getGlobalController()?.Off(e2,this.OnUpdateLuckDraw.bind(this));
    }
    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }

    public OnUpdateSignIn(arg0 = undefined,arg1 = undefined){
        //Lobby.Lobby.storeList
    }
    public OnUpdateLuckDraw(arg0 = undefined,arg1 = undefined){
        //Lobby.Lobby.storeList
    }
}