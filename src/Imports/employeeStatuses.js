/**
 * Status 0 - Submitted
 * Status 1 - Approved
 * Status 2 - Rejected
 */

export const employeeStatuses = [
    {
        id: 1,
        name: "Step 0 Submit",
        path: '/submission',
        params: { status: 0, step: 0 },
    },
    {
        id: 2,
        name: "Step 0 Approved",
        path: '/submission',
        params: { status: 1, step: 0, nextStep: '/questionnaire' }
    },
    {
        id: 3,
        name: "Step 0 Reject",
        path: '/submission',
        params: { status: 2, step: 0 }
    },
    {
        id: 4,
        name: "Step 1 Submit",
        path: '/submission',
        params: { status: 0, step: 1 }
    },
    {
        id: 5,
        name: "Step 1 Approved",
        path: '/submission',
        params: { status: 1, step: 1, nextStep: '/documents' }
    },
    {
        id: 6,
        name: "Step 1 Reject",
        path: '/questionnaire',
        params: { status: 2, step: 1 }
    },
    {
        id: 7,
        name: "Step 2 Submit",
        path: '/documents/step/3',
        params: { status: 1, step: 2, nextStep: '/documents/step/4' },
    },
    {
        id: 8,
        name: "Step 3 Submit",
        path: '/documents/step/4',
        params: { status: 1, step: 3, nextStep: '/submission' },
    },
    {
        id: 9,
        name: "Employee",
        path: '/dashboard',
        params: { status: 1, step: 4 },
    },
]