import { useState } from "react";
import type { TreeNode } from "../utils/buildTree";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
interface Props {
  menus: TreeNode[];
}

export function TreeView({ menus }: Props) {
  return (
    <div className="p-2">
      {menus.map((node, idx) => (
        <TreeItem key={idx} node={node} />
      ))}
    </div>
  );
}

function TreeItem({ node }: { node: TreeNode }) {
  const [open, setOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;
  return (
    <div className="ml-2">
      <button
        className="flex items-center gap-2 p-1"
        onClick={() => hasChildren && setOpen(!open)}
      >
        {hasChildren && <span>{open ? <FaChevronDown/> :<FaChevronRight/> }</span>}
        <span className="text-sm font-medium">{node.name}</span>
      </button>

      {open && hasChildren && (
        <div className="ml-4 border-l pl-2">
          {node.children!.map((child, index) => (
            <TreeItem key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}
