<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkDormitory from '@/api/park/parkDormitory'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  parkDormitory.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  parkDormitory.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_dormitory',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationColumnWidth: 160,
  formOption: {
    viewType: 'tag',
    width: 600,
    tagId: 'dormitory',
    tagName: '配套宿舍',
    titleDataIndex: 'title'
  },
  api: parkDormitory.getList,
  add: {
    show: true,
    api: parkDormitory.save,
    auth: ['park:dormitory:save']
  },
  edit: {
    show: true,
    api: parkDormitory.update,
    auth: ['park:dormitory:update']
  },
  delete: {
    show: true,
    api: parkDormitory.deletes,
    auth: ['park:dormitory:delete']
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
    title: "副标题",
    dataIndex: "sub_title",
    formType: "input",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入副标题"
    }
  },
  {
    title: "价格描述",
    dataIndex: "price",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入价格描述"
    }
  },
  {
    title: "面积",
    dataIndex: "area",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入面积"
    }
  },
  {
    title: "标签",
    dataIndex: "tags",
    formType: "input-tag",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入标签"
    }
  },
  {
    title: "封面图",
    dataIndex: "cover_image",
    formType: "upload",
    commonRules: {
      required: true,
      message: "请输入封面图"
    },
    type: "image",
    multiple: false,
    onlyData: true,
    returnType: "hash"
  },
  {
    title: "轮播图",
    dataIndex: "banner_images",
    formType: "upload",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入轮播图"
    },
    type: "image",
    multiple: true,
    onlyData: true,
    returnType: "hash"
  },
  {
    title: "开发商",
    dataIndex: "real_estate",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入开发商"
    }
  },
  {
    title: "物业类型",
    dataIndex: "protory_type",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入物业类型"
    }
  },
  {
    title: "楼层信息",
    dataIndex: "floor",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入楼层信息"
    }
  },
  {
    title: "楼层户型图片",
    dataIndex: "floor_plan_images",
    formType: "upload",
    hide: true,
    type: "image",
    multiple: true,
    onlyData: true,
    returnType: "hash"
  },
  {
    title: "项目配置",
    dataIndex: "project_config",
    formType: "editor",
    hide: true
  },
  {
    title: "项目概括",
    dataIndex: "project_detail",
    formType: "editor",
    hide: true
  },
  {
    title: "交通图片",
    dataIndex: "traffic_image",
    formType: "upload",
    hide: true,
    type: "image",
    multiple: false,
    onlyData: true,
    returnType: "hash"
  },
  {
    title: "交通",
    dataIndex: "traffic",
    formType: "editor",
    hide: true
  },
  {
    title: "商业",
    dataIndex: "business",
    formType: "editor",
    hide: true
  },
  {
    title: "周边",
    dataIndex: "periphery",
    formType: "editor",
    hide: true
  },
  {
    title: "医疗",
    dataIndex: "medical",
    formType: "editor",
    hide: true
  },
  {
    title: "教育",
    dataIndex: "education",
    formType: "editor",
    hide: true
  },
  {
    title: "联系电话",
    dataIndex: "contact_tel",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入联系电话"
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
<script> export default { name: 'park:dormitory' } </script>