<script lang="ts">
  import type { Snippet } from 'svelte'

  let { children }: { children?: Snippet } = $props()
</script>

<div class="relative w-full h-screen">
  <div class="absolute inset-0 bg-gradient-to-b from-[#06062d] to-[#14184f]"></div>
  {@render children?.()}
</div>