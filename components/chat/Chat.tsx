'use client';

import { createSession } from '@/actions/create-session';
import { CHAT_PROFILE_QUERYResult } from '@/sanity.types';
import { ChatKit, useChatKit } from '@openai/chatkit-react';
import { useSidebar } from '../ui/sidebar';

export function Chat({
  profile,
}: {
  profile: CHAT_PROFILE_QUERYResult | null;
}) {
  const {toggleSidebar} = useSidebar()

  const getGreeting = () => {
    if (!profile?.firstName) {
      return "Hi there! Ask me anything about my work, experience, or projects.";
    }

    // filter removes all falsy values from the array.
    const fullName = [profile.firstName, profile.lastName].filter(Boolean).join(" ");
    
    return `Hi! I'm ${fullName}. Ask me anything about my work, experience, or projects.`;
  }

  const { control } = useChatKit({
       api: {
         async getClientSecret(existing) {
            return await createSession()
         },
       },

       // https://chatkit.studio/playground 
       theme:{},
       header: {
        title: {
          text: `Chat with ${profile?.firstName || 'Me'}`,
        },
        leftAction: {
          icon: "close",
          onClick: () => {
            toggleSidebar();
          }
        }
       },
       startScreen: {
        greeting: getGreeting(),
        prompts: [
          {
            icon:"suitcase",
            label: "What's your experience?",
            prompt: "Tell me about your professional experience"
          },
          {
            icon: "square-code",
            label: "What skills do you have?",
            prompt: "What technologies and programming languages do you specialize in?",
          },
          {
            icon: "cube",
            label: "What have you built?",
            prompt: "Show me some of your most interesting projects",
          },
          {
            icon: "profile",
            label: "Who are you?",
            prompt: "Tell me more about yourself and your background",
          }
        ]
       },
    
       composer: {
        attachments: {
          enabled: true
        },

        models: [
          {
            id: 'crisp',
            label: 'Crisp',
            description: 'Concise and factual',
          },
          {
            id: 'clear',
            label: 'Clear',
            description: 'Focused and helpful'
          },
          {
            id:"chatty",
            label: "Chatty",
            description: "Conversational companion"
          }
        ]
       },
       disclaimer: {
        text: "Disclaimer: This is my AI-powered twin. It may not be 100% accurate and should be verified for accuracy."
       }
     });

     return <ChatKit control={control} className="h-full w-full z-50" />
}

export default Chat;
