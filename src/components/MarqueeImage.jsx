

const MarqueeImage = ({img, alt}) => {
  return (
    <div className="w-[200px] h-[100px]">
        <img className="w-full h-full" src={img} alt={alt} />
    </div>
  )
}
export default MarqueeImage