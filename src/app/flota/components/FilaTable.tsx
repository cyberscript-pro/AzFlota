import { ReactNode } from "react";

type FilaTableProps = {
  children: ReactNode
}

function FilaTable({ children }: FilaTableProps) {
  return (
    <td className="px-6 py-4 whitespace-nowrap font-medium">
      {children}
    </td>
  );
}

export default FilaTable;
