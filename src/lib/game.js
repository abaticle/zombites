import ECS from "./modules/ecs"
import DrawSystem from "./systems/draw"
import DebugSystem from "./systems/debug"
import ActionSystem from "./systems/action"
import InputSystem from "./systems/input"
import constants from "./data/constants";
import components from "./components/components"
import { assemblages } from "./data/assemblages";

export default class Game {

    constructor() {
        this.ecs = new ECS();
        this.systems = [];
        this.timeOld = 0;
    }

    /**
     * Initialize and start game
     */
    init() {
        this.registerComponents()
        this.createEntityGame()
        this.createEntityPlayer()
        this.createEntityZombie()
        this.createSystems()
        this.initSystems()
        requestAnimationFrame(this.update.bind(this))

    }

    initSystems() {
        this.systems.forEach(s => s.init());
    }

    createSystems() {
        this.systems.push(new DrawSystem(this.ecs))
        this.systems.push(new ActionSystem(this.ecs))
        this.systems.push(new DebugSystem(this.ecs))
        this.systems.push(new InputSystem(this.ecs))
    }

    /**
     * Update systems and draw app
     * @param {number} time 
     */
    update(time) {

        let dt = (time - this.timeOld) / 1000;
        this.timeOld = time;

        //Display FPS
        this.updateFPS(dt);

        //Update speed
        //dt *= this._gameEntity.speed


        this.systems.forEach(system => {
            system.update(dt);
        })

        requestAnimationFrame(this.update.bind(this));
    }

    updateFPS(dt) {
        let fps = (1 / (dt)).toFixed(0);
        fps += " fps"
        document.getElementById("fpsCounter").innerHTML = fps;
    }

    registerComponents() {
        this.ecs.registerComponent(components.event)
        this.ecs.registerComponent(components.game)
        this.ecs.registerComponent(components.health)
        this.ecs.registerComponent(components.position)
        this.ecs.registerComponent(components.zombie)
        this.ecs.registerComponent(components.player)
        this.ecs.registerComponent(components.controllable)
    }

    /**
     * Create game entity with speed
     */
    createEntityGame() {
        this.ecs.createEntity("game");
    }


    createEntityPlayer() {
        const id = this.ecs.createFromAssemblage(assemblages.player)


        this.ecs.set(200, id, "position", "x")
        this.ecs.set(200, id, "position", "y")
    }



    createEntityZombie() {        
        const id = this.ecs.createFromAssemblage(assemblages.zombie)
        this.ecs.set(600, id, "position", "x")
        this.ecs.set(600, id, "position", "y")
    }

}