// src/store.ts
type Listener<T> = (state: T) => void;

export function createStore<TState>(
    initialState: TState,
    actions?: (set: (state: Partial<TState>) => void) => any
) {
    let state = initialState;
    const listeners: Listener <TState>[] =[];

    const getState = () => state;

    const setState = (newState: Partial<TState>) => {
        state = {...state, newState};
        listeners.forEach((listener) => listener(state));
    };

    const subscribe = (listener: Listener<TState>) => {
        listeners.push(listener);
        return () => {
            const index = listeners.indexOf(listener);
            if (index > -1) listeners.splice(index, 1);
        };
    };

    const store = {
        getState,
        setState,
        subscribe,
        ...(actions ? actions(setState) : {})
    };
    
    return store;
}