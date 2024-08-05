<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkPropertyServiceApply from '@/api/park/parkPropertyServiceApply'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, id, statusName) => {
  parkPropertyServiceApply.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_property_service_apply',
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
  api: parkPropertyServiceApply.getList,
  edit: {
    show: true,
    api: parkPropertyServiceApply.update,
    auth: ['park:propertyServiceApply:update']
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
    title: "用户ID",
    dataIndex: "user_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入用户ID"
    }
  },
  {
    title: "用户名称",
    dataIndex: "user_name",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入用户名称"
    }
  },
  {
    title: "联系电话",
    dataIndex: "phone",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入联系电话"
    }
  },
  {
    title: "公司名称",
    dataIndex: "company",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入公司名称"
    }
  },
  {
    title: "公司详情",
    dataIndex: "floor",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "报修级别",
    dataIndex: "level",
    formType: "select",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入报修级别"
    },
    multiple: false,
    dict: {
      data: [
        {
          label: "普通报修",
          value: "1"
        },
        {
          label: "紧急报修",
          value: "2"
        }
      ],
      translation: true
    }
  },
  {
    title: "描述内容",
    dataIndex: "content",
    formType: "editor",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入描述内容"
    }
  },
  {
    title: "服务类型",
    dataIndex: "type_id",
    formType: "select",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入服务类型"
    },
    multiple: false
  },
  {
    title: "申请时间",
    dataIndex: "apply_date",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请时间"
    },
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
    },
    showTime: true
  },
  {
    title: "申请状态",
    dataIndex: "apply_status",
    formType: "select",
    search: true,
    addDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请状态"
    },
    multiple: false,
    dict: {
      name: "apply",
      props: {
        label: "title",
        value: "key"
      },
      translation: true
    }
  },
  {
    title: "维修人姓名",
    dataIndex: "accept_name",
    formType: "input",
    search: false,
    addDisplay: false,
    commonRules: {
      required: false,
      message: "请输入维修人姓名"
    },
    multiple: false,
  },
  {
    title: "维修人电话",
    dataIndex: "accept_phone",
    formType: "input",
    search: false,
    addDisplay: false,
    commonRules: {
      required: false,
      message: "请输入维修人电话"
    },
    multiple: false,
  },
  {
    title: "图片",
    dataIndex: "apply_image",
    formType: "upload",
    addDisplay: false,
    editDisplay: false,
    type: "image",
    multiple: false,
    onlyData: true,
    returnType: "hash"
  },
  {
    title: "审核人",
    dataIndex: "audit_user_id",
    formType: "input",
    hide: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "审核时间",
    dataIndex: "audit_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
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
<script> export default { name: 'park:propertyServiceApply' } </script>
