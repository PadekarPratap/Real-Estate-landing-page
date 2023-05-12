

const CallToAction = () => {
  return (
    <section className="r-container my-[4rem]">
        <div className="w-full min-h-[40vh] bg-[#4161df] cta-border rounded-lg">
            {/* title  */}
            <div>
                <h2 className="text-white font-bold text-4xl text-center mt-12">Get started with Homyz</h2>
            </div>

            {/* call to action- call  */}
            <div className="mt-8 text-center">
                <p className="text-secondary tracking-wider mb-4">Subscribe and find super attractive price quotes from us. <br /> Find your residence soon</p>

                <button className="text-secondary bg-[#5a73d7] font-bold px-4 py-2 rounded-md hover:scale-110 duration-300 transition active:scale-95 active:brightness-110">Get Started</button>
            </div>
        </div>
    </section>
  )
}
export default CallToAction