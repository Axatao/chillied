<script lang="ts">
  import { MoonPhase } from "astronomy-engine";

  const degrees = $derived(MoonPhase(new Date()));

  const maskId = "moon-" + Math.random().toString(36).slice(2);

  const isWaning = $derived(degrees > 180 && degrees < 360);
  const illuminationRatio = $derived(degrees <= 180 ? degrees / 180 : (360 - degrees) / 180);

  const shadowX = $derived(isWaning ? 50 + illuminationRatio * 100 : 50 - illuminationRatio * 100);
</script>

<div
  class="absolute top-[12%] left-[8%] w-[150px] h-[150px] pointer-events-none filter drop-shadow-[0_0_24px_rgba(180,200,255,0.5)]"
>
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <mask id={maskId}>
        <circle cx="50" cy="50" r="45" fill="white" />
        <circle cx={shadowX.toFixed(2)} cy="50" r="45" fill="black" />
      </mask>
    </defs>
    <circle cx="50" cy="50" r="45" fill="#dce6ff" mask="url(#{maskId})" />
  </svg>
</div>
