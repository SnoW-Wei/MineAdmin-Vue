<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkMeetingRoomPackage from '@/api/park/parkMeetingRoomPackage'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  parkMeetingRoomPackage.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  parkMeetingRoomPackage.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_meeting_room_package',
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
  api: parkMeetingRoomPackage.getList,
  recycleApi: parkMeetingRoomPackage.getRecycleList,
  add: {
    show: true,
    api: parkMeetingRoomPackage.save,
    auth: ['park:meetingRoomPackage:save']
  },
  edit: {
    show: true,
    api: parkMeetingRoomPackage.update,
    auth: ['park:meetingRoomPackage:update']
  },
  delete: {
    show: true,
    api: parkMeetingRoomPackage.deletes,
    auth: ['park:meetingRoomPackage:delete'],
    realApi: parkMeetingRoomPackage.realDeletes,
    realAuth: ['park:meetingRoomPackage:realDeletes']
  },
  recovery: {
    show: true,
    api: parkMeetingRoomPackage.recoverys,
    auth: ['park:meetingRoomPackage:recovery']
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
    title: "类型",
    dataIndex: "type",
    formType: "select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入类型"
    },
    multiple: false,
    dict: {
      data: [
        {
          label: "基础服务",
          value: "1"
        },
        {
          label: "铂金服务",
          value: "2"
        }
      ],
      translation: true
    }
  },
  {
    title: "费用",
    dataIndex: "fee",
    formType: "select",
    multiple: true,
    dict: {
      name: "platinum_fee",
      props: {
        label: "title",
        value: "key"
      },
      translation: true
    }
  },
  {
    title: "选项",
    dataIndex: "option",
    formType: "select",
    multiple: true,
    dict: {
      name: "platinum_option",
      props: {
        label: "title",
        value: "key"
      },
      translation: true
    }
  },
  {
    title: "内容",
    dataIndex: "content",
    formType: "editor",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入内容"
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
    dataIndex: "update_at",
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
<script> export default { name: 'park:meetingRoomPackage' } </script>