import bg from "/teodor-skrebnev-X9qKtLqucCo-unsplash.jpg";
import me from "/me.webp";
import Button from "./components/Button";
import {
  HugeiconsFacebook02,
  HugeiconsInstagram,
  HugeiconsMailAtSign02,
} from "./components/Icons";
import IconButton from "./components/IconButton";

function App() {
  return (
    <main
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-right bg-no-repeat w-full h-screen relative text-white"
    >
      <div className="w-full min-h-full fixed inset-0 bg-image opacity-90"></div>
      <div className="container max-w-2xl relative z-10 py-12">
        <img
          src={me}
          alt="Januar Maksum"
          className="size-24 rounded-full p-1 bg-white bg-opacity-35 mx-auto"
        />
        <h1 className="text-2xl font-medium text-center">Januar Maksum</h1>
        <h2 className="text-center text-slate-300 text-sm md:text-base text-balance">
          Front-end Web Developer. Convert your ideas to live
        </h2>
        <div className="flex justify-center my-6 gap-3">
          <IconButton
            target="_blank"
            href="https://www.facebook.com/januarmaksum"
            icon={<HugeiconsFacebook02 width="1.5em" height="1.5em" />}
          />
          <IconButton
            target="_blank"
            href="https://www.instagram.com/januarmaksum"
            icon={<HugeiconsInstagram width="1.5em" height="1.5em" />}
          />
          <IconButton
            target="_blank"
            href="mailto:januarmaksum@gmail.com"
            icon={<HugeiconsMailAtSign02 width="1.5em" height="1.5em" />}
          />
        </div>
        <div className="flex flex-col gap-3 my-7">
          <Button
            label="Checkout my personal website"
            href="https://januarmaksum.vercel.app"
            target="_blank"
          />
          <Button
            label="Checkout my GitHub projects"
            href="https://github.com/januarmaksum"
            target="_blank"
          />
          <Button
            label="Download my resume"
            href="https://januarmaksum.vercel.app/januarmaksum-cv.pdf"
            target="_blank"
          />
        </div>
      </div>
    </main>
  );
}

export default App;
