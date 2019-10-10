Game.spawns['VercaSpawn'].room.controller.activateSafeMode();

Game.spawns['VercaSpawn'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );

Game.spawns['VercaSpawn'].spawnCreep([WORK, CARRY, MOVE], 'JoshuaTheBuilder', {memory: {role:'builder'}});

Game.spawns['VercaSpawn'].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], 'HarvesterBig', { memory: { role: 'harvester' } } );