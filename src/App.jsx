import './App.scss';
import Image from './Img/image.png'
import Ellipse from './Img/Ellipse.svg'
import LoginButton from './Img/login-button.png'
import GoogleButton from './Img/google-button.png'

function App() {
  return (
    <div className='container max-w-[1440px] w-full m-auto flex justify-between mt-0 pl-[10px] pr-[10px] max-xl:flex-col'>
      <img className='max-w-[720px] max-h-[900px]  w-full h-full max-xl:relative' src={Image} alt="Image" />
      <div className="mt-[-50px] ml-[0px] max-xl:absolute ml-[20px]">
          <p className="font-sans text-base font-normal text-[#2D3748] pt-[232px] max-xl:text-white max-sm: pt-[80px]">Welcome back</p>
          <h1 className="font-sans font-bold text-3xl text-[#1A202C] pb-[24px] max-xl:text-white max-sm:mb-[0px] mr-[10px] text-xl pb-[0px]">Login to your account</h1>
          <div className="login__info">
            <p className="font-sans font-normal text-base text-[#4A5568] pb-[11px] max-xl:text-white max-sm:mb-[0px] mt-[0px]">Email</p>
            <input
              className="rounded-md box-border border-2 pl-[20px] pt-4 pb-4 w-[347px] mb-[11px] placeholder:text-slate-400 block bg-white max-sm:mb-[0px] max-sm:w-[270px] max-sm:pt-1 max-sm:pb-1"
              type="email"
              placeholder="John.snow@gmail.com"
            />
            <p className="font-sans font-normal text-base text-[#4A5568] pb-[11px] max-xl:text-white max-sm:mb-[0px] max-sm:mt-[0px]">Password</p>
            <input
              className="rounded-md box-border border-2 pl-[20px] pt-4 pb-2 w-[347px] mb-[11px] placeholder:text-slate-400 block bg-white max-sm:mb-[0px] max-sm:w-[270px] max-sm:pt-1 max-sm:pb-1"
              type="email"
              placeholder="*********"
            />
            <div className="login__div flex">
              <img src={Ellipse} alt="Ellipse" />
              <p className="font-sans font-normal text-sm text-[#4A5568] pl-[11px] max-xl:text-white">Remember me</p>
              <p className="font-sans font-normal text-sm text-[#2C5282] pl-[119px] max-xl:text-white max-sm: pl-[40px]">Forgot password?</p>
            </div>
            <img className='mt-[27px] mb-[15px] max-sm:mt-[12px] mb-[8px]  w-[270px]' src={LoginButton} alt="LoginButton" width={347} height={50} />
            <img className='max-w-[347px] max-h-[50] w-full h-full max-sm: w-[270px]' src={GoogleButton} alt="GoogleButton" width={347} height={50} />
            <p className=" pt-[162px]  font-sans font-normal text-base text-[#000000] max-xl:text-white  pt-[60px] ml-[10px] max-sm: pt-[5px] ml-[10px] ">Dont have an account?<span className='font-sans font-normal text-base text-[#3570b9] pl-[3px] '>Join free today</span></p>
          </div>
      </div>
    </div>
  );
}

export default App;