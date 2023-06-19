import Image from 'next/image';
import { SocialProofProps } from '~/shared/types';

const SocialProof = ({ images }: SocialProofProps) => (
  <section id="social-proof">
    <div className="m-auto max-w-3xl py-12">
      <div className="flex items-center justify-center gap-6 md:gap-9">
        {images &&
          images.map(({ src, alt, link }, index) => (
            <div key={`item-social-proof-${index}`}>
              <a href={link} target="_blank" rel="noopener">
                <Image
                  src={src}
                  alt={alt}
                  className="opacity-50 contrast-50 grayscale duration-200 hover:opacity-100 hover:contrast-100 hover:grayscale-0"
                  width={600}
                  height={300}
                />
              </a>
            </div>
          ))}
      </div>
    </div>
  </section>
);

export default SocialProof;