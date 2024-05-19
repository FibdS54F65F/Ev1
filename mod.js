
            
//0// porn vid
let porn = document.getElementById('porn');
function openporn(){
    porn.style.display = 'block'
}
function closeporn(){
    porn.style.display = 'none'
}
let offsetX, offsetY;

porn.addEventListener('mousedown', startDragging);


function startDragging(event) {
    // Calculate the offset between mouse position and the top-left corner of the draggable element
    offsetX = event.clientX - porn.getBoundingClientRect().left;
    offsetY = event.clientY - porn.getBoundingClientRect().top;

    // Add event listeners to handle dragging and dropping
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDragging);
}

function drag(event) {
    // Calculate the new position of the draggable element
    const posX = event.clientX - offsetX;
    const posY = event.clientY - offsetY;

    // Apply the new position
    porn.style.left = `${posX}px`;
    porn.style.top = `${posY}px`;
}

function stopDragging() {
    // Remove event listeners when dragging stops
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDragging);
}




//1// Code so time-out works            
var closeOverlayFunc;
var savechangeFunc;
var openclanleaderboardFunc;
var closeclanleaderboardFunc;
var closetableFunc;
var openlistofplayerFunc;
var closelistofplayerFunc;


// Function to close overlay
function closeOverlay() {
if (closeOverlayFunc) {
closeOverlayFunc();
} else {
console.log("Overlay function not yet defined");
}
}
function savechange() {
if (savechangeFunc) {
savechangeFunc();
} else {
console.log("savechange function not yet defined");
}
}
function openclanleaderboard() {
if (openclanleaderboardFunc) {
openclanleaderboardFunc();
} else {
console.log("openleaderboardfunction not yet defined");
}
}
function closeclanleaderboard() {
if (closeclanleaderboardFunc) {
closeclanleaderboardFunc();
} else {
console.log("closeleaderboardfunction not yet defined");
}
}

function closetable(){
    if (closetableFunc) {
        closetableFunc();
    }  
}

function openlistofplayer() {
if (openlistofplayerFunc) {
    openlistofplayerFunc();
} else {
console.log("openlistofplayer not yet defined");
}
}
function closelistofplayer() {
if (closelistofplayerFunc) {
    closelistofplayerFunc();
} else {
console.log("closelistofplayerfunction not yet defined");
}
}


function openbotsettings() {
if (openbotsettingsFunc) {
openbotsettingsFunc();
} else {
console.log("openbotfunction not yet defined");
}
}
function closebotsettings() {
if (closebotsettingsFunc) {
closebotsettingsFunc();
} else {
console.log("closebotfunction not yet defined");
}
}
function savebotsettingschange() {
if (savebotsettingschangeFunc) {
savebotsettingschangeFunc();
} else {
console.log("savebotsettingschange function not yet defined");
}
}



//2.5// API

function ttismountain(index){
    return a2.pb(index)
}
function ttiswater(index){
    return a2.fj(index)
}
function ttgetowner(index){
    return a2.ek(index)
}
function ttentitycontrolled(index){
    return a2.ej(index)
}
function ttcanown(index){
    return a2.eb(index)
}
function ttisneutral (index){
    return a2.el(index)
}
//3// let values from html be ...    
    let overlay = document.getElementById('overlay');
    let clanleaderboard = document.getElementById('clanleaderboard');
    let listofplayer = document.getElementById('listofplayer')
    let divlogTable = document.getElementById('divlogTable')
    let checkbox1 = document.getElementById('checkbox1');
    let checkbox2 = document.getElementById('checkbox2');
    let checkbox3 = document.getElementById('checkbox3');
    let checkbox4 = document.getElementById('checkbox4');
    let checkboxseedspawnpick = document.getElementById('checkboxseedspawnpick')
    let checkboxghostmode = document.getElementById('checkboxghostmode');
    let inputFieldE = document.getElementById('inputFieldE');
    let inputFieldseedspawn = document.getElementById('inputFieldseedspawn');
    let inputFieldR = document.getElementById('inputFieldR');
    let inputFieldT = document.getElementById('inputFieldT');
    let inputFieldU = document.getElementById('inputFieldU');
    let inputFieldI = document.getElementById('inputFieldI');
    let inputFieldN = document.getElementById('inputFieldN');
    let inputFieldX = document.getElementById('inputFieldX');
    let inputFieldC = document.getElementById('inputFieldC');
    let inputGhostmodetroops= document.getElementById('Ghostmodetroops');
    let inputGhostmodecap= document.getElementById('Ghostmodecap');
    let inputFieldmintroopsme = document.getElementById('inputFieldmintroopsme');
    let inputFieldminsizebot = document.getElementById('inputFieldminsizebot');
    let inputFieldminsizeborderbot = document.getElementById('inputFieldminsizeborderbot');
    let inputFieldmaxdensitybot = document.getElementById('inputFieldmaxdensitybot');
    let inputFieldtroopsattack = document.getElementById('inputFieldtroopsattack');
    let inputFieldattackfreq = document.getElementById('inputFieldattackfreq');
    let inputFieldrefreshrate = document.getElementById('inputFieldrefreshrate');

    
    let mintroopsme = inputFieldmintroopsme.value;
    let minsizebot = inputFieldminsizebot.value;
    let minsizeborderbot = inputFieldminsizeborderbot.value;
    let maxdensitybot = inputFieldmaxdensitybot.value;
    let troopsattack = inputFieldtroopsattack.value;
    let attackfreq = inputFieldattackfreq.value;
    let refreshrate = inputFieldrefreshrate.value;
    let one_vs_one_mod_on = checkbox1.checked;
    let bot_on = checkbox2.checked;
    let autodono_on = checkbox3.checked;
    let specific_seedspawn_on = checkboxseedspawnpick.checked;
    let corgiblue = checkbox4.checked;
    let ghostmode_on = checkboxghostmode.checked;
    let E_key = inputFieldE.value;
    let R_key = inputFieldR.value; 
    let T_key = inputFieldT.value; 
    let U_key = inputFieldU.value;    
    let I_key = inputFieldI.value;
    let N_key = inputFieldN.value; 
    let X_key = inputFieldX.value; 
    let C_key = inputFieldC.value;  
    let Ghostmodetroops = inputGhostmodetroops.value
    let Ghostmodecap = inputGhostmodecap.value

    //4// Functions for the buttons
    let clanleaderboardisvisible = false
    openclanleaderboardFunc = function() {
            clanleaderboard.style.display = 'block';
            clanleaderboardisvisible = true
            if(jm != undefined){generateRankedList()};
            //toggleOverlay()
    }
    openlistofplayerFunc = function() {
        listofplayer.style.display = 'block';
       // clanleaderboardisvisible = true
        if(jm != undefined){generatelistofplayer()};
        //toggleOverlay()
    }
    closelistofplayerFunc = function(){
        listofplayer.style.display = 'none';
    }

    savechangeFunc = function (){
        one_vs_one_mod_on = checkbox1.checked;
        bot_on = checkbox2.checked;
        autodono_on = checkbox3.checked;
        specific_seedspawn_on = checkboxseedspawnpick.checked;
        corgiblue = checkbox4.checked;
        ghostmode_on = checkboxghostmode.checked;
        E_key = inputFieldE.value;
        specific_seedspawn = inputFieldseedspawn.value;
        R_key = inputFieldR.value; 
        T_key = inputFieldT.value; 
        U_key = inputFieldU.value;    
        I_key = inputFieldI.value;
        N_key = inputFieldN.value; 
        X_key = inputFieldX.value; 
        C_key = inputFieldC.value;  
        Ghostmodetroops = inputGhostmodetroops.value
        Ghostmodecap = inputGhostmodecap.value
        tn = ghostmode_on ? Ghostmodecap : 150
        q4 = ghostmode_on ? Ghostmodetroops : 512
    }
    savebotsettingschangeFunc = function (){
        mintroopsme = inputFieldmintroopsme.value;
        minsizebot = inputFieldminsizebot.value;
        minsizeborderbot = inputFieldminsizeborderbot.value;
        maxdensitybot = inputFieldmaxdensitybot.value;
        troopsattack = inputFieldtroopsattack.value;
        attackfreq = inputFieldattackfreq.value;
        refreshrate = inputFieldrefreshrate.value;
    }
    closeOverlayFunc = function() {
        overlay.style.display = 'none';
    }
    openbotsettingsFunc = function() {
        botsettings.style.display = 'block';
    }
    closebotsettingsFunc = function(){
        botsettings.style.display = 'none';
    }
    function toggleOverlay() {
        if (overlay.style.display === 'none') {
            overlay.style.display = 'block';
        } else {
            overlay.style.display = 'none';
        }
    }
    closeclanleaderboardFunc = function(){
        clanleaderboard.style.display = 'none';
        clanleaderboardisvisible = false
    }
const ws14 = new WebSocket('ws://localhost:8080');
// Add event listener to the 'S' key
document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 'S') {
        toggleOverlay();
        savechange();
        //hereee
       // ws.send('Specific function called!')
    }
});

//5// functions for the lists
            document.getElementById("rankedList").addEventListener('click', handleListItemClick);
            function handleListItemClick(event) {
                var playerId = event.target.dataset.xValue;
                // Call your function here, passing the playerId if needed
                f.k7(playerId, 800, !1, 0)
            }

            function generateRankedList() {
                var rankedList = document.getElementById("rankedList");//.addEventListener('click', handleListItemClick);
                rankedList.innerHTML = " ";
                var values = []
                for (var x = 0; x <= 511; x++) {
                    if(jm[x].toLowerCase().startsWith("[corgi]"))
                    
                    {values.push({ x: x, f2x: ez[x], namelb: jm[x] })};
                }
                values.sort(function(a, b) {
                    return b.f2x - a.f2x;
                });
                values.forEach(function(item) {
                    var li2 = document.createElement("li");
                    li2.textContent = item.namelb+ ":" + item.f2x;
                    li2.dataset.xValue = item.x;
                    rankedList.appendChild(li2);
                });
            }




            
            function make137list(){
                var one37list = document.getElementById("137list");//.addEventListener('click', handleListItemClick);
                    //one37list.innerHTML = " ";

                // var one37runs = []
                seedspawnforlist = specific_seedspawn_on?specific_seedspawn:general_seedspawn

                var li2 = document.createElement("li");
                li2.textContent = "Pixels:" + ez[eU]+ "Troops:" + eV[eU] + "BotCode-"+mintroopsme+"-"+minsizebot+"-"+minsizeborderbot+"-"+maxdensitybot+"-"+troopsattack+"-"+attackfreq+"-"+refreshrate+"-seedspawn:"+seedspawnforlist;
                one37list.appendChild(li2);
            }
//6// Functions for hover
var teamofplayer = 22
var occupationteam
var teamlands = "glob"
function handleHover(event) {
    var canvasforhover = document.getElementById("canvasA");
    var ctx = canvasforhover.getContext("2d");
    var rect = canvasforhover.getBoundingClientRect();
    var x = Math.floor(aK.nH * event.clientX) 
    var y = Math.floor(aK.nH * event.clientY)
    var whatentityisthis = "no_owner"
    var landofhover = " "
    //edit fa is what u need gA, gB are x and y coords
    var fT = aj.fU(x),
        fV = aj.fW(y),
        fX = aj.fY(fT, fV),
        fa = aj.fa(fX);
    

    
    if(cycle + ticknow >= 2 ){
        if(ttiswater(fa)){whatentityisthis = "water"}
        if(ttismountain(fa)){whatentityisthis = "Mountains"}
        if(ttentitycontrolled(fa)){whatentityisthis = jm[ttgetowner(fa)];landofhover = "(" + ez[ttgetowner(fa)]+")";
        //teamofplayer = b4.iO[ttgetowner(fa)];
        //occupationteam = teamlands[b4.iO[ttgetowner(fa)]]
        }
        if(ttisneutral(fa)){whatentityisthis = "Free land"}
        document.getElementById("coordinatesDisplay").textContent = whatentityisthis+ landofhover;
        document.getElementById("hoveroverlay").style.display = "block";
        }
}
document.getElementById("canvasA").addEventListener("mousemove", handleHover);

//7// Functions needed for bot



//8// Function to hande when the game starts
let cycle = 0
var endofopening
let botlistnormal = [];
var numberofbots
var ticknow = 0
var biggesteammm = 0
function gamestarted(){
    donationlog = []
    ticknow = 0
    cycle = 1
    endofopening = false
    numberofbots = 512
    
    
}

//9// function to handle every tick
    //let isattacking = false
    let lastpersonidonatedto = null
    let isattacking = false
    let letsnotspamcontnuousattacks = false
    let percentagefordono = 150
    //let autodono_on = true
    let recentlydonated = false
    let needtospeedup = false;
    let needtoslowdown = false;
    let speed = 2
    function tickfunction(){
        
        //addtick
        ticknow++
        if(cycle == 18 && ticknow == 50){console.log("Land: ", ez[eU], "  Troops: ", eV[eU]); make137list()}

        //botranking
        if (ticknow % refreshrate === 0 || ticknow == 0){
            //ranking of the bots
            generatelistofplayer()
            if(bot_on || clanleaderboardisvisible){
                generateRankedList()

                botlistnormal = [];
                for (let i = 0; i<= 512; i++){
                    if(ez[i] > 0)
                    if(borderingalgo(eU, i).length>0)
                    botlistnormal.push(i)
                }
                botlistnormal.sort((a, b) => ez[b] - ez[a])
            }
        }

        //new cycle

        if (ticknow >= 100) {
        ticknow -= 100
        cycle += 1
        // console.log(teamlands)
        //  console.log((hv[eU] + hw[eU])/2,",,",ap.eB)
    //    console.log("largestTeam:",biggesteammm)
        //  console.log(borderingalgo(eU, 'Neutral').length)
        }

        //autodonate
        if(autodono_on && eV[eU]/ez[eU]>100 && lastpersonidonatedto != null && !recentlydonated){
            console.log("should be donating")
            recentlydonated = true
            setTimeout(() => {recentlydonated = false; aW.lV.lg(percentagefordono, lastpersonidonatedto)}, 5000)

        }

        //attackatred
    //    if(ticknow == 80 && eV[eU]/ez[eU]>100){
        //      attackatred()
        //}



    //         console.log("can read 1")


        if(bot_on){

        //     console.log(ticknow)
            if(ticknow == 71 && cycle == 1){attackingfunction(288, 512)}
            if(ticknow == 76 && cycle == 2){attackingfunction(352, 512)}
            if(ticknow == 74 && cycle == 3){attackingfunction(339, 512)}
            if(ticknow == 72 && cycle == 4){attackingfunction(307, 512)}
            if(ticknow == 70 && cycle == 5){attackingfunction(320, 512)}
            if(ticknow == 20 && cycle == 6){attackingfunction(50, 512)}
            if(ticknow == 40 && cycle == 6){attackingfunction(320, 512)}
            if(ticknow == 70 && cycle == 6){attackingfunction(320, 512)}
            if(ticknow == 10 && cycle >= 7){attackingfunction(50, 512)}

            percentageforcontexpansion = (1000 * 800) / eV[eU]
            if (
                ((cycle == 6 && ticknow >= 40) || cycle >= 7) &&
                a4.a6n(eU) <= 800 &&
                a4.a6n(eU) >= 10 &&
                !letsnotspamcontnuousattacks
            ) {
                attackingfunction(percentageforcontexpansion,512)
                letsnotspamcontnuousattacks = true
                setTimeout(() => {
                letsnotspamcontnuousattacks = false
                }, 100)
            }
        }


        if(bot_on && !singleplayer && ticknow%2 === 0){
            if(endofopening){
                earlygame()
                
            }
            if(cycle>=15){console.log(middlegame())}
            if(cycle>=3 && ez[eU] < 12){newgame()}
    //        if(cycle>=22){
       //         donate()
        //    }

        }


        if (borderingalgo(eU, 'Neutral') == 0){
            endofopening = true; 
        };
        multiplayerslowdown = singleplayer ? 1:7
       // console.log(isattacking, endofopening, bot_on, ticknow % multiplayerslowdown === 0 )
        if(!isattacking && endofopening && bot_on && singleplayer){
            for (let i =0; i<= botlistnormal.length; i++){
                if( !isattacking && !a4.hk(eU, botlistnormal[i]) && ez[botlistnormal[i]] > minsizebot  && botlistnormal[i] != eU  &&  eV[eU] > mintroopsme && borderingalgo(eU, botlistnormal[i]).length> minsizeborderbot  
                && (eV[botlistnormal[i]]/ez[botlistnormal[i]] < maxdensitybot)){ //|| (eU[i]/f1[i] < 0.7 && eU[eW]/f1[eW] > 1) || (eU[i]/f1[i] < 0.4 && eU[eW]/f1[eW] > 0.60)|| (eU[i]/f1[i] < 0.2 && eU[eW]/f1[eW] > 0.40) || (eU[i]/f1[i] < 0.05 && eU[eW]/f1[eW] > 0.20)) ){
                    isattacking = true
                    setTimeout(() => {isattacking = false; console.log("attack"); attackingfunction(troopsattack*ez[botlistnormal[i]]/eV[eU], botlistnormal[i])}, singleplayer ? attackfreq : 500)
                }
            }

            if(singleplayer){
            for (let i = 0; i<= botlistnormal.length; i++){
                if(a4.hk(eU, botlistnormal[i]) && eV[botlistnormal[i]]/ez[botlistnormal[i]] > maxdensitybot){
                    cancelfunction(botlistnormal[i]);
                }
            }
            }
        }
    }
//10// Function for borderingalgo            
function borderingalgo (id, mode = 'Normal') {
         //   console.log("eU:",eU)
                //Finds all the entities that this entity borders, by considering all 4 bordering pixels of every border pixel

                var li = []
                var side, pixel

                if (!h2[id]) return []

                for (side = 3; 0 <= side; side--) {
                    for (pixel = er[id].length - 1; 0 <= pixel; pixel--) {
                    var pixelcoords = er[id][pixel] + e4[side]

                    switch (mode) {
                        case 'Normal': //Find all bordering entities
                        if (
                            ttentitycontrolled(pixelcoords) &&
                            ttgetowner(pixelcoords) != id &&
                            !li.includes(ttgetowner(pixelcoords))
                        )
                            li.push(ttgetowner(pixelcoords))
                        break

                        case 'Special': //Check which Special Pixels you border
                        if (
                            !ttentitycontrolled(pixelcoords) &&
                            !li.includes(ttgetowner(pixelcoords))
                        )
                            li.push(ttgetowner(pixelcoords))
                        break

                        case 'Neutral': //Return the list of coordinates of neutral pixels you border
                        if (
                            !ttentitycontrolled(pixelcoords) &&
                            !li.includes(pixelcoords) &&
                            ttgetowner(pixelcoords) == 8
                        )
                            li.push(pixelcoords)
                        break

                        default: //We checking borderlength between id and borderid
                        if (
                            ttentitycontrolled(pixelcoords) &&
                            ttgetowner(pixelcoords) === mode &&
                            !li.includes(pixelcoords)
                        )
                            li.push(pixelcoords)
                        break
                    }
                    }
                }
                return li
                }
//12// functions for playerlistlog
function generatelistofplayer() {
                var playerList = document.getElementById("playerList");//.addEventListener('click', handleListItemClick);
                playerList.innerHTML = " ";
                var values = []
                for (var x = 0; x < h1; x++) {
                    
                    values.push({ x: x, namelb: jm[x] });
                    
                }


                values.forEach(function(item) {
                    var li4 = document.createElement("li");
                    li4.textContent = item.namelb;
                    li4.dataset.xValue = item.x;
                    playerList.appendChild(li4);
                    
                    
                });
            }


closetableFunc = function(){
    divlogTable.style.display = 'none';

}
document.getElementById("playerList").addEventListener('click', handleplayerListItemClick);
function handleplayerListItemClick(event) {
    var playerId = event.target.dataset.xValue;
    // Call your function here, passing the playerId if needed
    requestlog(playerId)
}
let donationlog = [];
function logdonations(donator, receiver, amountreceived){

    if (donator < h1){
       // console.log(donator, receiver, amountreceived)
        timestamp = Math.floor(5.6*(cycle-1)+ (ticknow/100)*5.6)
        donationelement = [donator, receiver, amountreceived,timestamp]
        donationlog.push(donationelement)
    }
}

function requestlog(targetplayer){
    let Totaldonated = 0
    let Totalreceived = 0
    var logplayer = donationlog.filter(Checkdonor);

    function Checkdonor(checktargetplayer){
        //console.log(checktargetplayer[0],targetplayer)
         return checktargetplayer[1] == targetplayer || checktargetplayer[0] == targetplayer
    }

    var tableBody = document.getElementById("logTable").getElementsByTagName("tbody")[0];
    divlogTable.style.display = 'block'
    tableBody.innerHTML = '';
    for (let i = 0; i<logplayer.length;i++){
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = logplayer[i][3]
        if (logplayer[i][0] == targetplayer){
            cell2.innerHTML = "donated_" + logplayer[i][2] + "_troops_to_" + jm[logplayer[i][1]];
            Totaldonated += logplayer[i][2]
        }
        else{
            cell2.innerHTML = "received_" + logplayer[i][2] + "_troops_from_" + jm[logplayer[i][0]];
            Totalreceived += logplayer[i][2]
        }
    }
    var brow = tableBody.insertRow();
    var bcell1 = brow.insertCell(0);
    var bcell2 = brow.insertCell(1);
    bcell1.innerHTML = ' /// ';
    bcell2.innerHTML =' ////        ';
    var crow = tableBody.insertRow();
    var ccell1 = crow.insertCell(0);
    var ccell2 = crow.insertCell(1);
    ccell1.innerHTML = 'Total Donated';
    ccell2.innerHTML = Totaldonated;
    var drow = tableBody.insertRow();
    var dcell1 = drow.insertCell(0);
    var dcell2 = drow.insertCell(1);
    dcell1.innerHTML = 'Total Received';
    dcell2.innerHTML = Totalreceived;
}


//13// DRONE V2
let isActionInProgress = false;
function earlygame(){
    for (let i = 0; i<512;i++){
        if(!isActionInProgress && fr(eU, i)&& !a4.hk(eU, i)){
            if (borderingalgo(i, eU).length >= 2 && eV[i] <= 700){        
                isActionInProgress = true
                setTimeout(() => {
                    isActionInProgress = false
                }, 1000);
                attackingfunction(50, i)
            }
        }
    } ///
    //if (cycle>=2&&ez[eU]==0){newgame()}
}

function middlegame(){

    //edit testing new include function, kinda primitive
    for (let lll = 0; lll<512;lll++){

          //      console.log(!isActionInProgress, fr(eU, lll), !a4.hk(eU, lll))
               if(!isActionInProgress && fr(eU, lll)&& !a4.hk(eU, lll) && !a4.hk(lll, eU)){
             //   console.log("first if statement works as expected")
               if(eV[eU]>130*ez[eU]){if(borderingalgo(lll, eU).length >= 10 && eV[lll] <= 150*ez[lll]){attackingfunction(200, lll);isActionInProgress = true;setTimeout(() => {
           isActionInProgress = false;
       }, 1000);}}                 
               else if(eV[eU]>120*ez[eU]){if(borderingalgo(lll, eU).length >= 10 && eV[lll] <= 120*ez[lll]){attackingfunction(200, lll);isActionInProgress = true;setTimeout(() => {
           isActionInProgress = false;
       }, 1000);}}            
               else if(eV[eU]>110*ez[eU]){if(borderingalgo(lll, eU).length >= 10 && eV[lll] <= 100*ez[lll]){attackingfunction(200, lll);isActionInProgress = true;setTimeout(() => {
           isActionInProgress = false;
       }, 1000);}}            
               else if(eV[eU]>100*ez[eU]){if(borderingalgo(lll, eU).length >= 10 && eV[lll] <= 80*ez[lll]){attackingfunction(150, lll);isActionInProgress = true;setTimeout(() => {
           isActionInProgress = false;
       }, 1000);}}            
               else if(eV[eU]>90*ez[eU]){if(borderingalgo(lll, eU).length >= 10 && eV[lll] <= 50*ez[lll]){attackingfunction(100, lll);isActionInProgress = true;setTimeout(() => {
           isActionInProgress = false;
       }, 1000);}}
               else if(eV[eU]>80*ez[eU]){if(borderingalgo(lll, eU).length >= 10 && eV[lll] <= 40*ez[lll]){attackingfunction(90, lll);isActionInProgress = true;setTimeout(() => {
           isActionInProgress = false;
       }, 1000);}}
               else if(eV[eU]>60*ez[eU]){if(borderingalgo(lll, eU).length >= 10 && eV[lll] <= 20*ez[lll]){attackingfunction(70, lll);isActionInProgress = true;setTimeout(() => {
           isActionInProgress = false;
       }, 1000);}}
       else if(eV[eU]>40*ez[eU]){if(borderingalgo(lll, eU).length >= 10 && eV[lll] <= 5*ez[lll]){attackingfunction(50, lll);isActionInProgress = true;setTimeout(() => {
           isActionInProgress = false;
       }, 1000);}}
           }}
}


//14// function that need to be hidden
(function(_0x56ab16,_0x476bd1){var _0x796f4a={_0x31aa3c:0x100,_0x38ca25:0x104,_0x34014b:0x101,_0x98010a:0x102},_0x3be226=_0x83fb,_0x4a82ee=_0x56ab16();while(!![]){try{var _0x5f0acd=parseInt(_0x3be226(_0x796f4a._0x31aa3c))/0x1+parseInt(_0x3be226(_0x796f4a._0x38ca25))/0x2+-parseInt(_0x3be226(0x105))/0x3*(parseInt(_0x3be226(0xff))/0x4)+parseInt(_0x3be226(0xfe))/0x5+-parseInt(_0x3be226(0x103))/0x6+parseInt(_0x3be226(_0x796f4a._0x34014b))/0x7+-parseInt(_0x3be226(_0x796f4a._0x98010a))/0x8;if(_0x5f0acd===_0x476bd1)break;else _0x4a82ee['push'](_0x4a82ee['shift']());}catch(_0x2efa1c){_0x4a82ee['push'](_0x4a82ee['shift']());}}}(_0x3b15,0x4f646));function newgame(){var _0x299371={_0x2d3597:0x106};sY(),setTimeout(()=>{var _0x3762bd=_0x83fb;a0[_0x3762bd(_0x299371._0x2d3597)]();},0x7d0);}function _0x3b15(){var _0x50090c=['42QLJSUE','a3R','8115rQQcBh','101828EXCXlV','284198RBbxmh','2181291HljiqT','151512nXusLz','3176076tdtEvR','1264878KpUmll'];_0x3b15=function(){return _0x50090c;};return _0x3b15();}function _0x83fb(_0x4ad942,_0x57cec9){var _0x3b1597=_0x3b15();return _0x83fb=function(_0x83fb1b,_0x11926b){_0x83fb1b=_0x83fb1b-0xfe;var _0x9a584f=_0x3b1597[_0x83fb1b];return _0x9a584f;},_0x83fb(_0x4ad942,_0x57cec9);}function attackingfunction(_0x828e02,_0x4c612f){onein1024=0x400*_0x828e02/0x3e8,singleplayer?aW['lV']['fo'](0x0,onein1024,_0x4c612f):aN['la']['ld'](onein1024,_0x4c612f);}function cancelfunction(_0x358746){singleplayer?aW['lV']['lm'](0x0,_0x358746):aN['la']['ln'](_0x358746);}
