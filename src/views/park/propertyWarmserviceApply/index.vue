<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkPropertyWarmserviceApply from '@/api/park/parkPropertyWarmserviceApply'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  parkPropertyWarmserviceApply.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_property_warmservice_apply',
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
  api: parkPropertyWarmserviceApply.getList
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
    title: "用户ID",
    dataIndex: "user_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入用户ID"
    }
  },
  {
    title: "服务名称",
    dataIndex: "service_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入服务名称"
    }
  },
  {
    title: "服务类型",
    dataIndex: "service_type",
    formType: "select",
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入服务类型"
    },
    dict: {
      data: [
        {
          label: "医疗箱",
          value: "1"
        },
        {
          label: "雨伞",
          value: "2"
        }
      ],
      translation: true
    }
  },
  {
    title: "申请数量",
    dataIndex: "apply_num",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请数量"
    }
  },
  {
    title: "申请时间",
    dataIndex: "apply_date",
    formType: "range",
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入申请时间"
    },
    showTime: true
  },
  {
    title: "支付金额",
    dataIndex: "pay_money",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "支付订单号",
    dataIndex: "pay_wechat_no",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "状态",
    dataIndex: "status",
    formType: "select",
    addDisplay: false,
    editDisplay: false,
    dict: {
      name: "warmservice",
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
<script> export default { name: 'park:propertyWarmserviceApply' } </script>