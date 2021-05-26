(() => {
  const Pistol = {
    gun:'Pistol',
    unlockInWave:1,
    num:'1',
    statusH2:'unlocked',
    damage: 20,
    bulletRadius: 4,
    speed: 10,
    accuracy:50,
    fireRate:'Semi-Auto',
    autoFire:false,
    element:{
      damage:'',
      bulletRadius:'',
      speed:'',
      accuracy:'',
      fireRate:'',
      statusH2:'',
      tab:'',
    },
    canvasElements:{
      img:'',
      imgSrc:'./Guns/Pistol-container.png',
      imgCoords:{
        x:0,
        y:0,
        width:71,
        height:60,
      }
    }
};
const Smg = {
    gun:'Smg',
    unlockInWave:3,
    num:'2',
    statusH2:'locked',
    damage: 14,
    bulletRadius: 3,
    speed: 13,
    accuracy:30,
    fireRate:9,
    autoFire:true,
    element:{
      damage:'',
      bulletRadius:'',
      speed:'',
      accuracy:'',
      fireRate:'',
      statusH2:'',
      tab:'',
    },
    canvasElements:{
      img:'',
      imgSrc:'./Guns/Smg-container.png',
      imgCoords:{
        x:0,
        y:0,
        width:142,
        height:68,
      }
    }
};
const Ar = {
    gun:'Ar',
    num:'3',
    unlockInWave:5,

    statusH2:'locked',
    damage: 35,
    bulletRadius: 5,
    speed: 15,
    accuracy:70,
    fireRate:6,
    autoFire:true,
    element:{
      damage:'',
      bulletRadius:'',
      speed:'',
      accuracy:'',
      fireRate:'',
      statusH2:'',
      tab:'',
    },
    canvasElements:{
      img:'',
      imgSrc:'./Guns/Ar-container.png',
      imgCoords:{
        x:0,
        y:0,
        width:143,
        height:75,
      }
    }
};
const Sniper = {
    gun:'Sniper',
    unlockInWave:8,
    num:'4',
    statusH2:'locked',
    damage: 200,
    bulletRadius: 7,
    speed: 20,
    accuracy:100,
    fireRate:1/2,
    autoFire:true,
    element:{
      damage:'',
      bulletRadius:'',
      speed:'',
      accuracy:'',
      fireRate:'',
      statusH2:'',
      tab:'',
    },
    canvasElements:{
      img:'',
      imgSrc:'./Guns/Sniper-container.png',
      imgCoords:{
        x:0,
        y:0,
        width:153,
        height:68,
      }
    }
};
const MachineGun = {
    gun:'MachineGun',
    unlockInWave:15,
    num:'5',
    statusH2:'locked',
    damage: 20,
    bulletRadius: 2,
    speed: 11,
    accuracy:20,
    fireRate:15,
    autoFire:true,
    element:{
      damage:'',
      bulletRadius:'',
      speed:'',
      accuracy:'',
      fireRate:'',
      statusH2:'',
      tab:'',
    },
    canvasElements:{
      img:'',
      imgSrc:'./Guns/MachineGun-container.png',
      imgCoords:{
        x:0,
        y:0,
        width:151,
        height:88,
      }
    }
};
let selector = [[1,Pistol],[2,Smg],[3,Ar],[4,Sniper],[5,MachineGun]];
let gunElementSelector = [Pistol,Smg,Ar,Sniper,MachineGun];
let currentGun = Pistol;
let waveCount =01
let timer;
let autoFire = currentGun.autoFire;
let clicked = true;
document.querySelector(`#tab-1`).checked = true;

gunElementSelector.forEach((gun)=>{
  let img = new Image();
  gun.element.damage = document.querySelector(`.${gun.gun}--Damage`);
  gun.element.bulletRadius = document.querySelector(`.${gun.gun}--Br`);
  gun.element.speed = document.querySelector(`.${gun.gun}--Speed`);
  gun.element.accuracy = document.querySelector(`.${gun.gun}--Accuracy`);
  gun.element.fireRate = document.querySelector(`.${gun.gun}--FireRate`);
  gun.element.statusH2 = document.querySelector(`.${gun.gun}--Status`);
  gun.element.tab = document.querySelector(`#tab-${gun.num}`);
  img.src = gun.canvasElements.imgSrc;
  gun.canvasElements.img = img;
});

selector.forEach((lst)=>{
    let tab = document.querySelector(`#tab-${lst[0]}`);
    document.addEventListener('keydown',(e)=>{
        if(e.key == lst[0] && lst[1].statusH2 !== 'locked'){
            tab.checked = true;
            currentGun = lst[1];
        }
    });
    tab.addEventListener('click',(e)=>{
      if(lst[1].statusH2 == 'unlocked'){
        currentGun = lst[1];
      }else if(lst[1].statusH2 == 'locked'){
        currentGun.element.tab.checked = true;
      }
    });
    lst[1].element.damage.textContent = `Damage: ${lst[1].damage}% (of zombie health)`;
    lst[1].element.bulletRadius.textContent = `Bullet Radius: ${lst[1].bulletRadius}`;
    lst[1].element.speed.textContent = `Bullet Speed:${lst[1].speed}`;
    lst[1].element.accuracy.textContent = `Accuracy: ${lst[1].accuracy}%`;
    if(lst[1].fireRate ==Sniper.fireRate){
      lst[1].element.fireRate.textContent = `Firerate: 1 bullet per ${1/lst[1].fireRate} seconds(need to keep the left button(on mouse) pressed for ${1/lst[1].fireRate} seconds to shoot one bullet)`;
    }else if(lst[1].gun == Pistol.gun){
      lst[1].element.fireRate.textContent = `Firerate: ${lst[1].fireRate}`;
    }else{
      lst[1].element.fireRate.textContent = `Firerate: ${lst[1].fireRate} bullets per second`;
    }
    lst[1].element.statusH2.textContent = `${lst[1].gun} (${lst[1].statusH2})`;
    if(lst[1].statusH2 == "locked"){
      document.querySelector(`.${lst[1].gun}--label`).classList.add('locked');
    }
});
setInterval(()=>{
  gunElementSelector.forEach((gun)=>{
    if(gun.unlockInWave <= waveCount){
      gun.statusH2 = "unlocked";
    }else{
      gun.statusH2 = "locked";
    }
    gun.element.damage.textContent = `Damage: ${gun.damage}% (of zombie health)`;
    gun.element.bulletRadius.textContent = `Bullet Radius: ${gun.bulletRadius}`;
    gun.element.speed.textContent = `Bullet Speed:${gun.speed}`;
    gun.element.accuracy.textContent = `Accuracy: ${gun.accuracy}%`;
    if(gun.fireRate ==Sniper.fireRate){
      gun.element.fireRate.textContent = `Firerate: 1 bullet per ${1/gun.fireRate} seconds(need to keep the left button(on mouse) pressed for ${1/gun.fireRate} seconds to shoot one bullet)`;
    }else if(gun.gun == Pistol.gun){
      gun.element.fireRate.textContent = `Firerate: ${gun.fireRate}`;
    }else{
      gun.element.fireRate.textContent = `Firerate: ${gun.fireRate} bullets per second`;
    }
    if(gun.statusH2 == "unlocked"){
      document.querySelector(`.${gun.gun}--label`).classList.remove('locked');
    }
    gun.element.statusH2.textContent = `${gun.gun} (${gun.statusH2})`;
  })
},1000);

document.addEventListener('mousedown',(e)=>{
  if(e.button == 2 ||e.button == 3){clearInterval(timer)}
	clearInterval(timer);
  clicked = true;
	timer = setInterval(()=>{
    if(clicked && currentGun.autoFire){
      
      
    //we need to change this
    console.log('clicked');
    
    
    }
    },1000/currentGun.fireRate);
});
document.addEventListener('mouseup',(e)=>{
if(e.button == 2||e.button == 3){clearInterval(timer)}
clearInterval(timer);
clicked = false;
});

let imgLoad = function(img,x,y,width,height,ctx) {
  ctx.drawImage(img,x,y,width,height);
};

// the code below will go in update function
// imgLoad(currentGun.canvasElements.img,currentGun.canvasElements.imgCoords.x,currentGun.canvasElements.imgCoords.y,currentGun.canvasElements.imgCoords.width,currentGun.canvasElements.imgCoords.height,ctx)};
})();
