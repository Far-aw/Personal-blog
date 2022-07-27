import getComponentRootDom from "./getComponentRootDom"
import Icon from "@/components/Icon"
import styles from "./message.module.less";



/**
 * 弹出消息
 * @param {String} content 消息内容 
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 多久后消失
 * @param {HTMLElement} container 容器，消息会显示到容器正中；如果不传，则显示到页面正中
 */

export default function (slot) {
    const content = slot.content || "";
    const type = slot.type || "info";
    const duration = slot.duration || 2000;
    const container = slot.container || document.body;

    //创建元素消息
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
        type,
    });
    div.innerHTML = `<span class = "${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
    const typeClassName = styles[`message-${type}`]
    div.className = `${styles.message} ${typeClassName}`;


    //将div加入到容器中
    //容器的position是否改动过 staict ===> relative
    if(getComputedStyle(container).position === "static"){
        container.style.position = "relative";
    }
    


    container.appendChild(div);
    //强行渲染一次
    div.clientLeft;  //导致reflow （重排）


    //回归到正常位置
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`;

    setTimeout(()=>{
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        div.addEventListener("transitionend",function(){
            div.remove();
            //运行回调函数
            slot.callback && slot.callback();

        },{once:true})
    },duration)
}