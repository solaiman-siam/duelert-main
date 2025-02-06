function OurNumbers() {
  return (
    <div className="py-24 max-w-[1720px] ">
      <h3 className="text-4xl font-bold text-center pb-8">Our Numbers</h3>

      <div className="w-full flex  justify-between items-center rounded-tr-full p-24 px-60 bg-primary ">
        <div className="flex flex-col items-center text-white gap-4  ">
          <h3 className={'text-6xl text-white  font-bold'} >5,000+</h3>
          <h4>Cusomters</h4>
        </div>
        <div className="flex flex-col items-center text-white gap-4  ">
          <h3 className={'text-6xl text-white  font-bold'}>120</h3>
          <h4>Companies</h4>
        </div>
        <div className="flex flex-col items-center text-white gap-4  ">
          <h3 className={'text-6xl text-white  font-bold'}>6000+</h3>
          <h4>Reminders</h4>
        </div>
      </div>
    </div>
  );
}

export default OurNumbers;
