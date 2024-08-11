<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkPropertyWarmserviceMedical from '@/api/park/parkPropertyWarmserviceMedical'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  parkPropertyWarmserviceMedical.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  parkPropertyWarmserviceMedical.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_property_warmservice_medical',
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
  api: parkPropertyWarmserviceMedical.getList,
  add: {
    show: true,
    api: parkPropertyWarmserviceMedical.save,
    auth: ['park:propertyWarmserviceMedical:save']
  },
  edit: {
    show: true,
    api: parkPropertyWarmserviceMedical.update,
    auth: ['park:propertyWarmserviceMedical:update']
  },
  delete: {
    show: true,
    api: parkPropertyWarmserviceMedical.deletes,
    auth: ['park:propertyWarmserviceMedical:delete']
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
    title: "数量",
    dataIndex: "num",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入数量"
    }
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
    title: "医疗资源",
    dataIndex: "category",
    formType: "select",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入医疗资源"
    },
    multiple: true,
    dict: {
      name: "medical_type",
      props: {
        label: "title",
        value: "key"
      },
      translation: true
    }
  },
  {
    title: "说明",
    dataIndex: "content",
    formType: "editor",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入说明"
    }
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  },
  {
    title: "修改时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  },
  {
    title: "删除时间",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  }
])
</script>
<script> export default { name: 'park:propertyWarmserviceMedical' } </script>