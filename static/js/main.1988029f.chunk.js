(this["webpackJsonpreact-js-typing-game"]=this["webpackJsonpreact-js-typing-game"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t(1),s=t.n(i),o=t(4),r=t.n(o),l=(t(14),t(5)),h=t(6),d=t(2),c=t(8),u=t(7),f=(t(15),["I had never seen a house on fire before, so, one evening when I heard fire engines with loud alarm bells rushing past my house. I quickly ran out and, a few streets away, joined a large crowd of people.","Last month a grand exhibition was held in our city. My friends and I went to see it in evening. Our first impression on entering the grounds was that whole thing looked like a fairyland.","A visit to a historical place is always an exciting experience. It is a fascinating adventure. I had one such experience during the last summer vacations, when I visited Bhopal. With my family, I reached Bhopal by train.","Some people think that the aim of education is merely to give ledge. These people want students to read books, books, books, and do nothing else but add to their knowledge. Others believe that knowledge alone is enough; only that which enables a man to earn his living can be called education.","There is an old saying, 'Health is Wealth'. Health is a state of complete physical, social and mental well being and not merely the absence of disease or infirmity. Health is thus a level of functional efficiency of living beings and a general condition of a persons mind, body and spirit, meaning it is free from illness, injury and pain.","'Global warming' is the observed century-scale rise in the average temperature of Earth's climate system. Rising of temperature of the Earth's atmosphere causes Global Warming. Since, last century temperature is increasing by 0.75 degree centigrade causing greenhouse effect. Human activities have resulted in the increase of global warming.","A natural disaster is a major event resulting from natural processes of the Earth. It causes a great loss of life and property. During such disasters, the number of people who are rendered, trippled and houseless is more than the number of people who loose their lives. Even the economy of the peace which faces a natural disaster, gets effected.","Discipline is an important virtue in one's life. Discipline means complete obedience to certain rules and regulations. Life without discipline is just like a house without a roof. It is absolutely essential for successful life. Discipline is the structural and fundamental unit of a successful person. It is essential for us in home, for soldiers in battlefield, for students in school, for players in playground.","The 'National Anthem of India' is the song 'Jana-gana-mana'. It composed originally in Bengali by Rabindranath Tagore. 'Jana-gana-mana' was adopted in its Hindi version by the Constituent Assembly as the national anthem of India on 24 January 1950.","The 'National Tree of India' is the 'Banyan' Tree. It often refers specifically to the Indian banyan or Ficus benghalensis. It is a fig that starts its life as an epiphyte (a plant growing on another plant).","'Holi' is one of the greatest festival of Hindus. It is a festival of colours. This festival falls on a full moon day in Phalgun Month of Hindu Calender. The story behind the Holi festival is that there was a king named Hiranya kashyap, he had a son, Prahlad, a holy spirit and highly devoted to God but Prahlad's devotion enraged Hiranya kashyap and he planned to kill his own son.","'Guru Purnima' is a famous festival of Hindus. It is celebrated on the full moon day in the month of Ashadh according to Hindu Calendar. Guru Purnima is celebrated in the sacred memory of the great sage Vyasa, the ancient saint who compiled the four Vedas, wrote 18 Puranas, the Mahabharata and the Srimad Bhagavata. The day is also known as 'Vyasa Purnima'. This day is celebrated as a mark of respect to the 'Guru' i.e. a teacher."]);function g(){return f}var p,m=g().length;p=g()[Math.floor(Math.random()*m)];var y=!1,b=function(e){Object(c.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={noOfWords:0,timethen:new Date,errorcount:0,wordList:p.split(" "),wpm:0},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(h.a)(t,[{key:"handleChange",value:function(e){var a=e.target.value;y||(this.setState({timethen:new Date}),y=!y);var t=this.state,n=t.wordList,i=t.noOfWords,s=t.timethen,o=document.getElementById(i),r=n[i];"".concat(r," ").startsWith(a)?(this.handleCorrection(),a.endsWith(" ")||(o.innerHTML="",o.innerHTML='<span style="color:yellow">'.concat(a,'</span><span class="shadow">').concat(r.replace(a,"")," </span>"))):this.handleTooManyErrors();if((i===n.length-1?r:"".concat(r," "))===a)if(e.target.value="",o.innerHTML=o.innerHTML.replace('class="shadow"',""),i===n.length-1)alert("Your WPM is: "+this.state.wpm),window.location.reload();else{var l=new Date,h=n.slice(0,i).reduce((function(e,a){return e+a.length}),0)/4;this.setState({wpm:Math.floor(h/((l-s)/6e4)),noOfWords:i+1})}}},{key:"handleTooManyErrors",value:function(){document.getElementById("inputBox").setAttribute("class","errorclass")}},{key:"handleCorrection",value:function(){document.getElementById("inputBox").removeAttribute("class","errorclass")}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{id:"container",children:[Object(n.jsx)("div",{className:"paragraph",children:this.state.wordList.map((function(a,t){return t!==e.state.wordList.length-1?Object(n.jsxs)("span",{id:t,children:[a," "]},t):Object(n.jsx)("span",{id:t,children:a},t)}))}),Object(n.jsx)("input",{type:"text",autoFocus:"autofocus",id:"inputBox",value:this.state.userInput,onChange:this.handleChange,style:{height:50,fontSize:30,fontWeight:"bold"}}),Object(n.jsxs)("div",{children:["WPM:",this.state.wpm]})]})}}]),t}(s.a.Component),v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,s=a.getLCP,o=a.getTTFB;t(e),n(e),i(e),s(e),o(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.1988029f.chunk.js.map