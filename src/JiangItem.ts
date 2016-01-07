module game {
	/**
	 *
	 * @author 
	 *
	 */
	export class JiangItem extends egret.Sprite{
        private txt: egret.TextField;
        
        private id: string;
        
		public constructor() {
            super();
            this.graphics.beginFill(0x00ff00);
            this.graphics.drawRect(0,0,50,50);
            this.graphics.endFill();
            this.txt = new egret.TextField;
            this.addChild(this.txt);
		}
		
        public init(_label:string): void { 
            this.id = _label;
            this.txt.text = _label;
        }
        
        public itemId(): string { 
            return this.id;
        }
	}
}
