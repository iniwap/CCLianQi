import { ProtocolDefine } from "../Define/ProtocolDefine";
import { nLobby } from "../Model/Lobby";

export namespace GameEvent{
    export enum EVENT{
		// 因为不希望在界面体现网络通信相关代码，所以需要传出这两个事件
		GAME_EVENT_BEGIN = 30000,
		PLACE_CHESS,//尝试落子，即点击空白棋格落子
		CHANGE_CHESS_DIR,//改变棋子方向
		MOVE_CHESS,//尝试移动棋子
		PLAY,//落子
		AI_PLAY,//AI落子
		MOVE,//移动
		PASS,//过，回合结束
		ABANDON,//投降
		DRAW,//请和
		ACTION_FAIL,//操作失败，响应
		CLOCK,
		//AI_END,//AI

		SHOW_DIR_CHESS,//方向盘棋子
		SHOW_OP_TIPS,//显示下拉框提示
		SHOW_GAME_START,//对局开始
		SHOW_FLAG,//
		SHOW_DRAW,// 显示谁请求和棋
		SHOW_DRAW_RESULT,//显示和棋请求结果//谁谁不同意或者同意之类

		SHOW_PLAY,//别人落子

		SHOW_MOVE,//别人落子
		SHOW_PASS,//结束回合响应

		SHOW_ABANDON,
		SHOW_ABANDON_PASS,//由于服务器自动pass，所以客户端需要处理此消息
		SHOW_TURN,//显示谁出
		SHOW_RESULT,//结算
		SHOW_LIANQI,// 重连时候的棋盘数据

		//游戏界面之间的消息定义

		//lianqi panel
		TO_LQP_SWITCH_HINT,//棋子信息提示

		//to gameview
		TO_GAMEVEIW_UPDATE_SCORE,
    };
    export interface IUpdateClock{
        local : number,
        leftTime : number,
        step : ProtocolDefine.nGame.nLianQi.eGameStepType,
	}
	export interface IShowTurn{
		local : number;
		isPassTurn : boolean;
		round : number;
		isTimeOut : boolean;
		banDirList : Array<number>;
	}
	export interface IPlayOrMove{
		isAI : boolean;
		isMove : boolean;
		local : number;
		chessList : Array<ProtocolDefine.nGame.nLianQi.Chess>
	}
	export interface IGameResult{
		seat : number;
		isOwner : boolean;//只有房间模式有效
		head : string;
		name : string;
		area : number;//领地
		kill : number;//消灭
		score : number;//得分
		multi : number;//倍率
		hasAbandon : boolean;//是否投降了
	}
	export interface IShowGameResult{
		roomType : ProtocolDefine.nRoom.eCreateRoomType;//用于是否显示房主标志,只有房间模式显示
		level : nLobby.ePlazaLevelType;
		baseScore : number;
		poolGold : number;//实际的奖池积分
		gameResult : Array<IGameResult>;//根据积分 顺序
	}
	export interface IPlay{
		x : number;
		y : number;
		direction : ProtocolDefine.nGame.nLianQi.eLianQiDirectionType;
	};
	export interface IMove{
		moveList : Array<ProtocolDefine.nGame.nLianQi.Chess>
	};
	export interface IShowOpTips{
		autoHide : boolean,
		content : string,
		show : boolean,//  只有autohide = true时有效s
	};
};
