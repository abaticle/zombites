<script>
    import { screen } from "./stores"
    import Game from "./../game"
    import { onMount } from "svelte"
    import ScreenGame from "./screens/Game.svelte"


    const game = new Game()

    onMount(() => {
		game.init()
	});

</script>

<div id="game" class="{ $screen !== 'game' ? 'hidden' : '' }">
    <ScreenGame game={game} />
</div>
