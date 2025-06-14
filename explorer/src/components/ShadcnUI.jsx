import React from 'react';
import { Calendar } from "@/components/ui/calendar"; // Make sure this path is correct

const ShadcnUI = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div style={{ padding: "1rem" }}>
      <h2 className="text-2xl font-bold mb-4">Shadcn UI Calendar</h2>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow-sm"
        captionLayout="dropdown"
      />
    </div>
  );
};

export default ShadcnUI;
