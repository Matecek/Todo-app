export function getSubheading(numberOfTasks) {
    switch (true) {
        case numberOfTasks > 4:
            return `${numberOfTasks} zadań`;
        case numberOfTasks > 1:
            return `${numberOfTasks} zadania`;
        case numberOfTasks === 1:
            return "1 zadanie";
        case numberOfTasks === 0:
            return "Brak zadań";
    }
}
