<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkIndustrialServiceApply from '@/api/park/parkIndustrialServiceApply'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()




const options = reactive({
  id: 'park_industrial_service_apply',
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
  api: parkIndustrialServiceApply.getList,
  edit: {
    show: true,
    api: parkIndustrialServiceApply.update,
    auth: ['park:industrialServiceApply:update']
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
    title: "产业服务ID",
    dataIndex: "service_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入产业服务ID"
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
    title: "电话",
    dataIndex: "phone",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入电话"
    }
  },
  {
    title: "电子邮箱",
    dataIndex: "email",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入电子邮箱"
    }
  },
  {
    title: "公司",
    dataIndex: "compay",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "备注",
    dataIndex: "remark",
    formType: "editor",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "审核状态",
    dataIndex: "status",
    formType: "select",
    search: true,
    addDisplay: false,
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
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
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
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
<script> export default { name: 'park:industrialServiceApply' } </script>