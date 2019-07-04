<!-- 购买机票：机票搜索页 -->
<template>
  <div class="main">
    <div class="title">购买机票</div>
    <div class="section">
      <h3 class="subtitle">目的地</h3>
      <div tabindex="0" class="address">
        <div class="bgblock" :style="flInfo.ticket===1?{left:0}:{left:'50%'}"></div>
        <div class="row">
          <div class="col-6" :style="flInfo.ticket===1?selectedStyle:''" @click="bgChange(1)">单程</div>
          <div class="col-6" :style="flInfo.ticket===2?selectedStyle:''" @click="bgChange(2)">往返</div>
        </div>
      </div>
      <el-row class="adrInput">
        <el-col :span="9" class="city-list">
          <div>
            <input class="start" type="text" placeholder="出发" v-model="flInfo.originplace" />
            <div class="feiji">
              <img src="img/searchFlight/feiji-1.png" alt />
              <div></div>
            </div>
            <div class="delete" @click="delAddr('originplace')">
              <img src="img/searchFlight/delete.png" alt />
            </div>
          </div>
          <div>
            <div class="adrCard" :class="adrState===1?adrCard:''">
              <span>热门城市</span>
              <ul class="hotcity">
                <li v-for="(item,i) of city[0]" :key="i" @click="selCity(item,'originplace')">{{item}}</li>
              </ul>
              <span>通航城市</span>
              <ul class="commoncity">
                <li v-for="(item,i) of city[1]" :key="i" @click="selCity(item,'originplace')">{{item}}</li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="3" class="show-list">
          <div>
            <img class="search" src="img/searchFlight/sousuo.png" alt />
          </div>
          <div tabindex="0" class="box" @focus="showCityList(1)" @blur="hiddenCityList"></div>
        </el-col>
        <el-col :span="9" class="city-list">
          <div>
            <input v-model="flInfo.destination" class="end" type="text" placeholder="到达" />
            <div class="feiji">
              <img src="img/searchFlight/feiji-2.png" alt />
              <div></div>
            </div>
            <div class="delete" @click="delAddr('destination')">
              <img src="img/searchFlight/delete.png" alt />
            </div>
          </div>
          <div>
            <div class="adrCard" :class="adrState===2?adrCard:''">
              <span>热门城市</span>
              <ul class="hotcity">
                <li v-for="(item,i) of city[0]" :key="i" :id="item" @click="selCity(item,'destination')">{{item}}</li>
              </ul>
              <span>通航城市</span>
              <ul class="commoncity">
                <li v-for="(item,i) of city[1]" :key="i" :id="item" @click="selCity(item,'destination')">{{item}}</li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="3" class="show-list">
          <div>
            <img class="search" src="img/searchFlight/sousuo.png" alt />
          </div>
          <div tabindex="0" class="box" @focus="showCityList(2)" @blur="hiddenCityList"></div>
        </el-col>
      </el-row>
      <div class="line"></div>
      <h3 class="subtitle">日期</h3>
      <div class="date row">
        <div class="col-6 go">
          <div class="block small">
            去程
            <el-date-picker
              v-model="flInfo.startdate"
              type="date"
              placeholder="选择去程日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </div>
          <img src="img/searchFlight/go.png" alt />
          <div class="line"></div>
        </div>
        <div class="col-6 come" :style="flInfo.ticket===2?{display:'block'}:''">
          <div class="block small">
            回程
            <el-date-picker
              v-model="flInfo.backdate"
              type="date"
              placeholder="选择回程日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
          </div>
          <img src="img/searchFlight/come.png" alt />
          <div class="line"></div>
        </div>
      </div>
      <div class="line"></div>
      <!-- 乘客 -->
      <h3 class="subtitle">乘客</h3>
      <span class="small">乘客人数</span>
      <div class="passengerNum">
        <div class="bgblock" :style="psgBgStyle"></div>
        <div tabindex="0" class="passNum d-flex">
          <!-- div本身没有获取焦点事件，加上tabindex="0"即可 -->
          <div
            class="num"
            v-for="item of 9"
            :key="item"
            @click="(e)=>{chooseNum(e,item)}"
            :style="flInfo.passnum===item?selectedStyle:''"
          >{{item}}</div>
        </div>
        <div class="passage">
          <div class="everypass" v-for="(val,index) of flInfo.passnum" :key="index">
            <span class="small">第{{number[index]}}名乘客</span>
            <el-select v-model="passvalue[index]">
              <el-option v-for="item of options" :key="item" :label="item" :value="item"></el-option>
            </el-select>
            <div class="question" v-if="index===0">
              <div class="questionimg">
                <img src="img/searchFlight/questionfill.png" alt />
              </div>
              <div class="tipscard">
                <div>
                  <div>
                    <img src="img/searchFlight/tishi.png" alt />
                  </div>
                  <p>
                    儿童旅行：
                    <br />
                    <br />- 4岁以下婴儿必须由一名至少年满18周岁的成人陪同（如果陪伴者是孩子的父亲或法定监护人，其年龄可以低于18周岁。在这种情况下，请直接联系我们，以便办理您的预定）。
                    <br />
                    <br />- 一名儿童（5-14岁，或4-11岁，根据目的地情况而定）可以单独旅行，但前提是以“单独旅行儿童”的身份旅行。
                  </p>
                  <div class="arrow">
                    <img src="img/searchFlight/arrow.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部两个按钮 -->
      <div class="line"></div>
      <div class="btns">
        <div class="btn1">
          <a href="javascript:;" @click="$router.push('index')">回到首页</a>
        </div>
        <div class="btn2">
          <a href="javascript:;" @click="search">搜索航班</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../js/searchFlight.js"></script>
<style src="../assets/css/searchFlight.css" scoped></style>