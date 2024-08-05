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



const switchStatus = (statusValue, id, statusName) => {
  parkIndustrialServiceApply.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


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
    }
  },
  {
    title: "产业服务ID",
    dataIndex: "service_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "申请类型",
    dataIndex: "category_id",
    formType: "select",
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请类型"
    },
    dict: {
      // 远程通用接口请求，新版代码生成都有一个 remote 接口
      remote: 'park/industrialServiceCategory/remote',
      // 指定组件接收的props
      props: { label: 'name', value: 'id' },
      // 开启分页
      openPage: true,
      // 对数据进行字典翻译
      translation: true,
      // 远程请求配置项
      remoteOption: {
        // 按用户名排序
        sort: { id: 'desc' }, // 如果不指定排序方式，默认为正序排序
        // 设置查询的字段
        select: [ 'id', 'name' ],
        // 设置数据过滤
        filter: {
          // 查找 id 大于 2 的数据
          // id: [ '>', 2],
          // 并且用户名包含字母 a 的用户
          // name: [ 'like', 'a' ]
        }
      }
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
    editDisplay: false
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
