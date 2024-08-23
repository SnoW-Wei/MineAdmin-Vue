<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkCompanyAccount from '@/api/park/parkCompanyAccount'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()


const numberOperation = (newValue, id, numberName) => {
  parkCompanyAccount.numberOperation({ id, numberName, numberValue: newValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}

const switchStatus = (statusValue, id, statusName) => {
  parkCompanyAccount.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_company_account',
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
  api: parkCompanyAccount.getList,
  add: {
    show: true,
    api: parkCompanyAccount.save,
    auth: ['park:companyAccount:save']
  },
  edit: {
    show: true,
    api: parkCompanyAccount.update,
    auth: ['park:companyAccount:update']
  },
  delete: {
    show: true,
    api: parkCompanyAccount.deletes,
    auth: ['park:companyAccount:delete']
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
    title: "税号",
    dataIndex: "tax_no",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入税号"
    }
  },
  {
    title: "单位地址",
    dataIndex: "address",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入单位地址"
    }
  },
  {
    title: "电话",
    dataIndex: "tel",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入电话"
    }
  },
  {
    title: "开户银行",
    dataIndex: "bank_name",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入开户银行"
    }
  },
  {
    title: "银行账户",
    dataIndex: "bank_no",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入银行账户"
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
  }
])
</script>
<script> export default { name: 'park:companyAccount' } </script>