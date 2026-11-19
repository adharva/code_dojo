
/*
 * CHALLENGE DATA
 * Each challenge stores its title, difficulty, category, function details,
 * description, starter code and test cases. For JavaScript challenges the
 * first two test cases are shown to the learner; the remaining cases stay hidden.
 */
const R=(id,t,d,tag,desc,k,st,ck)=>[id,t,d,tag,'','',desc,[],k,st,ck];
const PYS='# write your code here\n',HS='<!DOCTYPE html>\n<html>\n<head>\n<title>Page</title>\n</head>\n<body>\n  <!-- write your code here -->\n</body>\n</html>\n',CS='<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* write your CSS here */\n</style>\n</head>\n<body>\n  <h1>Hello</h1>\n  <div class="box">A box</div>\n</body>\n</html>\n';
const P=[
[1,'Two Sum','Easy','Arrays','twoSum','nums, target','Return the indices of the two numbers that add up to the target. Exactly one answer exists.',[[[[2,7,11,15],9],[0,1]],[[[3,2,4],6],[1,2]],[[[3,3],6],[0,1]],[[[1,5,8,3],11],[2,3]],[[[0,4,3,0],0],[0,3]]]],
[2,'Sum of 1 to N','Easy','Loops','sumTo','n','Return the sum of all whole numbers from 1 to n.',[[[5],15],[[1],1],[[10],55],[[100],5050],[[0],0]]],
[3,'Even or Odd','Easy','Basics','evenOdd','n','Return "Even" or "Odd" for the number n.',[[[4],'Even'],[[7],'Odd'],[[0],'Even'],[[-3],'Odd'],[[100],'Even']]],
[4,'Palindrome Check','Easy','Strings','isPalindrome','s','Return true if the string reads the same backwards, ignoring case.',[[['Level'],true],[['hello'],false],[['a'],true],[['Racecar'],true],[['ab'],false]]],
[5,'Reverse a Number','Medium','Math','reverseNumber','n','Return the digits of n in reverse order as a number.',[[[123],321],[[400],4],[[5],5],[[1200],21],[[9081],1809]]],
[6,'Valid Anagram','Medium','Strings','isAnagram','a, b','Return true if both strings use exactly the same letters.',[[['listen','silent'],true],[['abc','abd'],false],[['a','a'],true],[['aab','aba'],true],[['ab','abc'],false]]],
[7,'Primes up to N','Medium','Math','primesUpTo','n','Return an array of all prime numbers up to n.',[[[10],[2,3,5,7]],[[2],[2]],[[1],[]],[[20],[2,3,5,7,11,13,17,19]],[[3],[2,3]]]],
[8,'Fibonacci Series','Medium','Loops','fibonacci','n','Return the first n terms of the Fibonacci series starting 0, 1.',[[[5],[0,1,1,2,3]],[[1],[0]],[[2],[0,1]],[[8],[0,1,1,2,3,5,8,13]],[[0],[]]]],
[9,'Factorial','Medium','Recursion','factorial','n','Return n factorial. factorial(0) is 1.',[[[5],120],[[0],1],[[1],1],[[6],720],[[10],3628800]]],
[10,'Armstrong Number','Medium','Math','isArmstrong','n','Return true if n equals the sum of its digits each raised to the number of digits.',[[[153],true],[[10],false],[[9],true],[[370],true],[[100],false]]],
[11,'Binary Search','Hard','Arrays','binarySearch','arr, target','Return the index of target in a sorted array, or -1.',[[[[1,3,5,7,9],7],3],[[[1,3,5],4],-1],[[[2],2],0],[[[1,2,3,4,5,6],1],0],[[[],1],-1]]],
[12,'Merge Sort','Hard','Arrays','mergeSort','arr','Return a new sorted array using merge sort.',[[[[5,2,9,1]],[1,2,5,9]],[[[]],[]],[[[3]],[3]],[[[2,2,1]],[1,2,2]],[[[9,8,7,6,5]],[5,6,7,8,9]]]],
R(13,'Python: Hello World','Easy','Python','Write a Python program that prints Hello World.','py',PYS,[['Uses print()','r',/print\s*\(/],['Prints the text Hello World','r',/print\s*\(\s*(["'])Hello World\1\s*\)/]]),
R(14,'Python: Sum of Two Numbers','Easy','Python','Take two numbers as input and print their sum.','py',PYS,[['Reads input with input()','r',/input\s*\(/],['Converts with int() or float()','r',/(int|float)\s*\(/],['Adds the numbers','r',/\+/],['Prints the result','r',/print\s*\(/]]),
R(15,'Python: Even or Odd','Easy','Python','Find whether a number is even or odd and print the answer.','py',PYS,[['Uses % 2','r',/%\s*2/],['Uses if and else','r',/\bif\b[\s\S]*\belse\b/],['Shows Even','r',/even/i],['Shows Odd','r',/odd/i]]),
R(16,'Python: Swap Two Numbers','Easy','Python','Swap two numbers without a third variable and print them.','py',PYS,[['Swaps without a third variable','r',/(\w+)\s*,\s*(\w+)\s*=\s*\2\s*,\s*\1|(\w+)\s*=\s*\3\s*\+\s*(\w+)\s*\n\s*\4\s*=\s*\3\s*-\s*\4/],['Prints the swapped values','r',/print\s*\(/]]),
R(17,'Python: Factorial with Recursion','Medium','Python','Write def factorial(n) that calls itself to find n factorial.','py','def factorial(n):\n    # write your code here\n',[['Defines factorial(n)','r',/def\s+factorial\s*\(\s*n\s*\)\s*:/],['Has a base case','r',/if\s+n\s*(==|<=|<)\s*[01]/],['Calls itself with n - 1','r',/factorial\s*\(\s*n\s*-\s*1\s*\)/],['Returns a value','r',/return\s+/]]),
R(18,'Python: Character Frequency','Medium','Python','Write a function that counts how many times each character appears in a string.','py','def char_freq(s):\n    # write your code here\n',[['Defines a function','r',/def\s+\w+\s*\(/],['Loops over the characters','r',/for\s+\w+\s+in\s+/],['Counts in a dictionary','r',/\{\s*\}|dict\s*\(|Counter|\.get\s*\(/],['Returns the counts','r',/return\s+/]]),
R(19,'HTML: Formatted Paragraph','Easy','HTML','Create a paragraph that uses bold, italic and underlined or highlighted text.','web',HS,[['A paragraph (p)','s','p'],['Bold text (b or strong)','s','b, strong'],['Italic text (i or em)','s','i, em'],['Underlined or highlighted text (u or mark)','s','u, mark']]),
R(20,'HTML: Insert an Image','Easy','HTML','Insert an image with a source and alt text.','web',HS,[['An image with a src','s','img[src]'],['Alt text on the image','s','img[alt]']]),
R(21,'HTML: Create a Hyperlink','Easy','HTML','Create a hyperlink with visible link text.','web',HS,[['A link with an href','s','a[href]'],['Visible link text','r',/<a\b[^>]*href[^>]*>\s*[^<\s][^<]*<\/a>/i]]),
R(22,'HTML: Name and Email Form','Easy','HTML','Create a form with name and email fields and a submit button.','web',HS,[['A form','s','form'],['A name field','s','input[name="name"], input[type="text"]'],['An email field','s','input[type="email"]'],['A submit button','s','button, input[type="submit"]'],['A label','s','label']]),
R(23,'CSS: Change Text Color','Easy','CSS','Change the color of the heading text using CSS.','web',CS,[['Sets a text color','r',/(^|[;{\s])color\s*:\s*[^;}]+/i]]),
R(24,'CSS: Page Background Color','Easy','CSS','Add a background color to the page.','web',CS,[['Styles the body','r',/body\s*\{/i],['Sets a background color','r',/background(-color)?\s*:\s*[^;}]+/i]]),
R(25,'CSS: Center a Div','Easy','CSS','Center the box horizontally on the page.','web',CS,[['Sets a width','r',/width\s*:\s*[^;}]+/i],['Centers with margin auto','r',/margin\s*:\s*[^;}]*auto|margin-left\s*:\s*auto/i]]),
R(26,'CSS: Bordered Box','Easy','CSS','Create a box with a border and padding.','web',CS,[['Adds a border','r',/border(-width)?\s*:\s*[^;}]+/i],['Adds padding','r',/padding\s*:\s*[^;}]+/i],['A box element (div)','s','div']]),
R(27,'HTML: Login Page','Medium','HTML','Create a styled login page with username, password and a button.','web',CS,[['A form','s','form'],['A username or email field','s','input[type="text"], input[type="email"], input[name="username"]'],['A password field','s','input[type="password"]'],['A login button','s','button, input[type="submit"]'],['Some CSS styling','r',/<style[\s\S]*\{/i]]),
R(28,'HTML: Registration Form','Medium','HTML','Create a registration form with name, email and password.','web',CS,[['A form','s','form'],['A name field','s','input[type="text"]'],['An email field','s','input[type="email"]'],['A password field','s','input[type="password"]'],['A submit button','s','button, input[type="submit"]'],['Two or more labels','s','label',2]]),
R(29,'CSS: Responsive Navigation Menu','Medium','CSS','Create a navigation menu that adapts to small screens.','web',CS,[['A nav element','s','nav'],['At least 3 links','s','nav a',3],['A list of links','s','nav ul li'],['A media query','r',/@media/i]])
].map(a=>({id:a[0],t:a[1],d:a[2],tag:a[3],fn:a[4],pr:a[5],desc:a[6],tests:a[7],k:a[8]||'js',st:a[9],ck:a[10]}));
const PTS={Easy:10,Medium:20,Hard:30},LIM={Easy:10,Medium:20,Hard:25};

/*
 * LOCAL APP DATA
 * Progress, team membership and saved drafts are stored in this browser.
 * The sample users below make the leaderboard useful during a first demo.
 */
const $=s=>document.querySelector(s);
const D=n=>{const d=new Date();d.setDate(d.getDate()-n);return d.toISOString().slice(0,10)};
const seed=()=>({me:'',teams:{'Binary Beasts':'BB','Code Owls':'CO'},users:{
Asha:{team:'Binary Beasts',s:{1:[240,D(0)],2:[400,D(1)],3:[500,D(2)],7:[1300,D(3)]}},
Ravi:{team:'Binary Beasts',s:{1:[600,D(0)],5:[300,D(1)]}},
Kiran:{team:'Code Owls',s:{1:[200,D(0)],2:[260,D(1)],4:[900,D(2)],8:[1000,D(3)]}},
Zoya:{team:'Code Owls',s:{2:[700,D(1)]}}},drafts:{}});
let S;
function load(){try{S=JSON.parse(localStorage.getItem('cdd-derby'))||seed()}catch(e){S=seed()}}
function save(){try{localStorage.setItem('cdd-derby',JSON.stringify(S))}catch(e){}}
load();
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const me=()=>S.users[S.me];
const byId=id=>P.find(p=>p.id==id);
const solvedN=(u,d)=>Object.keys(u.s).filter(i=>byId(i)&&byId(i).d===d).length;
const unlocked=(u,d)=>d==='Easy'||(d==='Medium'&&solvedN(u,'Easy')>=5)||(d==='Hard'&&solvedN(u,'Medium')>=5);
const daily=()=>{const l=P.filter(p=>unlocked(me(),p.d));return l[Math.floor(Date.now()/864e5)%l.length]};
const COLORS=['#9db4ff','#7ee0b0','#ffd27e','#ff9db4','#b49dff','#7ed4ff'];

/*
 * SCORING RULES
 * A challenge gives points based on difficulty. Faster accepted answers can
 * earn a small bonus, and daily activity adds a streak bonus to the team score.
 * A learner receives the challenge points only on their first accepted solve.
 */
const streak=u=>{const ds=new Set(Object.values(u.s).map(x=>x[1]));let n=0,i=ds.has(D(0))?0:1;while(ds.has(D(i))){n++;i++}return n};
const memberScore=u=>Object.entries(u.s).reduce((a,[id,[t]])=>a+PTS[byId(id).d]+(t<300?5:t<900?2:0),0);
function board(){return Object.keys(S.teams).map(n=>{const m=Object.entries(S.users).filter(([,u])=>u.team===n).map(([k,u])=>u);
const sc=m.reduce((a,u)=>a+memberScore(u),0),bn=m.reduce((a,u)=>a+Math.min(streak(u),7)*2,0);
return{n,av:S.teams[n],mem:m.length,solved:m.reduce((a,u)=>a+Object.keys(u.s).length,0),score:sc+bn}}).sort((a,b)=>b.score-a.score)}
const rankOf=n=>board().findIndex(t=>t.n===n)+1;

/*
 * JAVASCRIPT TEST RUNNER
 * Run learner code in a separate Web Worker so the page can keep responding.
 * A 2.5-second timeout stops a run that does not finish in time.
 */
const WSRC=`onmessage=e=>{const{code,fn,tests}=e.data;let f;try{f=new Function(code+'\\nreturn '+fn+';')()}catch(x){postMessage({err:String(x)});return}
if(typeof f!=='function'){postMessage({err:'Function '+fn+' not found'});return}
postMessage({out:tests.map(([a,x])=>{try{const r=f(...JSON.parse(JSON.stringify(a)));return{ok:JSON.stringify(r)===JSON.stringify(x),got:JSON.stringify(r)}}catch(z){return{ok:false,got:'Error: '+z.message}}})})}`;
function runTests(code,p,tests,cb){
 let w,done=false;
 const end=r=>{if(!done){done=true;clearTimeout(tm);w&&w.terminate();cb(r)}};
 const tm=setTimeout(()=>end({tle:true}),2500);
 try{w=new Worker(URL.createObjectURL(new Blob([WSRC],{type:'text/javascript'})));
  w.onmessage=e=>end(e.data);w.onerror=e=>end({err:e.message||'Runtime error'});w.postMessage({code,fn:p.fn,tests})}
 catch(e){try{const f=new Function(code+'\nreturn '+p.fn+';')();end({out:tests.map(([a,x])=>{try{const r=f(...JSON.parse(JSON.stringify(a)));return{ok:JSON.stringify(r)===JSON.stringify(x),got:JSON.stringify(r)}}catch(z){return{ok:false,got:'Error: '+z.message}}})})}catch(z){end({err:String(z)})}}
}

/*
 * PYTHON / HTML / CSS CHECKS
 * These activities are checked with simple patterns or HTML selectors.
 * They are not executed like the JavaScript function challenges.
 */
function checkRules(code,p){const doc=new DOMParser().parseFromString(code,'text/html');
 return{out:p.ck.map(([d,t,x,n])=>{let ok=false;try{ok=t==='s'?doc.querySelectorAll(x).length>=(n||1):x.test(code)}catch(e){}return{ok,d}})}}
const exec=(c,p,t,cb)=>p.k==='js'?runTests(c,p,t,cb):cb(checkRules(c,p));
function pv(){const f=$('#pv');if(f)f.srcdoc=$('#ed').value}

/*
 * PAGE VIEWS
 * Each function below returns the HTML for one screen. The router inserts
 * the selected screen into the main app element when the hash changes.
 */
const chip=(t,d)=>`<span class="t ${d}">${t}</span>`;
const V={
login:()=>`<div style="text-align:center;padding-top:8vh"><div class="chips" style="justify-content:center"><span class="t" style="color:var(--ac)">Daily coding · Teams · Leaderboard</span></div><h1 class="shine">CodeDojo<br>Daily</h1><p style="color:var(--mu);font-size:1.1rem;max-width:520px;margin:0 auto 26px">Improve your skills a little every day, and grow yourself one problem at a time.</p><div class="p neon" style="max-width:420px;margin:0 auto;text-align:left"><h2>Enter the dojo</h2><label for="nm">Your name</label><div style="margin:6px 0 16px"><input id="nm" maxlength="20" autocomplete="off" placeholder="e.g. Asha"></div><button class="b a" style="width:100%" data-a="login">Log in</button></div></div>`,
home:()=>`<div style="padding:12vh 0 0;max-width:620px"><h1>One problem.<br>Every night.</h1><p style="color:var(--mu);font-size:1.1rem">Solve today’s challenge, run it against test cases, and lift your team up the leaderboard.</p><div class="chips"><a class="b a" href="#daily" style="display:inline-grid;place-items:center">Start today’s challenge</a><a class="b" href="#teams" style="display:inline-grid;place-items:center">Create or join a team</a></div></div>`,
daily:()=>{const p=daily(),done=me().s[p.id];return`<div style="padding-top:22vh"><div class="p" style="max-width:660px"><div class="chips" style="margin-top:0">${chip('Today’s challenge','')}${chip(p.d,p.d)}${chip(LIM[p.d]+' minutes','')}</div><h1 style="font-size:2.6rem">${p.t}</h1><p style="color:var(--mu)">${p.desc}</p>${p.k==='js'?`<b>Example</b><p style="color:var(--mu);margin:4px 0 16px">${esc(JSON.stringify(p.tests[0][0]))} gives ${esc(JSON.stringify(p.tests[0][1]))}</p>`:'<div style="height:12px"></div>'}<button class="b a" data-a="open" data-id="${p.id}">${done?'Solved. Open again':'Open workspace'}</button></div></div>`},
problems:()=>{const f=S.f||{d:'All',q:''};const RK={Easy:0,Medium:1,Hard:2},u0=me(),l=P.filter(p=>(f.d==='All'||p.d===f.d||p.tag===f.d)&&(!f.q||(p.t+p.tag).toLowerCase().includes(f.q.toLowerCase()))).sort((a,b)=>RK[a.d]-RK[b.d]||a.id-b.id);
const tags=['All','Easy','Medium','Hard',...new Set(P.map(p=>p.tag))];
const bn=S.banner;S.banner=null;const ss=solvedN(u0,'Easy'),sm=solvedN(u0,'Medium');
return`${bn?`<div class="p" style="margin-bottom:16px;border-color:var(--ok)"><h2>Accepted: ${esc(bn.t)}</h2><p style="margin:0;color:var(--mu)">${bn.pts?'+'+bn.pts+' points in '+bn.secs+' seconds.':'Already solved earlier, so no new points.'} Your score: <b style="color:#fff">${bn.total}</b>.${bn.team?' Your team is now #'+bn.rank+(bn.before&&bn.before!==bn.rank?' (was #'+bn.before+')':'')+'.':' Join a team to score for a squad.'}</p></div>`:''}<div class="p" style="margin-bottom:16px;display:flex;gap:24px;flex-wrap:wrap"><span>Score <b>${memberScore(u0)}</b></span><span>Solved <b>${Object.keys(u0.s).length}</b></span><span>Streak <b>${streak(u0)} days</b></span><span style="color:var(--mu)">${ss<5?'Solve '+(5-ss)+' more Easy to unlock Medium':sm<5?'Solve '+(5-sm)+' more Medium to unlock Hard':'All levels unlocked'}</span></div><div class="p"><h2>Problems</h2><label for="q">Search by title or tag</label><div style="margin:6px 0"><input id="q" value="${esc(f.q)}" placeholder="e.g. strings"></div><div class="chips">${tags.map(t=>`<button class="b${f.d===t?' a':''}" data-a="filt" data-v="${t}">${t}</button>`).join('')}</div>
${l.map(p=>`<div class="row"><span style="color:${me().s[p.id]?'var(--ok)':'var(--mu)'}">${me().s[p.id]?'Solved':unlocked(u0,p.d)?'To do':'Locked'}</span><button class="tl" data-a="open" data-id="${p.id}">${p.t}</button><span style="color:var(--mu)">${p.tag}</span>${chip(p.d,p.d)}</div>`).join('')||'<p>No problems match.</p>'}
<p style="color:var(--mu);font-size:.85rem;margin:12px 0 0">${l.length} of ${P.length} shown.</p></div>`},
work:()=>{const p=byId(W.id);return`<div class="g3"><div class="p"><div style="display:flex;justify-content:space-between;align-items:center">${chip(p.d,p.d)}<span class="tmr" id="tm">--:--</span></div><h2 style="margin-top:14px;font-size:1.6rem">${p.t}</h2><p style="color:var(--mu)">${p.desc}</p>${p.k==='js'?`<b>Function</b><p style="color:var(--mu);margin:4px 0 12px"><code>${p.fn}(${p.pr})</code></p><b>Example</b><p style="color:var(--mu);margin:4px 0 12px">${esc(JSON.stringify(p.tests[0][0]))} gives ${esc(JSON.stringify(p.tests[0][1]))}</p>`:`<b>Your code is checked for</b><ul style="color:var(--mu);margin:4px 0 12px;padding-left:18px">${p.ck.map(c=>`<li>${c[0]}</li>`).join('')}</ul>`}<p style="font-size:.85rem;color:var(--mu);margin:0">Time: Easy 10, Medium 20, Hard 25 minutes. ${p.k==='js'?'2 public and 3 hidden tests.':'Checked by rules, not executed.'}</p></div>
<div style="display:grid;gap:16px"><div class="p"><div style="display:flex;gap:10px;margin-bottom:10px"><label for="lg" class="sr" style="align-self:center">Language</label><select id="lg" style="max-width:220px"><option>${p.k==='js'?'JavaScript':p.k==='py'?'Python':'HTML and CSS'}</option></select></div><textarea id="ed" spellcheck="false" aria-label="Code editor">${esc(S.drafts[p.id]||p.st||`function ${p.fn}(${p.pr}) {\n  // write your code here\n}`)}</textarea>${p.k==='web'?'<iframe id="pv" title="Live preview" sandbox="" style="width:100%;height:180px;margin-top:10px;border:0;border-radius:10px;background:#fff"></iframe>':''}</div>
<div class="p"><div class="chips" style="margin-top:0"><button class="b" data-a="run">Run tests</button><button class="b a" data-a="submit">Submit</button></div><div id="out" aria-live="polite" style="color:var(--mu)">Run the tests to see results.</div></div></div></div>`},
teams:()=>{const u=me(),ts=Object.keys(S.teams);return`<div class="g2"><div class="p"><h2>Join a squad</h2><p style="color:var(--mu);margin:0 0 8px;font-size:.9rem">Squads have 3 to 4 members.</p>${ts.map((n,i)=>{const m=Object.values(S.users).filter(x=>x.team===n).length;
return`<div class="row tm"><div class="av" style="background:${COLORS[i%6]}">${esc(S.teams[n])}</div><div><b>${esc(n)}</b><div style="font-size:.8rem;color:var(--mu)">${m} of 4 members</div></div><span></span>${u.team===n?'<span class="t Easy">Your squad</span>':`<button class="b" data-a="join" data-n="${esc(n)}" ${m>=4?'disabled':''}>${m>=4?'Full':'Join'}</button>`}</div>`}).join('')}</div>
<div class="p"><h2>Create a squad</h2><label for="tn">Squad name</label><div style="margin:6px 0 14px"><input id="tn" maxlength="22"></div><label>Team avatar</label><div class="chips" id="avs">${COLORS.map((c,i)=>`<button class="av" aria-label="Avatar ${i+1}" data-a="av" data-i="${i}" style="background:${c};border:${(W.av||0)===i?'3px solid #fff':'1px solid #fff6'};cursor:pointer"></button>`).join('')}</div><button class="b a" data-a="create">Create squad</button></div></div>`},
board:()=>{const b=board(),mt=me().team;return`<div class="p"><h2>Team leaderboard</h2><p style="color:var(--mu);margin:0 0 10px;font-size:.9rem">Team score = member scores + streak bonus. Refreshes every 5 seconds.</p><div class="row tm" style="border:0;color:var(--mu);font-size:.85rem"><span>Rank</span><span>Team</span><span>Solves</span><span>Score</span></div>${b.map((t,i)=>`<div class="row tm${t.n===mt?' me':''}"><b>${i+1}</b><span>${esc(t.n)}${t.n===mt?' (you)':''}</span><span>${t.solved}</span><b>${t.score}</b></div>`).join('')}</div>`},
profile:()=>{const u=me(),c={};Object.values(u.s).forEach(x=>c[x[1]]=(c[x[1]]||0)+1);const cells=[];for(let i=97;i>=0;i--){const n=c[D(i)]||0;cells.push(`<i class="${n?'l'+Math.min(n,3):''}" title="${D(i)}: ${n}"></i>`)}
const cnt=d=>[Object.keys(u.s).filter(i=>byId(i).d===d).length,P.filter(p=>p.d===d).length];
return`<div class="g2"><div class="p"><h2>${esc(S.me)}</h2><p style="color:var(--mu);margin:0 0 14px">${u.team?esc(u.team):'No squad yet'}</p>${['Easy','Medium','Hard'].map(d=>`<div style="display:flex;justify-content:space-between;padding:6px 0"><span class="${d}">${d}</span><b>${cnt(d)[0]} of ${cnt(d)[1]}</b></div>`).join('')}<div style="display:flex;justify-content:space-between;padding:6px 0"><span>Streak</span><b>${streak(u)} days</b></div><div style="display:flex;justify-content:space-between;padding:6px 0"><span>Score</span><b>${memberScore(u)}</b></div></div><div class="p"><h2>Streak calendar</h2><p style="color:var(--mu);margin:0 0 12px;font-size:.9rem">Last 14 weeks of accepted solutions.</p><div class="heat">${cells.join('')}</div></div></div>`}
};

/* Cinematic letters: each letter of nav links and buttons grows on hover */
function cin(){document.querySelectorAll('nav a,.b').forEach(el=>{if(el.dataset.c||el.children.length)return;const t=el.textContent;el.dataset.c=1;el.classList.add('cin');el.setAttribute('aria-label',t);
 let i=0;el.innerHTML='<span class="cw" aria-hidden="true">'+t.split(' ').map(w=>'<span class="wd">'+[...w].map(c=>`<span class="l" style="--i:${i++}">${esc(c)}</span>`).join('')+'</span>').join(' ')+'</span>'})}
/*
 * NAVIGATION
 * The URL hash selects the current screen (for example, #daily or #teams).
 */
let W={id:0,av:0,left:0,iv:0,start:0},cur='login',poll;
const LINKS=[['daily','Daily challenge'],['problems','Problems'],['teams','Teams'],['board','Leaderboard'],['profile','Profile']];
function go(){
 let v=(location.hash||'#home').slice(1);if(!S.me)v='login';else if(!V[v]||v==='login')v='home';
 if(v==='work'&&!W.id)v='problems';
 cur=v;clearInterval(W.iv);document.body.dataset.v=v;
 $('#nav').innerHTML=`<b>CodeDojo Daily</b>`+(S.me?`<div>${LINKS.map(l=>`<a href="#${l[0]}" class="${cur===l[0]?'on':''}">${l[1]}</a>`).join('')}<button class="b" data-a="out">Log out</button></div>`:'');
 $('#app').innerHTML=V[v]();
 if(v==='work'){startTimer();pv()}
 cin();if(v==='home'&&!S.greeted){S.greeted=true;save();try{$('#dlg').showModal()}catch(e){}}
}
addEventListener('hashchange',go);
function toast(m){const t=$('#toast');t.textContent=m;t.style.display='block';clearTimeout(t._t);t._t=setTimeout(()=>t.style.display='none',4200)}

/*
 * CHALLENGE TIMER
 * The timer uses the challenge difficulty to decide how much time is allowed.
 */
function startTimer(){const p=byId(W.id);W.start=Date.now();W.left=LIM[p.d]*60;
 const tick=()=>{const e=$('#tm');if(!e)return;const s=Math.max(0,W.left-Math.floor((Date.now()-W.start)/1000));e.textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');e.className='tmr'+(s<60?' lo':'');if(!s)e.textContent='Time is up'};
 tick();W.iv=setInterval(tick,1000)}

/*
 * USER ACTIONS
 * Buttons use data-a attributes. This object connects each action name to
 * the function that should run when the learner clicks that button.
 */
function showRes(r,tests,hid){const o=$('#out');
 if(r.tle){o.innerHTML='<div class="res"><span class="t Hard">Time Limit Exceeded</span> Your code took longer than 2.5 seconds.</div>';return'Time Limit Exceeded'}
 if(r.err){o.innerHTML=`<div class="res"><span class="t Hard">Wrong Answer</span> ${esc(r.err)}</div>`;return'Wrong Answer'}
 const all=r.out.every(x=>x.ok);
 o.innerHTML=`<div class="res"><span class="t ${all?'Easy':'Hard'}">${all?'Accepted':'Wrong Answer'}</span></div>`+(r.out[0]&&r.out[0].d?'<div class="res" style="font-size:.8rem">Checked against rules. The code is not executed.</div>':'')+r.out.map((x,i)=>`<div class="res"><span class="t ${x.ok?'Easy':'Hard'}">${x.ok?'Pass':'Fail'}</span> ${x.d?esc(x.d):(i<2?'Public':'Hidden')+' test '+(i+1)+(!x.ok&&i<2?' — got '+esc(x.got)+', expected '+esc(JSON.stringify(tests[i][1])):'')}</div>`).join('');
 return all?'Accepted':'Wrong Answer'}
const ACT={
 login(){const n=$('#nm').value.trim();if(!n)return toast('Please type your name.');if(!S.users[n])S.users[n]={team:'',s:{}};S.me=n;S.greeted=false;save();location.hash='#home';go()},
 close(){$('#dlg').close()},
 out(){S.me='';save();location.hash='#home';go()},
 filt(e){S.f={d:e.dataset.v,q:(S.f||{}).q||''};go()},
 open(e){const q=byId(e.dataset.id);if(!unlocked(me(),q.d))return toast(q.d==='Medium'?'Solve 5 Easy problems to unlock Medium.':'Solve 5 Medium problems to unlock Hard.');W.id=+e.dataset.id;location.hash='#work';go()},
 run(){const p=byId(W.id),c=$('#ed').value;S.drafts[p.id]=c;save();$('#out').textContent='Running…';exec(c,p,p.tests.slice(0,2),r=>showRes(r,p.tests))},
 submit(){const p=byId(W.id),c=$('#ed').value;S.drafts[p.id]=c;$('#out').textContent='Running…';
  exec(c,p,p.tests,r=>{const v=showRes(r,p.tests);load();const uu=S.users[S.me];S.drafts[p.id]=c;
   if(v!=='Accepted'){save();return toast(v+'. Fix your code and submit again.')}
   const secs=Math.min(Math.floor((Date.now()-W.start)/1000),LIM[p.d]*60+1),before=uu.team?rankOf(uu.team):0;let pts=0;
   if(!uu.s[p.id]){uu.s[p.id]=[secs,D(0)];pts=PTS[p.d]+(secs<300?5:secs<900?2:0)}
   S.banner={t:p.t,pts,secs,total:memberScore(uu),team:uu.team,rank:uu.team?rankOf(uu.team):0,before};save();
   location.hash='#problems'})},
 join(e){const n=e.dataset.n;if(Object.values(S.users).filter(x=>x.team===n).length>=4)return toast('That squad is full.');me().team=n;save();go();toast('Joined '+n)},
 av(e){W.av=+e.dataset.i;const t=$('#tn').value;go();$('#tn').value=t},
 create(){const n=$('#tn').value.trim();if(!n)return toast('Give your squad a name.');if(S.teams[n])return toast('That name is taken.');
  S.teams[n]=n.split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase();me().team=n;save();go();toast('Squad created')}
};
document.addEventListener('click',e=>{const t=e.target.closest('[data-a]');if(t&&ACT[t.dataset.a])ACT[t.dataset.a](t)});
document.addEventListener('input',e=>{if(e.target.id==='ed')pv();if(e.target.id==='q'){S.f={d:(S.f||{}).d||'All',q:e.target.value};const p=e.target.selectionStart;go();const q=$('#q');q.focus();q.setSelectionRange(p,p)}});
document.addEventListener('keydown',e=>{if(e.target.id==='ed'&&e.key==='Tab'){e.preventDefault();const t=e.target,s=t.selectionStart;t.value=t.value.slice(0,s)+'  '+t.value.slice(t.selectionEnd);t.selectionStart=t.selectionEnd=s+2}
 if(e.target.id==='nm'&&e.key==='Enter')ACT.login()});
setInterval(()=>{if(cur==='board'){load();$('#app').innerHTML=V.board()}},5000);
go();
