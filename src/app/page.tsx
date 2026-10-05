import { Home as HomeComponent } from "@/app/(public)/home/home";
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";

export default function Home() {
  return (
      <>
        <Navbar />
        <HomeComponent />
          <Footer />
      </>
  );
}
