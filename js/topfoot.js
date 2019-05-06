// 头部JS文件
var headNav=document.querySelector(".head-nav")
var headNavSub=document.querySelector(".head-nav-sub")
var headAppNormal=document.querySelector(".head-app-normal")
var headAppHover=document.querySelector(".head-app-hover")
var headUserinfoNormal=document.querySelector(".head-userinfo-normal")
var headLoginHover=document.querySelector(".head-login-hover")
var hrefGouserhome=document.querySelector(".href-gouserhome")
var moreArrow=document.querySelector(".more-arrow")
headNav.onmouseover=function(){
    headNavSub.style.display='block'
}
headNav.onmouseleave=function(){
    headNavSub.style.display='none'
}
headNavSub.onmouseover=function(){
    this.style.display="block"
}
headNavSub.onmouseleave=function(){
    this.style.display="none"
}
headAppNormal.onmouseover=function(){
    headAppHover.style.display="block"
}
headAppNormal.onmouseleave=function(){
    headAppHover.style.display="none"
}
headUserinfoNormal.onmouseover=function(){
    headLoginHover.style.display='block'
}
headUserinfoNormal.onmouseleave=function(){
    headLoginHover.style.display='none'
}
headLoginHover.onmouseover=function(){
    this.style.display='block'
}
headLoginHover.onmouseleave=function(){
    this.style.display='none'
}
hrefGouserhome.onmouseover=function(){
    moreArrow.style.animation='mymove 0.5s infinite'
}
hrefGouserhome.onmouseleave=function(){
    moreArrow.style.animationPlayState='paused'
}