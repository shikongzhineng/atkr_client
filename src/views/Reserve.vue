<template>
  <div class="main">
    <div class="breadCrumb">
      <div class="breadnav">
        <ul class="breadUl">
          <li class="first">
            <a href="#">您的旅行</a>
          </li>
          <li class="first">时刻表与价格</li>
          <li class="first">旅行详情</li>
          <li class="current">个人信息</li>
          <li>付款</li>
        </ul>
      </div>
    </div>

    <div class="traveldigest">
      <traveldigest :params="{flInfo,flParams1,flParams2}"></traveldigest>
    </div>
    <!-- 是否登录 -->
    <div class="login" v-show="isLogin=='false'">
      <div class="log">登录</div>
      <div class="isLog">
        <p>您是蓝天飞行会员或拥有法航账户？</p>
        <el-button class="btn" @click="tologin">立即登录</el-button>
      </div>
    </div>
    <!-- 个人信息 -->
    <div class="personalData">
      <div class="personal">个人信息</div>
      <div class="personalDetail" v-for="(item,i) of inputBoxsList" :key="i">
        <table style="width:100%;">
          <tr>
            <td>
              姓名
              <span>*</span>
            </td>
            <td>
              <input
                class="psinfo"
                v-model="userList[i].uname"
                @change="valiFn(userList[i],item,['uname'])"
                type="text"
              />
              <span class="vali_msg" :class="item.uname.valiClass">{{item.uname.valiMsg}}</span>
            </td>
          </tr>
          <tr class="sex">
            <td style="width:20%">
              性别
              <span>*</span>
            </td>
            <td>
              <div>
                <el-radio-group v-model="userList[i].gender">
                  <el-radio-button name="sex" label="1">男</el-radio-button>
                  <el-radio-button name="sex" label="0">女</el-radio-button>
                </el-radio-group>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              身份证号
              <span>*</span>
            </td>
            <td>
              <input
                class="psinfo"
                v-model="userList[i].idCard"
                @change="valiFn(userList[i],item,['idCard'])"
                type="text"
              />
              <span class="vali_msg" 
                :class="valiCurrent.value!==valiOld.value?item.idCard.valiClass:item.idCard.valiClass"
              >
                {{valiCurrent.value!==valiOld.value?item.idCard.valiMsg:item.idCard.valiMsg}}
              </span>
            </td>
          </tr>
          <tr>
            <td>
              手机号
              <span>*</span>
            </td>
            <td>
              <input
                class="psinfo"
                v-model="userList[i].phone"
                @change="valiFn(userList[i],item,['phone'])"
                type="text"
              />
              <span class="vali_msg" :class="item.phone.valiClass">
                {{item.phone.valiMsg}}
                </span>
            </td>
          </tr>
        </table>
      </div>
      <div class="personal">特定手续</div>
      <div class="personalDetail">
        <span>据国家有关部门出于监管需要，要求您必须提供个人信息。您在预订机票后，可前往我们网站“我的预订”页面填写该信息。</span>
      </div>
    </div>
    <div class="btns">
      <div class="btn1" @click="back">
        <a href="javascript:;">上一步</a>
      </div>
      <div class="btn2" @click="next">
        <a href="javascript:;">提交订单</a>
      </div>
    </div>
  </div>
</template>
<script src="../js/reserve.js"></script>
<style src="../assets/css/reserve.css" scoped></style>

