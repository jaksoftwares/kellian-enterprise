import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';
import { Skeleton } from '../../ui/skeleton';
import { useState, useEffect } from 'react';


const MasonryGrid = () => {
  const images: string[] = [];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry
        columnsCount={4}
        gutter="10px"
        className="space-y-4 md:px-40 px-10 py-10"
      >
        {!loaded &&
          Array.from({ length: images.length }).map((_, i) => (
            <Skeleton key={i} className='w-full h-60 rounded-md' />
          ))
        }

        {loaded &&
          images.map((image, i) => (
            <div key={i} className="overflow-hidden group">
              <Image
                src={image}
                alt={`Gallery image ${i}`}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                }}
                className="rounded-md transition-transform duration-300 group-hover:scale-125"
                width={500}
                height={300}
                quality={80}
                priority={i === 0}
              />
            </div>
          ))
        }
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryGrid;
