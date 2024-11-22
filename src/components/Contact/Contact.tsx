const Contact = () => {
  return (
    <div className="min-h-screen pb-20">
      <div className="bg-[#AB886D] text-center lg:text-5xl text-2xl py-10 h-1/4 rounded-b-full text-[#E4E0E1] pt-10 mb-10">
        <span className="font-extrabold">Contact Information</span>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-10 gap-2 pt-20">
        <div className="bg-[#493628] text-[#E4E0E1]">
          <h1 className="font-bold py-5  px-5">
            Location: Merul Badda, Dhaka, Bangladesh
          </h1>
        </div>
        <div className="bg-[#493628] text-[#E4E0E1]">
          <h1 className="font-bold py-5  px-5">Email: bondon21081@gmail.com</h1>
        </div>
        <div className="bg-[#493628] text-[#E4E0E1] lg:col-span-2 text-center">
          <h1 className="font-bold py-5  px-5">Phone: +8801797537300 </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
