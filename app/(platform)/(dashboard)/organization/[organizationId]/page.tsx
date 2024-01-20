import React from "react";

// Components
import Board from "./_components/Board";
import CreateWorkspace from "./_components/CreateWorkspace";

// Libs
import { db } from "@/lib/db";

const ActiveOrganizationPage = async () => {
  const boards = await db.board.findMany();

  return (
      <div className="grid grid-cols-6 gap-[16px]">
          <CreateWorkspace />
          {
            boards.map((b) => (
                <Board key={b.id} title={b.title} id={b.id} />
            ))
          }
      </div>
  )
};

export default ActiveOrganizationPage;
