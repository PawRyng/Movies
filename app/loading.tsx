import { Spinner } from "@heroui/spinner";

export default async function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
      <Spinner
        classNames={{
          circle1: "border-b-mainColor",
          circle2: "border-b-mainColor",
        }}
      />
    </div>
  );
}
