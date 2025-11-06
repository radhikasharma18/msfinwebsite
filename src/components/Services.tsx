import ServicesCrad from "../card/ServicesCrad"
import { CiBank } from "react-icons/ci";
import { motion } from "framer-motion";
import { IoCarOutline } from "react-icons/io5";
import { PiMotorcycleLight } from "react-icons/pi";
import services from '../assets/istockphoto-1393059175-612x612.jpg';
import Catcard from "./Catcard";


const Services = () => {
  return (
    <div 
    className="bg-[#222a52] h-full w-full p-8 font-serif">
      <div className="gap-8 justify-center items-center p-8 bg-white rounded-2xl text-blue-900">
      <div className="text-5xl font-semibold flex justify-center items-center p-16">Our Services</div>
      <div className="flex  gap-8">
      <motion.div 
       initial={{ opacity: 0, y: 50 }}     
      // animate={{ opacity: 1, y: 0 }}  
      whileInView={{ opacity: 1, y: 0 }}    
      transition={{ duration: 4 }} 
       
      className=" text-sm w-1/2">At our NBFC,we understand that financial needs are diverse, time-sensitive, and deeply personal. Whether you are planning a major life event, looking to expand your business, or purchasing a vehicle, access to the right credit at the right time can make all the difference. Our goal is to simplify the borrowing process and make finance accessible, transparent, and stress-free for individuals and businesses alike.
We offer a comprehensive range of loan products — Personal Loans, Vehicle Loans, and MSME Loans — each designed with flexibility, convenience, and speed in mind. Our streamlined digital process ensures minimal paperwork, quick approval, and instant disbursal, allowing you to focus on your goals rather than the process.Personal Loans are ideal for managing urgent or planned financial needs such as home renovations, education, medical expenses, travel, or weddings. We provide competitive interest rates, customizable repayment tenures, and zero hidden charges. With our customer-first approach, you can enjoy the freedom to borrow responsibly and manage your finances on your terms.
Vehicle Loans empower you to drive your dream car or two-wheeler without financial strain. Whether you’re buying a new vehicle or a pre-owned one, our loans come with attractive interest rates, fast approvals, and flexible EMIs. We aim to make vehicle ownership seamless by providing simple eligibility criteria and transparent processing from start to finish.
For entrepreneurs, our MSME Loans are crafted to fuel growth and stability. We understand the unique challenges faced by small and medium-sized businesses — from managing working capital to purchasing machinery or expanding operations. Our MSME financing solutions offer quick access to capital with minimal documentation, collateral-free options, and tailored repayment structures that align with your business cash flow.
Beyond our loan products, what truly sets us apart is our commitment to integrity, innovation, and personalized service. Every customer is different, and so are their financial journeys. Our dedicated team ensures that every borrower receives clear guidance, transparent communication, and ongoing support throughout the lending process.
</motion.div>
<motion.div
 initial={{ opacity: 0, y: 50 }}  
  whileInView={{ opacity: 1, y: 0 }}     
   transition={{ duration: 4 }} 
       className="w-1/2">
<img src={services} className="h-120 w-150"/>
</motion.div>
</div>
</div>
        < motion.div 
       initial={{ opacity: 0, y: 100 }}   
        whileInView={{ opacity: 1, y: 0 }}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}  
      className="text-white text-5xl font-semibold text-center p-8 my-8">Our Loan Product</motion.div>
        
    <motion.div 
     initial={{ opacity: 0, y: 100 }}   
    whileInView={{ opacity: 1, y: 0 }}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}   
    className="flex flex-wrap gap-8 justify-center p-16">
          <motion.div 
          initial={{ opacity: 0, x: -50 }}       
      whileInView={{ opacity: 1, x: 0 }}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}  > 
      <ServicesCrad 
         icon= {< CiBank /> }
         title={"Micro Loans"} 
         description={"These loans are aimed at the weaker sections of the society who do not have the means or the required paperwork to obtain funds from Banks or other financial institutions, to meet their credit requirements"}
        /></motion.div>
          <div> <ServicesCrad 
         icon={< CiBank /> }
         title={"Personal Loans"} 
         description={"A Personal Loan is a viable way to fund anything from a holiday abroad to your child’s education and a home renovation to a wedding in the family"}
        /></div>
         <motion.div
           initial={{ opacity: 0, x: 50 }}       
      whileInView={{ opacity: 1, x: 0 }}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} > <ServicesCrad 
         icon={< IoCarOutline /> }
         title={"Used Vehicle Loans"} 
         description={"Used cars, second-hand cars or pre-owned cars have become popular amongst consumers nowadays. This is mainly due to the establishment of several organised used car dealerships across the country."}
        /></motion.div>
          <motion.div 
          initial={{ opacity: 0, x: -50 }}       
      whileInView={{ opacity: 1, x: 0 }}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}   > <ServicesCrad 
         icon={< CiBank /> }
         title={"Mortage Loans"} 
         description={"Preapproval by a mortgage lender will give you a range of what a bank is willing to lend you, while also showing the home’s current owner that you have the backing of a financial institution. "}
        /></motion.div>
         <motion.div
          initial={{ opacity: 0, x: 50}}   
      whileInView={{ opacity: 1, x: 0 }}           
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} > <ServicesCrad 
         icon={<  PiMotorcycleLight /> }
         title={"Two Wheeler Loans"} 
         description={"These loans are given against two wheelers (i.e., Motorcycles, Scooters,). The ticket size varies as per the cost of the vehicle for a maximum tenure of 28 months."}
        /></motion.div>
        </motion.div>
    <Catcard />
</div>
      
  
  )
}

export default Services
