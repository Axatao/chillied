<script lang="ts">
  import Moon from "./components/Moon.svelte";
  import ShootingStars from "./components/ShootingStars.svelte";
  import Sky from "./components/Sky.svelte";
  import Stars from "./components/Stars.svelte";
</script>

<main>
  <section>
    <Sky>
      <Moon />
      <Stars />
      <ShootingStars />
    </Sky>
  </section>
</main>
