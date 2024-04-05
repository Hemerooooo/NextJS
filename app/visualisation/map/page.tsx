'use client'

import HierarchyChart from "@/app/ui/visualisation/HierarchyChart";
import ParentSize from '@visx/responsive/lib/components/ParentSize';

export default function Page() {
    const data = {
        name: "CTO",
        children: [
          {
            name: "Manager",
            children: [
              { name: "Developer" },
              // ... other children
            ]
          },
          // ... other sub-trees
        ]
      };
      
    return (
        <div className="flex h-full flex-col">
            <ParentSize>{({ width, height }) => <HierarchyChart width={width} height={height} />}</ParentSize>,
        </div>
    );
}