import Card from "../card/Card";
import { SiTransmission } from "react-icons/si";
import { IoLogoXing } from "react-icons/io";
import Services from "./Services";

const Home = () => {
  return (
    <div className="p-4 w-full flex  flex-col items-center justify-center ">
      <div className="text-center w-2/3 m-16 p-16">
      {/* <div className="text-center w-2/3 "> */}
        <div className="text-2xl font-bold m-16 p-16">
          Welcome to
          <span className="text-red-600 text-6xl">MSFIN Credit Pvt. Ltd.</span> 
        
        <div className="text-sm ">Build your business with us — reliable, fast, and customer-focused financial solutions.</div>  </div>
        

        <div className="flex gap-4 justify-center">
         <button className="bg-red-500 rounded-[5px] p-2">Lets get Started</button>
        </div>
      </div>
      <div className="w-full h-screen  bg-white">
        <div className="flex flex-col justify-center items-between text-center p-8 m-8 gap-16 w-full">
            <div className="flex justify-center">  <div className="bg-blue-100 rounded-full w-32">How it work</div></div>
          
            <div className="text-6xl font-semibold text-blue-900">Super convenient online banking</div>
            <div>Our online banking platform is protected with the latest encryption technology and multi-factor authentication.</div>

        </div>
        <div className="flex gap-4 justify-around m-4">
        <div>  <Card
        icon= {< IoLogoXing  />} 
        title="Mission Statement"
        description="Our mission is to provide compatible and trusted financial assistance to a huge untapped market of people living or working in the rural areas to catalyze economic development by identification of commercially viable individuals/businesses and rendering of funds to them through a professional."
       
      /></div>
          <div>  <Card
        icon= {< SiTransmission />} 
        title="Vision Statement"
        description="Our vision is to make a professionally managed, dynamic, vibrant and value based organization that stands as the most preferred financier, provides customized and speedy financial solutions to rural, along with the ‘upcoming urban areas’ with confidence to secure customer trust and satisfaction."/></div>
        <div>  <Card
        icon= {< SiTransmission />} 
        title="Core Values"
        description="Client Focused: Providing a high quality, timely and effective service with fair dealings is a priority for our organization in order to provide the utmost level of Customer satisfaction"
        // buttonText="Read More"
      /></div>
                    </div>
      </div>
      <div className="w-full h-screen  bg-white flex justify-center items-center p-16">
    <div className="w-1/2">
        <p className='text-red-900 font-semibold text-3xl pb-16'>We Are Ms Financers</p>
        <div>Company was originally incorporated with the name Arpit Credits Private Limited under the Companies Act, 1956 as private limited company on 26th of December, 1990. The company has been granted a certificate to carry on the business of Non-Banking Financial Institution without accepting public deposits. The company, in the light of its main object, pursued the business of finance by offering unsecured lending such as personal loans and micro loans. The company has been changed from Arpit Credits Private Limited to MSFIN Credit Private Limited with effect from 13th of July, 2018. The company has shifted its focus to secured lending by adding products like commercial vehicle lending, 2-wheelers lending and Loan against property.</div>
    </div>
    <div className="w-1/2 rounded-full size-100 bg-red-100 flex flex-wrap justify-center gap-8 p-16 text-3xl">
    <div>Micro Loan</div>
    <div>Personal Loan</div>
    <div>Vehicle Loan</div>
    <div>Mortage Loan</div>
    <div>Two Wheeler Loan</div></div>
      </div>
      <Services/>
    </div>
  );
};

export default Home;
