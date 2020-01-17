<template>
  <div v-loading="loading">
    <div style="width: 100%;padding: 1%;text-align: center">
      <div style="display: inline-block;width:20%;text-align: center">
        <div style="display: inline-block;">
          <el-table :show-header=false :data="list" :row-class-name="tableRowClassName" border fit
                    style="width: 61px; display: inline-block;">
            <el-table-column align="center" width="60">
              <template slot-scope="scope">
                <span style="font-size: xx-small">{{ scope.row.p_number}}</span><br>
                <span style="font-size: x-small;color: #4A9FF9;cursor: pointer" v-if="scope.row.p_user == 0"
                      @click="select(scope.row.p_id, scope.row.p_number, scope.row.p_position)">空闲</span>
                <span style="font-size: x-small" v-else>占用</span><br>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div style="display: inline-block;">
          <el-table :show-header=false :data="list2" :row-class-name="tableRowClassName" border fit
                    style="width: 61px;display: inline-block">
            <el-table-column align="center" width="60">
              <template slot-scope="scope">
                <span style="font-size: x-small">{{ scope.row.p_number}}</span><br>
                <span style="font-size: x-small;color: #4A9FF9;cursor: pointer" v-if="scope.row.p_user == 0"
                      @click="select(scope.row.p_id, scope.row.p_number, scope.row.p_position)">空闲</span>
                <span style="font-size: x-small;" v-else>占用</span><br>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div style="display: inline-block;width: 55%;text-align: center;">
        <div style="display: inline-block;">
          <el-table v-for="item in list3" :show-header=false :data="newList"
                    :row-class-name="midTableRowClassName(item)" border fit
                    style="width: 61px;display: inline-block;margin-right: 5px">
            <el-table-column align="center" width="60">
              <template>
                <span style="font-size: x-small">{{item.p_number}}</span><br>
                <span style="font-size: x-small;color: #4A9FF9;cursor: pointer" v-if="item.p_user == 0"
                      @click="select(item.p_id, item.p_number, item.p_position)">空闲</span>
                <span style="font-size: x-small;" v-else>占用</span><br>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <br>
        <div style="display: inline-block;">
          <el-table v-for="item in list4" :show-header=false :data="newList"
                    :row-class-name="midTableRowClassName(item)" border fit
                    style="width: 61px;display: inline-block;margin-right: 5px">
            <el-table-column align="center" width="60">
              <template>
                <span style="font-size: x-small">{{item.p_number}}</span><br>
                <span style="font-size: x-small;color: #4A9FF9;cursor: pointer" v-if="item.p_user == 0"
                      @click="select(item.p_id, item.p_number, item.p_position)">空闲</span>
                <span style="font-size: x-small;" v-else>占用</span><br>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <br>
        <div style="display: inline-block;margin-top: 80px">
          <el-table v-for="item in list5" :show-header=false :data="newList"
                    :row-class-name="midTableRowClassName(item)" border fit
                    style="width: 61px;display: inline-block;margin-right: 5px">
            <el-table-column align="center" width="60">
              <template>
                <span style="font-size: x-small">{{item.p_number}}</span><br>
                <span style="font-size: x-small;color: #4A9FF9;cursor: pointer" v-if="item.p_user == 0"
                      @click="select(item.p_id, item.p_number, item.p_position)">空闲</span>
                <span style="font-size: x-small;" v-else>占用</span><br>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <br>
        <div style="display: inline-block;">
          <el-table v-for="item in list6" :show-header=false :data="newList"
                    :row-class-name="midTableRowClassName(item)" border fit
                    style="width: 61px;display: inline-block;margin-right: 5px">
            <el-table-column align="center" width="60">
              <template>
                <span style="font-size: x-small">{{item.p_number}}</span><br>
                <span style="font-size: x-small;color: #4A9FF9;cursor: pointer" v-if="item.p_user == 0"
                      @click="select(item.p_id, item.p_number, item.p_position)">空闲</span>
                <span style="font-size: x-small;" v-else>占用</span><br>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <br>
        <div style="display: inline-block;margin-top: 80px">
          <el-table v-for="item in list7" :show-header=false :data="newList"
                    :row-class-name="midTableRowClassName(item)" border fit
                    style="width: 61px;display: inline-block;margin-right: 5px">
            <el-table-column align="center" width="60">
              <template>
                <span style="font-size: x-small">{{item.p_number}}</span><br>
                <span style="font-size: x-small;color: #4A9FF9;cursor: pointer" v-if="item.p_user == 0"
                      @click="select(item.p_id, item.p_number, item.p_position)">空闲</span>
                <span style="font-size: x-small;" v-else>占用</span><br>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <br>
        <div style="display: inline-block;">
          <el-table v-for="item in list8" :show-header=false :data="newList"
                    :row-class-name="midTableRowClassName(item)"
                    border fit
                    style="width: 61px;display: inline-block;margin-right: 5px">
            <el-table-column align="center" width="60">
              <template>
                <span style="font-size: x-small">{{item.p_number}}</span><br>
                <span style="font-size: x-small;color: #4A9FF9;cursor: pointer" v-if="item.p_user == 0"
                      @click="select(item.p_id, item.p_number, item.p_position)">空闲</span>
                <span style="font-size: x-small;" v-else>占用</span><br>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <br>
        <div style="display: inline-block;height: 42px"></div>
      </div>

      <div style="display: inline-block;width:20%;text-align: center">
        <div style="display: inline-block;">
          <el-table :show-header=false :data="list9" :row-class-name="tableRowClassName" border fit
                    style="width: 61px; display: inline-block;">
            <el-table-column align="center" width="60">
              <template slot-scope="scope">
                <span style="font-size: xx-small">{{ scope.row.p_number}}</span><br>
                <span style="font-size: x-small;color: #4A9FF9;cursor: pointer" v-if="scope.row.p_user == 0"
                      @click="select(scope.row.p_id, scope.row.p_number, scope.row.p_position)">空闲</span>
                <span style="font-size: x-small" v-else>占用</span><br>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div style="display: inline-block;">
          <el-table :show-header=false :data="list10" :row-class-name="tableRowClassName" border fit

                    style="width: 61px;display: inline-block">
            <el-table-column align="center" width="60">
              <template slot-scope="scope">
                <!--        <span hidden>{{ scope.row.p_id }}</span>-->
                <span style="font-size: x-small">{{ scope.row.p_number}}</span><br>
                <span style="font-size: x-small;color: #4A9FF9;cursor: pointer" v-if="scope.row.p_user == 0"
                      @click="select(scope.row.p_id, scope.row.p_number, scope.row.p_position)">空闲</span>
                <span style="font-size: x-small" v-else>占用</span><br>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
    <!--选座弹窗-->
    <el-dialog title="座位确认" :visible.sync="dialogFormVisible" style="width: 70%;margin: 0 auto">
      <span>{{seatInfo.seatId}}</span>---<span>{{user.name}}</span>
      <el-form ref="dataForm" :model="seatInfo" label-position="left" label-width="75px"
               style="width: 40%; margin-left:50px;">
        <el-form-item label="座位编号:">
          <span>{{seatInfo.seatNumber}}</span>
        </el-form-item>
      </el-form>
      <el-form ref="dataForm" :model="seatInfo" label-position="left" label-width="75px"
               style="width: 40%; margin-left:50px;">
        <el-form-item label="座位信息:">
          <span>{{seatInfo.seatPosition}}</span>
        </el-form-item>
      </el-form>
      <el-form ref="dataForm" :model="seatInfo" label-position="left" label-width="75px"
               style="width: 40%; margin-left:50px;">
        <el-form-item label="有效时长:">
          <span>3 小时</span>
        </el-form-item>
      </el-form>
      <el-form ref="dataForm" :model="seatInfo" label-position="left" label-width="75px"
               style="width: 40%; margin-left:50px;">
        <el-form-item label="有效时间:">
          <span>{{seatInfo.beginTime | formatDate}} ~ {{seatInfo.endTime | formatDate2}}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <!--        <el-button type="primary" @click="dialogStatus=='create'?createData():updateData()">-->
        <!--          Confirm-->
        <!--        </el-button>-->
      </div>
    </el-dialog>
  </div>
</template>
<style>
  /*更改表格颜色*/
  .free {
    background: #ecf5ff !important;

  }

  .used {
    background: #d3d3d3 !important;
  }

  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: transparent !important;
  }

  .el-table--enable-row-hover .el-table__body tr:active > td {
    background-color: transparent !important;
  }

  span {
    cursor: default;
  }

</style>
<script>
  import { mapGetters } from 'vuex'
  import { seatList, orderList } from '@/api/seats'
  import Tab from '../index'

  export default {
    components: { Tab },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'info',
          deleted: 'danger'
        }
        return statusMap[status]
      },
      formatDate: function (value) {
        let date = new Date(value);
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return h + ':' + m + ':' + s;
      },
      formatDate2: function (value) {
        let date = new Date(value);
        let h = date.getHours();
        h = h < 10 ? ('3' + h) : h+3;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return h + ':' + m + ':' + s;
      }

    },
    props: {
      type: {
        type: String,
        default: 'GF'
      }
    },
    data() {
      return {
        user: {},
        dialogFormVisible: false,
        newList: [{ 1: 1 }],
        list: null,
        list2: null,
        list3: null,
        list4: null,
        list5: null,
        list6: null,
        list7: null,
        list8: null,
        list9: null,
        list10: null,
        loading: true,
        floor: null,
        seatInfo: {
          seatId: null,
          seatNumber: null,
          seatPosition: null,
          beginTime: null,
          endTime: null
        }

      }
    },
    computed: {
      ...mapGetters([
        'name',
        'avatar',
        'roles'
      ])
    },
    created() {
      this.getUser()
      if (this.type === ('GF')) {
        this.floor = 1
      } else if (this.type === ('SF')) {
        this.floor = 2
      } else if (this.type === ('TF')) {
        this.floor = 3
      } else {
        this.floor = 4
      }
      this.getSeats()
    },
    methods: {
      getUser() {
        this.user = {
          name: this.name,
        }
      },
      tableRowClassName({ row }) {
        if (row.p_user == 0) {
          return 'free'
        } else {
          return 'used'
        }
      },
      midTableRowClassName(item) {
        if (item.p_user == 0) {
          return 'free'
        } else {
          return 'used'
        }
      },
      getTime() {
        this.seatInfo.beginTime = Date.parse(new Date())
        this.seatInfo.endTime = Date.parse(new Date())
      },
      select(selectId, selectNumber, selectPosition) {
        this.seatInfo.seatId = selectId
        this.seatInfo.seatNumber = selectNumber
        this.seatInfo.seatPosition = selectPosition
        this.getTime()
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      getSeats() {
        debugger
        this.loading = true
        seatList(this.floor, 1, 0).then(response => {
          this.list = response.data.seats
        }),
          seatList(this.floor, 0, 0).then(response => {
            this.list2 = response.data.seats
          }),
          seatList(this.floor, 1, 40).then(response => {
            this.list9 = response.data.seats
          }),
          seatList(this.floor, 0, 40).then(response => {
            this.list10 = response.data.seats
          }),
          orderList(this.floor, 20).then(response => {
            this.list3 = response.data.seats
          }),
          orderList(this.floor, 30).then(response => {
            this.list4 = response.data.seats
          }),
          orderList(this.floor, 40).then(response => {
            this.list5 = response.data.seats
          })
          ,
          orderList(this.floor, 50).then(response => {
            this.list6 = response.data.seats
          }),
          orderList(this.floor, 60).then(response => {
            this.list7 = response.data.seats
          }),
          orderList(this.floor, 70).then(response => {
            this.list8 = response.data.seats
            setTimeout(() => {
              this.loading = false
            }, 1 * 1000)
          })
      }
    }
  }
</script>

