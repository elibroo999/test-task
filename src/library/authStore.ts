import { auth } from "../services/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { createStore } from "./store";

type AuthState = {
  currentUser: User | null;
};

const initialState: AuthState = {
  currentUser: null,
};

export const authStore = createStore(initialState, (set) => ({
  setUser: (user: User | null) => set({ currentUser: user }),
}));

// Следим за авторизацией
onAuthStateChanged(auth, (user) => {
  authStore.setState({ currentUser: user });
});
