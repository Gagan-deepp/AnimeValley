import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Page() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-black p-4">
      <ScrollArea className="h-[50vh] w-full max-w-[300px] rounded-md border bg-gray-800">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none text-white">Tags</h4>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm text-white">
                {tag}
              </div>
              <div className="h-[1px] w-full bg-red-300 my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}