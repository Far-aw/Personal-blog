import eventBus from "@/eventBus";
import {
    debounce
} from "@/utils"
import defaultImg from "@/assets/default.gif"

let imgs = [];

function setImage(img) {
    img.dom.src = defaultImg;
    //获取视口高度
    const domHeight = document.documentElement.clientHeight;
    //该图片是否在视口范围内
    const rect = img.dom.getBoundingClientRect();
    //图片高度
    const dHeight = rect.height || 150;
    //在视口范围内
    if (rect.top >= -dHeight && rect.top <= domHeight) {
        const tempImg = new Image();
        tempImg.onload = function () {
            //真实图片加载完成后
            img.dom.src = img.src
        }
        tempImg.src = img.src;
        imgs = imgs.filter(i => i !== img);
    }
}

//调用该函数，选择合适的加载的图片
function setImages() {
    for (const img of imgs) {
        setImage(img)
    }
}

function handleScroll() {
    setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
    inserted(el, bindings) {
        const img = {
            dom: el,
            src: bindings.value
        }
        imgs.push(img);
        //图片元素进入后运行一次
        setImage(img);
    },
    unbind(el) {
        imgs = imgs.filter(img => img.dom !== el)
    }
}