<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkMeetingRoomApply from '@/api/park/parkMeetingRoomApply'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, id, statusName) => {
  parkMeetingRoomApply.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_meeting_room_apply',
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
  api: parkMeetingRoomApply.getList
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
    title: "支付单号",
    dataIndex: "pay_order",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入支付单号"
    }
  },
  {
    title: "支付时间",
    dataIndex: "pay_time",
    formType: "range",
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入支付时间"
    },
    showTime: true
  },
  {
    title: "支付状态",
    dataIndex: "pay_status",
    formType: "select",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入支付状态"
    },
    multiple: false,
    dict: {
      data: [
        {
          label: "待支付",
          value: "0"
        },
        {
          label: "已支付",
          value: "1"
        }
      ],
      translation: true
    }
  },
  {
    title: "申请帐号",
    dataIndex: "user_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请帐号"
    }
  },
  {
    title: "申请人姓名",
    dataIndex: "apply_name",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请人姓名"
    }
  },
  {
    title: "申请人电话",
    dataIndex: "apply_phone",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请人电话"
    }
  },
  {
    title: "申请时段",
    dataIndex: "apply_time_period",
    formType: "select",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请时段"
    },
    multiple: false,
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
    title: "会议室编号",
    dataIndex: "room_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入会议室编号"
    }
  },
  {
    title: "支付类型",
    dataIndex: "pay_type",
    formType: "select",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入支付类型"
    },
    multiple: false,
    dict: {
      data: [
        {
          label: "微信支付",
          value: "1"
        },
        {
          label: "企业支付",
          value: "2"
        }
      ],
      translation: true
    }
  },
  {
    title: "审核状态",
    dataIndex: "status",
    formType: "radio",
    addDisplay: false,
    commonRules: {
      required: true,
      message: "请输入审核状态"
    },
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
    title: "企业支付截图",
    dataIndex: "image",
    formType: "upload",
    addDisplay: false,
    editDisplay: false,
    type: "image",
    multiple: false,
    onlyData: true,
    returnType: "hash"
  },
  {
    title: "基础服务套餐",
    dataIndex: "base_option",
    formType: "select",
    addDisplay: false,
    editDisplay: false,
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
    title: "铂金服务套餐",
    dataIndex: "platinum_option",
    formType: "select",
    addDisplay: false,
    editDisplay: false,
    hide: true,
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
<script> export default { name: 'park:meetingRoomApply' } </script>
