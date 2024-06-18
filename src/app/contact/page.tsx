import AnimatedText from "@/components/AnimatedText";

type Props = {};

const Contact = (props: Props) => {
  return (
    <main className="h-full flex items-center justify-center">
      <div className="flex flex-col gap-y-7">
        <div className="text-center">
          <p className="text-gray-500">
            <AnimatedText text="Get_In_Touch" />
          </p>
          <h1 className="text-4xl font-bold space-x-0.5">
            <AnimatedText text="Contact Me" />
          </h1>
        </div>
        <div className="flex flex-col gap-y-2 border-t-2 border-b-2 border-gray-200 p-4">
          <a
            href="mailto:sc2903175@gmail.com"
            className="text-blue-500 hover:underline"
          >
            <AnimatedText text="Email" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
