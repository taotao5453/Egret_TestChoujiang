module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class JiangView extends egret.Sprite{
        private itemArr: Array<JiangItem>;
        private currentItemIndex: number = 0;
        
        private linghtSp: egret.Sprite;
        private isRunning: boolean = false;
        
        private startTimeGap: number = 100;//两次抽奖动画初始的时间间隔
        private timeAdd: number = 10;//时间间隔递增量，抽奖动画跑的会越来越慢
        private nextTime: number = 0;//两次抽奖动画时间间隔
        private runNum: number = 20;//跑马次数 - 转动多少下停止
        
		public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.added,this);
		}
		
        private added(e): void {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.added,this);
            //
            var _y: number = 300;
            this.itemArr = [];
            var t_item: JiangItem;
            for(var i: number = 0;i < 6;i++) {
                t_item = new JiangItem;
                t_item.init(i.toString());
                t_item.x = 50 + i * 60;
                t_item.y = _y;
                this.itemArr.push(t_item);
                this.addChild(t_item);
            }

            this.linghtSp = new egret.Sprite;
            this.linghtSp.graphics.lineStyle(5,0xff0000);
            this.linghtSp.graphics.drawRect(0,0,50,50);
            this.linghtSp.graphics.endFill();
            this.addChild(this.linghtSp);
            this.linghtSp.visible = false;
            this.linghtSp.y = _y;
            this.stage.addEventListener(egret.TouchEvent.TOUCH_END,this.startChoujiang,this);
        }
		
        private startChoujiang(e): void { 
            if(this.isRunning){ 
                return;
            }
            this.isRunning = true;
            this.linghtSp.visible = true;
            
            this.nextTime = this.startTimeGap;
            this.currentItemIndex = 0;
            this.runNum = 20 + Math.ceil(Math.random() * 20);//随机抽奖次数
            this.runChoujiang();
        }
        
        private runChoujiang(): void { 
            if(this.currentItemIndex >= this.itemArr.length){ 
                this.currentItemIndex = 0;
            }
            this.linghtSp.x = this.itemArr[this.currentItemIndex].x;
            
            if(this.runNum <= 0){
                console.log("你中的奖品id是" + this.itemArr[this.currentItemIndex].itemId());
                this.isRunning = false;
            } else { 
                this.runNum--;
                this.nextTime += this.timeAdd;
                this.currentItemIndex++;
                egret.setTimeout(this.runChoujiang,this,this.nextTime);
            }
            
        }
	}
}
