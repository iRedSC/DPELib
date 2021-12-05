"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[334],{7428:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return k}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},p=void 0,m={unversionedId:"guides/terminology",id:"guides/terminology",isDocsHomePage:!1,title:"terminology",description:"Terminology",source:"@site/docs/guides/terminology.md",sourceDirName:"guides",slug:"/guides/terminology",permalink:"/docs/guides/terminology",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/terminology.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"context",permalink:"/docs/guides/functions/context"}},s=[{value:"Terminology",id:"terminology",children:[{value:"General Terms",id:"general-terms",children:[],level:4},{value:"Scoreboard Terms",id:"scoreboard-terms",children:[],level:4}],level:3},{value:"Data Pack Terms",id:"data-pack-terms",children:[],level:3}],c={toc:s};function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"terminology"},"Terminology"),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"general-terms"},"General Terms"),(0,o.kt)("a",{name:"target"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Target"))," - An entity/player that can be defined using a ",(0,o.kt)("strong",{parentName:"p"},"selector")," (",(0,o.kt)("inlineCode",{parentName:"p"},"@a"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@e[type=marker]"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@s"),", etc.)"),(0,o.kt)("a",{name:"executor"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Executor"))," - The entity running a particular command."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you run a command in chat, ",(0,o.kt)("em",{parentName:"p"},"you")," are the ",(0,o.kt)("strong",{parentName:"p"},"executor"),".")),(0,o.kt)("a",{name:"location"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Location"))," - A ",(0,o.kt)("strong",{parentName:"p"},"position"),", ",(0,o.kt)("strong",{parentName:"p"},"rotation")," and/or ",(0,o.kt)("strong",{parentName:"p"},"dimension"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Position"))," - World position coordinates (",(0,o.kt)("inlineCode",{parentName:"li"},"12 5 2"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"~ ~ ~"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Rotation"))," - Pitch and Yaw"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Dimension"))," - ",(0,o.kt)("inlineCode",{parentName:"li"},"minecraft:overworld"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"minecraft:the_end")," etc.",(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"If you run a command in chat, the command will run at your ",(0,o.kt)("strong",{parentName:"p"},"location"),".")))),(0,o.kt)("a",{name:"context"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Context"))," - An entity and/or location (position ",(0,o.kt)("strong",{parentName:"p"},"and")," rotation) a command/function is executed from."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"execute as")," will change the ",(0,o.kt)("strong",{parentName:"p"},"executor")," context; if multiple entities are selected, it will create an individuel ","[executor]"," context per entity.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"execute at")," will change ",(0,o.kt)("em",{parentName:"p"},"every part")," of the ",(0,o.kt)("strong",{parentName:"p"},"location")," context (position, rotation, dimension etc.); if multiple entities are selected, it will create an individuel context per entity.")),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"scoreboard-terms"},"Scoreboard Terms"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Scoreboard"))," - Scoreboard objective name (",(0,o.kt)("inlineCode",{parentName:"p"},"Mana"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"carrot_click"),", etc.)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Criteria"))," - Scoreboard objective criteria (",(0,o.kt)("inlineCode",{parentName:"p"},"dummy"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"deathCount"),", etc.)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"First you make a scoreboard with ",(0,o.kt)("inlineCode",{parentName:"p"},"scoreboard objectives add <scoreboard_name> <criteria>"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Score Holder"))," - An entity, player, or ",(0,o.kt)("strong",{parentName:"p"},"variable")," that is able to hold a scoreboard value.\nScore holders can be an ",(0,o.kt)("strong",{parentName:"p"},"entity selector"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Variable"))," - A fake player, or score holder that contains special characters which cannot be used as a valid Minecraft account."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"$timer .timer #timer are all valid variables")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"data-pack-terms"},"Data Pack Terms"),(0,o.kt)("p",null,"Functions and function tags are ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"executed")),"."),(0,o.kt)("p",null,"Predicates are ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"checked")),"."),(0,o.kt)("p",null,"Block tags/entity tags/item tags are ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"referenced")),"."),(0,o.kt)("p",null,"Loot tables are ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"called")),"."),(0,o.kt)("p",null,"Item modifiers are ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"applied")),"."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Updated ",(0,o.kt)("inlineCode",{parentName:"p"},"12/3/2021")," ",(0,o.kt)("br",null),"\nFor MC ",(0,o.kt)("inlineCode",{parentName:"p"},"1.17-1.18")," ",(0,o.kt)("br",null),"\nGuide from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iRedSC/DPELib"},"DPELib")," by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iRedSC"},"iRedSC")))}k.isMDXComponent=!0}}]);