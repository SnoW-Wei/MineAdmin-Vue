<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkMeetingRoomInvoiceApply from '@/api/park/parkMeetingRoomInvoiceApply'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, id, statusName) => {
  parkMeetingRoomInvoiceApply.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_meeting_room_invoice_apply',
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
  api: parkMeetingRoomInvoiceApply.getList,
  edit: {
    show: true,
    api: parkMeetingRoomInvoiceApply.update,
    auth: ['park:meetingRoomInvoiceApply:update']
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
    title: "订单单号",
    dataIndex: "meeting_apply_no",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "名称",
    dataIndex: "name",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "税号",
    dataIndex: "tax_id",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "地址",
    dataIndex: "address",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "电话号码",
    dataIndex: "phone",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "开户银行",
    dataIndex: "bank",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "银行账户",
    dataIndex: "bank_no",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "创建账号",
    dataIndex: "user_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "发票类型",
    dataIndex: "type",
    formType: "select",
    addDisplay: false,
    editDisplay: false,
    dict: {
      data: [
        {
          label: "会议室",
          value: "1"
        }
      ],
      translation: true
    }
  },
  {
    title: "开具状态",
    dataIndex: "status",
    formType: "select",
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
<script> export default { name: 'park:meetingRoomInvoiceApply' } </script>