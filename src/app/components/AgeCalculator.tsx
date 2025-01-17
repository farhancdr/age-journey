"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Person {
  name: string;
  birthDate: string;
}

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personName, setPersonName] = useState("");
  const [savedPeople, setSavedPeople] = useState<Person[]>([]);

  // Load saved people from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem("savedPeople");
    if (saved) {
      setSavedPeople(JSON.parse(saved));
    }
  }, []);

  const calculateAge = () => {
    const birth = new Date(birthDate);
    const current = new Date(currentDate);

    const diffTime = Math.abs(current.getTime() - birth.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const remainingDays = diffDays % 7;

    let years = current.getFullYear() - birth.getFullYear();
    let months = current.getMonth() - birth.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalMonths = years * 12 + months;

    return {
      detailed: `${years} years ${months} months ${diffDays % 30} days`,
      months: `${totalMonths} months ${diffDays % 30} days`,
      weeks: `${diffWeeks} weeks ${remainingDays} days`,
      days: `${diffDays} days`,
    };
  };

  const handleSavePerson = () => {
    if (personName.trim()) {
      const newPerson = { name: personName, birthDate };
      const updatedPeople = [...savedPeople, newPerson];
      setSavedPeople(updatedPeople);
      localStorage.setItem("savedPeople", JSON.stringify(updatedPeople));
      setPersonName("");
      setIsModalOpen(false);
    }
  };

  const age = calculateAge();

  return (
    <div className="max-w-lg mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Age Calculator</h1>

      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <label className="font-medium">Birth Date:</label>
          <Input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Current Date:</label>
          <Input
            type="date"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-medium">Saved People:</label>
          <Select
            onValueChange={(value) => {
              const person = savedPeople.find((p) => p.name === value);
              if (person) {
                setBirthDate(person.birthDate);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a person" />
            </SelectTrigger>
            <SelectContent>
              {savedPeople.map((person) => (
                <SelectItem key={person.name} value={person.name}>
                  {person.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full" onClick={() => setIsModalOpen(true)}>
          Save Current Birth Date
        </Button>

        <div className="bg-gray-100 p-4 rounded-lg space-y-2">
          <p>
            <strong>Detailed:</strong> {age.detailed}
          </p>
          <p>
            <strong>In Months:</strong> {age.months}
          </p>
          <p>
            <strong>In Weeks:</strong> {age.weeks}
          </p>
          <p>
            <strong>In Days:</strong> {age.days}
          </p>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Save Person</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Input
              type="text"
              placeholder="Enter person's name"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSavePerson}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AgeCalculator;
