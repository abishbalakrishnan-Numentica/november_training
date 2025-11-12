/*You are given an array of order records:

Return a summary grouped by customerId.
Expected Output:

[
  {
    customerId: 202,
    totalSpent: 1100,
    ordersCount: 2,
    completedOrders: 1,
    lastOrderAt: "2025-05-04T15:00:00Z"
  },
  {
    customerId: 201,
    totalSpent: 680,
    ordersCount: 2,
    completedOrders: 2,
    lastOrderAt: "2025-05-03T08:45:00Z"
  }
]Sorted by totalSpent descending.*/

const orderDetails=[
  { orderId: "o1", customerId: 201, items: 3, total: 450.00, status: "completed", ts: "2025-05-01T10:00:00Z" },
  { orderId: "o2", customerId: 202, items: 1, total: 120.00, status: "pending",   ts: "2025-05-02T12:30:00Z" },
  { orderId: "o3", customerId: 201, items: 2, total: 230.00, status: "completed", ts: "2025-05-03T08:45:00Z" },
  { orderId: "o4", customerId: 202, items: 5, total: 980.00, status: "completed", ts: "2025-05-04T15:00:00Z" }
]

function getOrderDetails(input) {
  if (!Array.isArray(input) || input.length === 0) 
  {
    return [];
  }
  let outputDetails = {};
  for (let item of input) {
    if (
      typeof item.customerId !== "number" ||
      typeof item.total !== "number" ||
      typeof item.status !== "string" ||
      typeof item.ts !== "string" ||
      isNaN(Date.parse(item.ts)) ||
      item.total <= 0
    ) {
      continue;
    }

    const id = item.customerId;

    if (!outputDetails[id]) {
      outputDetails[id] = {
        customerId: id,
        totalSpent: 0,
        ordersCount: 0,
        completedOrders: 0,
        lastOrderAt: item.ts
      };
    }

    outputDetails[id].totalSpent += item.total;
    outputDetails[id].ordersCount += 1;
    if (item.status.toLowerCase() === "completed") {
      outputDetails[id].completedOrders += 1;
    }

    if (item.ts > outputDetails[id].lastOrderAt) {
      outputDetails[id].lastOrderAt = item.ts;
    }
  }


  const finalOutput = Object.values(outputDetails);
  for (let i = 0; i < finalOutput.length; i++) {
    for (let j = i + 1; j < finalOutput.length; j++) {
      if (finalOutput[i].totalSpent < finalOutput[j].totalSpent) {
        let temp = finalOutput[i];
        finalOutput[i] = finalOutput[j];
        finalOutput[j] = temp;
      }
    }
  }

  return finalOutput;
}


console.log(getOrderDetails(orderDetails));
