import { firebaseApp } from "./firebase";
import * as firebase from "firebase";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);

export const getCollection = async (collection) => {
  const result = { statusResponse: false, data: null, error: null };

  try {
    const data = await db.collection(collection).get();
    const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    result.statusResponse = true;
    result.data = arrayData;
  } catch (error) {
    result.error = error;
  }
  return result;
};

export const addDocument = async (collection, data) => {
  let dataSerialize = {
    petName: data.petName,
    petType: data.petType,
    petBreed: data.petBreed,
    petBirthday: data.petBirthday,
    ownerFullname: data.ownerFullname,
    ownerCellphone: data.ownerCellphone,
    ownerAddress: data.ownerAddress,
    ownerEmail: data.ownerEmail,
  };
  const result = { statusResponse: false, data: null, error: null };

  try {
    const response = await db.collection(collection).add(dataSerialize);
    result.data = { id: response.id };
    result.statusResponse = true;
  } catch (error) {
    result.error = error;
  }

  return result;
};

export const findById = async (collection, id) => {
  const result = { statusResponse: false, data: null, error: null };

  try {
    const response = await db.collection(collection).doc(id).get();
    result.data = { id: response.id, ...response.data() };
    result.statusResponse = true;
  } catch (error) {
    result.error = error;
  }

  return result;
};

export const updateDocument = async (collection, data) => {
  const result = { statusResponse: false, error: null };

  try {
    await db.collection(collection).doc(data.id).update(data);
    result.statusResponse = true;
  } catch (error) {
    result.error = error;
  }

  return result;
};

export const deleteDocument = async (collection, id) => {
  const result = { statusResponse: false, error: null };

  try {
    await db.collection(collection).doc(id).delete();
    result.statusResponse = true;
  } catch (error) {
    result.error = error;
  }

  return result;
};
