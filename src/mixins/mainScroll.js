export default function(refName){
    return {
        mounted(){
            this.$bus.$on("setMainScroll",this.handleSetMainScroll)
            this.$refs[refName].addEventListener("scroll",this.handleScroll)
        },
        beforeDestroy(){
            this.$bus.$emit("mainScroll")
            this.$refs[refName].removeEventListener("scroll",this.handleScroll)
            this.$bus.$off("setMainScroll",this.handleSetMainScroll)
        },
        methods:{
            handleSetMainScroll(scrollTop){
                this.$refs[refName].scrollTop = scrollTop;
            },
            handleScroll(){
                this.$bus.$emit("mainScroll",this.$refs[refName])
            }
        }

    }
}