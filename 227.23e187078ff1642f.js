"use strict";(self.webpackChunktswgestion=self.webpackChunktswgestion||[]).push([[227],{3862:(_,b,c)=>{c.d(b,{M:()=>A});var g=c(2177),p=c(4650),d=c(529);let A=(()=>{class e{constructor(m){this.http=m}registerProduct(m){return this.http.post(g.k.CREATE_PRODUCT,m)}getAllProducts(){return this.http.get(g.k.ALL_PRODUCT)}getSingleProduct(m){return this.http.get(g.k.GET_SINGLE_PRODUCT+m)}updateProduct(m,S){return this.http.patch(g.k.UPDATE_PRODUCT+m,S)}}return e.\u0275fac=function(m){return new(m||e)(p.LFG(d.eN))},e.\u0275prov=p.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},5401:(_,b,c)=>{c.r(b),c.d(b,{DocteurModule:()=>R,createTranslateLoader:()=>O});var g=c(6895),p=c(2605),d=c(5439),A=c(5080),e=c(4650),v=c(4508),m=c(1185),S=c(7185),M=c(4484);A.kL.register(...A.zX);let I=(()=>{class r{constructor(t,o,n,a){this.agenceService=t,this.weekendyService=o,this.toastrService=n,this.translateService=a,this.bureauId="",this.color=[{name:"Absolute Zero",hex:"#0048BA"},{name:"Acid Green",hex:"#B0BF1A"},{name:"Aero",hex:"#7CB9E8"},{name:"Aero Blue",hex:"#C9FFE5"},{name:"African Violet",hex:"#B284BE"},{name:"Air Force Blue (RAF)",hex:"#5D8AA8"},{name:"Air Force Blue (USAF)",hex:"#00308F"},{name:"Air Superiority Blue",hex:"#72A0C1"},{name:"Alabama Crimson",hex:"#AF002A"},{name:"Alabaster",hex:"#F2F0E6"},{name:"Alice Blue",hex:"#F0F8FF"},{name:"Alien Armpit",hex:"#84DE02"}],this.startYear=2023,this.endYear=2100,this.lesannees=[],this.paysId="",this.labeldata=[],this.realData=[],this.finalData=[],this.allData=[],this.allDatav=[],this.obj={},this.realdata=[],this.colordata=[],this.listSectionByZone=[],this.listCaBureauTSW=[],this.listDate=[],this.listAnnee=[],this.keyLanguage="userLanguage",this.disabled=!1,this.limitSelection=!1,this.limitShow=!1,this.ShowFilter=!0,this.showAll=!0,this.dropdownSettings={},this.translateService.use(localStorage.getItem(this.keyLanguage))}ngOnInit(){this.generateYearsBetween(this.startYear,this.endYear),this.getAllCaBureauTSW(),this.dropdownSettings={singleSelection:!0,defaultOpen:!1,idField:"value",textField:"year",tooltipField:"item_tooltip",enableCheckAll:this.showAll,itemsShowLimit:999999,allowSearchFilter:this.ShowFilter}}getAllCaBureauTSW(){const t=Date(),o=d(t).format("MM-YYYY"),n=new Date(o.split("-")[1]).getFullYear();console.log("ici test",n),this.agenceService.siegeBureau("TSW-CI").subscribe({next:i=>{const h=window.navigator.language||window.navigator.language;console.log("navigator language: "+h),d.locale(h),this.bureauId=i._id,this.weekendyService.docteurWeekendies(this.bureauId).subscribe({next:s=>{console.log("res",s);for(let l=0;l<s.length;l++)console.log(d(s[l].mois).format("MM-YYYY")),new Date(d(s[l].mois).format("MM-YYYY").split("-")[1]).getFullYear()==n&&(console.log("ici voyonss",new Date(s[l].mois.split("-")[1]).getFullYear()),this.listCaBureauTSW.push(s[l]),this.listDate.push(d(s[l].mois).format("MMMM-YYYY")),this.realdata.push(s[l].caTotal),this.labeldata.push(d(s[l].mois).format("MMMM-YYYY")),"january"===d(s[l].mois).format("MMMM")||"janvier"===d(s[l].mois).format("MMMM")?this.colordata.push(this.color[0].name):"february"===d(s[l].mois).format("MMMM")||"f\xe9vrier"===d(s[l].mois).format("MMMM")?this.colordata.push(this.color[1].name):"march"===d(s[l].mois).format("MMMM")||"mars"===d(s[l].mois).format("MMMM")?this.colordata.push(this.color[2].name):"april"===d(s[l].mois).format("MMMM")||"avril"===d(s[l].mois).format("MMMM")?this.colordata.push(this.color[3].name):"May"===d(s[l].mois).format("MMMM")||"Mai"===d(s[l].mois).format("MMMM")?(console.log(d(s[l].mois).format("MMMM")),this.colordata.push(this.color[4].name)):"june"===d(s[l].mois).format("MMMM")||"juin"===d(s[l].mois).format("MMMM")?this.colordata.push(this.color[5].name):"july"===d(s[l].mois).format("MMMM")||"juillet"===d(s[l].mois).format("MMMM")?this.colordata.push(this.color[6].name):"august"===d(s[l].mois).format("MMMM")||"ao\xfbt"===d(s[l].mois).format("MMMM")?this.colordata.push(this.color[7].name):"semptember"===d(s[l].mois).format("MMMM")||"semptembre"===d(s[l].mois).format("MMMM")?this.colordata.push(this.color[8].name):"october"===d(s[l].mois).format("MMMM")||"octobre"===d(s[l].mois).format("MMMM")?this.colordata.push(this.color[9].name):"november"===d(s[l].mois).format("MMMM")||"novembre"===d(s[l].mois).format("MMMM")?this.colordata.push(this.color[10].name):this.colordata.push(this.color[11].name));this.RenderChart(this.labeldata,this.realdata,this.colordata,"bar","barchart")},error:s=>{console.log(s),this.toastrService.error(s.statusText)}})},error:i=>{console.log(i)}})}RenderChart(t,o,n,a,i){new A.kL(i,{type:a,data:{labels:t,datasets:[{label:"Chiffre d'affaire",data:o,backgroundColor:n,borderColor:["rgba(255, 99, 132, 1)"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})}generateYearsBetween(t=2e3,o=2100){const n=o||(new Date).getFullYear();let a=[];for(var i=t;i<=n;i++)a.push(t),t++;for(let h=0;h<a.length;h++)this.listAnnee.push({year:a[h],value:a[h]});this.lesannees=this.listAnnee}onItemSelect(t){console.log("onItemSelect",t)}onItemDeSelect(t){console.log("onItem DeSelect",t)}onDropDownClose(){console.log("dropdown closed")}toogleShowAll(){this.showAll=!this.showAll,this.dropdownSettings=Object.assign({},this.dropdownSettings,{enableCheckAll:this.showAll})}toogleShowFilter(){this.ShowFilter=!this.ShowFilter,this.dropdownSettings=Object.assign({},this.dropdownSettings,{allowSearchFilter:this.ShowFilter})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.q),e.Y36(m.x),e.Y36(S._W),e.Y36(M.sK))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-docteur"]],decls:39,vars:12,consts:[[1,"container-fluid"],[1,"d-sm-flex","align-items-center","justify-content-between","mb-4"],[1,"h3","mb-0","text-gray-800"],[1,"row"],[1,"col-xl-4","col-md-6","mb-4"],[1,"card","border-left-primary","border-bottom-primary","shadow","h-100","py-2"],["routerLink","/docteur/create-vente",1,"btn"],[1,"card-body"],[1,"row","no-gutters","align-items-center"],[1,"col","mr-2"],[1,"text-xs","font-weight-bold","text-primary","text-uppercase","mb-1"],[1,"col-auto"],[1,"fas","fa-calendar","fa-2x","text-gray-300"],[1,"card","border-left-success","shadow","h-100","py-2"],["routerLink","/docteur/liste-vente",1,"btn"],[1,"text-xs","font-weight-bold","text-success","text-uppercase","mb-1"],[1,"fas","fa-dollar-sign","fa-2x","text-gray-300"],[1,"col-xl-12","col-lg-12"],[1,"card","shadow","mb-4"],[1,"card-header","py-3","d-flex","flex-row","align-items-center","justify-content-between"],[1,"m-0","font-weight-bold","text-primary"],[1,""],["id","barchart"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),e._uU(3),e.ALo(4,"translate"),e.qZA()(),e.TgZ(5,"div",3)(6,"div",4)(7,"div",5)(8,"a",6)(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",10),e._uU(13),e.ALo(14,"translate"),e.qZA()(),e.TgZ(15,"div",11),e._UZ(16,"i",12),e.qZA()()()()()(),e.TgZ(17,"div",4)(18,"div",13)(19,"a",14)(20,"div",7)(21,"div",8)(22,"div",9)(23,"div",15),e._uU(24),e.ALo(25,"translate"),e.qZA()(),e.TgZ(26,"div",11),e._UZ(27,"i",16),e.qZA()()()()()()(),e.TgZ(28,"div",3)(29,"div",17)(30,"div",18)(31,"div",19)(32,"h6",20),e._uU(33),e.ALo(34,"translate"),e.qZA(),e._UZ(35,"div",3),e.qZA(),e.TgZ(36,"div",7)(37,"div",21),e._UZ(38,"canvas",22),e.qZA()()()()()()),2&t&&(e.xp6(3),e.Oqu(e.lcZ(4,4,"GestionVenteDocteur")),e.xp6(10),e.hij(" ",e.lcZ(14,6,"GestionVente"),""),e.xp6(11),e.hij(" ",e.lcZ(25,8,"ListeVente"),""),e.xp6(9),e.Oqu(e.lcZ(34,10,"CHIFFREDAFFAIREDoctor")))},dependencies:[p.rH,M.X$]}),r})();var Z=c(7579),T=c(3862),D=c(5415);function q(r,u){if(1&r&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td")(7,"a",13),e._UZ(8,"i",14),e.qZA(),e._uU(9,"\xa0 "),e.qZA()()),2&r){const t=u.$implicit;e.xp6(2),e.Oqu(e.xi3(3,2,t.mois,"MMMM-yyyy")),e.xp6(3),e.hij("",t.caTotal," FCFA")}}let U=(()=>{class r{constructor(t,o,n,a,i){this.agenceService=t,this.productService=o,this.weekendyService=n,this.toastrService=a,this.translateService=i,this.bureauId="",this.keyLanguage="userLanguage",this.listWeekendyDocteur=[],this.weekendyItem=[],this.dtoptions={},this.dtTrigger=new Z.x,this.translateService.use(localStorage.getItem(this.keyLanguage))}ngOnInit(){this.getBureau(),console.log(this.bureauId),this.dtoptions={pagingType:"full_numbers",searching:!0,lengthChange:!1,language:{searchPlaceholder:""}}}getBureau(){this.agenceService.siegeBureau("TSW-CI").subscribe({next:o=>{this.bureauId=o._id,this.weekendyService.docteurWeekendies(this.bureauId).subscribe({next:n=>{for(let i=0;i<n.length;i++){const h={mois:String,caTotal:Number,Listproduits:this.weekendyItem};h.mois=n[i].mois,h.caTotal=n[i].caTotal,console.log("obj",h);for(let s=0;s<n[i].items.length;s++){const l={poductname:String,quantity:Number};this.productService.getSingleProduct(n[i].items[s].productId).subscribe({next:y=>{l.poductname=y.name,l.quantity=n[i].items[s].quantity,this.weekendyItem.push(l)},error:y=>{console.log(y),this.toastrService.error(y.statusText)}})}h.Listproduits=this.weekendyItem,this.listWeekendyDocteur.push(h)}console.log("listWeekendyDocteur",this.listWeekendyDocteur),this.dtTrigger.next(null),console.log("weekendy",this.listWeekendyDocteur)},error:n=>{console.log(n),this.toastrService.error(n.statusText)}})},error:o=>{console.log(o)}})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.q),e.Y36(T.M),e.Y36(m.x),e.Y36(S._W),e.Y36(M.sK))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-liste-vente"]],decls:29,vars:15,consts:[[1,"container-fluid"],[1,"shadow","p-3","mb-5","bg-body","rounded"],[1,"h3","mb-2","text-gray-800"],["routerLink","/docteur",1,"btn","btn-outline-primary"],[1,"card","shadow","mb-4"],[1,"card-header","py-3"],[1,"m-0","font-weight-bold","text-primary"],["routerLink","/docteur/create-vente",1,"btn","btn-primary"],[1,"fa","fa-plus"],[1,"card-body"],[1,"table-responsive"],["datatable","",1,"row-border","hover","table","table-bordered",3,"dtOptions","dtTrigger"],[4,"ngFor","ngForOf"],[1,"btn","btn-success"],[1,"fa","fa-eye"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"a",3),e._uU(6,"back"),e.qZA()(),e.TgZ(7,"div",4)(8,"div",5)(9,"h6",6)(10,"a",7),e._UZ(11,"i",8),e._uU(12),e.ALo(13,"translate"),e.qZA()()(),e.TgZ(14,"div",9)(15,"div",10)(16,"table",11)(17,"thead")(18,"tr")(19,"th"),e._uU(20),e.ALo(21,"translate"),e.qZA(),e.TgZ(22,"th"),e._uU(23),e.ALo(24,"translate"),e.qZA(),e.TgZ(25,"th"),e._uU(26,"Action"),e.qZA()()(),e.TgZ(27,"tbody"),e.YNc(28,q,10,5,"tr",12),e.qZA()()()()()()),2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,7,"GestionWeekendy")," "),e.xp6(9),e.hij("\xa0",e.lcZ(13,9,"EnregistrerWeekendy")," "),e.xp6(4),e.Q6J("dtOptions",o.dtoptions)("dtTrigger",o.dtTrigger),e.xp6(4),e.Oqu(e.lcZ(21,11,"MoisDe")),e.xp6(3),e.Oqu(e.lcZ(24,13,"CHIFFREDAFFAIRE")),e.xp6(5),e.Q6J("ngForOf",o.listWeekendyDocteur))},dependencies:[g.sg,p.rH,D.G,g.uU,M.X$]}),r})();var Y=c(9751),x=c(6158),k=c(6252);class E{constructor(){this.items=new Array}updateFrom(u){this.items=u.items,this.weekendy_mois=u.weekendy_mois,this.annee=u.annee,this.caTotal=u.caTotal}}var f=c(4006),V=c(5188),P=c(8067),F=c(3056);const C=function(r){return{"is-invalid":r}};function B(r,u){if(1&r){const t=e.EpF();e.TgZ(0,"tr")(1,"td",30)(2,"input",31,32),e.NdJ("ngModelChange",function(n){const i=e.CHM(t).$implicit;return e.KtG(i.name=n)}),e.qZA()(),e.TgZ(4,"td")(5,"input",33,34),e.NdJ("ngModelChange",function(n){const i=e.CHM(t).$implicit;return e.KtG(i.qty=n)})("input",function(){const a=e.CHM(t).$implicit,i=e.oxw();return e.KtG(i.addItem(a,a.qty))}),e.qZA()(),e.TgZ(7,"td")(8,"input",35,36),e.NdJ("ngModelChange",function(n){const i=e.CHM(t).$implicit;return e.KtG(i.price=n)}),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA()()}if(2&r){const t=u.$implicit,o=u.index,n=e.MAs(3),a=e.MAs(6),i=e.MAs(9);e.oxw();const h=e.MAs(10);e.xp6(2),e.MGl("name","productName[",o,"]"),e.Q6J("ngClass",e.VKq(9,C,h.submitted&&n.invalid))("ngModel",t.name),e.xp6(3),e.Q6J("ngClass",e.VKq(11,C,h.submitted&&a.invalid))("ngModel",t.qty),e.xp6(3),e.MGl("name","price[",o,"]"),e.Q6J("ngClass",e.VKq(13,C,h.submitted&&i.invalid))("ngModel",t.price),e.xp6(3),e.hij(" ",t.price*t.qty||0," ")}}const L=function(){return{standalone:!0}},w="weekendy",j=[{path:"",component:I},{path:"create-vente",component:(()=>{class r{constructor(t,o,n,a,i,h,s,l){this.fb=t,this.agenceService=n,this.productService=a,this.weekendyService=i,this.toastrService=h,this.salaireService=s,this.translateService=l,this.submitted=!1,this.myDate=Date.now(),this.dropdownSettings={},this.dropdownSettingsAnnee={},this.buttonloading=!1,this.disabled=!1,this.limitSelection=!1,this.limitShow=!1,this.ShowFilter=!0,this.showAll=!0,this.listProducts=[],this.listBureau=[],this.loading=!0,this.liveDemoVisible=!1,this.subscribers=new Array,this.chiffreAf=0,this.hoveredDate=null,this.toDate=null,this.weekend=new E,this.dtoptions={},this.dtTrigger=new Z.x,this.moisList=[],this.anneeList=[],this.keyLanguage="userLanguage",this.WEEKENDY_DOCTEUR_KEY="weekendy",this.translateService.use(localStorage.getItem(this.keyLanguage)),this.fromDate=o.getToday(),this.toDate=o.getNext(o.getToday(),"d",30)}get(){return this.subscriptionObservable=new Y.y(t=>(this.subscribers.push(t),t.next(this.retrieve()),()=>{this.subscribers=this.subscribers.filter(o=>o!==t)}))}ngOnInit(){this.getBureau(),this.getAllProducts(),this.getALLmois(),this.getAllannee(),this.dropdownSettings={singleSelection:!0,defaultOpen:!1,idField:"_id",textField:"valueMois",tooltipField:"item_tooltip",enableCheckAll:this.showAll,itemsShowLimit:999999,allowSearchFilter:this.ShowFilter},this.dropdownSettingsAnnee={singleSelection:!0,defaultOpen:!1,idField:"_id",textField:"value",tooltipField:"item_tooltip",enableCheckAll:this.showAll,itemsShowLimit:999999,allowSearchFilter:this.ShowFilter}}getBureau(){this.agenceService.siegeBureau("TSW-CI").subscribe({next:o=>{this.agence=o.bureau_name,this.bureauId=o._id,console.log(o)},error:o=>{console.log(o),this.loading=!1}})}getALLmois(){this.salaireService.getAllMois().subscribe(t=>{this.moisList=t,console.log(this.moisList)})}getAllannee(){this.salaireService.getAllAnnee().subscribe(t=>{this.anneeList=t,console.log(this.anneeList)})}getAllProducts(){this.productService.getAllProducts().subscribe({next:t=>{this.listProducts=t,console.log(this.listProducts),this.loading=!1},error:t=>{console.log(t),this.loading=!1}})}create(t){this.submitted=!0,console.log("form",t.value);const o={bureauId:this.bureauId,mois:t.value.weekendy_mois,periode_debut:t.value.start,periode_fin:t.value.end,items:JSON.parse(localStorage.getItem(w)).items,caTotal:JSON.parse(localStorage.getItem(w)).caTotal,createdAt:Date()};console.log("formData",o),this.weekendyService.createWeekendyDocteur(o).subscribe({next:n=>{console.log(n),this.toastrService.success("Le information a bien \xe9t\xe9 ajout\xe9 \xe0 la base de donn\xe9es !")&&(localStorage.removeItem(w),this.buttonloading=!1)},error:n=>{console.log(n),this.toastrService.error(n.error.message),this.buttonloading=!1}})}empty(){const t=new x.O;this.save(t),this.dispatch(t)}addItem(t,o){const n=this.retrieve();let a=n.items.find(i=>i.productId===t._id);void 0===a&&(a=new k.Z,a.productId=t._id,n.items.push(a),console.log("weekendy==> ",n)),a.quantity=o,n.items=n.items.filter(i=>i.quantity>0),this.calculateCart(n),this.save(n),this.dispatch(n),this.getvaluemontant()}calculateCart(t){t.caTotal=t.items.map(o=>o.quantity*this.listProducts.find(n=>n._id===o.productId).price).reduce((o,n)=>o+n,0)}retrieve(){const t=new x.O,o=localStorage.getItem(this.WEEKENDY_DOCTEUR_KEY);return o&&t.updateFrom(JSON.parse(o)),t}save(t){localStorage.setItem(this.WEEKENDY_DOCTEUR_KEY,JSON.stringify(t))}dispatch(t){this.subscribers.forEach(o=>{try{o.next(t)}catch{}})}getlocaldata(){return this.ValeurMontant=localStorage.getItem(this.WEEKENDY_DOCTEUR_KEY),console.log(this.ValeurMontant),this.ValeurMontant}getvaluemontant(){this.chiffreAf=JSON.parse(localStorage.getItem(w)).caTotal}onItemSelect(t){this.mois=t._id,console.log("onItemSelect",this.mois)}onItemDeSelect(t){console.log("onItem DeSelect",t)}onDropDownClose(){console.log("dropdown closed")}toogleShowAll(){this.showAll=!this.showAll,this.dropdownSettings=Object.assign({},this.dropdownSettings,{enableCheckAll:this.showAll})}toogleShowFilter(){this.ShowFilter=!this.ShowFilter,this.dropdownSettings=Object.assign({},this.dropdownSettings,{allowSearchFilter:this.ShowFilter})}onItemSelectAnnee(t){this.annee=t._id,console.log("ann\xe9e",this.annee)}onItemDeSelectAnnee(t){console.log("onItem DeSelect",t)}onDropDownCloseAnnee(){console.log("dropdown closed")}toogleShowAllAnnee(){this.showAll=!this.showAll,this.dropdownSettingsAnnee=Object.assign({},this.dropdownSettingsAnnee,{enableCheckAll:this.showAll})}toogleShowFilterAnnee(){this.ShowFilter=!this.ShowFilter,this.dropdownSettingsAnnee=Object.assign({},this.dropdownSettingsAnnee,{allowSearchFilter:this.ShowFilter})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(f.qu),e.Y36(V.vL),e.Y36(v.q),e.Y36(T.M),e.Y36(m.x),e.Y36(S._W),e.Y36(P.o),e.Y36(M.sK))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-create-vente"]],decls:96,vars:63,consts:[[1,"container-fluid"],[1,"shadow","p-3","mb-5","bg-body","rounded"],[1,"h3","mb-2","text-gray-800"],["routerLink","/docteur",1,"btn","btn-outline-primary"],[1,"row"],[1,"col-md-12"],[3,"ngSubmit"],["weekendyForm","ngForm"],["type","submit",1,"btn","btn-primary"],["type","button","data-dismiss","modal","aria-label","Close",1,"btn","btn-danger"],[1,"container-fluid","pt-2","mb-5"],[1,"card","border-secondary"],[1,"card-body"],[1,"card-title"],[1,"col-md-4"],[1,"form-group"],["for","name"],["type","hidden","name","bureauId","id","bureauId",1,"form-control",3,"ngModel","value","ngModelChange"],[1,"form-control"],["for","mois"],["id","weekendy_mois",3,"data","ngModel","disabled","settings","ngModelOptions","ngModelChange","onDropDownClose","onSelect","onDeSelect"],["for","annee"],["id","annee",3,"data","ngModel","disabled","settings","ngModelOptions","ngModelChange","onDropDownClose","onSelect","onDeSelect"],[1,"card","border-secondary","mt-2"],[1,"card-title","d-flex","justify-content-between"],[1,"table"],["width","25%"],[4,"ngFor","ngForOf"],[1,"table","table-sm","table-dark"],["scope","col"],["scope","row"],["type","text","id","productName","required","","readonly","",1,"form-control",3,"name","ngClass","ngModel","ngModelChange"],["ProductName","ngModel"],["type","number","name","qty","id","qty","required","",1,"form-control",3,"ngClass","ngModel","ngModelChange","input"],["ProductQty","ngModel"],["type","number","id","price","required","",1,"form-control",3,"name","ngClass","ngModel","ngModelChange"],["ProductPrice","ngModel"]],template:function(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"a",3),e._uU(6,"back"),e.qZA()(),e.TgZ(7,"div",4)(8,"div",5)(9,"form",6,7),e.NdJ("ngSubmit",function(){e.CHM(n);const i=e.MAs(10);return e.KtG(o.create(i))}),e.TgZ(11,"button",8),e._uU(12),e.ALo(13,"translate"),e.qZA(),e._uU(14,"\xa0 "),e.TgZ(15,"button",9),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"div",10)(19,"div",4)(20,"div",5)(21,"div",11)(22,"div",12),e._UZ(23,"h4",13),e.TgZ(24,"div",4)(25,"div",14)(26,"div",15)(27,"label",16),e._uU(28),e.ALo(29,"translate"),e.qZA(),e.TgZ(30,"input",17),e.NdJ("ngModelChange",function(i){return o.weekend.bureauId=i}),e.qZA(),e.TgZ(31,"label",18),e._uU(32),e.qZA()()(),e.TgZ(33,"div",14)(34,"div",15)(35,"label",19),e._uU(36),e.ALo(37,"translate"),e.qZA(),e.TgZ(38,"ng-multiselect-dropdown",20),e.NdJ("ngModelChange",function(i){return o.weekend.weekendy_mois=i})("onDropDownClose",function(){return o.onDropDownClose()})("onSelect",function(i){return o.onItemSelect(i)})("onDeSelect",function(i){return o.onItemDeSelect(i)}),e.qZA()()(),e.TgZ(39,"div",14)(40,"div",15)(41,"label",21),e._uU(42),e.ALo(43,"translate"),e.qZA(),e.TgZ(44,"ng-multiselect-dropdown",22),e.NdJ("ngModelChange",function(i){return o.weekend.annee=i})("onDropDownClose",function(){return o.onDropDownCloseAnnee()})("onSelect",function(i){return o.onItemSelectAnnee(i)})("onDeSelect",function(i){return o.onItemDeSelectAnnee(i)}),e.qZA()()()()()(),e.TgZ(45,"div",23)(46,"div",12)(47,"h4",24),e._uU(48),e.ALo(49,"translate"),e.qZA(),e.TgZ(50,"div",4)(51,"table",25)(52,"thead")(53,"tr")(54,"th",26),e._uU(55),e.ALo(56,"translate"),e.qZA(),e.TgZ(57,"th",26),e._uU(58),e.ALo(59,"translate"),e.qZA(),e.TgZ(60,"th",26),e._uU(61),e.ALo(62,"translate"),e.qZA(),e.TgZ(63,"th",26),e._uU(64),e.ALo(65,"translate"),e.qZA()()(),e.TgZ(66,"tbody"),e.YNc(67,B,12,15,"tr",27),e.qZA()()()()()()()()(),e.TgZ(68,"div",4)(69,"div",5)(70,"div",23)(71,"div",12)(72,"h4",13),e._uU(73),e.ALo(74,"translate"),e.qZA(),e._UZ(75,"div",15),e.TgZ(76,"table",28)(77,"thead")(78,"tr")(79,"th",29),e._uU(80),e.ALo(81,"translate"),e.qZA(),e.TgZ(82,"th",29),e._uU(83,"%"),e.qZA(),e.TgZ(84,"th",29),e._uU(85),e.ALo(86,"translate"),e.qZA()()(),e.TgZ(87,"tbody")(88,"tr")(89,"th",30),e._uU(90),e.ALo(91,"translate"),e.qZA(),e.TgZ(92,"td"),e._uU(93,"..."),e.qZA(),e.TgZ(94,"td"),e._uU(95),e.qZA()()()()()()()()()()()}2&t&&(e.xp6(3),e.hij(" ",e.lcZ(4,31,"GestionWeekendy")," "),e.xp6(9),e.Oqu(e.lcZ(13,33,"Sauver")),e.xp6(4),e.Oqu(e.lcZ(17,35,"Annuler")),e.xp6(12),e.Oqu(e.lcZ(29,37,"NomBureau")),e.xp6(2),e.Q6J("ngModel",o.weekend.bureauId)("value",o.bureauId),e.xp6(2),e.hij(" ",o.agence," "),e.xp6(4),e.Oqu(e.lcZ(37,39,"MoisDe")),e.xp6(2),e.Q6J("data",o.moisList)("ngModel",o.weekend.weekendy_mois)("disabled",o.disabled)("settings",o.dropdownSettings)("ngModelOptions",e.DdM(61,L)),e.xp6(4),e.Oqu(e.lcZ(43,41,"Annee")),e.xp6(2),e.Q6J("data",o.anneeList)("ngModel",o.weekend.annee)("disabled",o.disabled)("settings",o.dropdownSettingsAnnee)("ngModelOptions",e.DdM(62,L)),e.xp6(4),e.hij(" ",e.lcZ(49,43,"DetailsVente")," "),e.xp6(7),e.Oqu(e.lcZ(56,45,"Produit")),e.xp6(3),e.Oqu(e.lcZ(59,47,"Quantite")),e.xp6(3),e.Oqu(e.lcZ(62,49,"Prix")),e.xp6(3),e.Oqu(e.lcZ(65,51,"Montant")),e.xp6(3),e.Q6J("ngForOf",o.listProducts)("ngForOf",o.weekend.items),e.xp6(6),e.Oqu(e.lcZ(74,53,"DetailsFinanciers")),e.xp6(7),e.Oqu(e.lcZ(81,55,"Libelle")),e.xp6(5),e.Oqu(e.lcZ(86,57,"Montant")),e.xp6(5),e.Oqu(e.lcZ(91,59,"TotalVente")),e.xp6(5),e.Oqu(o.chiffreAf))},dependencies:[g.mk,g.sg,p.rH,f._Y,f.Fj,f.wV,f.JJ,f.JL,f.Q7,F.OP,f.On,f.F,M.X$]}),r})()},{path:"liste-vente",component:U}];let W=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.Bz.forChild(j),p.Bz]}),r})();var N=c(529),J=c(1744);function O(r){return new J.w(r,"./assets/i18n/",".json")}let R=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[g.ez,p.Bz,f.UX,F.ZQ,f.u5,D.T.forRoot(),M.aw.forRoot({defaultLanguage:"en",loader:{provide:M.Zw,useFactory:O,deps:[N.eN]}}),W]}),r})()},1002:(_,b,c)=>{function g(p){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(d){return typeof d}:function(d){return d&&"function"==typeof Symbol&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d})(p)}c.d(b,{Z:()=>g})}}]);