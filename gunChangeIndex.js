const pistol = {
  img:'',
  imgSrc:'./Guns/Pistol-container.png',
  imgCoords:{
    x:0,
    y:0,
    width:71,
    height:60,
  }
}
const smg = {
  img:'',
  imgSrc:'./Guns/Smg-container.png',
  imgCoords:{
    x:0,
    y:0,
    width:142,
    height:68,
  }
}
const ar = {
  img:'',
  imgSrc:'./Guns/Ar-container.png',
  imgCoords:{
    x:0,
    y:0,
    width:143,
    height:75,
  }
}
const sniper = {
  img:'',
  imgSrc:'./Guns/Sniper-container.png',
  imgCoords:{
    x:0,
    y:0,
    width:153,
    height:68,
  }
}
const machinegun = {
  img:'',
  imgSrc:'./Guns/MachineGun-container.png',
  imgCoords:{
    x:0,
    y:0,
    width:151,
    height:88,
  }
}
let selector = [pistol,smg,ar,sniper,machinegun]
selector.forEach((gun)=>{
  let img = new Image()
  img.src = gun.imgSrc
  gun.img = img
})
let currentGun = pistols

let imgLoad = function(img,x,y,width,height,ctx) {
  ctx.drawImage(img,x,y,width,height);
}
const update = (frame) => {
  ctx.clearRect(0, 0, width, height)
  imgLoad(currentGun.img,currentGun.imgCoords.x,currentGun.imgCoords.y,currentGun.imgCoords.width,currentGun.imgCoords.height,ctx)}