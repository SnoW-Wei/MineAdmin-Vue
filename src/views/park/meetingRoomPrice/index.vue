<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkMeetingRoomPrice from '@/api/park/parkMeetingRoomPrice'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  parkMeetingRoomPrice.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  parkMeetingRoomPrice.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_meeting_room_price',
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
  api: parkMeetingRoomPrice.getList,
  add: {
    show: true,
    api: parkMeetingRoomPrice.save,
    auth: ['park:meetingRoomPrice:save']
  },
  edit: {
    show: true,
    api: parkMeetingRoomPrice.update,
    auth: ['park:meetingRoomPrice:update']
  },
  delete: {
    show: true,
    api: parkMeetingRoomPrice.deletes,
    auth: ['park:meetingRoomPrice:delete']
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
    title: "年月开始",
    dataIndex: "year_month_start",
    formType: "date",
    commonRules: {
      required: true,
      message: "请输入年月开始"
    },
    mode: "month",
    range: false
  },
  {
    title: "年月结束",
    dataIndex: "year_month_end",
    formType: "date",
    commonRules: {
      required: true,
      message: "请输入年月结束"
    },
    mode: "month",
    range: false
  },
  {
    title: "时段",
    dataIndex: "time_period",
    formType: "radio",
    commonRules: {
      required: true,
      message: "请输入时段"
    },
    dict: {
      data: [
        {
          label: "上午",
          value: "1"
        },
        {
          label: "下午",
          value: "2"
        },
        {
          label: "全天",
          value: "3"
        }
      ],
      translation: true
    }
  },
  {
    title: "原价格",
    dataIndex: "origin_price",
    formType: "input-number",
    commonRules: {
      required: true,
      message: "请输入原价格"
    },
    step: 10,
    precision: 2
  },
  {
    title: "优惠价格",
    dataIndex: "discount_price",
    formType: "input-number",
    commonRules: {
      required: true,
      message: "请输入优惠价格"
    },
    step: 10,
    precision: 2
  },
  {
    title: "优惠说明",
    dataIndex: "desc",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入优惠说明"
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
<script> export default { name: 'park:meetingRoomPrice' } </script>