const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
const roleRepairman = require('role.repairman');

module.exports.loop = function () {
    
    // Clear the memory of non-existing creep.
    for(let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    
    // Filter harvesters, upgraders, builders.
    let harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    let upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    let builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    let repairmen = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairman');
    console.log('Harvesters: ' + harvesters.length + ' Upgraders: ' + upgraders.length + ' Builders: ' + builders.length + ' Repairmen: ' + repairmen.length);
    
    // Spawn new creeps by roles if necessary.
    if(harvesters.length < 6) {
        const newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        Game.spawns['VercaSpawn'].spawnCreep([WORK,CARRY,CARRY,CARRY,MOVE], newName, 
            {memory: {role: 'harvester'}});        
    }

    if(upgraders.length < 6) {
        const newName = 'Upgrader' + Game.time;
        console.log('Spawning new upgrader: ' + newName);
        Game.spawns['VercaSpawn'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE], newName, 
            {memory: {role: 'upgrader'}});        
    }
    
    if(builders.length < 8) {
        const newName = 'Builder' + Game.time;
        console.log('Spawning new builder: ' + newName);
        Game.spawns['VercaSpawn'].spawnCreep([WORK,CARRY,MOVE,MOVE,MOVE], newName, 
            {memory: {role: 'builder'}});        
    }
    
    if(repairmen.length < 2) {
        const newName = 'Repairman' + Game.time;
        console.log('Spawning new repairman: ' + newName);
        Game.spawns['VercaSpawn'].spawnCreep([WORK,CARRY,MOVE,MOVE], newName, 
            {memory: {role: 'repairman'}});        
    }
    
    // Show what is VercaSpawn spawning.
    if(Game.spawns['VercaSpawn'].spawning) { 
        const spawningCreep = Game.creeps[Game.spawns['VercaSpawn'].spawning.name];
        Game.spawns['VercaSpawn'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['VercaSpawn'].pos.x + 1, 
            Game.spawns['VercaSpawn'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

    // Tower.
    const tower = Game.getObjectById('fad37772fae0ba035231e44f');
    if(tower) {
        let closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        let closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    // Set the roles.
    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairman') {
            roleRepairman.run(creep);
        }
    }
}