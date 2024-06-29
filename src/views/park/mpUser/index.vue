<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkMpUser from '@/api/park/parkMpUser'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()




const options = reactive({
  id: 'park_mp_user',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: false,
  operationColumnWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: parkMpUser.getList
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
    title: "头像",
    dataIndex: "header_image",
    formType: "upload",
    addDisplay: false,
    editDisplay: false,
    type: "image",
    multiple: false,
    onlyData: true,
    returnType: "url"
  },
  {
    title: "昵称",
    dataIndex: "nick_name",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "真实姓名",
    dataIndex: "real_name",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "性别",
    dataIndex: "gender",
    formType: "select",
    search: true,
    addDisplay: false,
    editDisplay: false,
    multiple: true,
    dict: {
      data: [
        {
          label: "保密",
          value: "0"
        },
        {
          label: "男",
          value: "1"
        },
        {
          label: "女",
          value: "2"
        },
        {
          label: "其他",
          value: "3"
        }
      ],
      translation: true
    }
  },
  {
    title: "公司",
    dataIndex: "compay_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "手机号",
    dataIndex: "phone",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "邮箱",
    dataIndex: "email",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "密码",
    dataIndex: "password",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "公众号OpenID",
    dataIndex: "mp_open_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "小程序OpenID",
    dataIndex: "xcx_open_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "公众号和小程序联合ID",
    dataIndex: "union_open_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "range",
    search: true,
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
<script> export default { name: 'park:mpUser' } </script>