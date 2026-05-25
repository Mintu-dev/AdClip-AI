import Title from "./Title";
import { Link } from "react-router-dom";
//import { PricingTable } from '@clerk/clerk-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-4">
        <Title
          title="Pricing"
          heading="Pricing Plans"
          description="Our Pricing Plans are simple, transparent and flexible. Choose the plan that best suits your needs."
        />

        <div className="flex flex-wrap items-center justify-center max-w-5xl mx-auto">
          <Link to="/plans">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl">
              View Pricing Plans →
            </button>
          </Link>

          {/* <PricingTable appearance={{ */}
          {/* variables: { */}
          {/* colorBackground: 'none' */}
          {/* }, */}
          {/* elements: { */}
          {/* pricingTableCardBody: 'bg-white/6', */}
          {/* pricingTableCardHeader: 'bg-white/10', */}
          {/* switchThumb: 'bg-white' */}
          {/* } */}
          {/* }}/> */}
        </div>
      </div>
    </section>
  );
}
