import React from "react";

// Components
import Board from "./_components/Board";
import CreateWorkspace from "./_components/CreateWorkspace";

// Icons
import { LayoutPanelLeft } from "lucide-react";

// Libs
import { db } from "@/lib/db";

const ActiveOrganizationPage = async () => {
  const boards = await db.board.findMany();

  return (
      <div className="ml-[20px] flex flex-col gap-[20px]">
        <h3 className="text-[16px] font-bold text-black flex items-center gap-2"><LayoutPanelLeft width={20} height={20} /> Your Boards</h3>
        <div className="grid grid-cols-6 gap-[16px]">
          <CreateWorkspace />
          {
            boards.map((b: {id: string; title: string; imageThumbUrl: string}) => (
              <Board key={b.id} title={b.title} id={b.id} imageThumbUrl={b.imageThumbUrl} />
            ))
          }
        </div>
      </div>
  )
};

export default ActiveOrganizationPage;
