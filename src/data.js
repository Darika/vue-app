export const tasks = [{
    id: 1,
    parentId: 0,
    title: 'Resource 1',
    start: new Date('2022-02-10T05:00:00.000Z'),
    end: new Date('2022-02-19T09:00:00.000Z'),
    progress: 60,
}, {
    id: 2,
    parentId: 0,
    title: 'Resource 2',
    start: new Date('2022-03-01T05:00:00.000Z'),
    end: new Date('2022-03-10T09:00:00.000Z'),
    progress: 100,
}, {
    id: 3,
    parentId: 0,
    title: 'Resource 3',
    start: new Date('2022-02-05T10:00:00.000Z'),
    end: new Date('2022-02-19T09:00:00.000Z'),
    progress: 15,
}, {
    id: 4,
    parentId: 0,
    title: 'Resource 4',
    start: new Date('2022-03-29T10:00:00.000Z'),
    end: new Date('2022-04-05T09:00:00.000Z'),
    progress: 60,
}];

export const dependencies = [{
    id: 1,
    predecessorId: 1,
    successorId: 2,
    type: 0,
}, {
    id: 2,
    predecessorId: 2,
    successorId: 3,
    type: 0,
}, {
    id: 3,
    predecessorId: 3,
    successorId: 4,
    type: 0,
}, {
    id: 4,
    predecessorId: 3,
    successorId: 4,
    type: 0,
}];

export const resources = [{
    id: 1,
    text: 'Management',
}, {
    id: 2,
    text: 'Project Manager',
}, {
    id: 3,
    text: 'Analyst',
}, {
    id: 4,
    text: 'Developer',
}, {
    id: 5,
    text: 'Testers',
}, {
    id: 6,
    text: 'Trainers',
}, {
    id: 7,
    text: 'Technical Communicators',
}, {
    id: 8,
    text: 'Deployment Team',
}];

export const resourceAssignments = [{
    id: 0,
    taskId: 3,
    resourceId: 1,
}, {
    id: 1,
    taskId: 4,
    resourceId: 1,
}, {
    id: 2,
    taskId: 1,
    resourceId: 2,
}, {
    id: 3,
    taskId: 2,
    resourceId: 2,
}, {
    id: 4,
    taskId: 4,
    resourceId: 3,
}];
