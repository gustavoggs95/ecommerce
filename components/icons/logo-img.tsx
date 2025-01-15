import Image from 'next/image';

export default function LogoImg() {
  return (
    <Image
      className='rounded-lg'
      src="/images/lin1.jpg"
      alt="Example Image"
      width={500}
      height={500}
    />
  );
}
