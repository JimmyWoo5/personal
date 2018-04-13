<template>
  <div class='buy'>
    <el-row>
      <el-col :span='4'>

        <div>成交历史</div>

        <div class='border' style='height: 425px;'>
          <el-row v-for='(i, n) in history' :key='n'>
            <el-col :span='14'>{{i.num1}}</el-col>
            <el-col :span='8' :offset='2'>{{i.num2}}</el-col>
          </el-row>
        </div>

      </el-col>

      <el-col :span='4' :offset='1'>

        <el-row>
          <el-col :span='8'>卖</el-col>
          <el-col :span='16'>总量 432432</el-col>
        </el-row>
        <div class='border' style='height: 195px;'>
          <el-row v-for='(i, n) in sold' :key='n'>
            <el-col :span='14'>{{i.num1}}</el-col>
            <el-col :span='8' :offset='2'>{{i.num2}}</el-col>
          </el-row>
        </div>

        <div style="text-align: center;line-height:34px;">价差 <span>18</span></div>
        <div class='border' style='height: 195px;'>
          <el-row v-for='(i, n) in bought' :key='n'>
            <el-col :span='14'>{{i.num1}}</el-col>
            <el-col :span='8' :offset='2'>{{i.num2}}</el-col>
          </el-row>
        </div>
        <el-row>
          <el-col :span='8'>买</el-col>
          <el-col :span='16'>总量 234324</el-col>
        </el-row>

      </el-col>

      <el-col :span='6' :offset='1'>
        <h1>打散下单</h1>
        <el-form :model="scatterForm" ref="scatterForm" label-width="80px">
          <el-form-item label="中心价格">
            <el-input type='number' v-model.number="scatterForm.price"></el-input>
          </el-form-item>
          <el-form-item label="上限">
            <el-input type='number' v-model.number="scatterForm.upperLimit"></el-input>
          </el-form-item>
          <el-form-item label="下限">
            <el-input type='number' v-model.number="scatterForm.lowerLimit"></el-input>
          </el-form-item>
          <el-form-item label="打散数">
            <el-input type='number' v-model.number="scatterForm.scatterNum"></el-input>
          </el-form-item>
          <el-form-item label="总量">
            <el-input type='number' v-model.number="scatterForm.total"></el-input>
          </el-form-item>
          <el-form-item label-width='0'>
            <el-button type="primary" @click="submitForm('ruleForm2')">买</el-button>
            <el-button @click="resetForm('ruleForm2')">卖</el-button>
          </el-form-item>
        </el-form>

        <h1>打散下单</h1>
        <el-form :model="mobilityForm" ref="mobilityForm" label-width="80px">

          <el-form-item label="档位">
            <el-row>
              <el-col :span='10'>
                <el-input type='number' v-model.number="mobilityForm.levelFrom"></el-input>
              </el-col>
              <el-col :span='4' style='text-align: center;'>至</el-col>
              <el-col :span='10'>
                <el-input type='number' v-model.number="mobilityForm.levelTo"></el-input>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="填补档数">
            <el-input type='number' v-model.number="mobilityForm.fillLevel"></el-input>
          </el-form-item>

          <el-form-item label="总量">
            <el-input type='number' v-model.number="mobilityForm.total"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">下单</el-button>
          </el-form-item>

        </el-form>

      </el-col>

      <el-col :span='7' :offset='1'>
        <h1>填补差价</h1>
        <el-form :model="diffForm" ref="diffForm" label-width="50px">

          <el-row>

            <el-col :span='15'>
              <el-form-item label="买4价">
                <div style="text-align: right;">4324324234</div>
              </el-form-item>
              <el-form-item label="买4价">
                <div style="text-align: right;">4324324234</div>
              </el-form-item>
              <el-form-item label="买4价">
                <div style="text-align: right;">4324324234</div>
              </el-form-item>

            </el-col>

            <el-col :span='8' :offset='1'>
              <el-form-item label="差价">
                <el-input type='number' v-model.number="diffForm.price"></el-input>
              </el-form-item>
              <el-form-item label="总量">
                <el-input type='number' v-model.number="diffForm.total"></el-input>
              </el-form-item>
            </el-col>

          </el-row>

          <el-form-item>
            <el-button type="primary" @click="submitForm('diffForm')">自动填充</el-button>
            <el-button type="primary" @click="submitForm('diffForm')">下单</el-button>
          </el-form-item>

        </el-form>

      </el-col>

    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        history: [
          {num1: 34.33, num2: 323},
          {num1: 34.33, num2: 323},
          {num1: 34.33, num2: 323}
        ],
        sold: [
          {num1: 34.33, num2: 323},
          {num1: 34.33, num2: 323},
          {num1: 34.33, num2: 323}
        ],
        bought: [
          {num1: 34.33, num2: 323},
          {num1: 34.33, num2: 323},
          {num1: 34.33, num2: 323}
        ],
        scatterForm: {
          price: '', // 价格
          upperLimit: '', // 上限
          lowerLimit: '', // 下限
          scatterNum: '', // 打散数
          total: ''
        },
        mobilityForm: {
          levelFrom: '', // 起
          levelTo: '', // 至
          fillLevel: '', // 填补档位数
          total: ''
        },
        diffForm: {
          price: '',
          total: ''
        }
      }
    }
  }
</script>

<style lang="less">
  .buy{
    .border{border:1px solid #a1a1a1;padding: 10px 4px;box-sizing: border-box;}

  }
</style>
