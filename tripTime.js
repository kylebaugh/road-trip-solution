const stops = [
    {
        name: `Gus's Gas`, 
        speedLimits: [
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 97,
                speedLimit: 65
            },
            {
                distance: 72,
                speedLimit: 70
            },
            {
                distance: 25,
                speedLimit: 50
            }
        ], 
        traffic: 12
    }, 
    {
        name: `Halle's House of Pancakes`, 
        speedLimits: [
            {
                distance: 36,
                speedLimit: 50
            },
            {
                distance: 141,
                speedLimit: 75
            }
        ], 
        traffic: 0
    }, 
    {
        name: `Jake's Great Shakes`, 
        speedLimits: [
            {
                distance: 100,
                speedLimit: 75
            },
            {
                distance: 84,
                speedLimit: 70
            },
            {
                distance: 20,
                speedLimit: 75
            }
        ], 
        traffic: 30
    }, 
    {
        name: `Luna's Lunch Counter`, 
        speedLimits: [
            {
                distance: 3,
                speedLimit: 35
            },
            {
                distance: 5,
                speedLimit: 45
            },
            {
                distance: 20,
                speedLimit: 65
            },
            {
                distance: 85,
                speedLimit: 75
            },
            {
                distance: 3,
                speedLimit: 65
            },
            {
                distance: 5,
                speedLimit: 55
            }
        ], 
        traffic: 7
    }, 

]


// Sets up function called tripTime that takes in an array
const tripTime = (arr) => {
    
    // Setting result object that will be returned at the end
    let result = {
        avgSpeedLimits: [], 
        segmentTimes: [], 
        totalTime: null
    }

    // Loops over each object or "segment" in the array
    arr.forEach(segment => {
        
        // Defines variables for average speed limit, and segment time to be used throughout the rest of the function
        let avgSpeedLimit = 0
        let segmentTime = 0

        // Finds the full distance traveled in each segment and saves it to the segmentDistance variable
        let segmentDistance = segment.speedLimits.reduce((speedAcc, obj) => {
            return speedAcc += obj.distance
        }, 0)

        // Loops over the array of speedLimits included in each segment
        segment.speedLimits.forEach(obj => {
            
            // Sets the avgSpeedLimit variable to the average speed limit of each speedLimit value in the given segment.
            // It calculates this by dividing the distance of each speedLimit segment by 
            // the segmentDistance, and then multiplying that result by the speedLimit for the given section
            avgSpeedLimit += Math.round(obj.speedLimit * (obj.distance / segmentDistance))

            // Sets the objTime variable to get the time, in minutes, to travel each section
            // It calculates this by taking the speedLimit and dividing it by 60 to find how many miles per hour they were traveling.
            // It then multiplys the MPH by the distance they need to travel. 
            // Finally, it divides that result by 60 to see how long, in minutes, it would take to travel that distance
            let objTime = Math.round((obj.distance * (obj.speedLimit / 60)) / 60)

            // Updates the segmentTime value by adding the newly updated objTime
            segmentTime += objTime
        })

        // Rounds the segmentTime value, and adds the traffic value from each segment
        segmentTime = Math.round(segmentTime) + segment.traffic
        
        // Pushes the segmentTime into the segmentTimes array in the result object
        result.segmentTimes.push(segmentTime)

        // Pushes the avgSpeedLimit to the avgSpeedLimits array in the result object
        result.avgSpeedLimits.push(avgSpeedLimit)

        // Updates the value of our total time by adding the segment time to the results.totalTime property in the results object
        result.totalTime += segmentTime
        // return segment
    })

    // Logs result object so we can see it in our terminal
    console.log(result)
    
    // Returns result so we could use that result in future pieces of coding
    return result
}

tripTime(stops)
