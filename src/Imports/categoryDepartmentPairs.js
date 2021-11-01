const employeeCategoryDepartmentObjects = [
    {
        role: 'hr',
        jobCategoryID: 1,
        subDepartmentID: 5,
    },
    {
        role: 'it-admin',
        jobCategoryID: 2,
        subDepartmentID: 5,
    }
]

export const categoryDepartmentPair = (query) => {
    const {
        jobCategoryID,
        subDepartmentID,
    } = query;

    const found = employeeCategoryDepartmentObjects
        .find(
            object => object.jobCategoryID === jobCategoryID
                && object.subDepartmentID === subDepartmentID
        );

    if (found)
        return found.role;

    return null;
}