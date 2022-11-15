export const saveToLocalStorage = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('aptosh', serializedState);
    } catch (e) {
        console.log('Could not save state');
    }
};



export const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('aptosh');

        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};