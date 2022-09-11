export const getPeopleCountString = (peopleCount: number[]): string => `${Math.min(...peopleCount)}-${Math.max(...peopleCount)} чел`;
