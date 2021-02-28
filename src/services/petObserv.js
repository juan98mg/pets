import { BehaviorSubject } from "rxjs";

let petSubject = new BehaviorSubject({});

export const handlePetChange = (e) => {
  const newValue = e;
  petSubject.next(newValue);
};

export function getPetObservable() {
  return petSubject;
}
