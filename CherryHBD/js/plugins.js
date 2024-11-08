// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"CustomLogo","status":true,"description":"Shows RPG Maker and user logos at the start of the game.","parameters":{"logo1":"","logo1ImageName":"MadeWithMv","logo1Skippable":"true","logo1Coordinate":"","logo1X":"408","logo1Y":"312","logo1Origin":"0.5","logo1Time":"","logo1FadeinFrames":"12","logo1FadeoutFrames":"12","logo1DurationFrames":"120","logo2":"","logo2ImageName":"","logo2Skippable":"true","logo2Coordinate":"","logo2X":"408","logo2Y":"312","logo2Origin":"0.5","logo2Time":"","logo2FadeinFrames":"12","logo2FadeoutFrames":"12","logo2DurationFrames":"120","logo3":"","logo3ImageName":"","logo3Skippable":"true","logo3Coordinate":"","logo3X":"408","logo3Y":"312","logo3Origin":"0.5","logo3Time":"","logo3FadeinFrames":"12","logo3FadeoutFrames":"12","logo3DurationFrames":"120","allowTotalSkip":"true"}},
{"name":"YEP_BuffsStatesCore","status":true,"description":"v1.16 Alter the basic mechanics behind buffs and states\r\nthat aren't adjustable within the RPG Maker editor.","parameters":{"---Turn Indicator---":"","Show Turns":"true","Font Size":"16","Turn Alignment":"right","Turn Buffer X":"-3","Turn Buffer Y":"-6","State Color":"0","Buff Color":"24","Debuff Color":"2","---Enemy Icons---":"","Show Enemy Icons":"true","Enemy Buff Turn":"true","Enemy State Turn":"true","Enemy State Counter":"true","---Buff Settings---":"","Default Limit":"4","Maximum Limit":"8","Buff Formula":"this._buffs[paramId] * 0.25 + 1.0","Show Buff Rate":"false","---State Settings---":"","Reapply Rules":"1","Show Enemy Turns":"true","---Counter Settings---":"","Counter Font Size":"16","Counter Alignment":"center","Counter Buffer X":"0","Counter Buffer Y":"8","Counter Color":"0"}},
{"name":"YEP_SkillCore","status":true,"description":"v1.13 Skills are now given more functions and the ability\r\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"FTKR_DisplayEnemyParameters","status":true,"description":"v1.1.1 戦闘画面にエネミーのパラメータを表示するプラグイン","parameters":{"Display Enemy Name":"false","Display Enemy HP":"{\"label\":\"true\",\"value\":\"true\",\"gauge\":\"true\"}","Display Enemy MP":"{\"label\":\"false\",\"value\":\"false\",\"gauge\":\"false\"}","Display Enemy TP":"{\"label\":\"false\",\"value\":\"false\",\"gauge\":\"false\"}","Display Width":"144","Display Line Height":"36","Display Font Size":"28","Display Offset X":"0","Display Offset Y":"40"}},
{"name":"RS_InputDialog","status":false,"description":"This plugin allows you to display Text Edit Box on the screen. <RS_InputDialog>","parameters":{"textBox Width":"488","textBox Height":"36","variable ID":"13","debug":"false","Text Hint":"Name your car...","direction":"ltr","Max Length":"255","Style":"","CSS":"\"\"","Font Family":"GameFont","Button Name":"","Ok":"OK","Cancel":"Cancel (DON'T PRESS THIS)","Position":"center"}},
{"name":"Tyruswoo_FollowerControl","status":true,"description":"MV v3.1.1 Allows control of party follower movement, balloon icons, animations, and transfers.","parameters":{"Max Party Members":"9"}},
{"name":"SRD_NameInputUpgrade","status":true,"description":"Improves upon the \"Name Input\" screen for your RPG Maker MV game.","parameters":{"Keyboard Mode?":"true","Display Message":"Name your car.","Display Message 2":"Press ENTER when ready.","Help Window Width":"400","Help Window Height":"this.fittingHeight(2)","== Display Options ==":"","Show Face":"true","Background Image":"","Scale Background?":"true","Name Opacity":"255","Keyboard Opacity":"255","Help Opacity":"255","Underline Color":"0","Text Color":"0","Name Display X":"0","Name Display Y":"100","Help Window X":"0","Help Window Y":"40","= Custom Characters =":"","LATIN 1 Row 1":"A,B,C,D,E,a,b,c,d,e","LATIN 1 Row 2":"F,G,H,I,J,f,g,h,i,j","LATIN 1 Row 3":"K,L,M,N,O,k,l,m,n,o","LATIN 1 Row 4":"P,Q,R,S,T,p,q,r,s,t","LATIN 1 Row 5":"U,V,W,X,Y,u,v,w,x,y","LATIN 1 Row 6":"Z,[,],^,_,z,{,},|,~","LATIN 1 Row 7":"0,1,2,3,4,!,#,$,%,&","LATIN 1 Row 8":"5,6,7,8,9,(,),*,+,-","LATIN 1 Row 9":"/,=,?,<,>,:,;, ,Page,OK","LATIN 2 Row 1":"Á,É,Í,Ó,Ú,á,é,í,ó,ú","LATIN 2 Row 2":"À,È,Ì,Ò,Ù,à,è,ì,ò,ù","LATIN 2 Row 3":"Â,Ê,Î,Ô,Û,â,ê,î,ô,û","LATIN 2 Row 4":"Ä,Ë,Ï,Ö,Ü,ä,ë,ï,ö,ü","LATIN 2 Row 5":"Ā,Ē,Ī,Ō,Ū,ā,ē,ī,ō,ū","LATIN 2 Row 6":"Ã,Å,Æ,Ç,Ð,ã,å,æ,ç,ð","LATIN 2 Row 7":"Ñ,Õ,Ø,Š,Ŵ,ñ,õ,ø,š,ŵ","LATIN 2 Row 8":"Ý,Ŷ,Ÿ,Ž,Þ,ý,ÿ,ŷ,ž,þ","LATIN 2 Row 9":"Ĳ,Œ,ĳ,œ,ß,«,»,,Page,OK"}},
{"name":"GALV_VisibilityRange","status":true,"description":"(v.1.2) Use an image to display a visibility range image around the player's position","parameters":{"Zoom Variable":"18","Opacity Variable":"16","Z Position":"10"}},
{"name":"YEP_X_SkillCooldowns","status":true,"description":"v1.12 (Requires YEP_SkillCore.js) Cooldowns can be applied\r\nto skills to prevent them from being used continuously.","parameters":{"---Cooldown---":"","Cooldown Format":"%1CD","Cooldown Font Size":"20","Cooldown Text Color":"6","Cooldown Icon":"75","Cooldown After Battle":"-10","Cooldown Steps":"5","Cooldown Bypass":"1 2 3 4 5 6 7","Cooldown Bypass List":"[]","---Warmup---":"","Warmup Format":"%1WU","Warmup Font Size":"20","Warmup Text Color":"4","Warmup Icon":"75","---Battle Core---":"","Time Based":"false","Turn Time":"100"}},
{"name":"YEP_PartySystem","status":true,"description":"v1.09 Replaces the default 'Formation' command with a new\nmenu for players to easily change party formations.","parameters":{"---General---":"","Max Battle Members":"4","Show Battle Command":"true","Enable Battle Command":"true","Battle Cooldown":"1","Maximum Followers":"9","EXP Distribution":"false","---Menu---":"","Help Window":"false","Text Alignment":"center","Change Command":"Change","Remove Command":"Remove","Revert Command":"Revert","Finish Command":"Finish","---Selection---":"","Empty Text":"- Empty -","Actor Face":"true","Actor Sprite":"true","---List---":"","Remove Text":"Remove","Remove Icon":"16","Sprite Y Buffer":"16","In Party Text Color":"6","---Locking---":"","Lock First Actor":"false","Locked Icon":"195","Required Icon":"205","---Detail Window---":"","Enable Detail Window":"true","List Width":"300","Actor Parameters":"Parameters","Actor Equipment":"Equipment"}},
{"name":"DreamX_FollowerOptions","status":true,"description":"v1.09","parameters":{"Battle Members Only":"false","Automatic Follower Refresh":"true"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_X_ExtMesPack1","status":true,"description":"v1.10 (Requires YEP_MessageCore.js) Letter Sounds, NameBox\nBackground Types, Choice Control, and more!","parameters":{"---Letter Sounds---":"","Enable Sound":"true","Sound Name":"Cursor1","Sound Volume":"50","Sound Pitch":"100","Pitch Variance":"10","Sound Pan":"0","Pan Variance":"10","Sound Interval":"2","Reset Sounds":"false","---Message Anchor---":"","Default X":"center","Default Y":"bottom","Auto Row Full Face":"false","---Message Choices---":"","Max Rows":"6","Choice 1 Show Switch":"0","Choice 2 Show Switch":"0","Choice 3 Show Switch":"0","Choice 4 Show Switch":"0","Choice 5 Show Switch":"0","Choice 6 Show Switch":"0","Choice 7 Show Switch":"0","Choice 8 Show Switch":"0","Choice 9 Show Switch":"0","Choice 10 Show Switch":"0","Choice 11 Show Switch":"0","Choice 12 Show Switch":"0","Choice 13 Show Switch":"0","Choice 14 Show Switch":"0","Choice 15 Show Switch":"0","Choice 16 Show Switch":"0","Choice 17 Show Switch":"0","Choice 18 Show Switch":"0","Choice 19 Show Switch":"0","Choice 20 Show Switch":"0","Choice 1 On Switch":"0","Choice 2 On Switch":"0","Choice 3 On Switch":"0","Choice 4 On Switch":"0","Choice 5 On Switch":"0","Choice 6 On Switch":"0","Choice 7 On Switch":"0","Choice 8 On Switch":"0","Choice 9 On Switch":"0","Choice 10 On Switch":"0","Choice 11 On Switch":"0","Choice 12 On Switch":"0","Choice 13 On Switch":"0","Choice 14 On Switch":"0","Choice 15 On Switch":"0","Choice 16 On Switch":"0","Choice 17 On Switch":"0","Choice 18 On Switch":"0","Choice 19 On Switch":"0","Choice 20 On Switch":"0"}}
];
