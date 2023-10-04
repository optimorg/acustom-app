import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  firestoreCollection : AngularFirestoreCollection;

  constructor(private firestore : AngularFirestore) { 
    this.firestoreCollection = this.firestore.collection('tasks');
  }

  addTask(text: string) {
    this.firestoreCollection.add({
      text,
      isDone : false
    })
  }

  updateToDoStatus(id:string, newStatus:boolean) {
    this.firestoreCollection.doc(id).update({isDone: newStatus})
  }

  deleteTask(id: string, newStatus: boolean) {
    this.firestoreCollection.doc(id).delete();
  }
}
