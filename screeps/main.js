let roleHarvester = require('role.harvester');
let roleUpgrader = require('role.upgrader');
let roleBuilder = require('role.builder');
let tower = require('tower');
let roleMinner = require('role.minner');
let autoSpawn = require('auto.spawn');
let roleAttacker = require('role.attacker');
let roleRangeAttacker = require('role.rangeAttacker');
let roleHealer = require('role.healer');

module.exports.loop = function () {
        
    autoSpawn.run('Spawn1', 'harvester', 3);
    autoSpawn.run('Spawn1', 'upgrader', 1);
    autoSpawn.run('Spawn1', 'builder', 1);
    if(Game.getObjectById('ad8d0fbf0fc47641db30c0dd').store[RESOURCE_ENERGY]<100){
        autoSpawn.run('Spawn1', 'minner',1);
    }
    
    if(Game.spawns['Spawn1'].spawning) { 
        let spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
        Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x + 1, 
            Game.spawns['Spawn1'].pos.y, 
            {align: 'left', opacity: 0.8});
    }
    
    for(let name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }
    

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
        if(creep.memory.role=== 'minner') {
            roleMinner.run(creep);
        }
        if(creep.memory.role === 'attacker') {
            roleAttacker.run(creep);
        }
        if(creep.memory.role === 'rangeAttacker') {
            roleRangeAttacker.run(creep);
        }
        if(creep.memory.role === 'healer') {
            roleHealer.run(creep);
        }
    }
}