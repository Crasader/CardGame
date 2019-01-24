/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var loginLayer = cc.Layer.extend({
    sprite:null,
    // bottomDisplayText:null,
    // ls:null,//昵称缓存
    ctor:function () {
        this._super();
        // 设置以及获取用户的昵称缓存
        // ls=cc.sys.localStorage;

        var layer = new cc.Layer();
        this.addChild(layer);

        console.log(layer.getPosition().x, layer.getPosition().y);

        var visibleSize = cc.director.getVisibleSize();
        var visibleOrigin = cc.director.getVisibleOrigin();


        // 背景图
        var sprite = new cc.Sprite( res.trialBj );
        sprite.attr({
            x:visibleOrigin.x + visibleSize.width /2,
            y:visibleOrigin.y + visibleSize.height/ 2,
            // scale:(visibleSize.width / spriteSize.width),
        });

        layer.addChild( sprite );


        cc.loader.load(["res/dl.plist","res/dl.png"], function(err, results) {
            cc.spriteFrameCache.addSpriteFrames("res/dl.plist");
            // 标题
            var title=new cc.Sprite("#zhuce.png");
            title.attr({
                x:visibleOrigin.x+91,
                y:visibleOrigin.y+visibleSize.height-24,
                scale:visibleSize.height/1080,
                anchorX:0,
                anchorY:1,
            });
            layer.addChild(title,10);


            // 昵称背景边框
            var nickNameFrame=new cc.Sprite("#biankuang.png");
            var nickNameFrameSize=nickNameFrame.getContentSize();
            nickNameFrame.attr({
                x:visibleOrigin.x+visibleSize.width/2,
                y:visibleOrigin.y+visibleSize.height/9*6,
            });
            layer.addChild(nickNameFrame,10);

            // 您的昵称
            var titleLable=new cc.Sprite("#nickName.png");
            titleLable.attr({
                x:visibleOrigin.x+visibleSize.width/2-nickNameFrameSize.width/2,
                y:visibleOrigin.y+visibleSize.height/9*6,
                anchorX:1,
                anchorY:0.5,
            });
            layer.addChild(titleLable,1);


            // 获取之前的缓存昵称
            // var r=ls.getItem("nickname");
            // 昵称输入框
            // if(r!=undefined){
            //     var textField = new ccui.TextField(r, "Marker Felt", 36);
            // }else{
            //     var textField = new ccui.TextField("您的昵称", "Marker Felt", 36);
            // }
            var nickNameInfo = new ccui.TextField("您的昵称", "Marker Felt", 36);
            // textField.setMaxLengthEnabled(true);
            // textField.setMaxLength(8);
            nickNameInfo.setContentSize(nickNameFrameSize);
            // textField.setPlaceHolderColor(cc.color(104,99,128));
            // textField.setColor(cc.color(255,255,255,0.2));
            nickNameInfo.attr({
                x:visibleSize.width/2-nickNameFrameSize.width/2+40,
                y:visibleOrigin.y+visibleSize.height/9*6,
                anchorX:0,
                anchorY:0.6
            });
            layer.addChild(nickNameInfo,1);

            // 密码背景边框
            var nickNameFrame=new cc.Sprite("#biankuang.png");
            var nickNameFrameSize=nickNameFrame.getContentSize();
            nickNameFrame.attr({
                x:visibleOrigin.x+visibleSize.width/2,
                y:visibleOrigin.y+visibleSize.height/9*5,
            });
            layer.addChild(nickNameFrame,10);
            // 您的密码
            var titleLable=new cc.Sprite("#nindemima.png");
            titleLable.attr({
                x:visibleOrigin.x+visibleSize.width/2-nickNameFrameSize.width/2,
                y:visibleOrigin.y+visibleSize.height/9*5,
                anchorX:1,
                anchorY:0.5,
            });
            layer.addChild(titleLable,1);


            // 获取之前的缓存昵称
            // var r=ls.getItem("nickname");
            // 昵称输入框
            // if(r!=undefined){
            //     var textField = new ccui.TextField(r, "Marker Felt", 36);
            // }else{
            //     var textField = new ccui.TextField("您的昵称", "Marker Felt", 36);
            // }
            var passwordInfo= new ccui.TextField();
            passwordInfo.setPasswordEnabled(true);
            passwordInfo.setPasswordStyleText("*");
            passwordInfo.setTouchEnabled(true);
            passwordInfo.fontName = "Marker Felt";
            passwordInfo.fontSize = 36;
            passwordInfo.placeHolder = "您的密码（密码不得超过10位数）          ";
            passwordInfo.setMaxLengthEnabled(true);
            passwordInfo.setMaxLength(10);
            passwordInfo.setContentSize(nickNameFrameSize);
            passwordInfo.setPlaceHolderColor(cc.color(104,99,128));
            console.log(nickNameFrameSize);
            console.log(passwordInfo.getContentSize());
            passwordInfo.attr({
                x:visibleSize.width/2-nickNameFrameSize.width/2+40,
                y:visibleOrigin.y+visibleSize.height/9*5,
                anchorX:0,
                anchorY:0.6
            });
            layer.addChild(passwordInfo,1);


            // 确认密码背景边框
            var nickNameFrame=new cc.Sprite("#biankuang.png");
            var nickNameFrameSize=nickNameFrame.getContentSize();
            nickNameFrame.attr({
                x:visibleOrigin.x+visibleSize.width/2,
                y:visibleOrigin.y+visibleSize.height/9*4,
            });
            layer.addChild(nickNameFrame,10);
            // 确认您的密码
            var titleLable=new cc.Sprite("#querenmima.png");
            titleLable.attr({
                x:visibleOrigin.x+visibleSize.width/2-nickNameFrameSize.width/2,
                y:visibleOrigin.y+visibleSize.height/9*4,
                anchorX:1,
                anchorY:0.5,
            });
            layer.addChild(titleLable,1);


            // 获取之前的缓存昵称
            // var r=ls.getItem("nickname");
            // 昵称输入框
            // if(r!=undefined){
            //     var textField = new ccui.TextField(r, "Marker Felt", 36);
            // }else{
            //     var textField = new ccui.TextField("您的昵称", "Marker Felt", 36);
            // }
            var confirmInfo= new ccui.TextField();
            confirmInfo.setPasswordEnabled(true);
            confirmInfo.setPasswordStyleText("*");
            confirmInfo.setTouchEnabled(true);
            confirmInfo.fontName = "Marker Felt";
            confirmInfo.fontSize = 36;
            confirmInfo.placeHolder = "确认密码（密码不得超过10位数）          ";
            confirmInfo.setMaxLengthEnabled(true);
            confirmInfo.setMaxLength(10);
            confirmInfo.setContentSize(nickNameFrameSize);
            confirmInfo.setPlaceHolderColor(cc.color(104,99,128));
            console.log(nickNameFrameSize);
            console.log(confirmInfo.getContentSize());
            confirmInfo.attr({
                x:visibleSize.width/2-nickNameFrameSize.width/2+40,
                y:visibleOrigin.y+visibleSize.height/9*4,
                anchorX:0,
                anchorY:0.6
            });
            layer.addChild(confirmInfo,1);

            // 或者
            var maybe=new cc.Sprite("#huozhe.png");
            maybe.attr({
                x:visibleOrigin.x+visibleSize.width/2-nickNameFrameSize.width/2,
                y:visibleOrigin.y+visibleSize.height/9*2.8,
                anchorX:1,
                anchorY:0.5,
            });
            layer.addChild(maybe,1);
            // 微信
            var weixin=new cc.MenuItemImage(
                "#weixin.png",
                "#weixin.png",
                function(){

                },this
            );
            weixin.attr({
                x:visibleSize.width/2-nickNameFrameSize.width/2+25,
                y:visibleOrigin.y+visibleSize.height/9*2.8,
                anchorX:0
            });

            var mu=new cc.Menu(weixin);
            mu.x=0;
            mu.y=0;
            layer.addChild(mu,100);



            // 开始游戏
            var startBtn=new cc.MenuItemImage(
                "#anniu.png",
                "#anniu.png",
                function(){
                    // 点击开始游戏时 获取用户昵称
                    // console.log(r);
                    // var name=textField.getString();
                    // if(r!=undefined){
                    //     console.log("!!!!!!");
                    //     name=r;
                    // }
                    // console.log(name);
                    // ls.setItem("nickname",name);
                    // console.log(ls.getItem("nickname"));
                    // cc.director.runScene( new mainGameScene( ) );

                    // 获取用户输入昵称
                    var userName=nickNameInfo.getString();
                    //获取用户输入密码
                    var userPwd=passwordInfo.getString();
                    //获取用户输入确认密码
                    var confirmPwd=confirmInfo.getString();
                    console.log(userName,userPwd,confirmPwd);
                   if(confirmPwd!=userPwd){
                       var errorImg=new cc.Sprite("res/pwdError.png");
                       errorImg.attr({
                           x:visibleSize.width/2-nickNameFrameSize.width/2+40+nickNameFrameSize.width,
                           y:visibleOrigin.y+visibleSize.height/9*4,
                           anchorX:0,
                           anchorY:0.6
                       });
                       errorImg.setTag(1);
                       layer.addChild(errorImg,10);
                   }else{
                       $.ajax({
                           type: "post",
                           url: "http://192.168.5.100:8080/gameUser/userRegister.do",
                           dataType: "jsonp",
                           // 参数:userName（用户名称）, userPwd（密码:试玩无需密码）, type（类型：0:试玩；1：账号；2：微信）
                           data: {"userName":userName,"userPwd":userPwd,"type":1}, //以键/值对的形式
                           async: true,
                           success: function (data) {
                               console.log(data);
                               var userId=data.msg;
                               if(userId=="账号已存在"){
                                   var errorImg=new cc.Sprite("res/error.png");
                                   errorImg.attr({
                                       x:visibleOrigin.x+visibleSize.width/2,
                                       y:visibleOrigin.y+visibleSize.height/2
                                   });
                                   errorImg.setTag(1);
                                   layer.addChild(errorImg,10);
                                   var text = new ccui.Text("账号已存在", "Microsoft Yahei", 35);
                                   text.attr({
                                       x:visibleOrigin.x+visibleSize.width/2,
                                       y:visibleOrigin.y+visibleSize.height/2
                                   });
                                   text.setTag(2);
                                   layer.addChild(text,10);

                                   setTimeout(function(){
                                       layer.removeChildByTag(1);
                                       layer.removeChildByTag(2);
                                   },1000)
                               }else{
                                   cc.director.runScene( new HelloWorldScene( ) );
                               }
                           },
                           error:function(error){
                               console.log( "error: ", error);
                           }
                       })
                   }
                    // this.addTouchEventListener(this.touchEvent,this);

                }

            );

            startBtn.attr({
                x:visibleOrigin.x+visibleSize.width-190,
                y:visibleOrigin.y+300,
                anchorX:1,
                anchorY:1,
            });

            // 返回
            var goback=new cc.MenuItemImage(
                "#fanhui.png",
                "#fanhui.png",
                function(){
                    cc.director.runScene( new registerScene( ) );
                },this
            );
            goback.attr({
                x:visibleOrigin.x+visibleSize.width-159,
                y:visibleOrigin.y+visibleSize.height-102,
                scale:visibleSize.height/1080,
            });

            var mu=new cc.Menu(startBtn,goback);
            mu.x=0;
            mu.y=0;
            layer.addChild(mu,100);
        });
        return true;
    },
    menuItemgobackGameCallback:function(){
        cc.director.runScene( new HelloWorldScene( ) );
    },


});
var loginScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new loginLayer();
        this.addChild(layer);
    },
    onExit:function(){
        this._super();
        cc.spriteFrameCache.removeSpriteFrames();
    }
});

