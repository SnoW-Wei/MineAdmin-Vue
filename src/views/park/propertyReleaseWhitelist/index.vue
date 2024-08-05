<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkPropertyReleaseWhitelist from '@/api/park/parkPropertyReleaseWhitelist'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  parkPropertyReleaseWhitelist.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  parkPropertyReleaseWhitelist.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_property_release_whitelist',
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
  api: parkPropertyReleaseWhitelist.getList,
  recycleApi: parkPropertyReleaseWhitelist.getRecycleList,
  add: {
    show: true,
    api: parkPropertyReleaseWhitelist.save,
    auth: ['park:propertyReleaseWhitelist:save']
  },
  edit: {
    show: true,
    api: parkPropertyReleaseWhitelist.update,
    auth: ['park:propertyReleaseWhitelist:update']
  },
  delete: {
    show: true,
    api: parkPropertyReleaseWhitelist.deletes,
    auth: ['park:propertyReleaseWhitelist:delete'],
    realApi: parkPropertyReleaseWhitelist.realDeletes,
    realAuth: ['park:propertyReleaseWhitelist:realDeletes']
  },
  recovery: {
    show: true,
    api: parkPropertyReleaseWhitelist.recoverys,
    auth: ['park:propertyReleaseWhitelist:recovery']
  },
  import: {
    show: true,
    url: 'park/propertyReleaseWhitelist/import',
    templateUrl: 'park/propertyReleaseWhitelist/downloadTemplate',
    auth: ['park:propertyReleaseWhitelist:import']
  },
  export: {
    show: true,
    url: 'park/propertyReleaseWhitelist/export',
    auth: ['park:propertyReleaseWhitelist:export']
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
    },
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
    }
  },
  {
    title: "手机号",
    dataIndex: "phone",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入手机号"
    }
  },
  {
    title: "创建者",
    dataIndex: "created_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
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
    title: "更新时间",
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
<script> export default { name: 'park:propertyReleaseWhitelist' } </script>