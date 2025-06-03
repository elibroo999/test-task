import { collection, addDoc, getDocs, query, where, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Task } from '../types/task';

const tasksRef = collection(db, 'tasks');

export const fetchTasks = async (userId: string) => {
    const q = query(tasksRef, where('userId', '==', userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() } as Task));
};

export const addTask = async (task: Omit<Task, 'id'>) => {
    const docRef = await addDoc(tasksRef, task);
    return {...task, id: docRef.id};
};

export const updateTask = async (task: Omit<Task, 'id'>) => {
    const docRef = await addDoc(tasksRef, task);
    return {...task, id: docRef.id};
};

export const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, 'tasks', id), updated);
};

export const deleteTask = async (id: string) => 
    await deleteDoc(doc(db, 'tasks', id));
