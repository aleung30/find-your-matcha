import { useState } from "react";

import React from "react";

const Filter = () => {
  const [study, setStudy] = useState(false);
  const [milk, setMilk] = useState(false);
  const [food, setFood] = useState(false);

  return (
    <div className="gap-2 flex flex-col mx-8 mt-10">
      <label className="flex items-center gap-2 text-[#37532B] text-m font-semibold">
        <input type="checkbox" checked={study} onChange={() => setStudy(!study)} />
        Study-friendly
      </label>
      <label className="flex items-center gap-2 text-[#37532B] text-m font-semibold">
        <input type="checkbox" checked={milk} onChange={() => setMilk(!milk)} />
        Oat/soy/almond milk options
      </label>
      <label className="flex items-center gap-2 text-[#37532B] text-m font-semibold">
        <input type="checkbox" checked={food} onChange={() => setFood(!food)} />
        Food available
      </label>
    </div>
  );
};

export default Filter;
