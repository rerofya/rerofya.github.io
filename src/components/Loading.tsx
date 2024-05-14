type Props = {}

export default function Loading({}: Props) {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-light fixed top-0 left-0 z-[99]">
        <h1>Loading...</h1>
    </div>
  )
}