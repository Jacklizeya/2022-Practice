function getServedBuilding(buildingCount, routerLocation, routerRange) {
    let strengthCount = 0;
    for (let i =0; i< routerLocation.length; i++) {
        let min = routerLocation[i] - routerRange[i];
        let max = routerLocation[i] + routerRange[j]
        for (let j = min; j <= max; j++) {
            if (!strengthCount[j]) {strengthCount[j] = 1} else {strengthCount[j]++;}
        }
    } 
}
