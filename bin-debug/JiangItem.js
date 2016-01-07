var game;
(function (game) {
    /**
     *
     * @author
     *
     */
    var JiangItem = (function (_super) {
        __extends(JiangItem, _super);
        function JiangItem() {
            _super.call(this);
            this.graphics.beginFill(0x00ff00);
            this.graphics.drawRect(0, 0, 50, 50);
            this.graphics.endFill();
            this.txt = new egret.TextField;
            this.addChild(this.txt);
        }
        var d = __define,c=JiangItem;p=c.prototype;
        p.init = function (_label) {
            this.id = _label;
            this.txt.text = _label;
        };
        p.itemId = function () {
            return this.id;
        };
        return JiangItem;
    })(egret.Sprite);
    game.JiangItem = JiangItem;
    egret.registerClass(JiangItem,"game.JiangItem");
})(game || (game = {}));
