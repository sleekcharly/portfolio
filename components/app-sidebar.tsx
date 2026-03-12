import { Suspense } from 'react';

import { Sidebar, SidebarContent, SidebarRail } from '@/components/ui/sidebar';
import ChatWrapper from './chat/ChatWrapper';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <ChatWrapper />
        </Suspense>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
