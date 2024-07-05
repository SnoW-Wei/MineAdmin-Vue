<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkPropertyServiceType from '@/api/park/parkPropertyServiceType'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  parkPropertyServiceType.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  parkPropertyServiceType.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_property_service_type',
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
  api: parkPropertyServiceType.getList,
  add: {
    show: true,
    api: parkPropertyServiceType.save,
    auth: ['park:propertyServiceType:save']
  },
  edit: {
    show: true,
    api: parkPropertyServiceType.update,
    auth: ['park:propertyServiceType:update']
  },
  delete: {
    show: true,
    api: parkPropertyServiceType.deletes,
    auth: ['park:propertyServiceType:delete']
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
    title: "名称",
    dataIndex: "name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入名称"
    }
  },
  {
    title: "父级",
    dataIndex: "parent_id",
    formType: "select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入父级"
    },
    multiple: false,
    dict: {
      // 远程通用接口请求，新版代码生成都有一个 remote 接口
      remote: 'park/propertyServiceType/remote',
      // 指定组件接收的props
      props: { label: 'name', value: 'id' },
      // 开启分页
      openPage: true,
      // 对数据进行字典翻译
      translation: true,
      // 远程请求配置项
      remoteOption: {
        // 按用户名排序
        // 设置查询的字段
        select: [ 'id', 'name' ],
        filter: {
          // 查找 id 大于 2 的数据
          parent_id: [ '=', 0]
        },
      }
    },
    addDefaultValue: 0,
  },
  {
    title: "状态",
    dataIndex: "status",
    formType: "select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入状态"
    },
    multiple: false,
    dict: {
      name: "data_status",
      props: {
        label: "title",
        value: "key"
      },
      translation: true
    },
    addDefaultValue: 1,
  },
  {
    title: "排序",
    dataIndex: "sort",
    formType: "input-number",
    commonRules: {
      required: true,
      message: "请输入排序"
    },
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
    },
    addDefaultValue: 1,
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
    title: "更新者",
    dataIndex: "updated_by",
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
<script> export default { name: 'park:propertyServiceType' } </script>
