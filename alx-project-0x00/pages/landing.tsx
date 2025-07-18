import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>

      <Card />

   
      <div className="mt-6 space-y-4">
        <Button
          title="Small Button - rounded-sm"
          styles="px-2 py-1 text-sm rounded-sm bg-blue-500 text-white"
        />
        <Button
          title="Medium Button - rounded-md"
          styles="px-4 py-2 text-md rounded-md bg-green-500 text-white"
        />
        <Button
          title="Large Button - rounded-lg"
          styles="px-6 py-3 text-lg rounded-lg bg-yellow-500 text-white"
        />
        <Button
          title="Extra Button - rounded-full"
          styles="px-6 py-3 text-lg rounded-full bg-red-500 text-white"
        />
      </div>
    </div>
  );
};

export default Landing;
