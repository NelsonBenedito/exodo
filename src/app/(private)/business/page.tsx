import BusinessSection from "@/components/businessSection";
import CreateBusiness from "@/components/createBusiness";
import { DialogBusiness } from "@/components/dialogBusiness";

export default function Business() {
  return (
    <div className="flex gap-5 flex-col pt-[7rem] px-15">
      <BusinessSection />
      <DialogBusiness />
    </div>
  );
}
