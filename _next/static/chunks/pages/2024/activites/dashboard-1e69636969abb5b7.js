(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6152],{2852:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2024/activites/dashboard",function(){return n(807)}])},555:function(e,a,n){"use strict";n.d(a,{Z:function(){return P}});var o=n(5893),i=n(7294),t=n(2762),r=n(3977),s=n(9828),d=n(2010);let m=e=>{let{colums:a,className:n}=e;return(0,o.jsx)("thead",{className:n,children:(0,o.jsx)("tr",{children:a.map((e,a)=>(0,o.jsx)("th",{className:"p-2 whitespace-nowrap",children:(0,o.jsx)("div",{className:"flex",children:(0,o.jsx)("div",{className:"grow font-semibold text-left",children:e.columTitle})})},a))})})},u=e=>{let{colums:a,rows:n,className:i}=e;return(0,o.jsx)("tbody",{className:i,children:n.map((e,n)=>(0,o.jsx)("tr",{children:a.map((a,n)=>(0,o.jsx)("td",{className:"p-2 whitespace-nowrap",children:e[a.columTitle].data},n))},n))})};var l=e=>{let{tableTitle:a="Table Title",subTitle:n,colums:i=[{columTitle:"GitHub",filter:!0},{columTitle:"Type",filter:!0},{columTitle:"Summary",filter:!1}],rows:t=[{GitHub:{data:"GeunSam2",searchLabel:"GeunSam2"},Type:{data:"PR",searchLabel:"PR"},Summary:{data:"11111",searchLabel:null}}],theme:r="light"}=e;return(0,o.jsx)("section",{id:"contribute-info",className:"flex flex-col justify-center antialiased text-gray-600 py-2",children:(0,o.jsx)("div",{className:"h-full",children:(0,o.jsxs)("div",{className:"w-full mx-auto shadow-lg rounded-sm border "+("dark"===r?"bg-zinc-900 border-gray-800":"bg-white border-gray-200"),children:[(0,o.jsxs)("header",{className:"px-5 py-4 border-b "+("dark"===r?"border-gray-800":"border-gray-100"),children:[(0,o.jsx)("h2",{className:"font-semibold "+("dark"===r?"text-gray-200":"text-gray-600"),children:a}),n||null]}),(0,o.jsx)("div",{className:"p-3",children:(0,o.jsx)("div",{className:"overflow-x-auto",children:(0,o.jsxs)("table",{className:"table-auto w-full",children:[(0,o.jsx)(m,{colums:i,className:"text-xs font-semibold uppercase "+("dark"===r?"bg-gray-800 text-gray-200":"bg-gray-100 text-gray-500")}),(0,o.jsx)(u,{colums:i,rows:t,className:"text-sm divide-y "+("dark"===r?"divide-gray-800 text-gray-400":"divide-gray-100 text-gray-600")})]})})})]})})})};let c=(0,r.ZF)({apiKey:"AIzaSyCMC07HfFRIFUVMA7eULAsmTvoC7Frpna8",authDomain:"my-oss-pr.firebaseapp.com",projectId:"my-oss-pr",storageBucket:"my-oss-pr.appspot.com",messagingSenderId:"6268125850",appId:"1:6268125850:web:d84b95103cbd1e81a21523",measurementId:"G-RLP5Y94VKY"}),g=(0,s.ad)(c);async function h(){let e=(0,s.JU)(g,"oss","info"),a=await (0,s.QT)(e);return a.exists()?a.data().token:(console.error("No token found in Firestore"),null)}let x=e=>(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("div",{className:"w-7 h-7 flex-shrink-0 mr-2 sm:mr-3",children:(0,o.jsx)("img",{className:"rounded-full",src:e.avatar_url,alt:e.login})}),(0,o.jsx)("a",{href:e.html_url,className:"font-medium hover:underline",children:e.login})]}),k=e=>(0,o.jsx)("a",{href:e.html_url,className:"font-medium text-blue-600 hover:underline",children:e.title},e.id),b=e=>{let{children:a,colorClass:n}=e;return(0,o.jsx)("span",{className:"text-[8px] font-semibold inline-block px-1 rounded-full last:mr-0 mr-1 "+n,children:a})},M=(e,a)=>{let n=(0,o.jsx)(b,{colorClass:"text-blue-600 bg-blue-200",children:"MERGED"}),i=(0,o.jsx)(b,{colorClass:"text-emerald-600 bg-emerald-200",children:"OPENED"}),t=(0,o.jsx)(b,{colorClass:"text-red-600 bg-red-200",children:"CLOSED"}),r=(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"mr-1 font-semibold",children:"PR"}),n]}),s=(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"mr-1 font-semibold",children:"PR"}),i]}),d=(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"mr-1 font-semibold",children:"PR"}),t]}),m=(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"mr-1 font-semibold",children:"ISSUE"})}),u=e?e.merged_at?r:a?d:s:m;return u},p=e=>0===e.length?[]:e.map(e=>({GitHub:{data:x(e.user),searchLabel:e.user.login},Type:{data:M(e.pull_request,e.closed_at),searchLabel:e.pull_request?"PR":"ISSUE"},Summary:{data:k(e),searchLabel:null}})),y=async(e,a,n)=>{let o=await h(),i=new t.vd({auth:o}),r=new t.vd;try{let o=await i.request("GET /repos/{owner}/{repo}/issues",{owner:a,repo:n,creator:e,state:"all",headers:{"X-GitHub-Api-Version":"2022-11-28"}});return p(o.data)}catch(o){console.error("Auth request is failed. Do non-auth reaquest instead.");try{let o=await r.request("GET /repos/{owner}/{repo}/issues",{owner:a,repo:n,creator:e,state:"all",headers:{"X-GitHub-Api-Version":"2022-11-28"}});return p(o.data)}catch(e){return[]}}},w=async(e,a,n)=>{let o=e.map(async e=>await y(e,a,n)),i=await Promise.all(o),t=i.flat(),r=t.sort((e,a)=>"None"===e.Type.searchLabel&&"None"!==a.Type.searchLabel?1:"None"!==e.Type.searchLabel&&"None"===a.Type.searchLabel?-1:a.Type.searchLabel.localeCompare(e.Type.searchLabel)).sort((e,a)=>e.GitHub.searchLabel.localeCompare(a.GitHub.searchLabel));return r};var P=e=>{let{contributers:a=[],owner:n="argoproj",repo:t="argo-workflows"}=e,[r,s]=(0,i.useState)([]),{current:m}=(0,i.useRef)(a),{theme:u}=(0,d.F)();(0,i.useEffect)(()=>{w(m,n,t).then(e=>s(e))},[m,n,t,w,s,u]);let c=r.filter(e=>"PR"===e.Type.searchLabel).length,g=r.filter(e=>"ISSUE"===e.Type.searchLabel).length,h=(0,o.jsxs)("div",{className:"grid grid-cols-3 gap-5 mt-2 text-center text-gray-600 text-sm",children:[(0,o.jsxs)("div",{className:"grid grid-cols-3",children:[(0,o.jsx)("div",{className:"col-span-2 bg-orange-200 p-3 rounded-l-md font-semibold",children:"TOTAL COUNT"}),(0,o.jsx)("div",{className:"bg-gray-100 p-3 rounded-r-md font-semibold text-orange-400",children:c+g})]}),(0,o.jsxs)("div",{className:"grid grid-cols-3",children:[(0,o.jsx)("div",{className:"col-span-2 bg-blue-100 p-3 rounded-l-md font-medium",children:"PR COUNT"}),(0,o.jsx)("div",{className:"bg-gray-100 p-3 rounded-r-md font-medium text-blue-600",children:c})]}),(0,o.jsxs)("div",{className:"grid grid-cols-3",children:[(0,o.jsx)("div",{className:"col-span-2 bg-gray-200 p-3 rounded-l-md font-medium",children:"ISSUE COUNT"}),(0,o.jsx)("div",{className:"bg-gray-100 p-3 rounded-r-md font-medium",children:g})]})]});return(0,o.jsx)(l,{tableTitle:"Contribute Info",subTitle:h,theme:u,colums:[{columTitle:"GitHub",filter:!0},{columTitle:"Type",filter:!0},{columTitle:"Summary",filter:!1}],rows:r})}},979:function(e,a,n){"use strict";var o=n(5893);a.Z={logo:(0,o.jsx)("span",{children:"Argo-OSS"}),project:{link:"https://github.com/Argo-OSS"},docsRepositoryBase:"https://github.com/Argo-OSS/argo-oss.github.io/tree/main",head:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("meta",{property:"og:title",content:"Argo-OSS"}),(0,o.jsx)("meta",{property:"og:description",content:"The team page of Argo-OSS"}),(0,o.jsx)("meta",{property:"og:image",content:"https://avatars.githubusercontent.com/u/138947630?s=200&v=4"}),(0,o.jsx)("meta",{property:"og:url",content:"https://argo-oss.github.io"}),(0,o.jsx)("meta",{property:"og:type",content:"website"})]})}},807:function(e,a,n){"use strict";n.r(a);var o=n(5893),i=n(2673),t=n(4984),r=n(979);n(9966);var s=n(1151);n(5675);var d=n(555);let m={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:a}=Object.assign({},(0,s.ah)(),e.components);return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(u,{...e})}):u(e)},pageOpts:{filePath:"pages/2024/activites/dashboard.mdx",route:"/2024/activites/dashboard",headings:[{depth:2,value:"Argo CD 기여 현황",id:"argo-cd-기여-현황"},{depth:2,value:"Argo Workflows 기여 현황",id:"argo-workflows-기여-현황"}],pageMap:[{kind:"Folder",name:"2023",route:"/2023",children:[{kind:"Meta",data:{members:"\uD83D\uDC68‍\uD83D\uDCBB 멤버",activites:"\uD83C\uDFA2 활동"}},{kind:"Folder",name:"activites",route:"/2023/activites",children:[{kind:"Meta",data:{weeklyMeets:"주간 정기모임"}},{kind:"Folder",name:"reports",route:"/2023/activites/reports",children:[{kind:"Meta",data:{fianlReportKo:"[KOR]Final Report",finalReportEn:"[ENG]Final Report"}},{kind:"MdxPage",name:"fianlReportKo",route:"/2023/activites/reports/fianlReportKo"},{kind:"MdxPage",name:"finalReportEn",route:"/2023/activites/reports/finalReportEn"}]},{kind:"Folder",name:"weeklyMeets",route:"/2023/activites/weeklyMeets",children:[{kind:"MdxPage",name:"230715",route:"/2023/activites/weeklyMeets/230715"},{kind:"MdxPage",name:"230723",route:"/2023/activites/weeklyMeets/230723"},{kind:"MdxPage",name:"230730",route:"/2023/activites/weeklyMeets/230730"},{kind:"MdxPage",name:"230806",route:"/2023/activites/weeklyMeets/230806"},{kind:"MdxPage",name:"230813",route:"/2023/activites/weeklyMeets/230813"},{kind:"MdxPage",name:"230820",route:"/2023/activites/weeklyMeets/230820"},{kind:"MdxPage",name:"230827",route:"/2023/activites/weeklyMeets/230827"},{kind:"MdxPage",name:"230904",route:"/2023/activites/weeklyMeets/230904"},{kind:"Meta",data:{230715:"1주차",230723:"2주차",230730:"3주차",230806:"4주차",230813:"5주차",230820:"6주차",230827:"7주차",230904:"8주차"}}]}]},{kind:"Folder",name:"members",route:"/2023/members",children:[{kind:"MdxPage",name:"AhnDaHae",route:"/2023/members/AhnDaHae"},{kind:"MdxPage",name:"AhnJiWan",route:"/2023/members/AhnJiWan"},{kind:"MdxPage",name:"ChaeMoonYoung",route:"/2023/members/ChaeMoonYoung"},{kind:"MdxPage",name:"ChoiSooNyeong",route:"/2023/members/ChoiSooNyeong"},{kind:"MdxPage",name:"GangByeongSun",route:"/2023/members/GangByeongSun"},{kind:"MdxPage",name:"GangSiOn",route:"/2023/members/GangSiOn"},{kind:"MdxPage",name:"GeonEuiJung",route:"/2023/members/GeonEuiJung"},{kind:"MdxPage",name:"JungSungRock",route:"/2023/members/JungSungRock"},{kind:"MdxPage",name:"KimHakJun",route:"/2023/members/KimHakJun"},{kind:"MdxPage",name:"KimOwnSik",route:"/2023/members/KimOwnSik"},{kind:"MdxPage",name:"KimSuBin",route:"/2023/members/KimSuBin"},{kind:"MdxPage",name:"KwonYoungGil",route:"/2023/members/KwonYoungGil"},{kind:"MdxPage",name:"LeeByeongGon",route:"/2023/members/LeeByeongGon"},{kind:"MdxPage",name:"LeeEuiJu",route:"/2023/members/LeeEuiJu"},{kind:"MdxPage",name:"ParkJinSu",route:"/2023/members/ParkJinSu"},{kind:"MdxPage",name:"SeoChungWun",route:"/2023/members/SeoChungWun"},{kind:"MdxPage",name:"SongHaeMin",route:"/2023/members/SongHaeMin"},{kind:"MdxPage",name:"YeomGeunCheol",route:"/2023/members/YeomGeunCheol"},{kind:"MdxPage",name:"YouYoonWoo",route:"/2023/members/YouYoonWoo"},{kind:"Meta",data:{GangByeongSun:"강병선",GangSiOn:"강시온",KwonYoungGil:"권영길",KimSuBin:"김수빈",KimOwnSik:"김원식",KimHakJun:"김학준",ParkJinSu:"박진수",SeoChungWun:"서청운",SongHaeMin:"송혜민",AhnDaHae:"안다혜",AhnJiWan:"안지완",YeomGeunCheol:"염근철",YouYoonWoo:"유윤우",LeeByeongGon:"이병곤",LeeEuiJu:"이의주",GeonEuiJung:"전의정",JungSungRock:"정성락",ChaeMoonYoung:"채문영",ChoiSooNyeong:"최수녕"}}]},{kind:"MdxPage",name:"members",route:"/2023/members"}]},{kind:"Folder",name:"2024",route:"/2024",children:[{kind:"Meta",data:{members:"\uD83D\uDC68‍\uD83D\uDCBB 멤버",activites:"\uD83C\uDFA2 활동"}},{kind:"Folder",name:"activites",route:"/2024/activites",children:[{kind:"Meta",data:{weeklyMeets:"주간 정기모임",dashboard:"기여 현황판"}},{kind:"MdxPage",name:"dashboard",route:"/2024/activites/dashboard"},{kind:"Folder",name:"weeklyMeets",route:"/2024/activites/weeklyMeets",children:[{kind:"MdxPage",name:"240721",route:"/2024/activites/weeklyMeets/240721"},{kind:"MdxPage",name:"240727",route:"/2024/activites/weeklyMeets/240727"},{kind:"MdxPage",name:"240803",route:"/2024/activites/weeklyMeets/240803"},{kind:"MdxPage",name:"240810",route:"/2024/activites/weeklyMeets/240810"},{kind:"MdxPage",name:"240817",route:"/2024/activites/weeklyMeets/240817"},{kind:"MdxPage",name:"240824",route:"/2024/activites/weeklyMeets/240824"},{kind:"MdxPage",name:"240831",route:"/2024/activites/weeklyMeets/240831"},{kind:"MdxPage",name:"240907",route:"/2024/activites/weeklyMeets/240907"},{kind:"MdxPage",name:"240914",route:"/2024/activites/weeklyMeets/240914"},{kind:"MdxPage",name:"240921",route:"/2024/activites/weeklyMeets/240921"},{kind:"MdxPage",name:"240928",route:"/2024/activites/weeklyMeets/240928"},{kind:"Meta",data:{240721:"1주차",240727:"2주차",240803:"3주차",240810:"4주차",240817:"5주차",240824:"6주차",240831:"7주차",240907:"8주차",240914:"9주차",240921:"10주차",240928:"11주차"}}]}]},{kind:"Folder",name:"members",route:"/2024/members",children:[{kind:"MdxPage",name:"ChanYeongJeong",route:"/2024/members/ChanYeongJeong"},{kind:"MdxPage",name:"ChoiPilHwan",route:"/2024/members/ChoiPilHwan"},{kind:"MdxPage",name:"ChoiSooNyeong",route:"/2024/members/ChoiSooNyeong"},{kind:"MdxPage",name:"EugeneKim",route:"/2024/members/EugeneKim"},{kind:"MdxPage",name:"EunJiJung",route:"/2024/members/EunJiJung"},{kind:"MdxPage",name:"HaeunCho",route:"/2024/members/HaeunCho"},{kind:"MdxPage",name:"HuhInJoo",route:"/2024/members/HuhInJoo"},{kind:"MdxPage",name:"HwangJuwon",route:"/2024/members/HwangJuwon"},{kind:"MdxPage",name:"HyeonJiJung",route:"/2024/members/HyeonJiJung"},{kind:"MdxPage",name:"HyunWooKim",route:"/2024/members/HyunWooKim"},{kind:"MdxPage",name:"JungSungRock",route:"/2024/members/JungSungRock"},{kind:"MdxPage",name:"JunseokPark",route:"/2024/members/JunseokPark"},{kind:"MdxPage",name:"KangDaeHoon",route:"/2024/members/KangDaeHoon"},{kind:"MdxPage",name:"KangMyoungGu",route:"/2024/members/KangMyoungGu"},{kind:"MdxPage",name:"KimCheolSu",route:"/2024/members/KimCheolSu"},{kind:"MdxPage",name:"KimGaYeon",route:"/2024/members/KimGaYeon"},{kind:"MdxPage",name:"KimKiHae",route:"/2024/members/KimKiHae"},{kind:"MdxPage",name:"KimMinSu",route:"/2024/members/KimMinSu"},{kind:"MdxPage",name:"KoHyunSu",route:"/2024/members/KoHyunSu"},{kind:"MdxPage",name:"KunhoLee",route:"/2024/members/KunhoLee"},{kind:"MdxPage",name:"KwonMinHyeok",route:"/2024/members/KwonMinHyeok"},{kind:"MdxPage",name:"LeeHosu",route:"/2024/members/LeeHosu"},{kind:"MdxPage",name:"LeeSeolHui",route:"/2024/members/LeeSeolHui"},{kind:"MdxPage",name:"SeoJimin",route:"/2024/members/SeoJimin"},{kind:"MdxPage",name:"SongHaeMin",route:"/2024/members/SongHaeMin"},{kind:"Meta",data:{JungSungRock:"정성락",ChoiSooNyeong:"최수녕",SongHaeMin:"송혜민",KimCheolSu:"김철수",KoHyunSu:"고현수",KunhoLee:"이건호",LeeHosu:"이호수",ChoiPilHwan:"최필환",EugeneKim:"김유진",KimGaYeon:"김가연",HwangJuwon:"황주원",KangMyoungGu:"강명구",KwonMinHyeok:"권민혁",HyunWooKim:"김현우",KangDaeHoon:"강대훈",KimKiHae:"김기해",HaeunCho:"조하은",KimMinSu:"김민수",JunseokPark:"박준석",LeeSeolHui:"이설희",ChanYeongJeong:"정찬영",HuhInJoo:"허인주",HyeonJiJung:"정현지",EunJiJung:"정은지",SeoJimin:"서지민"}}]},{kind:"MdxPage",name:"members",route:"/2024/members"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"test",route:"/test",children:[{kind:"MdxPage",name:"index",route:"/test"},{kind:"Meta",data:{index:"Index"}}]},{kind:"Meta",data:{index:"Index"}}],flexsearch:{codeblocks:!0},title:"Dashboard"},pageNextRoute:"/2024/activites/dashboard",nextraLayout:t.ZP,themeConfig:r.Z};function u(e){let a=Object.assign({h2:"h2"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h2,{id:"argo-cd-기여-현황",children:"Argo CD 기여 현황"}),"\n",(0,o.jsx)(d.Z,{contributers:["iamhansko","daengdaengLee","leehosu","thisishwan2","eugene70","juwon8891","mg5566","imscow11253","mirageoasis","eogns47","xcelxlorx","nueavv","Gaic4o","Junseokee","D0ri123","jcy0308","jjoonior","bianbbc87","SeoJimin1234"],owner:"argoproj",repo:"argo-cd"}),"\n",(0,o.jsx)(a.h2,{id:"argo-workflows-기여-현황",children:"Argo Workflows 기여 현황"}),"\n",(0,o.jsx)(d.Z,{contributers:["iamhansko","daengdaengLee","leehosu","thisishwan2","eugene70","juwon8891","mg5566","imscow11253","mirageoasis","eogns47","xcelxlorx","nueavv","Gaic4o","Junseokee","D0ri123","jcy0308","jjoonior","bianbbc87","SeoJimin1234"],owner:"argoproj",repo:"argo-workflows"})]})}a.default=(0,i.j)(m)},5696:function(){}},function(e){e.O(0,[2016,2376,9200,9774,2888,179],function(){return e(e.s=2852)}),_N_E=e.O()}]);