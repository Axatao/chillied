<script lang="ts">
  import { onMount } from "svelte";
  import type { Container } from "@tsparticles/engine";
  import { tsParticles } from "@tsparticles/engine";
  import { initParticles } from "../lib/particlesInit";

  const id = "stars-" + Math.random().toString(36).slice(2);

  onMount(() => {
    let instance: Container | undefined;
    (async () => {
      await initParticles();

      instance =
        (await tsParticles.load({
          id,
          options: {
            fullScreen: { enable: false },
            background: { color: "transparent" },
            detectRetina: true,
            particles: {
              number: { value: 500 },
              color: {
                value: ["#D2DAFF", "#C3CDFA", "#E6E8FF", "#B4C0F5", "#D7E1FF"],
              },
              size: { value: { min: 0.45, max: 1.25 } },
              opacity: { value: { min: 0.18, max: 0.9 } },
              move: { enable: false },
              shape: { type: "circle" },
            },
          },
        })) ?? undefined;
    })();

    return () => {
      instance?.destroy();
    };
  });
</script>

<div {id} class="absolute inset-0 w-full h-full pointer-events-none"></div>
