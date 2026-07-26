import LandingPage from '@/app/components/LandingPage/page.jsx';
import ComposeMessage from '@/app/components/ComposeMessage/page.jsx';
import Chats from "@/app/components/Chats/page.jsx";
export default function Home() {
  return (
    <>
    <div className='w-full flex flex-col items-center text-black'>
    <LandingPage/>
    <ComposeMessage/>
    </div>
    </>
  );
}
