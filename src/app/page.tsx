import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full bg-[#121418] border border-[#56595B] rounded-2xl h-full p-4 text-white">
      <div className='px-8 flex flex-col gap-8 w-fit'>
        <Image src="/images/3CrypterLogo.png" width={150} height={100} alt="3Crypter Logo" />
        <div className="flex flex-col items-center gap-4">
          <div>
            Text
          </div>
          <div>
            Text
          </div>
          <div>
            Text
          </div>
        </div>
      </div>
    </div>
  );
}
