<template>
  <div class="footer">
    <div class="help-index clearfix">
      <dl class="wrap-cont">
        <dt>快速链接</dt>
        <dd>
          <p><a class="link" href="">速递管家</a></p>
        </dd>
      </dl>
      <dl class="wrap-cont">
        <dt>联系方式</dt>
        <dd>
          <p>联&nbsp;系QQ： 543981157、41340112</p>
          <p>总部热线： 0755-23200756</p>
          <p>义乌分部： 13065987667</p>
          <p>联系邮箱： limi@ruantongbao.com</p>
          <p>联系地址：深圳市宝安区福永街道福海大道旁福海工业园B3区B5栋6楼</p>
        </dd>
      </dl>
      <div class="foot-gzh">
        <h3>微信公众号</h3>
        <p><img :src="ewmImgUrl" /></p>
      </div>
    </div>
    <div class="help-index bottom-t">
      版权所有 深圳市软通宝科技有限公司 Copyright 2015 - 2021 RTB All Rights Reserved.&nbsp;&nbsp;<a target="_blank" href="http://www.beian.miit.gov.cn">粤 ICP 备 15048722 号</a>
    </div>
  </div>
</template>

<script>
const ewmImgUrl = require('../../../../assets/img/ewm.jpg')

export default {
  name: '',
  data() {
    return {
      ewmImgUrl
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../assets/styles/variables.scss';

.footer{padding: 50px 0 0; background-color:#373c47;}
.wrap-cont{ float:left; margin-left: 140px; width: 255px;}
.wrap-cont dt{ padding-bottom:10px; font-size:18px; color:rgb(169, 169, 169);}
.wrap-cont dd p{ margin-top:8px; color:rgb(169, 169, 169);}
.wrap-cont dd p .link{ color:rgb(169, 169, 169); font-size: 13px;}
.wrap-cont dd p .link:hover{ color:$color-theme;}

.foot-gzh{ float:left; margin-left:241px;}
.foot-gzh h3{ font-weight:normal; font-size:18px; text-align:center; margin-bottom:15px; color:rgb(169, 169, 169);}
.foot-gzh img{ display:block; height:110px;}

.bottom-t{ padding-top:30px; margin-top:30px; padding-bottom:30px; border-top:1px solid #555555; text-align:center; color:rgb(169, 169, 169);}
.bottom-t a{ color:rgb(169, 169, 169);}
</style>
