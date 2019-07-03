<script>
import { debug } from "./../stores"
</script>

<div class="columns"> 
    <div class="column">
        {#each $debug.data as data}
        <b>{data.name}</b>: {data.value}
        <br>
        {/each}
    </div>
</div>