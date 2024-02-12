import React from "react";
import { auth } from "@clerk/nextjs";

// Components
import Board from "./_components/Board";
import CreateWorkspace from "./_components/CreateWorkspace";

// Libs
import { db } from "@/lib/db";
import { Button } from "@/components/ui/Button";

const ActiveOrganizationPage = async () => {
  const { userId } = auth();
  if(!userId) return <div className="w-full flex justify-center items-center"><Button variant="dark">User not found!</Button></div>

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
