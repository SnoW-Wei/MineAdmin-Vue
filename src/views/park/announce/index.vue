<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkAnnounce from '@/api/park/parkAnnounce'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  parkAnnounce.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  parkAnnounce.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_announce',
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
  api: parkAnnounce.getList,
  add: {
    show: true,
    api: parkAnnounce.save,
    auth: ['park:announce:save']
  },
  edit: {
    show: true,
    api: parkAnnounce.update,
    auth: ['park:announce:update']
  },
  delete: {
    show: true,
    api: parkAnnounce.deletes,
    auth: ['park:announce:delete']
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
    title: "公告标题",
    dataIndex: "title",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入公告标题"
    }
  },
  {
    title: "公告内容",
    dataIndex: "content",
    formType: "editor",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入公告内容"
    }
  },
  {
    title: "发布时间",
    dataIndex: "sub_date",
    formType: "date",
    search: true,
    commonRules: {
      required: true,
      message: "请输入发布时间"
    },
    showTime: false
  },
  {
    title: "公告类型",
    dataIndex: "type",
    formType: "select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入公告类型"
    },
    multiple: false,
    dict: {
      data: [
        {
          label: "公告",
          value: "1"
        },
        {
          label: "通知",
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
    title: "创建人",
    dataIndex: "created_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "更新人",
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
<script> export default { name: 'park:announce' } </script>