import Image from 'next/image';

function MyComponent() {
  return (
    <div>
      <Image src="/about/developer.png" alt="Developer" width={500} height={500} />
    </div>
  );
}

export default MyComponent;