import Tools from "../modules/tools"
import constants from "../data/constants"
import ECS from "../modules/ecs"

export default class DrawSystem {

    constructor(ecs = new ECS()) {
        this.ecs = ecs

        this.width = window.innerWidth
        this.height = window.innerHeight
        this.layer
        this.stage
    }

    /**
     * Click on a planet/ship
     * @param {object} event Konva event
     */
    onClick(event) {

    }

    /**
     * Mouse move: update selection width and height
     * @param {object} event Konva event
     */
    onMouseMove(event) {

    }

    /**
     * Mouse down
     * @param {object} event Konva event
     */
    onMouseDown(event) {

    }

    /**
     * Mouse up
     * @param {object} event Konva event
     */
    onMouseUp(event) {

    }


    /**
     * Scroll 
     * TODO:Lease animation when zooming
     * @param {object} event Konva event
     */
    onScroll(event) {

    }

    /**
     * Init Konva canva
     * TODO:Update with and heigth when moving window
     */
    initKonva() {

        this.stage = new Konva.Stage({
            container: 'map',
            width: this.width,
            height: this.height
        });

        this.stage.on('contextmenu', event => {
            event.evt.preventDefault();
        })

        this.layer = new Konva.Layer({
            id: "planet-layer"
        });


        this.stage.on("mousedown", this.onMouseDown.bind(this))
        this.stage.on("mousemove", this.onMouseMove.bind(this))
        this.stage.on("mouseup", this.onMouseUp.bind(this))
        this.stage.on('wheel', this.onScroll.bind(this));
        this.stage.on("click", this.onClick.bind(this))

        this.stage.add(this.layer);

        //TODO:Remove for build
        window.stage = this.stage;
        window.layer = this.layer;
    }

    /**
     * Init: draw everything
     */
    init() {
        this.initKonva()
    }


    updatePlayers() {
        const players = this.ecs.searchEntities("player")


        players.forEach(id => {
            const pos = this.ecs.get(id, "position")

            let playerDraw = this.layer.findOne("#player-" + id)

            if (playerDraw === undefined) {
                playerDraw = new Konva.Circle({
                    radius: 20,
                    fill: "white",
                    id: "player-" + id.toString(),
                    name: "player",
                    listening: false
                })

                this.layer.add(playerDraw)
            }

            playerDraw.position({
                x: pos.x,
                y: pos.y
            })
        })
    }


    updateZombies() {
        const zombies = this.ecs.searchEntities("zombie")


        zombies.forEach(id => {
            const pos = this.ecs.get(id, "position")

            let zombieDraw = this.layer.findOne("#zombie-" + id)

            if (zombieDraw === undefined) {
                zombieDraw = new Konva.Circle({
                    radius: 20,
                    fill: "red",
                    id: "zombie-" + id.toString(),
                    name: "zombie",
                    listening: false
                })

                this.layer.add(zombieDraw)
            }

            zombieDraw.position({
                x: pos.x,
                y: pos.y
            })
        })        
    }


    update(dt) {
        this.updatePlayers()
        this.updateZombies()

        this.layer.batchDraw()
    }


}