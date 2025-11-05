import Card from "../card/Card";
import { SiTransmission } from "react-icons/si";
import { IoLogoXing } from "react-icons/io";
import Services from "./Services";
import { WavyBackground } from "./Wavy-background";

// const WavyBackground = ({ children, className }: any) => {
//   return (
//     <div
//       className={className}
//       style={{ position: "relative", overflow: "hidden" }}
//     >
//       <svg
//         viewBox="0 0 1440 320"
//         preserveAspectRatio="none"
//         style={{
//           position: "absolute",
//           left: 0,
//           top: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: -1,
//         }}
//       >
//         <path
//           fill="#e11d48"
//           fillOpacity="1"
//           d="M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,144C672,139,768,149,864,160C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//         ></path>
//       </svg>
//       <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
//     </div>
//   );
// };

const Home = () => {
  return (
    <div className=" w-full flex  flex-col items-center justify-center ">
      <div className="text-center w-full">
       
         <WavyBackground 
         className="max-w-4xl mx-auto ">
          <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
            MSFIN Credit Pvt. Ltd
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Leverage the power of canvas to create a beautiful hero section
          </p>
          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Welcome to
          </p>

          <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
            Build your business with us — reliable, fast, and customer-focused
            financial solutions.
          </p>
        
        </WavyBackground>
        

        <div className="flex gap-4 justify-center">
          <button className="bg-red-500 rounded-[5px] p-2">
            Lets get Started
          </button>
        </div>
      </div>
      <div className=" h-screen  bg-white">
        <div className="flex flex-col justify-center items-between text-center p-8 m-8 gap-16 w-full">
          <div className="flex justify-center">
            {" "}
            <div className="bg-blue-100 rounded-full w-32">How it work</div>
          </div>

          <div className="text-6xl font-semibold text-blue-900">
            Super convenient online banking
          </div>
          <div>
            Our online banking platform is protected with the latest encryption
            technology and multi-factor authentication.
          </div>
        </div>
        <div className="flex gap-4 justify-around m-4">
          <div>
            {" "}
            <Card
              icon={<IoLogoXing />}
              title="Mission Statement"
              description="Our mission is to provide compatible and trusted financial assistance to a huge untapped market of people living or working in the rural areas to catalyze economic development by identification of commercially viable individuals/businesses and rendering of funds to them through a professional."
            />
          </div>
          <div>
            {" "}
            <Card
              icon={<SiTransmission />}
              title="Vision Statement"
              description="Our vision is to make a professionally managed, dynamic, vibrant and value based organization that stands as the most preferred financier, provides customized and speedy financial solutions to rural, along with the ‘upcoming urban areas’ with confidence to secure customer trust and satisfaction."
            />
          </div>
          <div>
            {" "}
            <Card
              icon={<SiTransmission />}
              title="Core Values"
              description="Client Focused: Providing a high quality, timely and effective service with fair dealings is a priority for our organization in order to provide the utmost level of Customer satisfaction"
              // buttonText="Read More"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="w-1/2">
          <p className="text-red-900 font-semibold text-3xl pb-16">
            We Are Ms Financers
          </p>
          <div>
            Company was originally incorporated with the name Arpit Credits
            Private Limited under the Companies Act, 1956 as private limited
            company on 26th of December, 1990. The company has been granted a
            certificate to carry on the business of Non-Banking Financial
            Institution without accepting public deposits. The company, in the
            light of its main object, pursued the business of finance by
            offering unsecured lending such as personal loans and micro loans.
            The company has been changed from Arpit Credits Private Limited to
            MSFIN Credit Private Limited with effect from 13th of July, 2018.
            The company has shifted its focus to secured lending by adding
            products like commercial vehicle lending, 2-wheelers lending and
            Loan against property.
          </div>
        </div>
        <div className="w-1/2 rounded-full size-100 bg-red-100 flex flex-wrap justify-center gap-8 p-16 text-3xl">
          <div>Micro Loan</div>
          <div>Personal Loan</div>
          <div>Vehicle Loan</div>
          <div>Mortage Loan</div>
          <div>Two Wheeler Loan</div>
        </div>
      </div>
      <Services />
      {/* <Catcard /> */}
    </div>
  );
};

export default Home;
