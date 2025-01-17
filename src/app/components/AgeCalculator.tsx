"use client";

import React from "react";
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
import useAgeStore from "@/store/useAgeStore";
import { calculateAge } from "@/utils/calculateAge";

const AgeCalculator = () => {
  const {
    birthDate,
    currentDate,
    savedPeople,
    isModalOpen,
    personName,
    setBirthDate,
    setCurrentDate,
    setIsModalOpen,
    setPersonName,
    savePerson,
    selectPerson,
  } = useAgeStore();

  const age = calculateAge(birthDate, currentDate);

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
          <Select onValueChange={selectPerson}>
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
            <Button onClick={savePerson}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AgeCalculator;
