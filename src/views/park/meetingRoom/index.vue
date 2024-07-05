<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkMeetingRoom from '@/api/park/parkMeetingRoom'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  parkMeetingRoom.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  parkMeetingRoom.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_meeting_room',
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
  api: parkMeetingRoom.getList,
  add: {
    show: true,
    api: parkMeetingRoom.save,
    auth: ['park:meetingRoom:save']
  },
  edit: {
    show: true,
    api: parkMeetingRoom.update,
    auth: ['park:meetingRoom:update']
  },
  delete: {
    show: true,
    api: parkMeetingRoom.deletes,
    auth: ['park:meetingRoom:delete']
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
    title: "图片",
    dataIndex: "images",
    formType: "upload",
    commonRules: {
      required: true,
      message: "请输入图片"
    },
    type: "image",
    multiple: true,
    onlyData: true,
    returnType: "hash"
  },
  {
    title: "联系电话",
    dataIndex: "tel",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入联系电话"
    }
  },
  {
    title: "基础费用",
    dataIndex: "time_period",
    formType: "select",
    commonRules: {
      required: true,
      message: "请输入基础费用"
    },
    multiple: true,
    dict: {
      // 远程通用接口请求，新版代码生成都有一个 remote 接口
      remote: 'park/meetingRoomPrice/remote',
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
      }
    }
  },
  {
    title: "基础套餐",
    dataIndex: "base_config",
    formType: "select",
    multiple: false,
    dict: {
      // 远程通用接口请求，新版代码生成都有一个 remote 接口
      remote: 'park/meetingRoomPackage/remote',
      // 指定组件接收的props
      props: { label: 'title', value: 'id' },
      // 开启分页
      openPage: true,
      // 对数据进行字典翻译
      translation: true,
      // 远程请求配置项
      remoteOption: {
        // 按用户名排序
        // 设置查询的字段
        select: [ 'id', 'title' ],
      }
    }
  },
  {
    title: "铂金套餐",
    dataIndex: "platinum_config",
    formType: "select",
    hide: true,
    multiple: true,
    dict: {
      // 远程通用接口请求，新版代码生成都有一个 remote 接口
      remote: 'park/meetingRoomPackage/remote',
      // 指定组件接收的props
      props: { label: 'title', value: 'id' },
      // 开启分页
      openPage: true,
      // 对数据进行字典翻译
      translation: true,
      // 远程请求配置项
      remoteOption: {
        // 按用户名排序
        // 设置查询的字段
        select: [ 'id', 'title' ],
      }
    }
  },
  {
    title: "详细信息",
    dataIndex: "detail",
    formType: "editor",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入详细信息"
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
<script> export default { name: 'park:meetingRoom' } </script>
