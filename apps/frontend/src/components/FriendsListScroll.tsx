import React from 'react'
import { ScrollArea } from './ui/ReactScrollArea'
import { Separator } from '@radix-ui/react-dropdown-menu'

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
const FriendsListScroll = () => {
    return (
        <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {tags.map((tag) => (
                    <>
                        <div key={tag} className="text-sm">
                            {tag}
                        </div>
                        <Separator className="my-2" />
                    </>
                ))}
            </div>
        </ScrollArea>
    )
}

export default FriendsListScroll