import { motion } from "framer-motion";

const Catcard = () => {
  return (
    <motion.div 
     initial={{ opacity: 0, x: 0}}   
      whileInView={{ opacity: 1, x: 0 }}           
      transition={{ duration: 2.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} className='h-full w-full'>
          <div className=" h-1/2 p-2 rounded-2xl bg-linear-to-r from-red-500 to-blue-500  hover:from-blue-500 hover:to-red-500  text-3xl font-semibold transition-colors duration-500 ">
  <div className="bg-white rounded-2xl p-6 shadow-lg flex justify-between items-center gap-8">
    <div> <h3 className="text-lg font-semibold">Personal Loan</h3>
    <p>Flexible repayment, minimal documentation.</p></div>
   <div><button className=" bg-blue-600 text-white transition-colors duration-300 text-sm p-4 rounded-2xl  hover:bg-blue-900">Apply Now</button></div>
    
  </div>
</div>
    </motion.div>
  )
}

export default Catcard