<template>
    <div class="message-area-container">
        <DataForm v-on="$listeners"/>
        <h3>
            {{title}}
            {{subTitle}}
        </h3>
        <DataList :list="list" />
        <div class="loading" v-loading="isListLoading"></div>
    </div>
</template>

<script>
import DataForm from "./DataForm.vue"
import DataList from "./DataList.vue"
export default {
    components:{
        DataForm,
        DataList
    },
    props:{
        title:{
            type:String,
            default:""
        },
        subTitle:{
            type:String,
            default:""
        },
        list:{
            type:Array,
            default:()=>[]
        },
        isListLoading:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>

</style>