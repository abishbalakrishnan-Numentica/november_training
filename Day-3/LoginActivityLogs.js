/*You are given an array of login activity logs:

Return a summary grouped by userId.
Expected Output:

[
  {
    userId: 302,
    totalLogins: 2,
    uniqueDevices: ["mobile", "desktop"],
    uniqueLocations: ["Mumbai"],
    lastLoginAt: "2025-03-04T08:15:00Z"
  },
  {
    userId: 301,
    totalLogins: 3,
    uniqueDevices: ["mobile", "desktop"],
    uniqueLocations: ["Chennai", "Bangalore"],
    lastLoginAt: "2025-03-03T12:30:00Z"
  }
]
Sorted by lastLoginAt descending.*/


const logDetails = [
  { userId: 301, device: "mobile",     location: "Chennai",  ts: "2025-03-01T06:20:00Z" },
  { userId: 301, device: "desktop",    location: "Chennai",  ts: "2025-03-01T10:10:00Z" },
  { userId: 302, device: "mobile",     location: "Mumbai",   ts: "2025-03-02T09:00:00Z" },
  { userId: 301, device: "mobile",     location: "Bangalore", ts: "2025-03-03T12:30:00Z" },
  { userId: 302, device: "desktop",    location: "Mumbai",   ts: "2025-03-04T08:15:00Z" }
];

function getLoginSummary(logDetails) {
     if (!Array.isArray(logDetails) || logDetails.length === 0)
      return [];

  const logInActivityDetails = {};
     for (let item of logDetails) {
          if (
      typeof item.userId !== "number" ||
      typeof item.device !== "string" ||
      typeof item.location !== "string" ||
      typeof item.ts !== "string" ||
      isNaN(Date.parse(item.ts))
    ) {
      continue;
    }

    const userId = item.userId;
    const userDevice = item.device.toLowerCase();
    const userLocation = item.location.toLowerCase();

    if (!logInActivityDetails[userId]) {
      logInActivityDetails[userId] = {
        userId: userId,
        totalLogins: 0,
        uniqueDevices: [],
        uniqueLocations: [],
        lastLoginAt: item.ts
      };
    }

    logInActivityDetails[userId].totalLogins += 1;

   if (logInActivityDetails[userId].uniqueDevices.indexOf(userDevice) === -1) {
    logInActivityDetails[userId].uniqueDevices.push(userDevice);
     }

    if (logInActivityDetails[userId].uniqueLocations.indexOf(userLocation) === -1) {
     logInActivityDetails[userId].uniqueLocations.push(userLocation);
      }

    if (item.ts > logInActivityDetails[userId].lastLoginAt) {
      logInActivityDetails[userId].lastLoginAt = item.ts;
    }
  }

 const finalOutput = Object.values(logInActivityDetails);
 //let descendingOrder=finalOutput.sort((a, b) => Date.parse(b.lastLoginAt) - Date.parse(a.lastLoginAt));
 //console.log(descendingOrder);

  for (let i = 0; i < finalOutput.length; i++) {
    for (let j = i + 1; j < finalOutput.length; j++) {
      if (finalOutput[i].lastLoginAt < finalOutput[j].lastLoginAt) {
        const temp = finalOutput[i];
        finalOutput[i] = finalOutput[j];
        finalOutput[j] = temp;
      }
    }
  }

  return finalOutput;
}

console.log(getLoginSummary(logDetails));