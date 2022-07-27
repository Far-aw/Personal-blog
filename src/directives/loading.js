
//导出指令的配置对象
// export default {
//     bind(el,binding){
//         console.log("bind",el,binding)
//     },
    
//     update(el,binding){
//         console.log("updated")
//     }
// }



import loadingUrl from "@/assets/loading.svg"
import styles from "./loading.module.less"

//获得el中有loading效果的img元素
function getLoadingImage(el){
   return el.querySelector("img[data-role = loading]")
}

//创建一个带有loading效果的img元素
function createLoadingImg(){
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
    
}

export default function(el,bingding){
    //根据binding.value的值，决定创建或删除img元素
    const loadImg = getLoadingImage(el);
    if(bingding.value){
        if(!loadImg){
            const img = createLoadingImg();
            el.appendChild(img)
        }
    }else{
        if(loadImg){
            loadImg.remove();
        }
    }
}