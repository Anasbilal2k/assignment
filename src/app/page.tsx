import Image from 'next/image';

const ProfileCard = () => (
  <div className="min-h-screen bg-white">
    <div className="flex items-top justify-center pt-8">
      <figure className="flex bg-blue-100 rounded-xl p-8 dark:bg-zinc-700">
        <div className="flex-shrink-0">
          <div className="relative w-24 h-24 md:w-48 md:h-48">
            <Image
              className="rounded-full"
              src="/anas photo.png" // Correct image filename
              alt="Anasbilal"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-top pl-6 mt-5">
          <div className="text-center md:text-left">
            <p className="text-lg font-medium mb-4">
              Hi, I&apos;m a chemist, currently transitioning to web development. With a background in analytical chemistry, I&apos;m bringing a methodical approach to learning web technologies. I&apos;m excited to merge my analytical skills with creative problem-solving as I explore the dynamic field of web development.
            </p>
            <figcaption className="font-medium mt-4">
              <div className="text-sky-500 dark:text-sky-400">
                Anasbilal
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Future Web Developer, Mantech
              </div>
            </figcaption>
          </div>
        </div>
      </figure>
    </div>
    <div className=""></div> {/* Colored row */}
  </div>
);

export default ProfileCard;


