<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkPropertyWarmserviceRent from '@/api/park/parkPropertyWarmserviceRent'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  parkPropertyWarmserviceRent.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  parkPropertyWarmserviceRent.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_property_warmservice_rent',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationColumnWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: parkPropertyWarmserviceRent.getList,
  add: {
    show: true,
    api: parkPropertyWarmserviceRent.save,
    auth: ['park:propertyWarmserviceRent:save']
  },
  edit: {
    show: true,
    api: parkPropertyWarmserviceRent.update,
    auth: ['park:propertyWarmserviceRent:update']
  },
  delete: {
    show: true,
    api: parkPropertyWarmserviceRent.deletes,
    auth: ['park:propertyWarmserviceRent:delete']
  }
})

const columns = reactive([
  {
    title: "",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入"
    }
  },
  {
    title: "标题",
    dataIndex: "title",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入标题"
    }
  },
  {
    title: "图片",
    dataIndex: "image",
    formType: "upload",
    commonRules: {
      required: true,
      message: "请输入图片"
    },
    type: "image",
    multiple: false,
    onlyData: true,
    returnType: "hash"
  },
  {
    title: "地址",
    dataIndex: "address",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入地址"
    }
  },
  {
    title: "数量",
    dataIndex: "num",
    formType: "input-number",
    commonRules: {
      required: true,
      message: "请输入数量"
    }
  },
  {
    title: "限租数量",
    dataIndex: "limit",
    formType: "input-number",
    commonRules: {
      required: true,
      message: "请输入限租数量"
    }
  },
  {
    title: "租金费用",
    dataIndex: "fee",
    formType: "input-number",
    commonRules: {
      required: true,
      message: "请输入租金费用"
    },
    step: 10,
    precision: 2
  },
  {
    title: "租借说明",
    dataIndex: "content",
    formType: "editor",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入租借说明"
    }
  },
  {
    title: "时间描述",
    dataIndex: "rent_time",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入时间描述"
    }
  },
  {
    title: "",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  },
  {
    title: "",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  },
  {
    title: "",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  }
])
</script>
<script> export default { name: 'park:propertyWarmserviceRent' } </script>