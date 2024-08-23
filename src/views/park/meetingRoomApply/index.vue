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
  operationColumn: true,
  operationColumnWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: parkMeetingRoomApply.getList,
  edit: {
    show: true,
    api: parkMeetingRoomApply.update,
    auth: ['park:meetingRoomApply:update']
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
    title: "微信支付单号",
    dataIndex: "wechat_pay_order",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false
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
    dict: {
      data: [
        {
          label: "待支付",
          value: "0"
        },
        {
          label: "已支付 ",
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
    hide: true,
    commonRules: {
      required: true,
      message: "请输入申请帐号"
    }
  },
  {
    title: "支付基础金额",
    dataIndex: "pay_price",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入支付基础金额"
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
    title: "申请人公司",
    dataIndex: "apply_company",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请人公司"
    }
  },
  {
    title: "申请人电话",
    dataIndex: "apply_phone",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请人电话"
    }
  },
  {
    title: "申请日期",
    dataIndex: "apply_date",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请日期"
    }
  },
  {
    title: "申请时段",
    dataIndex: "apply_time_period",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请时段"
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
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入支付类型"
    },
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
    formType: "select",
    search: true,
    addDisplay: false,
    commonRules: {
      required: true,
      message: "请输入审核状态"
    },
    dict: {
      name: "meeting_book",
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
    title: "申请类型",
    dataIndex: "apply_type",
    formType: "select",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请类型"
    },
    dict: {
      data: [
        {
          label: "基础服务",
          value: "1"
        },
        {
          label: "会务服务",
          value: "2"
        }
      ],
      translation: true
    }
  },
  {
    title: "铂金服务套餐",
    dataIndex: "platinum_option",
    formType: "input",
    addDisplay: false,
    editDisplay: false
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
