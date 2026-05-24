<script lang="ts">
  import { onMount } from "svelte";
  import type { Container } from "@tsparticles/engine";
  import { tsParticles } from "@tsparticles/engine";
  import { initParticles } from "../lib/particlesInit";

  const id = "shooting-stars-" + Math.random().toString(36).slice(2);

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
            fpsLimit: 60,

            particles: {
              number: { value: 0 },
              color: { value: ["#ffffff", "#eef0ff", "#dde4ff"] },
              shape: { type: "circle" },

              opacity: {
                value: { min: 0, max: 1 },
                animation: {
                  enable: true,
                  speed: 1.2,
                  sync: true,
                  startValue: "max",
                  destroy: "min",
                },
              },

              size: {
                value: { min: 0.4, max: 3.5 },
                animation: {
                  enable: true,
                  speed: 8,
                  sync: true,
                  startValue: "max",
                  destroy: "min",
                },
              },

              shadow: {
                enable: true,
                color: "#b8c8ff",
                blur: 18,
              },

              effect: {
                type: "trail",
                options: {
                  trail: {
                    length: 10,
                    minWidth: 0.2,
                    fade: true,
                  },
                },
              },

              move: {
                enable: true,
                speed: { min: 28, max: 48 },
                direction: "bottom-right",
                straight: true,
                angle: { offset: 0, value: 22 },
                outModes: { default: "destroy" },
              },

              life: {
                duration: { sync: true, value: { min: 0.9, max: 1.6 } },
                count: 1,
              },
            },

            emitters: [
              {
                direction: "bottom-right",
                rate: { delay: 7, quantity: 1 },
                position: { x: 10, y: 5 },
                size: { width: 60, height: 5 },
              },
              {
                direction: "bottom-right",
                rate: { delay: 11, quantity: 1 },
                position: { x: 40, y: 8 },
                size: { width: 45, height: 5 },
              },
              {
                direction: "bottom-right",
                rate: { delay: 17, quantity: 1 },
                position: { x: 20, y: 15 },
                size: { width: 50, height: 5 },
              },
            ],
          },
        })) ?? undefined;
    })();

    return () => {
      instance?.destroy();
    };
  });
</script>

<div {id} class="absolute inset-0 w-full h-full pointer-events-none"></div>
