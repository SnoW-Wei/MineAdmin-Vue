<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <!-- CRUD 组件 -->
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import parkPropertyReleaseApply from '@/api/park/parkPropertyReleaseApply'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, id, statusName) => {
  parkPropertyReleaseApply.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'park_property_release_apply',
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
  api: parkPropertyReleaseApply.getList,
  edit: {
    show: true,
    api: parkPropertyReleaseApply.update,
    auth: ['park:propertyReleaseApply:update']
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
    sortable: {
      sortDirections: [
        "ascend",
        "descend"
      ],
      sorter: true
    }
  },
  {
    title: "用户ID",
    dataIndex: "user_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "姓名",
    dataIndex: "user_name",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "联系电话",
    dataIndex: "phone",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "公司名称",
    dataIndex: "company",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "房间号",
    dataIndex: "floor",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "物品类型",
    dataIndex: "goods_type",
    formType: "select",
    search: true,
    addDisplay: false,
    editDisplay: false,
    dict: {
      name: "property_release",
      props: {
        label: "title",
        value: "key"
      },
      translation: true
    }
  },
  {
    title: "物品描述",
    dataIndex: "goods_desc",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "生成二维码",
    dataIndex: "apply_image",
    formType: "upload",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    type: "image",
    multiple: false
  },
  {
    title: "申请状态",
    dataIndex: "apply_status",
    formType: "select",
    addDisplay: false,
    dict: {
      name: "apply",
      props: {
        label: "title",
        value: "key"
      },
      translation: true,
      tagColors:{0:'gray', 1: 'green', 2: 'red' }
    }
  },
  {
    title: "申请日期",
    dataIndex: "apply_date",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    showTime: false
  },
  {
    title: "开始时间",
    dataIndex: "apply_start_at",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "结束时间",
    dataIndex: "apply_end_at",
    formType: "input",
    addDisplay: false,
    editDisplay: false
  },
  {
    title: "审核人",
    dataIndex: "audit_user_id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "放行时间",
    dataIndex: "release_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  },
  {
    title: "附件",
    dataIndex: "file",
    formType: "upload",
    addDisplay: false,
    editDisplay: false,
    type: "file",
    multiple: false
  },
  {
    title: "",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  },
  {
    title: "",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  },
  {
    title: "",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  }
])
</script>
<script> export default { name: 'park:propertyReleaseApply' } </script>
