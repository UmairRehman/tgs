export const employeeStatuses = [
    {
        id: 1,
        name: "Step 0 Submit",
        path: '/submission'
    },
    {
        id: 2,
        name: "Step 0 Approved",
        path: '/submission',
        params: {approved: true}
    },
    {
        id: 3,
        name: "Step 0 Reject",
        path: '/submission',
        params: {approved: false}
    },
    {
        id: 4,
        name: "Step 1 Submit",
        path: '/questionnaire',
    },
    {
        id: 5,
        name: "Step 1 Approved",
        path: '/questionnaire',
    },
    {
        id: 6,
        name: "Step 1 Reject",
        path: '/questionnaire',
        params: {approved: false}
    },
    {
        id: 7,
        name: "Step 2 Submit",
        path: '/documents',
    },
    {
        id: 8,
        name: "Step 3 Submit",
        path: '/documents/step/3'
    },
    {
        id: 9,
        name: "Employee",
        path: '/documents/step/4'
    },
]