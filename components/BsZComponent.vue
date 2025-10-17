<!-- <script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <div>
    <div>本站总访问量 <span id="busuanzi_value_site_pv" > 次</div>
    <div>本站访客数 <span id="busuanzi_value_site_uv" > 人次</div>
  </div>
</template> -->




<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'

// 动态加载不蒜子统计脚本
useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>

<template>
  <div style="margin-top: 20px; padding: 10px; border: 1px solid #eee; border-radius: 5px;">
    <p>本站总访问量: <span id="busuanzi_value_site_pv" /> 次</p>
    <p>本站访客数: <span id="busuanzi_value_site_uv" /> 人次</p>
  </div>
</template>

<style scoped>
/* （可选）添加一些样式使统计信息更美观 */
div p {
  margin: 5px 0;
  font-size: 0.9em;
  color: #666;
}
</style>
