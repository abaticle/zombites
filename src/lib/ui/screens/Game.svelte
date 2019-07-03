<script>


	import { onMount } from "svelte"
	import Debug from "./../components/Debug.svelte"

	export let game; 

	window.game = game;
	window.ecs = game.ecs;
	
</script> 


<div id="fpsCounter" class="counter"/>

<div class="columns"> 	

	<!-- Map -->
	<div id="map"/>	

	<div class="debug-panel">
		<Debug/>
	</div>

</div>