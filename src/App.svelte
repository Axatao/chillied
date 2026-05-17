<script lang="ts">
  let count = 0
  const increment = () => (count += 1)
</script>

<main>
  <h1>Ejemplo mínimo</h1>
  <button class="counter" on:click={increment}>Contador: {count}</button>
</main>
