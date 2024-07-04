<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkIndustrialService from '@/api/park/parkIndustrialService'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  parkIndustrialService.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  parkIndustrialService.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_industrial_service',
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
  api: parkIndustrialService.getList,
  add: {
    show: true,
    api: parkIndustrialService.save,
    auth: ['park:industrialService:save']
  },
  edit: {
    show: true,
    api: parkIndustrialService.update,
    auth: ['park:industrialService:update']
  },
  delete: {
    show: true,
    api: parkIndustrialService.deletes,
    auth: ['park:industrialService:delete']
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
    title: "分类类型",
    dataIndex: "category_id",
    formType: "select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入分类类型"
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
    title: "小标题",
    dataIndex: "subtitle",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入小标题"
    }
  },
  {
    title: "公司名称",
    dataIndex: "company",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入公司名称"
    }
  },
  {
    title: "列表小图",
    dataIndex: "image",
    formType: "upload",
    commonRules: {
      required: true,
      message: "请输入列表小图"
    },
    type: "image",
    multiple: false
  },
  {
    title: "公司介绍",
    dataIndex: "content",
    formType: "editor",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入公司介绍"
    }
  },
  {
    title: "排序",
    dataIndex: "sort",
    formType: "input",
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
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
<script> export default { name: 'park:industrialService' } </script>