/**
 * Status 0 - Submitted
 * Status 1 - Approved
 * Status 2 - Rejected
 */

export const employeeStatuses = [
    {
        id: 1,
        name: "Step 0 Submit",
        path: '/questionnaire',
        params: { status: 0, step: 0 },
    },
    {
        id: 2,
        name: "Step 1 submit",
        path: '/documents',
        params: { status: 1, step: 0 }
    },
    {
        id: 3,
        name: "Step 2 submit",
        path: '/submission',
        params: { status: 0, step: 0 }
    },
    {
        id: 4,
        name: "Step 2 approve",
        path: '/documents/step/3',
        params: { status: 1, step: 2 }
    },
    {
        id: 5,
        name: "Step 2 Sumit",
        path: '/documents/step/4',
        params: { status: 1, step: 3, nextStep: '/submission' }
    },
    {
        id: 6,
        name: "Step 3 Submit",
        path: '/submission',
        params: { status: 0, step: 3 }
    },
    {
        id: 7,
        name: "Step 3 Approve",
        path: '/submission',
        params: { status: 1, step: 4, nextStep: '/documents/step/4' },
    },
    {
        id: 8,
        name: "Step 4 Submit",
        path: '/documents/step/4',
        params: { status: 0, step: 4, nextStep: '/submission' },
    },
    {
        id: 9,
        name: "Employee",
        path: '/dashboard',
        params: { status: 1, step: 4 },
    },
]