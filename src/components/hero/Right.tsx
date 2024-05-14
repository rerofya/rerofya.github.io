type Props = {}

export default function Right({}: Props) {

  return (
    <div className="w-full hidden sm:flex justify-center items-center sticky">
      <img src="/images/hero.webp" alt="Young Woman" className='hero-image w-full max-w-[320px] translate-y-4 z-[10] rounded-bl-[100px] rounded-br-[100px]' />
      <div className="w-[750px] absolute z-[5] translate-y-1 -translate-x-1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00A8E8" d="M70.6,-19.2C79.8,5.3,67.4,40.5,42.6,58.6C17.7,76.6,-19.6,77.5,-38.1,61.9C-56.5,46.2,-56,14.1,-46.5,-10.9C-37,-35.9,-18.5,-53.7,6.1,-55.6C30.7,-57.6,61.4,-43.8,70.6,-19.2Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  )
}