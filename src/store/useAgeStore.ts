import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Person {
  name: string;
  birthDate: string;
}

interface AgeState {
  birthDate: string;
  currentDate: string;
  savedPeople: Person[];
  isModalOpen: boolean;
  personName: string;
  selectedPerson: Person | null;
  setBirthDate: (date: string) => void;
  setCurrentDate: (date: string) => void;
  setIsModalOpen: (isOpen: boolean) => void;
  setPersonName: (name: string) => void;
  savePerson: () => void;
  selectPerson: (name?: string) => void;
}

const useAgeStore = create<AgeState>()(
  persist(
    (set, get) => ({
      birthDate: new Date().toISOString().split("T")[0],
      currentDate: new Date().toISOString().split("T")[0],
      savedPeople: [],
      isModalOpen: false,
      personName: "",
      selectedPerson: null,

      setBirthDate: (date) => set({ birthDate: date }),
      setCurrentDate: (date) => set({ currentDate: date }),
      setIsModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
      setPersonName: (name) => set({ personName: name }),

      savePerson: () => {
        const { personName, birthDate, savedPeople } = get();
        if (personName.trim()) {
          const newPerson = { name: personName, birthDate };
          set({
            savedPeople: [...savedPeople, newPerson],
            personName: "",
            isModalOpen: false,
          });
        }
      },

      selectPerson: (name) => {
        const { savedPeople, selectedPerson } = get();
        if (!name && !selectedPerson && savedPeople.length > 0) {
          set({
            birthDate: savedPeople[0].birthDate,
            selectedPerson: savedPeople[0],
          });
          return;
        }
        const person = savedPeople.find((p) => p.name === name);
        if (person) {
          set({ birthDate: person.birthDate, selectedPerson: person });
        }
      },
    }),
    {
      name: "age-calculator-storage",
    }
  )
);

export default useAgeStore;
