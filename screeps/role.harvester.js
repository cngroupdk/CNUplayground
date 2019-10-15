let roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {                              //if capacity is not full go harvest
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
            let container = Game.getObjectById('ad8d0fbf0fc47641db30c0dd');
            if(sources[0].energy === 0 && creep.transfer(container) === ERR_NOT_IN_RANGE) {      //!! TRY IT!!
                creep.moveTo(container,{visualizePathStyle: {stroke: '#ffaa00'}}) ;
            }
        }
        else {
            let targets = creep.room.find(FIND_STRUCTURES, {                                //capacity full
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                                structure.structureType == STRUCTURE_SPAWN ||
                                structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                    }
                });
                if(targets.length > 0) {                                                    //refil energy of filtered building
                    if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
            }
            
            else {
                
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {                //nothing to refill -> go upgrade
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            } 
                
                
                /*
                //if nothing to reffil go build
                let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                if(targets.length) {
                    if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                    }
                }
                */
            }
        }
	}
};

module.exports = roleHarvester;