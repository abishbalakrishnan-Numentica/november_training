const people = [
  { id: "p1", name: "Arun",   email: "arun@example.com",   capacityHrsPerDay: 6 },
  { id: "p2", name: "Uma",    email: "uma@",               capacityHrsPerDay: 5 }, // invalid email
  { id: "p3", name: "Aadhir", email: "aadhir@example.com", capacityHrsPerDay: 4 },
  { id: "p4", name: "Aarik",  email: "aarik@example.com",  capacityHrsPerDay: 0 }, // edge: zero capacity
];
const todos = [
  { id: "t1",  title: "Setup repo",            estimateHrs: 2, priority: "high",   status: "done",        due: "2025-09-16", assigneeId: "p1" },
  { id: "t2",  title: "Scaffold UI",           estimateHrs: 5, priority: "high",   status: "in-progress", due: "2025-09-18", assigneeId: "p1", dependsOn: ["t1"] },
  { id: "t3",  title: "Build login",           estimateHrs: 8, priority: "medium", status: "todo",        due: "2025-09-20", assigneeId: "p2" },
  { id: "t4",  title: "Payments integration",  estimateHrs: 13,priority: "high",   status: "todo",        due: "2025-09-19", assigneeId: "p2", dependsOn: ["t3"] },
  { id: "t5",  title: "Notifications",         estimateHrs: 3, priority: "low",    status: "todo",        due: "2025-09-25", assigneeId: null },
  { id: "t6",  title: "Profile screen",        estimateHrs: 5, priority: "medium", status: "in-progress", due: "2025-09-21", assigneeId: "p3" },
  { id: "t7",  title: "Accessibility pass",    estimateHrs: 2, priority: "medium", status: "todo",        due: "2025-09-15", assigneeId: "p3" },
  { id: "t8",  title: "Error monitoring",      estimateHrs: 4, priority: "low",    status: "todo",        due: "2025-09-23", assigneeId: "p4" },
  { id: "t9",  title: "Build login",           estimateHrs: 8, priority: "medium", status: "todo",        due: "2025-09-20", assigneeId: "p2" },
  { id: "t10", title: "Refactor utils",        estimateHrs: 3, priority: "low",    status: "done",        due: "2025-09-14", assigneeId: "p1" },
  { id: "t11", title: "Release v1",            estimateHrs: 6, priority: "high",   status: "blocked",     due: "2025-09-22", assigneeId: "p2", dependsOn: ["t4","t6"] },
  { id: "t12", title: "Data migration",        estimateHrs: 7, priority: "high",   status: "todo",        due: "2025-09-28", assigneeId: "p3", dependsOn: ["t4","t99"] },
  { id: "t13", title: "Cycle check A",         estimateHrs: 1, priority: "low",    status: "todo",        due: "2025-09-30", assigneeId: "p3", dependsOn: ["t14"] },
  { id: "t14", title: "Cycle check B",         estimateHrs: 1, priority: "low",    status: "todo",        due: "2025-09-30", assigneeId: "p3", dependsOn: ["t13"] },
];
/*1.compute total estimateHrs per assignee for todos not "done". Output array like:
// example shape
[ { person: "Arun", hrs: 5 }, { person: "Uma", hrs: 21 }, ... ]
Identify who has worked the most
2. Identify duplicate titles
3. list todos whose dependsOn includes an id not present in todos*/

// 1. Compute total estimateHrs per assignee for todos not "done"
function identifyTopPerformer(todos,person){
let estimatedMap = {};

for (let todo of todos) {
  if (todo.status !== "done" && todo.assigneeId !== null) {
    if (!estimatedMap[todo.assigneeId]) {
      estimatedMap[todo.assigneeId] = 0;
    }
    estimatedMap[todo.assigneeId] += todo.estimateHrs;
  }
} 

let result = [];

for (let person of people) {
  let id = person.id;
  if (estimatedMap[id]) {
    result[result.length] = {
      person: person.name,
      hrs: estimatedMap[id]
    };
  }
}
console.log("Total estimateHrs per assignee (not done):");
console.log(result);
let maxHrs = -1;
let topPerson = null;

for (let i = 0; i < result.length; i++) {
  if (result[i].hrs > maxHrs) {
    maxHrs = result[i].hrs;
    topPerson = result[i];
  }
}

console.log("Who has worked the most:")
console.log(topPerson);
}
//2. Identify duplicate titles
function findDuplicateTitle(todos){
let titleCount = {};
let duplicatesTitle = [];
for (let todo of todos) {
  let title = todo.title;

  if (!titleCount[title]) {
    titleCount[title] = 1;
  } else {
    titleCount[title] += 1;
  }
}
for (let key in titleCount) {
  if (titleCount[key] > 1) {
    duplicatesTitle.push(key);
  }
}
console.log("Duplicate titles:");
console.log(duplicatesTitle);
}

//3. list todos whose dependsOn includes an id not present in todos
function findInvalidDependsOn(todos) {
  let validIds = {};

  for (let todo of todos) {
    validIds[todo.id] = true;
  }

  let invalidTodos = [];

  for (let todo of todos) {
    if (todo.dependsOn) {
      for (let depId of todo.dependsOn) {
        if (!validIds[depId]) {
          invalidTodos[invalidTodos.length] = todo;
          break;
        }
      }
    }
  }

  console.log("Todos with invalid dependsOn:");
  console.log(invalidTodos);
}


identifyTopPerformer(todos, people);
findDuplicateTitle(todos);
findInvalidDependsOn(todos);
