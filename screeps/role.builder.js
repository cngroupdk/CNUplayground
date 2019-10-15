let roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {                  //no energy 
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {   //full energy
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }
	    
	    if(creep.memory.building){                                                  //repair damaged building
	    let damagedStructure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax
            });
            if(damagedStructure) {
                creep.moveTo(damagedStructure);
                creep.repair(damagedStructure);
            }
            else {                                                                  //if nothing damaged go to build
            
                let targets = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
                //let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
                if(targets!==null) {
                    if(creep.build(targets) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
                    }
            }
            }
	    }
	    
	    if(!creep.memory.building) {                                                //no energy go to harvest
	        let sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleBuilder;