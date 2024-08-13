import Image from 'next/image';

const ProfileCard = () => (
  <div className="min-h-screen bg-white">
    <div className="flex items-center justify-center pt-8"> {/* Use items-center for consistent alignment */}
      <figure className="flex bg-blue-100 rounded-xl p-8 dark:bg-zinc-700">
        <div className="flex-shrink-0">
          <div className="relative w-24 h-24 md:w-48 md:h-48">
            <Image
              className="rounded-full"
              src="/anas photo.jpg.png" // Ensure the filename matches your actual image
              alt="Anasbilal"
              layout="fixed" // Use 'fixed' instead of 'fill' for better control
              width={192} // Width of the image (48 * 4)
              height={192} // Height of the image (48 * 4)
              objectFit="cover"
              priority
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-start pl-6 mt-5"> {/* Align text correctly */}
          <div className="text-center md:text-left">
            <
