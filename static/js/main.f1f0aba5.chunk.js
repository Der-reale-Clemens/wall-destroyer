(this["webpackJsonpwall-destroyer"]=this["webpackJsonpwall-destroyer"]||[]).push([[0],{53:function(e,t,A){},62:function(e,t,A){"use strict";A.r(t);var r=A(0),n=A.n(r),c=A(11),a=A.n(c),s=(A(53),A(87)),i=A(93),o=A(90),g=A(89),l=A(85),j=A(6),d=A(3),b=A(1),h=[{cost:1e12,bricks:25,knowledge:1,text:Object(b.jsxs)(b.Fragment,{children:["Destroy the wall and move on to a bigger one.",Object(b.jsx)("br",{}),"Gives ",Object(b.jsx)("b",{children:"25"})," bricks.",Object(b.jsx)("br",{}),"Awards ",Object(b.jsx)("b",{children:"250,000,000,000"})," cash.",Object(b.jsx)("br",{}),"Worth ",Object(b.jsx)("b",{children:"1"})," cosmic knowledge."]})},{cost:1e14,bricks:100,knowledge:1,text:Object(b.jsxs)(b.Fragment,{children:["Destroy the big 2nd wall and move on to a bigger one.",Object(b.jsx)("br",{}),"Gives ",Object(b.jsx)("b",{children:"100"})," bricks.",Object(b.jsx)("br",{}),"Awards ",Object(b.jsx)("b",{children:"25,000,000,000,000"})," cash.",Object(b.jsx)("br",{}),"Worth ",Object(b.jsx)("b",{children:"1"})," cosmic knowledge."]})}],u=Object(d.d)({name:"game",initialState:{money:0,damage:0,bricks:11,wall:0,knowledge:0,upgrades:[]},reducers:{increaseMoney:function(e,t){var A=t.payload;e.damage+=A,e.money+=A},decreaseMoney:function(e,t){var A=t.payload;e.money-=A},decreaseDamage:function(e,t){var A=t.payload;e.damage-=A},increaseKnowledge:function(e,t){var A=t.payload;e.knowledge+=A},increaseBricks:function(e,t){var A=t.payload;e.bricks+=A},decreaseBricks:function(e,t){var A=t.payload;e.bricks-=A},tryDestroyWall:function(e){var t=h[e.wall].cost;e.damage>=t&&(e.money+=t/4,e.knowledge+=h[e.wall].knowledge,e.bricks+=h[e.wall].bricks,e.wall++)},addUpgrade:function(e,t){var A=t.payload;e.upgrades.push(A)}}}),B=u.reducer,C=u.actions,E=C.increaseMoney,O=C.decreaseMoney,x=C.decreaseBricks,m=C.tryDestroyWall,p=C.addUpgrade,w=A(36),Q=A(88),f=A(92),I=A(82),U=A(83),R=A(84),k=A(16),D=A(40),y=A(17),Y=Object(D.a)({reducerPath:"pokemonApi",baseQuery:Object(y.d)({baseUrl:"https://pokeapi.co/api/v2/"}),endpoints:function(e){return{getPokemonByName:e.query({query:function(e){return"pokemon/".concat(e)}})}}}),G=(Y.useGetPokemonByNameQuery,Object(d.d)({name:"buildings",initialState:{puncher:0,clubber:0,swordsman:0,gunshooter:0,grenademan:0,wreckingBall:0,bulldozer:0,airstrikeCaller:0},reducers:{increaseBuilding:function(e,t){e[t.payload]+=1}}})),M=G.reducer,v=G.actions.increaseBuilding,F=Object(d.d)({name:"system",initialState:{lastUpdate:0},reducers:{setLastUpdate:function(e,t){var A=t.payload;e.lastUpdate=A}}}),N=F.reducer,K=F.actions.setLastUpdate,V=Object(d.a)({reducer:Object(k.a)({game:B,buildings:M,system:N},Y.reducerPath,Y.reducer),middleware:function(e){return e().concat(Y.middleware)}}),J=A(23),z=function(e,t){return t*Math.pow(1.1,e)},T=function(e){return P(e)},P=function(e){if(Math.abs(e)<1e9)return Math.round(e).toString().replace(/(.)(?=(\d{3})+$)/g,"$1,");var t=e.toExponential().replace("+","").split("e"),A=Object(J.a)(t,2),r=A[0],n=A[1];return(r=parseFloat(r).toPrecision(3))+"e"+n},H={puncher:{cost:20,power:.1,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gkIAwUVPqgzlgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAEsklEQVRo3u1avUvkQBR/ya2V13ki24pEq8VOjpCFrYRjwUawtrHQRlubu2tstZH7Dw5ObAQ5sF1IL1tpOLuTsITt7XLF+ebevsxnNmsi58Dykk0myfvN733Mm/HyPIf/vfnw1t5AeAPhDYR/rdW0D4p6Ud5ut7X3XHy/8Kp8p9eU6BD1ohwAoLPeEf8FqwEk98mEBACIBzEAACwuLYp7z0/PvVcNQtSL8s56B7JRJhTjivNGgehv9eH66ro0ILWDQOlPR5YCkY2yQr/dvV1xjAD0t/ri3AWIVpMAyEYZpGkK+B8qTxWWNao8Hr+q6JCmKaRpKgA4/nwMYTeE3b1dIZO7BADAKPG4v9WHg6OD/FUwAQBge2d74txG4WAtKEgAgM1Pm3Dz80acN54JUS/Kt3e2IblPnPvKAHm1yRINf7b3U8mBmJubK0SKxoJAHaItEDxfUAFRJkzWxgQaDk1AyADQAYGO0dY5vnie4JoYqQDKRhmE3bDQjzpFNAsTK2phAgVAp6gOgMWlRSUjeP7QKCagL1BlhiomYBveDsUxfY6sP2eEjg1+HQDwNFjHBFR+eDuEdrsNnfVOIaM0MaJRyRICYMuEYDWAyx+XwFNr2p8Cyp+T3CUQD2Lj1LtVlzOUMYE3nvnJ+uN5NsoEILIJVyOYoAJAZ9Oc0iYGyXyCTeI0c8fIfYGrU0Rf4NI/WAusw+PMHeM0ANiYQoEJawHEg9gJgBcxBxUAskzQxRRof6wyxYMYwm4oADw4OshtgJiZOegqRrZMOPl6ArTois+h+QKfjvPptU2VqTYmmACgTEjTdEKqirGyekNt5kBZYAJABgRVgJbbbJ2iCwAzcYx83cCUIaqYgM5NZ1K20+oXBQEBQNpWYQoqIG2YYFt1rsQx4sKJbOVI5xRVjTpFXXQx5QkzD5GoOFee23AZJtAsD/vz5+AzuGnFg9i5bunMBN2oVxUVMFPkPkHFCGoqNE+wZUOrauWRCa4J0oRTex5J6l+4pCwMu+FU0aHlQnmVg6qSCddX12K+QIGwKcmVAUAZHaJelKOnxyIGV4pLChauKJnygwJLNKmyTUmu7DqEL1NeprhJ8o8ukx/g4mtnvVPoz89NVWen6KCivGnkTYAMb4fgWlXmo00V5+/QTb5c27uNjxtflleWwff8giLz7+e1nfE6ldjf93x4+PUAyyvL4v7xeCw+fOHDQoEhT09PEKwGMB6PJ97hez6kaSq+UfW85P5vOe3x96PT4ou3f7if65KRaapIOIq2Gy9MCzF89sh9EUC5rTze/uH+TObSVQGhAkS2hafsXianuYM21WXXuA/h5XHTe2Q2TyX+j3nFNJu5tEwwLZS6rCjzMGcCwjggjnVEayYUMrhnBWUjYXNdlUC5gqcC4Pz03JsWgAII9MM49eh1TlHTdSrDbgjxIHYCIlgLxC+5T5w3ZlmZg2nZu+x1k9T5GtnqchXUl4Jw9u0sN3lfm+s6OY29z0rxyphQhcK00Q2as1a8FBNsFS4DBipf9Z5la8doisOqeC1zhq6hLx7EIsmpC4AJJtiMeNXUr1NxKRNsRlyVJ7gq3yQACkywKoGVZEHddl8qOlSheNOVx/YHk4khyVHi9SEAAAAASUVORK5CYII=",type:"Meele",description:"Punches the wall for you."},clubber:{cost:100,power:1,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAACKUlEQVR4Xu2Xu00EQRBELzNywMElBAxEAngYePgkgIuERwpY5IGJs6hOKlQqde9HWFNDSa2d3bvbox+vh+V0+s96bq8uFpa/Fh82/vF8t3y/P55rKhhsHvVyf30uwlg+X/NBoMGnm8vfxhUGjYgGgcbQLCCwcRrg55EQ1IDKBDUCx0gb1AJCcBBqRNxY0AK3QX/zbkPc/qAQaMAaCDQfB6IywfcGB8HzGBDa/F9AREDQkdC9gUAchK6Ht8EhaOME4U0rCP7VGNoGhYCmOhBqhNsQORIOYQ+IKBsIwhvnuTeuYzE0BKSzoQLBawqEx2lA6DU3glbEgehgVCB0PPD5YWHwhycItcJrC0SkFVtGKBCuI0CoFQ6gAuFGRIBAuvFQKFOBWLMifjQQB1FZ4XDiQXRW8DU3AgAUBMu/Y4ioBZUVDqMDgeK/4dPAoB3ViETA0EYdhtqgaxxphMPw7xgibgVhVFboeKgNESAQh+FWTAMCqWAcBTE8BMZB+GgoAF4niK+3hywQhMG12+BWoKIgMDoSDkIhaEWNBaPjoWOxBkOfMP1+w2YNRDcifJ6IA1HB6IBMYYXvDw5kSiscCMfDYURacRRGpBVIB0OBVDDirEA6GFtmxMKoQDgAnsfCUCvcCG1eYeh+EQeDVmBdjUZlRdzmqVZwvRdGpBUK4+iI+P2GDmHstSIWBLIHBq7raPg9YqIj0gFBRUNA2Hz1fEEj/DOx8RFh+fumzg/sbsl4jNp65gAAAABJRU5ErkJggg==",type:"Meele",description:"Not to be confused with the other kind of clubbing."},swordsman:{cost:1100,power:2.5,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAAB8UlEQVR4Xu2Vwc2CUBCE7cq7N69U4Y0GqMDEEqyBg3cLoAeLsALMkIzZf/LgfyQe2F0m2RievBfmY3Y5HJLqfr+PLP0vvGj8/X7nA0Dzr9drHIYhFwSah3FUqhSoeQJAEsJDoPnn8zlVSgBqXgGEhlAC0Pf9tyXCp6AEwM6DHUDkNlgagGkA0PwOYAewA5gM209gSgBcCw8AZtYA4P16jlvBzOPxKAKgeQWgZ7hWDQCYTwMg5QBUAEvxTw9A97uXAkClAcBILwFINQBRqQegvn2Nf3oAut+9/gMQuv+hGgCh+78WQOj+twDmvgDhzEMlAFjDrxsAbduOKF2vUQ2Azfc/zF+v1+kB14KoAYAEbL7/CQG1BkINgE2/fSsLoTYNCoADsJQA3btJwXTXdVUQGGsCQNG8WwBUTRrUfCgAkEKAQQuiFgCTYs92pTkQt9utCAC/FoJr85TOBrZFGgDUXBpoXgHws6jnuFYpDRaEBeC+/5dUAqFtEdY8dTweJ9MWhLaF7gklADifzyNBlOaD7gklAmiaZipcMw3hQcCsArhcLt80hE8EjJ5Opz8AcI11e9/cjHALgw9vARACU6F7IAXhFgaNoNgCFoDeryqBcNci1gQhlOK/JJ0TBOISAkGsAWBFGK7bgSBcGfiV3L7BH+kDhe3NPu15WsUAAAAASUVORK5CYII=",type:"Meele",description:"Some question the use of swords on a brick wall. Those guys are lame."},gunshooter:{cost:16e3,power:30,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAADtElEQVR4Xu1YP4sTURy8r+NH0P46SSUIgpDKToOkDEQwFpY2kiaNjeXBpbTxIwhWFhZ+CK0jszDLOPzevpdkN7sbd2B4m/d3Zn5v73J3czNhwoQx4cPbF4cUfe5VAkZ/fPtSGf7+dXv48+u+Ij4ffv8cZxguOFdV9N99/liN3396UwUBMhwEwTB87SCh1eNnGGSlIyMeAoNgCKl1vSMlSkMgaVCvua/X+U6dNxioUe9n1f02aHUHb9ARCW0KwRmNjeo9j8ziOao2x1hxXnuOcZwhROt7RyQmFYJTx/ynO8d0TirEXpEyG4lVo15tjun7zzFFFGDvSIXgZH+q2j5/UCabAKHHVJz9UbW5l34v4Ni5WC6XB9D7W4FXzs16xX2uG031nwqa3+/33YZwTMXRdlFtmnVut9tuAwBOqXjUdwrU7G63q8wqddzXtoo+Kw6jMA/O5/P6mdQwfJ9W4dW+RMXdONr1el236GPLMHSP1kO5RMXduBpGq88agK6PXhU/8yx0VXE35ea9Xa1WdSi+1m+Fn90rIDZVcRqkGTIKIDLuLTiYAFQ0hatxNaNUQ01znz9+VNHXYa5ruShcdGRcBUeM9uDY7cMHtfn3r59WxPMgAnDRWk2vVMTZbFbTx2gefPXstjavnxkE1ru2TpETXsLS9bwBMA0ylHcvn/wTBOg6W4cbXywWRSaUvkfUD2JvjuFZg9BANAiG4brPRiSaIrV1symDuX4+54KIqEG08hsiEufGm0JQg2omMk6TGkBJELkbcdI3RxWoItWsPqtwitU5kXGfj5bkuiiQVBARNYijvji5cRWQMh6Z9DB0ru9H4jeL7xHNTQWRuxH4zVEUhBtVAWogMk5h2q+C2aKf3xV0PRjpiObpfqkgmm5EYxgUmAuCjIyzn2MqOBVESgfPZetnRUEooxtR9HqogMgkxWw2m6Rxb5W6JhWEztEzlVznIURhIAAPo/H1oDgK1uq5iZxx3YdsOiu1N/s414tTEoQG4q+HaqrBA3mACqG4SFSJcYcb9PN0fTTvmCCi1yMbhNJNMiT/7MJL4ef5OKFnHnsj+LcGg8i+FgAPjAx7tZqEtw3VUnoj9G8NPmMN9mm8DQAP5AF9mI5QeiNIDYKvNNajzd4GYCjGHSU3QqnjIMPg/zt8/9EgF4QbZ7/eHt4K33tUiIIA1bib9iBGHwKgQfgPcr8l3g7tNT8LapzXPgpCA7mqAAgG4TcjCuQqAyAYQET9OeHrrg5q9r8yPmHChAkTJnSDv59E4elJK8IpAAAAAElFTkSuQmCC",type:"Ranged",description:"Shoots his gun."},grenademan:{cost:4e5,power:500,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAAFDElEQVR4Xu2YvY4cRRRG/VzOySBwuBICIfEAfgEkpya0SBApEBA4ISBEiACRIsfOLDk3GcHAHfmzzpy5VV09rNiVmZI+3Z76/07f6u7dBw+u5Vqu5Vqu5VruZbm5uTlY7nPviw3sNeJxe8ffefHGbcK/XR5+8PBApX7Uf6tsrXfrxQvaUIl93Fb68OOPDp88/vSop9992QJx8dxs43pd+60Vm/zhmydnhmgqAFhPwzUu1x7r9QxgBLjG3RqEMkh1G40Ryn1YZ8Mcb4gx0s1JGGwjwF0gbDZ69eLHw5+vfjtqtNnU+27QcMYRCO9iB5B9DMIQPM57KdnzSSmzvzx/evjj56+PKuOJhhJxwzTKO+JNUDTHesLq+rOuW+vRZ49O2tLO7GhLIFTsQCRShmJAvCO+w0zztNuM+xuE7zz7dVnlPZaGEEYZ4RjVMeGRKXkxq+6WDW2BSz3TP/L8nQ5/vTlT1Z9BiAKBmoGwCMaAViDt1eHNy3X9Y772fwYhIKjA2JsZK5pB4h663yUbS53jVCMINGsobN/KkEvARIRRv2ne6ow7dqr9TSHQRNXxbBrKFhjPt6KYztwrMGjYEBypFgKVhf20zdM7ryOP68AQxAqQDkLqE0fqjCd6n2cAePbzprACocznfRwQNO1xbjcQg+kgEIBjB8Drl9i3frcQEkeb9aQlQrCxtK8epazRQUi9AXjOKK/S3DC3l4YQauFnX3z+Tjbna0+cOdLmj5yoA5NxHYQY95iYzHcEv0Hcd9d3Qpn/9dsnRxlIB8Xy4qVAyKa58WqPYaqbK4D4XBrdbT8Io1rrDEJARIFAGC9++uoEyAjKCI43WOLmR+N4jnne95g+UWXB29hCYCY8f/b4BEAXV6DMZBOlGQD3tcFAcrR2ZcIKiIql179/fwYlYFah2Gj3u1Nn3LHTCYT6wc9kZsIeEAQyArMCJObrOtHGR+oAMBIqcqB/O5T5LiNmQDoVCMpQDIQZUG2XwKBxms7cmX8IgZkQ7QExAsLsGEFxJhBC6h070TRfl25rIfhIRARhGB0AxxEMQlmBYADsS/H16e+R4XdCQEQzIKOssHHHTjGfGNMdBMPgfvmh1BrPw/Dt63H6doj5VSAjGAbgaBCBkDVHECj/DZOPrjPjIxmCF4jprj5teYBeCsQgeByyHq995reMVz9Gqs0EG+TE/NxlfSkwarMEMoMyApHj4PNvlQnuwWZpuqujWgiJSX0DYer53MVAlyVbIHwcOgg2vqIOBOd5B6CDYBAzIF2GBEbiDEjVJRO2joPBzDQynva6biFYBEBxcxH7sZ5jRkAIIRslBNavguAekrWuP4EQEDFjACMQHRC2sd5tFQmEmZDNZo7UbUWu5ddm6qffCSnpvJoRjhmf67y3/SSPSY6dQXB7Z5xH1Mf0+DDc+k5w4QQGQSAdiGw+4hdcHqr+z08M1nUHwX0iPqwN2m+DE61AYOHEqxmR6E1ns/wfINtLIwjU6EOJD8Tu7XAxBJYs1sEwAILogPCPmw4ar8tEjAQC50o7+41irZV57G9X4QYMpAOxBaRrt7HSzPhIHYh/DcDFZraAdOIcHYS9xq0AyDz2cKulg7EKwkB8XSYMZ1X/iXkX3tk9QHK3M44wLgFxJ+a7YiBbIDoIbh9FGr8X5rvi7OhAzCDYOHWvjXfF2REQ9XsGwbr3d3210EjusiEQxntjfFRo0JnwXhvvCmH878zfRfkbxaKzGPXGbs0AAAAASUVORK5CYII=",type:"Ranged",description:"A man with grenades. I am a master of descriptions."},wreckingBall:{cost:8e6,power:7e3,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAAC/UlEQVR4Xu3WMW4CMRAFUK7EAWip6CnpET0FF6DmIhyR5K/0o6+v8dprkbWJM9JoEsCbnbdjk83mO7bb7Wu/379QmZfLZap4f4ggAvJ4PE5JhOEgohx2Itg0Ee73+zgQjsDXhkSIpoHbw9f8yXAIRRhyIvybYsjzQZOvDQkRHZRDnRFESP03OcxEKMTQZ4ROgW6D4SAQnAptWLeHAtWGY0fpa1YNIqTOiNqp0GvpttPtp7U5iEL4GbEUwhsvAfDaDEOfhN9ECQTXpBovBdDq97Fa8CmWnBN8n2sUIIKIGs0lPtcFBJMIqJyK3wTQbAahDfLGHcQbfzcAsPlzEwiEToLeBAGYKYAlEGzYq2ZTCNw4b2AOIIKoBWA6SBMIbdoBIoilAAqRSv9sU4gIIQWwBMIn4Pl8TukQrM0QcgAOcTgcXrfb7XU+n6sAUhDMZhCOMAfAPJ1OPxCp1EZTEArWBKEEQCEIgJtdChEBRJOAv7MqRAphDoC/EwJbo2RLOIJj6LouEKJJUAQ+MUwCJ8NTAXLToOtWnYQUQAShCArBLZGahDkMBbher9NEIVeFmEOIJsEhCJCahBwEEusfj8cPgH7rNEdwgAhCATgJpROBJ4/mCYBr4T1CdD0JnqUAaBLNsWltXs+Ej5kEzwgCjeiIs2GmIzG5DtfpAsEBIgg2jsbYAKo2nGuciet8zCSkDkevbMybjdInqOtJcACF0MmYq964Vk5CVwgOsdvtpqbxs6c3tLTqVlgNAZGDUABUPnkHYHpjSyrPklUBEDkEh+Ak8PcoowZzVc+CLhFSEN58lFHDUeVhynWrIiByELgprbhZQOjrJemNs/oWWx0AkUOIQGohPPUbhq81QUCUQOAGWbklaiG0+S4AECUIDqIQelimQLxxB8C6pgiIUght1CG8zqVepwsARimEg0QAqeqQXQEwaiFqa3cAjKUQTG8wV7sFYNRCeHrjzO4BGLjRd2EweU3/W93HOzA+tnkPNlIKop/3a/2J0AZT6Wv+4w3xBfKotDtz7nQZAAAAAElFTkSuQmCC",type:"Heavy duty",description:"Something actually meant for destroying walls."},bulldozer:{cost:12e7,power:8e4,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAAE60lEQVR4Xu2avWpUURSFU/oUprE1EOwsrCNYpLARUgmKNiJWBtJZSMQiYCtYpbH0AXwEH8c2sob5hjVr9rk/M2Oca7JhcX7uOeee9d197syE7O3dxm3cRl+8O75z9TeU99m58M3++PTo6te3x6P0++ezlTK1szDY2Nf3D2bmXTKT9a6yJQezcxC0oY/P784AIBmqgCScTPWhyj3888gNjtHJyclCp6eng3R4eLh7EBTa2NHR0WyDKrskw5SS5gzVZCAMMeYAhsYkIGCqz1xCuLi4mNUvLy9n5TyO51rEJCBkJpiRFTMO4ezsbAFhHjlnVp8EhCIT0swsEgKZoJiXCWA6EBqZ4LEwk5mgcBg2floQikzwWDLDpwPjVBcMtbu08xCKTEgAZSa46O/SFCEsAQCCf09Ig0OUX7rWUXrYOBoQlgCov4Lg5sb+jsg6BvPatfwIcwgOA+P6+OMjkDGM+/L2YOV3Rf7GGFLKlM/p01Z/iHmKeSb4W9/f/A6KeQIBjC4obthNU+e616sSbQ3C9w8PFwtKGFT4eReIhJBzhwoz2b+u0tPokBEtRHphUJlAFqAKAvOpy1yrxHhCyIypxHyfu7VswAQLYlCmAcHRqCBojo6Ag2iJe/C3Coei9YbKIWzl3dCCUAEAgiTjzFVJm7JLVTZoTb5M9ZWam2ukr1HhTzEhOAA/DpIb4sWYIFpAqmzQmryU03SWeaw2zoYuCIQDAQLzhgCoYOSTdAh9MMiErYFoQegT4/X3SQdRAalUZUNCaMFICBsfC0ywKCb5QpRiY8zRfJUJIUEkkJaJCkLCcMOssVE2sBlJm/On3RKGgADIKisSBPfhnpkNPIAKAiWZ4B66ssE9oqUB1carzWeJoZZa6/pcyswGILRgdEHwTxzkvznKbGHDXU8z5VlQXcNcnxiX2ZAQEkZCePP03tK6HI0sda0JYYjSsPfltcwaLyXMqg9DmQ0VBErmIIx2SeMcxhKE89cHV5IusEmvV+nVkoNIJYgcr7ZDkNx83itNVsoj4vUlCGnCN5hAsq0F6RsKy9elzZPNY+FKgynmtUrWKDMhb9Ylnlg+UYfEDbMtvXiyX67Juq40OcZwVfqaqg+GwAsT5fVKmUkOijGCkUCGGEVD2w6AdpkJvrl1TOfc7Jeq44N4MpWZIfI51XzWdzBqL0HwlxZm0gRKSOev7i+UYxHX0nwel9z8usoskFhffU0I1cvK4XhatwSU7Pe+PB7U08g2VWWCjoS+W6xA8JeT93mWpCpAgpH9gGAdh6t29Y8hup6G1hWgm0eC1HajtBNQwkkoyMf4OF/Hr+V/xXg7r7X6uqR7OIAmBHXyxByMQ8g+N+tlQklVmZDZkEY1Ps119bu4L+0VCLnBSg7K+xJGgsGkG/Y2wNL4pqUbl/zp01a5AqEyOkZV9mAy+xyUrpMJXRlRlT4+94PxPAYOYwEhYbghoKwDByCqY9oheSZ8frk/M6PrLSCV/H5u0o1T+tj0vhJpxk2tC8WzpA8EZUu+rj9hjkECYGz6XCsqUw6lD4yDqI6EzCcIlbmOG3R5n49PH1uL3Jib9HqVOZ4NmQnI1/UsSOOuazHeFwmlpcwGz4TKOOYrCDthfGwAIUFg3N8HbtwBTNJ4hr6zOwiOSh+AyRvPqI4G2VAZ/6/MZ2DQIdwI41XcWOO7FH8AuNovDqBiX+cAAAAASUVORK5CYII=",type:"Heavy duty",description:"Rams the wall. So good."},airstrikeCaller:{cost:5e9,power:25e5,img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAA3CAYAAABTjCeZAAADzElEQVR4Xu2XQU/CQBSE/T+cvHBDE08cDMaTBzl5gRshMSYknvkd/tOaaTJkGPa1u6VCa5jkBWy3tfM57229u7vppptu6lGz2ax6fn4+KV8HRWubrvE1TWuvJhj7+Pio6/Pz81D+0Cisnc/n1dvbW124ZrPZ1OVrWXpPvbc/x1UFY6+vr0kQKB7HOhQBEAJB0LSfS91zkBDwoA6C32GIoDQJCoAQ9vv9AYRCcBiDhACDCoFF4zzflgRAiEAMPgkE4CBSENqSEEFQEIOF4GlQ47lJ+Pr6OoIQgRg0BDwkH9wB5CahCcSgkwBjCsJToFByktDWEoODADkIhxCBcACsKAmoQQKAaFZB4LsnIQeCJ8FBDBoCAfDTAZQmIWqJwUNQEKlWyIXQ1BIXhXB/f1+h/HgkBxElQUHQFEzje5QEVhuAyWRSofTY09NThdJjqXUHw1ovLy/1g/nxJjAKIpUEbwlCUACeBG6pOQCm02n18PBQG0TB/Pv7e7Ver+vvPL5YLOo6AgFjj4+PtfEIgp6X330iGIwAsPAzTCkAT4KCaAMAKQSadAg8zzUnELAARpsg8Lz87qRSreClxqMkEILfPyWFQJMpCAoq2RJYEEHguaOLAnkSosoBUQpBQTRBYNsc3USNMvp4sN1u1xkCro9A5AAogQB5GpognACgNPoOoRRAX0n4+fnJBqFpgGlEnhAcRAgBiiD4ukjeChGIHADb7bYIAkQQDuH7+/sAoREA1AcEfV9w8yUgWCUQIG6PKQitAKA+IDAJ3OO1UgBwfLVanVRpO6giCL4uqXMgpFLgaXAoBIDoa7EdAKkLiKtCYApgTpMQtQKM8hPlaeB8uBgEAlAIJSCahqL/9bWWy+WRaRrnZ2kSCMB3B+4Qvv5IDqE0DX1ujwriXAhFaegTgiehKwC+NJWAuBoEDsU2AF1BdIVQPBcUAkGUQOC2iGoCUQJAf+4C4awkKARcmAuBxv0dIRdEtDuUJAHy3SFrKFLeEjkAoNRQbNsdYNI/PQldZgLkELJSoIJpLT+f0pBmAgXTWn6+d/U9E7xKZsLV9BczQQF0ScLF1fdMUACjgvCXM2FU7dDXTPD3hNEk4TYTpB1SLeHzwGeBzwRvhVG0A0QQCuDclhgVAMjnQgkAB6EzYRStQBECE6BzIQcEymfCaOYBFW2T+PR5kJoLqZkwuiRABMEURC3hKdA0MBGjBADpVkkYBOIQHIAnYnStoPLZ0NYSNK9JGN2ukFLb/xKpJHhLjBoABRD+JpkDAub/BQAVYaAcAIvG/535lNTsUIz/Ag7aqgVKOZalAAAAAElFTkSuQmCC",type:"Heavy duty",description:"You know, the guy that calls airstrikes."}},X=function(e){var t=e.text,A=e.img,r=e.name,n=Object(j.e)((function(e){return e.buildings[r]})),c=Object(j.d)(),a=z(n,H[r].cost);return Object(b.jsxs)("div",{children:[Object(b.jsxs)(f.a,{button:!0,style:{border:"1px"},onClick:function(){return function(e){var t=V.getState();return z(t.buildings[e],H[e].cost),function(t){t(v(e))}}(r)(c)},children:[Object(b.jsx)(I.a,{children:Object(b.jsx)("img",{src:A,alt:r})}),Object(b.jsx)(U.a,{primary:t,secondary:"".concat(T(a)," cash")}),n]}),Object(b.jsx)(R.a,{})]})},S=A(86),q=A(8),W=A(91),L=function(e){var t=e.children,A=e.text,r=Object(q.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",border:"1px solid #dadde9",maxWidth:200,minWidth:200}}}))(W.a);return Object(b.jsx)(r,{title:A,arrow:!0,children:Object(b.jsx)("div",{children:t})})},Z=function(){var e=Object(j.e)((function(e){return e.game.wall})),t=Object(j.d)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(_,{cost:h[e].cost}),Object(b.jsx)($,{cost:h[e].cost}),Object(b.jsx)("br",{}),Object(b.jsx)(L,{text:h[e].text,children:Object(b.jsx)(l.a,{style:{marginTop:"10px",marginBottom:"10px"},variant:"contained",onClick:function(){return t(m())},children:"Destroy Wall"})}),Object(b.jsx)(R.a,{})]})},$=function(e){var t=e.cost,A=Object(j.e)((function(e){return e.game.damage}))>t?"green":"red";return Object(b.jsxs)("label",{style:{color:A},children:["Needs: ",T(t)," Damage"]})},_=function(e){var t=e.cost,A=Object(j.e)((function(e){return e.game})).damage,r=Math.min(A/t*100,100);return Object(b.jsx)(S.a,{variant:"determinate",value:r})},ee=Object(s.a)((function(e){return Object(i.a)({root:{width:"100%",maxWidth:360}})})),te=function(){var e=ee(),t=function(e){var t=(e.charAt(0).toUpperCase()+e.substr(1)).replaceAll(/([A-Z])/g," $1").trim();return Object(b.jsx)(L,{text:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w.a,{color:"inherit",children:t}),H[e].type+" Building",Object(b.jsx)("br",{}),"Does "," ",Object(b.jsx)("b",{children:H[e].power})," ","base damage.",Object(b.jsx)("br",{}),Object(b.jsx)("em",{children:H[e].description})]}),children:Object(b.jsx)(X,{text:t,img:H[e].img,name:e})})};return Object(b.jsx)("div",{className:e.root,children:Object(b.jsxs)(Q.a,{component:"nav",children:[Object(b.jsx)(Z,{}),t("puncher"),t("clubber"),t("swordsman"),t("gunshooter"),t("grenademan"),t("wreckingBall"),t("bulldozer"),t("airstrikeCaller")]})})},Ae=Object(s.a)((function(e){return Object(i.a)({paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}})})),re=function(){var e=Object(j.e)((function(e){return e.game})),t=e.money,A=e.bricks,r=Ae();return Object(b.jsxs)(g.a,{className:r.paper,children:[Object(b.jsx)("label",{children:"Resources"}),Object(b.jsx)(R.a,{}),Object(b.jsxs)("label",{children:["Money: ",T(t)]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Bricks: ",A]})]})},ne=Object(s.a)((function(e){return Object(i.a)({paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}})})),ce=function(){var e=ne();return Object(b.jsxs)(g.a,{className:e.paper,children:["Achievements",Object(b.jsx)(R.a,{})]})},ae="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADl0lEQVR4Xu2YXU/TUBjH+RZ+Cj6BQYQRRMEAgktIRpwBAplageFgiEQTBnG6oIkEgcGQN0HBtyiJUYiIMxE1IRiuiN4YTbjwMxx9ujzt6XPaUVy7tYSLH2w9pz3/X0/PS5fXMTfJDgJ58Cf6cdXVaESooVvQFSmXAq4irciR/HxXcCjiNA5FnMahiNPIqUhVdSG7316kgdYxi+0i0UvFcsDBy2pQn1f9DsRDJRnL2CpC7zYy1KZ+3lnqYH+S99j3V5GMZLIiEu/1CjJUBFifDv+3jG0ifCAMCkxfrzEUARwlki4ofYygnK/z801UKfPXFQvXNsJSEc+pYxoJIDnaqCvzNHbeUHYu2rTvXrFMhArw0KAIlCW6y4Ty7RcRNnPtdPZFCssKlNBTA41s63G3RuTrg4AQFkWm/wWmjxc8eiPBHPQIBn4UqVXCbC6oM9CT/mq2NSsJMlAWv1IiiGBZTkTwzuqFQd4N+TWh4dhosNhZIunCUDYmWuTy9bEL8vd4Z6lwfs5E9MYBhlnoq2EvYz6WCJcJUohjRKZ6ynXDgAQvtzEblntgtMOjKwN1+HWGtmVExiJXm1KbQmBp4KwiA8Cx8VDqseFlgO2lXjZ/0y/IUEIN5hbFjERCDR52t1UVAfjpFI/xclQIgOma7oB5aLt6ZCRCG+SBFf39sHrHeRkjIeDLjHoDciKCQWgIHrMywHr8onIebPtp2xRLRGiwyT6fIEHrUqgIsBg9pzmXtm+5CKwLfJhfK7fl/1QCwRkLJwIjGX4nPChlQQQwCvR2rF1T79mtevZ6pE0Z3DDVUgEePC/c5BHat0wE6GkulRvitx9UBlgeluR6G3NdyrHdtUEZWhdZGVdvgrf2uNC2pSIANoaru5EM1Pn2PH0PALtrd/b9Dm+JSNFJdRsP4E6XCkFZMiEJwXl+LEfYp6k2zfVa6vdeFC0RASoqtb9R4ZshLwPHYWzQ8DwfEq3yJGC2JxDLRBC/z3hjiNDwn2eCbHW4mT28UaWRgB/w6PWNsFwEqTijBuJZiPo1Eov9tfLLFS8A+LzpBzfFNhEgJqk7XDpekN+rMbY536XUC0p1wnXMYKsIf4fpeOGh+yt6HTPYKgJgOPqaywM7Aax39ESBcA0z2C7SGagUeoWKAFinL7D3VKuH7SLAfkQibhDhF0oqkpxIbWEcO0YAMyJ8r9DzzZAVEcDM45VJr+wp4iYMRdyIIOJmFJGDwF+1bgdGWay7XQAAAABJRU5ErkJggg==",se={paddedGloves:{isBuyable:function(){return V.getState().game.money>=100},buy:function(e){return e(O(100))},text:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w.a,{color:"inherit",children:"Padded Gloves"}),"Hand punches do ",Object(b.jsx)("b",{children:"1"})," more damage. Punchers do ",Object(b.jsx)("b",{children:"50%"})," more damage.",Object(b.jsx)("br",{}),Object(b.jsx)("em",{children:"A little padding."}),Object(b.jsx)("br",{}),"Costs ",Object(b.jsx)("b",{children:"100"})," Cash"]}),img:ae},magicMining:{isBuyable:function(){return V.getState().game.bricks>=10},buy:function(e){return e(x(1))},text:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w.a,{color:"inherit",children:"Magic Mining"}),"We need bricks to trade with the underground wizards for their secrets. Bricks are their most valuable resource.",Object(b.jsx)("br",{}),"Costs ",Object(b.jsx)("b",{children:"1"})," Brick"]}),img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACOklEQVR4Xu3TvU0DQRCGYQf0QBWOCEgpgzaQSEgogCqIKIOQNhCVGJ3FWuN3v9l/n24tgg+4/ZmZ52x2zx/vh2vIbvnx9vU5dc4gFM4SCXl8fZkqScjtfj9F/iFbyzDIzd0hWlszQyALYnrIFhBLuiABsSbE69cMCQUPD5fH2BfmvbzNQ+zgqV6bhtgeuT5DIV4TL7nzq0NaMPa8d8f2yJ3thozCcM/u5z6NJcUQVYSQWgwHze2rMyFVEFVIYWpAuUFz+yHVEBbzIKUYe1+ds7VTtZogLBhhnjSIzXmX51iX+10QVZR7R4jBpAbgXbdmps4QiNov/VTsvfB3VMvU8+o0Q1g02u+ERAhAWKsLwsIRRHy97ADRHd5lUGsMRBQ+7dtPQ5yz9c7uiKFzdcZAVEM0tc92+GOt1ODM6hC19rceIXgmFfEymiDFGD6b9V7EEoUYA+Fvb0ieLU0Boh9iG6UQJfsqAnF5CP9mOiA5xHjIqBi0h+BzFURiRkMKvk5qLQthsQiC5iE/99/HcD2ZCgTXqyA20QDApCDROu6rQdnf7hVD2CCChGEwrMLwmXfVoLan2q+G2GZcK4Hwmff4xtWL64LIwZkERKF4zw7NhLMeYgwkABL/8K0Qey6FGAMJwxRCIky4qwKEhXCtGHLCsJloXAVRQa0cog0iGnkhoBeiUgyxbyDVTIWAVHK1CbBr1ZAzjGhWO7xEhNoMz7RA5KfiFF/CQVPhXRkHUwWZKS5kxkSQmXOCXEN+AYZWuAVM5ZjAAAAAAElFTkSuQmCC"}},ie=function(e){var t=e.name;return Object(b.jsx)(L,{text:se[t].text,children:Object(b.jsx)(oe,{name:t})})},oe=function(e){var t=e.name,A=(Object(j.e)((function(e){return e.system.lastUpdate})),Object(j.d)()),r=se[t],n=r.isBuyable()?{filter:"grayscale(0%)"}:{filter:"grayscale(100%)"};return Object(b.jsx)("img",{onClick:function(){return function(e,t){se[e].isBuyable()&&(se[e].buy(t),t(p(e)))}(t,A)},style:n,src:r.img,alt:"Magic Mining"})},ge=function(){return Object(b.jsx)(L,{text:Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(w.a,{color:"inherit",children:"Gloves"}),"Hand punches do ",Object(b.jsx)("b",{children:"1"})," more damage. Punchers do ",Object(b.jsx)("b",{children:"50%"})," more damage.",Object(b.jsx)("br",{}),Object(b.jsx)("em",{children:"A little padding."}),Object(b.jsx)("br",{}),"Costs ",Object(b.jsx)("b",{children:100})," Cash"]}),children:Object(b.jsx)("img",{style:{filter:"grayscale(0%)"},src:ae})})},le=Object(s.a)((function(e){return Object(i.a)({paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}})})),je=function(){var e=le();return Object(b.jsxs)(g.a,{className:e.paper,children:["Upgrades:",Object(b.jsx)(R.a,{style:{marginBottom:"5px"}}),Object(b.jsx)(ie,{name:"paddedGloves"}),Object(b.jsx)(R.a,{style:{marginBottom:"5px"}}),Object(b.jsx)(ie,{name:"magicMining"}),Object(b.jsx)(ge,{})]})},de=A.p+"static/media/destroyWall.2891c68d.png",be=Object(s.a)((function(e){return Object(i.a)({root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}})}));var he=function(){var e=Object(j.d)(),t=be();return Object(r.useEffect)((function(){var t=setInterval((function(){var t=function(e){var t=V.getState(),A=(new Date).getTime(),r=A-t.system.lastUpdate;e(K(A));var n,c=0;for(var a in H)c+=(n=a,t.buildings[n]*H[n].power*(r/1e3));return c}(e);e(E(t))}),100);return e(K((new Date).getTime())),function(){return clearInterval(t)}}),[]),Object(b.jsx)("div",{className:t.root,children:Object(b.jsxs)(o.a,{container:!0,spacing:2,children:[Object(b.jsx)(o.a,{item:!0,xs:3,children:Object(b.jsx)(g.a,{className:t.paper,children:Object(b.jsx)(te,{})})}),Object(b.jsx)(o.a,{item:!0,xs:5,children:Object(b.jsxs)(o.a,{container:!0,spacing:1,children:[Object(b.jsx)(o.a,{item:!0,xs:6,children:Object(b.jsxs)(g.a,{className:t.paper,children:[Object(b.jsx)("img",{src:de}),Object(b.jsx)(l.a,{variant:"contained",onClick:function(){return e(E(10))},children:"Punch Wall"})]})}),Object(b.jsx)(o.a,{item:!0,xs:6,children:Object(b.jsx)(re,{})}),Object(b.jsx)(o.a,{item:!0,xs:12,children:Object(b.jsx)(ce,{})})]})}),Object(b.jsx)(o.a,{item:!0,xs:4,children:Object(b.jsx)(je,{})})]})})},ue=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,94)).then((function(t){var A=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;A(e),r(e),n(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(j.a,{store:V,children:Object(b.jsx)(he,{})})}),document.getElementById("root")),ue()}},[[62,1,2]]]);
//# sourceMappingURL=main.f1f0aba5.chunk.js.map