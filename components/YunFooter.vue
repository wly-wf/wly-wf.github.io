<script lang="ts" setup>
import { useScriptTag } from '@vueuse/core'
import YunFooter from 'valaxy-theme-yun/components/YunFooter.vue'

useScriptTag('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
</script>



<template>
  <YunFooter>
    <div class="text-center z-index-0">
      <div>
        <a href="https://icp.gov.moe/?keyword=20250936" target="_blank" style="color: pink;">萌ICP备20250936号</a>
      </div>

      <div>
        <VCLiveTime start-time="2025-07-14">
          <template #live-time-before>
            <span>本站已艰难地运行</span>
          </template>
          <template #live-time-after>
            <span>&nbsp;</span>
          </template>
        </VCLiveTime>
      </div>

      <div class="text-center">
        <div>本站总访问量 <span id="busuanzi_value_site_pv"/> 次</div>
        <div>本站总访客数 <span id="busuanzi_value_site_uv"/> 人次</div>
      </div>
    </div>
  </YunFooter>
</template>